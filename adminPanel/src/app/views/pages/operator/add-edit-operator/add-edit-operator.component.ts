import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { validataion } from '../../../../helper/regular.expression';
import { Store, select } from "@ngrx/store";
import { APPNAME, DEFAULT_IMAGES } from '../../../../helper/page.title';

import * as operatorActions from "../state/operator.actions";
import * as fromOperator from "../state/operator.reducer";

import { Helpers } from '../../../../helper/helper';
import { OperatorService } from '../operator.service';
import { TranslateService } from '@ngx-translate/core';
import { CityService } from '../../city/city.service';
import { environment } from '../../../../../environments/environment';
import { appConstants } from '../../../../../app-contants';
declare var google: any;
@Component({
  selector: 'kt-add-edit-operator',
  templateUrl: './add-edit-operator.component.html',
  styleUrls: ['./add-edit-operator.component.scss'],
  styles: [`
    agm-map {
      height: 500px;
    }
  `],
})
export class AddEditOperatorComponent implements OnInit {
  navObj = { 'link': 'personal' }
  addOperatorForm1: FormGroup;
  addOperatorForm2: FormGroup;
  addOperatorForm3: FormGroup;
  addOperatorForm4: FormGroup;
  addOperatorForm5: FormGroup;

  submitted: Boolean = false;
  submitted1: Boolean = false;
  submitted2: Boolean = false;
  submitted3: Boolean = false;
  submitted4: Boolean = false;

  id: any;
  countryList: any = [];
  submitStep: any = { step: '0' };

  stateSubscription: any;
  userImageFile: any = '';
  imageFile: any = '';
  userUrl: any = DEFAULT_IMAGES.ADD_PHOTO;
  url: any = DEFAULT_IMAGES.ADD_PHOTO;

  cities: any = [];
  OPERATOR_CONST: any = [];
  operatorDetail: any = {};
  operatorFrequencyType: any = appConstants.FREQUENCY_TYPE;

  zoom: number = 8;
  lat: any;
  lng: any;
  markers: marker[] = []
  drawingManager: any;
  pointList: { lat: number; lng: number }[] = [];
  finalPointArray = []
  user_operator_polygon_array: any = []
  selectedArea = 0;
  map: any
  selectedShape
  constructor(private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public localStorageService: LocalstorageService,
    private store: Store<{ admin: any }>,
    titleService: Title,
    private dtr: ChangeDetectorRef,
    public translate: TranslateService,
    private operatorService: OperatorService,
    private cityService: CityService) {
    this.OPERATOR_CONST = this.translate.instant('OPERATOR');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.OPERATOR'));
    titleService.setTitle(APPNAME + " | " + this.OPERATOR_CONST.MODULE_NAME);
  }

  clickLink(e) {
    this.navObj.link = e;
  }

  ngOnInit() {
    let self = this
    this.buildAddOperatorForm1();
    this.buildAddOperatorForm2();
    this.buildAddOperatorForm3();
    this.buildAddOperatorForm4();
    this.buildAddOperatorForm5();
    this.changeCountry();
    // navigator.geolocation.getCurrentPosition(
    //   function (position) { // success cb
    //     if (position.coords.latitude != null) {
    //       self.lat = position.coords.latitude
    //       self.lng = position.coords.longitude
    //       self.markers.push({ lat: position.coords.latitude, lng: position.coords.longitude, draggable: false, rad: 0 })
    //     }
    //   }
    // );
  }
  back() {
    this.router.navigate(['/operator-management/list']);
  }
  onMapReady(map, callFrom) {
    if (callFrom != 'changeCountry') {
      this.map = map
      this.initDrawingManager(map);
    }
    let city = this.cities.find(element => element._id == this.addOperatorForm2.value.user_cityId);
    if (city) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        'address': city.city_name
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
          var bounds = new google.maps.LatLngBounds();
          marker.setMap(map);
          bounds.extend(results[0].geometry.location);
          map.fitBounds(bounds);
          // map.setBounds(bounds);
          map.setZoom(14);
        } else {
          alert('Internal error: ' + status);
        }
      });
    }

  }
  //set selection to a shape
  setSelection(shape) {
    this.clearSelection();
    this.selectedShape = shape;
    shape.setEditable(true);
  }
  clearSelection() {
    if (this.selectedShape) {
      this.selectedShape.setEditable(false);
      this.selectedShape = null;
    }
  }
  deleteSelected() {
    if (this.selectedShape) {
      this.updatePointList(this.selectedShape.getPath(), 'delete_selected', this.selectedShape.zIndex);
      this.selectedShape.setMap(null)
    }
  }
  initDrawingManager = (map: any) => {
    const self = this;
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ['polygon'],
      },
      polygonOptions: {
        draggable: true,
        editable: true,
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
    };
    this.drawingManager = new google.maps.drawing.DrawingManager(options);
    this.drawingManager.setMap(map);
    google.maps.event.addListener(
      this.drawingManager,
      'overlaycomplete',
      (event) => {
        if (event.type === google.maps.drawing.OverlayType.POLYGON) {
          const paths = event.overlay.getPaths();
          for (let p = 0; p < paths.getLength(); p++) {
            google.maps.event.addListener(
              paths.getAt(p),
              'set_at',
              () => {
                this.setSelection(event.overlay);
                if (!event.overlay.drag) {
                  self.updatePointList(event.overlay.getPath(), 'set_at', event.overlay.zIndex);
                }
              }
            );
            google.maps.event.addListener(
              paths.getAt(p),
              'insert_at',
              () => {
                self.updatePointList(event.overlay.getPath(), 'insert_at', event.overlay.zIndex);
              }
            );
            google.maps.event.addListener(
              paths.getAt(p),
              'remove_at',
              () => {
                self.updatePointList(event.overlay.getPath(), 'remove_at', event.overlay.zIndex);
              }
            );
            google.maps.event.addListener(
              event.overlay,
              'click',
              () => {
                console.log('click call')
                this.setSelection(event.overlay);
              }
            );
          }
          self.updatePointList(event.overlay.getPath(), 'add_at', event.overlay.zIndex);
          this.selectedShape = event.overlay;
          this.selectedShape.type = event.type;
        }
        if (event.type !== google.maps.drawing.OverlayType.MARKER) {
          // Switch back to non-drawing mode after drawing a shape.
          self.drawingManager.setDrawingMode(null);
          // To hide:
          self.drawingManager.setOptions({
            drawingControl: true,
            clickable: true
          });

          this.setSelection(this.selectedShape);
        }
      }
    );
  }

  updatePointList(path, type, index) {
    let pointList = []
    const len = path.getLength();
    for (let i = 0; i < len; i++) {
      pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat])
    }
    if (type == 'add_at') {
      this.user_operator_polygon_array.push({ loc: { type: "Polygon", coordinates: [pointList] }, name: "Polygon" + [index] })
    } else if ('delete_selected') {
      let deleteIndex = this.user_operator_polygon_array.findIndex(function (obj) {
        return obj.name == 'Polygon' + index;
      });
      this.user_operator_polygon_array.splice(deleteIndex, 1);
    } else {
      this.user_operator_polygon_array[index].loc.coordinates[0] = pointList
    }
    this.selectedArea = google.maps.geometry.spherical.computeArea(
      path
    );
  }

  buildAddOperatorForm1() {
    this.addOperatorForm1 = this._formBuilder.group({
      user_firstName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_lastName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_userName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      user_email: ["", [Validators.required, Validators.pattern(validataion.emailRegEx)]],
      user_phoneNumber: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      user_password: ['', [Validators.required, Validators.pattern(validataion.passwordRegEx)]],
      user_confirm_password: ['', [Validators.required, Validators.pattern(validataion.passwordRegEx)]],
      user_verifiedStatus: ["0", []],
      user_status: ["ACTIVE", []],
      user_isdCode: ["+1", [Validators.required]],
    });
  }

  buildAddOperatorForm2() {
    this.addOperatorForm2 = this._formBuilder.group({
      operatorName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      operatorPhoneNumber: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      operatorIsdCode: ["+1", [Validators.required]],
      operatorLicenseNumber: ["", [Validators.required, Validators.pattern(validataion.alphaNumericRegEx)]],
      user_cityId: ["", [Validators.required]],
    });
  }

  buildAddOperatorForm3() {
    this.addOperatorForm3 = this._formBuilder.group({
      bankName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      accountHolderName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      accountNumber: ["", [Validators.required, Validators.pattern(validataion.accountNumber)]],
      institutionNumber: ["", [Validators.required, Validators.pattern(validataion.accountNumber)]],
      transitNumber: ["", [Validators.required, , Validators.pattern(validataion.accountNumber)]]
    });
  }

  buildAddOperatorForm4() {
    this.addOperatorForm4 = this._formBuilder.group({
      annualFee: ["", [Validators.required, Validators.pattern(validataion.amount)]],
      frequencyType: ["", [Validators.required]],
      commissionPercentage: ["", [Validators.required, Validators.pattern(validataion.percentageRegEx)]],
      ridePreAuthorisedPayment: ["", [Validators.required, Validators.pattern(validataion.percentageRegEx)]]
    })
  }

  buildAddOperatorForm5() {
    this.addOperatorForm5 = this._formBuilder.group({
      address1: ["", [Validators.required]],
      address2: ["", [Validators.required]],
      postalCode: ["", [Validators.required, Validators.pattern(validataion.numericOnly), Validators.maxLength(9)]],
      province: ["", [Validators.required]],
      isdCode: ["+1", [Validators.required, Validators.pattern(validataion.accountNumber)]],
      contectNumber: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      email: ["", [Validators.required, Validators.pattern(validataion.emailRegEx)]]
    });
  }

  onkeyUp(e) {
    const form = this.addOperatorForm1;

    if (e && e != '') {
      form.get('user_password').setValidators([Validators.required, Validators.pattern(validataion.passwordRegEx)]);
      form.get('user_password').updateValueAndValidity();
      form.get('user_confirm_password').setValidators([Validators.required, Validators.pattern(validataion.passwordRegEx)]);
      form.get('user_confirm_password').updateValueAndValidity();
    } else {
      form.get('user_password').clearValidators();
      form.get('user_password').updateValueAndValidity();
      form.get('user_confirm_password').clearValidators();
      form.get('user_confirm_password').updateValueAndValidity();
    }
  }

  onSelectUserImage(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
        Helpers.setLoading(true);
        this.userImageFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          Helpers.setLoading(false);
          this.userUrl = reader.result;
          this.dtr.detectChanges();
        };
      } else {
        this.toastr.error(this.translate.instant("COMMON_VALIDATION_MESSAGES.FILE_SIZE"));
      }
    }
  }
  removeUserImage() {
    this.userUrl = DEFAULT_IMAGES.ADD_PHOTO;
    this.userImageFile = '';
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
        Helpers.setLoading(true);
        this.imageFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          Helpers.setLoading(false);
          this.url = reader.result;
          this.dtr.detectChanges();

        };
      } else {
        this.toastr.error(this.translate.instant("COMMON_VALIDATION_MESSAGES.FILE_SIZE"));
      }
    }
  }
  imageRemove() {
    this.url = DEFAULT_IMAGES.ADD_PHOTO;
    this.imageFile = '';
  }

  async changeCountry() {
    this.onMapReady(this.map, 'changeCountry')
    let countryId = { city_countryId: environment.webDefaultCountry };
    await this.cityService
      .getCityListOperetor(countryId).subscribe(async (data) => {
        console.log(data)
        if (data["code"] == 200) {
          this.cities = await data["data"];
          this.dtr.detectChanges();
        }
      });

  }

  savePersonalDetail() {
    this.submitted = true;
    if (this.addOperatorForm1.valid) {
      if (this.userImageFile == "" || this.userImageFile == DEFAULT_IMAGES.ADD_PHOTO || this.userImageFile == undefined) {
        this.submitted = false
        this.toastr.error(this.translate.instant('OPERATOR.PLACEHOLDERS.USER_IMAGE'));
      } else {
        let res = this.addOperatorForm1.value;
        if (res.user_password && res.user_password != '' && res.user_confirm_password && res.user_confirm_password != '') {
          if ((res.user_password === res.user_confirm_password)) {
            this.saveData('1');
          } else {
            this.toastr.error('Password & Confirm Password Should be Match')
          }
        } else {
          this.toastr.error('Password & Confirm Password Required')
        }
      }
    } else if (!this.addOperatorForm1.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
  saveOperatorDetail() {
    this.submitted1 = true;
    if (this.addOperatorForm2.valid) {
      if (this.imageFile == "" || this.imageFile == DEFAULT_IMAGES.ADD_PHOTO || this.imageFile == undefined) {
        this.submitted = false
        this.toastr.error(this.translate.instant('OPERATOR.PLACEHOLDERS.FDD_IMAGE'));
      } else {
        this.saveData('2')
      }
    } else if (!this.addOperatorForm2.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
  saveBankDetail() {
    this.submitted2 = true;
    if (this.addOperatorForm3.valid) {
      this.saveData('3')
    } else if (!this.addOperatorForm3.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

  saveCommissionDetail() {
    this.submitted3 = true;
    if (this.addOperatorForm4.valid) {
      this.saveData('4')
    } else if (!this.addOperatorForm4.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

  saveInvoiceDetail() {
    this.submitted4 = true;
    if (this.addOperatorForm5.valid) {
      this.saveData('5')
    } else if (!this.addOperatorForm5.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

  saveData(step) {
    if (step === '1') {
      Helpers.setLoading(true)
      let res = this.addOperatorForm1.value;

      const fd = new FormData();
      fd.append('user_firstName', res.user_firstName);
      fd.append('user_lastName', res.user_lastName);
      fd.append('user_userName', res.user_userName);
      fd.append('user_email', res.user_email);
      fd.append('user_phoneNumber', res.user_phoneNumber);
      fd.append('user_isdCode', res.user_isdCode);
      fd.append('user_verifiedStatus', res.user_verifiedStatus);
      fd.append('user_status', res.user_status);
      if (res.user_password && res.user_password != '') {
        fd.append('user_password', res.user_password);
      }

      if (this.userImageFile) {
        fd.append('user_profileImage', this.userImageFile);
      }

      delete this.addOperatorForm1.value.user_confirm_password;
      this.stateSubscription = this.store.dispatch(new operatorActions.AddOperator(fd))
      this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            const result = data['data'];
            this.toastr.success(data['message']);
            this.submitStep['step'] = step;
            this.navObj.link = 'operator';
            this.id = result._id;
            this.stateSubscription.unsubscribe();
            this.submitted = false;
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
          } else {
            Helpers.setLoading(false);
            this.stateSubscription.unsubscribe();
            this.toastr.error(data['message']);
          }
        }
      });
    } else if (step == '2') {
      let res = this.addOperatorForm2.value;
      const fd = new FormData();
      Helpers.setLoading(true);
      fd.append('operatorName', res.operatorName);
      fd.append('operatorPhoneNumber', res.operatorPhoneNumber);
      fd.append('operatorIsdCode', res.operatorIsdCode);
      fd.append('operatorLicenseNumber', res.operatorLicenseNumber);
      fd.append('user_countryId', environment.webDefaultCountry);
      fd.append('user_cityId', res.user_cityId);
      fd.append('user_progress', '2');
      fd.append('user_operator_polygon_array', JSON.stringify(this.user_operator_polygon_array));

      if (this.imageFile) {
        fd.append('operatorFddDocImage', this.imageFile);
      }

      let Obj = {
        id: this.id,
        data: fd
      }

      this.stateSubscription = this.store.dispatch(new operatorActions.UpdateOperatorProfile(Obj))
      this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            const result = data['data'];
            this.toastr.success(data['message']);
            this.submitStep['step'] = step;
            this.navObj.link = 'bank';
            this.id = result._id;
            this.stateSubscription.unsubscribe();
            this.submitted1 = false;
          } else {
            Helpers.setLoading(false);
            this.stateSubscription.unsubscribe();
            this.toastr.error(data['message']);
          }
        }
      });
    } else if (step === '3') {
      Helpers.setLoading(true)
      const form = this.addOperatorForm3.value;

      let obj = {
        id: this.id,
        data: {
          bankName: form.bankName,
          accountHolderName: form.accountHolderName,
          accountNumber: form.accountNumber,
          institutionNumber: form.institutionNumber,
          transitNumber: form.transitNumber
        }
      };

      this.stateSubscription = this.store.dispatch(new operatorActions.UpdateOperatorBankDetail(obj))
      this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.submitStep['step'] = step;
            this.navObj.link = 'commission';
            this.stateSubscription.unsubscribe();
            this.submitted = false;
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      })
    } else if (step === '4') {
      Helpers.setLoading(true)
      const form = this.addOperatorForm4.value;

      let obj = {
        id: this.id,
        data: {
          annualFee: form.annualFee,
          frequencyType: form.frequencyType,
          commissionPercentage: form.commissionPercentage,
          ridePreAuthorisedPayment: form.ridePreAuthorisedPayment
        }
      };

      this.stateSubscription = this.store.dispatch(new operatorActions.UpdateOperatorCommissionDetail(obj))
      this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.submitStep['step'] = step;
            this.navObj.link = 'invoice';
            this.stateSubscription.unsubscribe();
            this.submitted = false;
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      })
    } else if (step === '5') {
      Helpers.setLoading(true)
      const form = this.addOperatorForm5.value;

      let obj = {
        id: this.id,
        data: {
          address1: form.address1,
          address2: form.address2,
          postalCode: form.postalCode,
          province: form.province,
          isdCode: form.isdCode,
          contectNumber: form.contectNumber,
          email: form.email
        }
      };

      this.stateSubscription = this.store.dispatch(new operatorActions.UpdateOperatorInvoiceDetail(obj))
      this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.submitStep['step'] = step;
            this.router.navigate(['/operator-management/list']);
            this.stateSubscription.unsubscribe();
            this.submitted = false;
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      })
    }
  }

}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  rad: number
}
