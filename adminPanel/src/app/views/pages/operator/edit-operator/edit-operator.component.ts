import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'kt-edit-operator',
  templateUrl: './edit-operator.component.html',
  styleUrls: ['./edit-operator.component.scss'],
  styles: [`
    agm-map {
      height: 500px;
    }
  `],
})
export class EditOperatorComponent implements OnInit {

  navObj = { 'link': 'personal' }
  addOperatorForm1: FormGroup;
  addOperatorForm2: FormGroup;
  addOperatorForm3: FormGroup;
  addOperatorForm4: FormGroup;
  addOperatorForm5: FormGroup;
  // addOperatorForm6: FormGroup;

  submitted: Boolean = false;
  submitted1: Boolean = false;
  submitted2: Boolean = false;
  submitted3: Boolean = false;
  submitted4: Boolean = false;
  submitted5: Boolean = false;

  id: any;
  countryList: any = [];
  submitStep: any = { step: '0' };
  subscription:any;
  stateSubscription: any;
  imageFile: any;
  imageFile1: any;
  url: any = DEFAULT_IMAGES.ADD_PHOTO;
  url1: any = DEFAULT_IMAGES.ADD_PHOTO;

  cityList: any = [];
  OPERATOR_CONST: any = [];
  operatorDetail: any = {};
  pereferredLocationlists: any;
  operatorFrequencyType: any = appConstants.FREQUENCY_TYPE;

  operatorId: any;

  map: any
  drawingManager: any;
  user_operator_polygon_array: any = []
  selectedArea = 0;

  selectedShape
  constructor(private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _route: ActivatedRoute,
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
  
  async ngOnInit() {
    this.subscription = this.operatorService.isUpdatePrefLoc.subscribe((data) => {
      if (data) {
        this.operatorService.updatePrefLoc('');
        if (data === 'updatePrefLoc') {
          this.clickLink('preferredLocation')
          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
        }
      }
    });
    await this.buildAddOperatorForm1();
    await this.buildAddOperatorForm2();
    await this.buildAddOperatorForm3();
    await this.buildAddOperatorForm4();
    await this.buildAddOperatorForm5();
    // await this.buildAddOperatorForm6();
    await this.getOperatorById();
    await this.changeCountry(status);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  back() {
    this.router.navigate(['/operator-management/list']);
  }
  onMapReady(map) {
    // this.getOperatorById()
    this.map = map
    this.initDrawingManager(map);
    // let polygonArray = []
    let city = this.cityList.find(element => element._id == this.addOperatorForm2.value.user_cityId);
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
    const self = this
    this.user_operator_polygon_array.map((polygon) => {
      let polygonDetail = []
      polygon.loc.coordinates[0].map((detail) => {
        polygonDetail.push({ lat: detail[1], lng: detail[0] })
      })
      const drawPolygon = new google.maps.Polygon({
        paths: polygonDetail,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35
      });
      drawPolygon.setMap(this.map);
      drawPolygon.addListener("click", showArrays);
      function showArrays(event) {
        const shape = this;
        shape.name = polygon.name
        self.setSelection(shape)
      }
    })
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
// ----- for preferredLocation edit -----
  edit(id) {
    this.router.navigate(["/operator-management/" + this.id + "/preferred-location/edit/" + id]);
  }
  addPreferredLocation() {
    this.id = this._route.snapshot.params['id'];
    this.router.navigate(["/operator-management/" + this.id + "/preferred-location/add/" ]);
  }
  delete(preferredLocationId) {
    this.operatorId = this._route.snapshot.params['id'];
    Helpers.setLoading(true);
    this.operatorService.deletePreferredLocationById(this.operatorId, preferredLocationId).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {

          this.toastr.success("Preferred location deleted successfully");

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          Helpers.setLoading(false);
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    });
  }
//--------------------  
  deleteSelected() {
    if (this.selectedShape) {
      this.updatePointList(this.selectedShape.getPath(), 'delete_old_selected', this.selectedShape.name);
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
    let self = this
    let pointList = []
    const len = path.getLength();
    for (let i = 0; i < len; i++) {
      pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat])
    }
    
    if (type == 'add_at') {
      let obj = {}
      obj['loc'] = { type: "Polygon", coordinates: [pointList] }
      obj['name'] = "Polygon" + (Number([index]) + Number(this.operatorDetail.user_operator_polygon_array.length))
     
      self.user_operator_polygon_array = Object.assign([], this.user_operator_polygon_array);
      self.user_operator_polygon_array.push(obj)
    } else if (type == 'delete_selected') {
      let deleteIndex = self.user_operator_polygon_array.findIndex(function (obj) {
        return obj.name == 'Polygon' + index;
      });
      self.user_operator_polygon_array.splice(deleteIndex, 1);
    } else if (type == 'delete_old_selected') {
      self.user_operator_polygon_array = self.user_operator_polygon_array.filter(function (item) {
        return item.name !== index
      })
    } else {
      self.user_operator_polygon_array[index].loc.coordinates[0] = pointList
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
      user_password: ['', [Validators.pattern(validataion.passwordRegEx)]],
      user_confirm_password: ['', [Validators.pattern(validataion.passwordRegEx)]],
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
      operatorLicenseNumber: ["", [Validators.required, , Validators.pattern(validataion.alphaNumericRegEx)]],
      // operatorCountry: ["", [Validators.required]],
      user_cityId: ["", [Validators.required]],
      // operatorCities: this._formBuilder.array([this.CitiesForm()])
    });
  }

  buildAddOperatorForm3() {
    this.addOperatorForm3 = this._formBuilder.group({
      bankName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      accountHolderName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      accountNumber: ["", [Validators.required, , Validators.pattern(validataion.alphaNumericRegEx)]],
      institutionNumber: ["", [Validators.required, , Validators.pattern(validataion.alphaNumericRegEx)]],
      transitNumber: ["", [Validators.required, , Validators.pattern(validataion.alphaNumericRegEx)]]
    });
  }

  buildAddOperatorForm4() {
    this.addOperatorForm4 = this._formBuilder.group({
      annualFee: ["", [Validators.required, Validators.pattern(validataion.amount)]],
      frequencyType: ["", [Validators.required]],
      commissionPercentage: [[], [Validators.required, Validators.pattern(validataion.percentageRegEx)]],
      ridePreAuthorisedPayment: ["", [Validators.required, Validators.pattern(validataion.percentageRegEx)]]
    })
  }

  buildAddOperatorForm5() {
    this.addOperatorForm5 = this._formBuilder.group({
      address1: ["", [Validators.required]],
      address2: ["", [Validators.required]],
      // Validators.minLength(9)
      postalCode: ["", [Validators.required, Validators.pattern(validataion.numericOnly), Validators.maxLength(9)]],
      province: ["", [Validators.required]],
      isdCode: ["+1", [Validators.required]],
      contectNumber: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      email: ["", [Validators.required, Validators.pattern(validataion.emailRegEx)]]
    });
  }
  
  // buildAddOperatorForm6() {
  //   this.addOperatorForm6 = this._formBuilder.group({
  //     address1: ["", [Validators.required]]
  //   });
  // }
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
  getAllPreferredLocationsList() {

    this.id = this._route.snapshot.params['id'];  // operator id
    Helpers.setLoading(true);
    this.operatorService.getALLPreferredLocationList(this.id).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {

          this.pereferredLocationlists = await data['data'] ? await data['data'] : 0
          // for (var i = 0; i < this.pereferredLocationlists.length; i++) {

          //   if (this.pereferredLocationlists[i].verifiedStatus == 0) {
          //     this.pereferredLocationlists[i].verifiedStatus = this.DRIVER_CONST.LABEL.PENDING
          //   }
          //   if (this.vehiclelists[i].verifiedStatus == 1) {
          //     this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.FILLED
          //   }
          //   if (this.vehiclelists[i].verifiedStatus == 2) {
          //     this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.REJECTED
          //   }
          //   if (this.vehiclelists[i].verifiedStatus == 3) {
          //     this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.VARIFIED
          //   }
          //   if (this.vehiclelists[i].isDefault == 0) {
          //     this.vehiclelists[i].isDefault = this.DRIVER_CONST.LABEL.IS_DEFAULTFalse
          //   }
          //   if (this.vehiclelists[i].isDefault == 1) {
          //     this.vehiclelists[i].isDefault = this.DRIVER_CONST.LABEL.IS_DEFAULTTrue
          //   }
          // }
          // this.previewImageSrc =  this.vehiclelists.carIconImage;
          // this.zoomImageSrc = this.vehiclelists.carIconImage;
          // it is used to detect changes for html file
          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
         
          Helpers.setLoading(false);
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    });
  }
  getOperatorById() {
    this.id = this._route.snapshot.params['id'];
   
    Helpers.setLoading(true);
    this.stateSubscription = this.store.dispatch(new operatorActions.LoadOperator(this.id))
    this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
          this.getAllPreferredLocationsList()
         
          const result = await data['data'];
          this.operatorDetail = data['data'];
          
          this.user_operator_polygon_array = this.operatorDetail.user_operator_polygon_array
          let fd = {
            'user_firstName': result.user_firstName,
            'user_lastName': result.user_lastName,
            'user_userName': result.user_userName,
            'user_email': result.user_email,
            'user_phoneNumber': result.user_phoneNumber,
            // 'user_verifiedStatus': result.user_verifiedStatus,
            'user_verifiedStatus': result.user_preferredLocations.length > 0 ? 1 : 0,
            'user_status': result.user_status,
            'user_isdCode': result.user_isdCode
          };
          if (result.user_profileImage) {
            this.url1 = result.user_profileImage;
          }
          if (result.user_profileImage != undefined || result.user_profileImage != null) {
            this.url1 = result.user_profileImage;
          }
          this.addOperatorForm1.patchValue(fd);

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          this.stateSubscription.unsubscribe();

          if (result.user_operatorInfo && result.user_operatorInfo != undefined) {
            let fd2 = {
              'operatorName': result.user_operatorInfo && result.user_operatorInfo.operatorName ? result.user_operatorInfo.operatorName : '',
              'operatorIsdCode': result.user_operatorInfo && result.user_operatorInfo.operatorIsdCode ? result.user_operatorInfo.operatorIsdCode : '',
              'operatorPhoneNumber': result.user_operatorInfo && result.user_operatorInfo.operatorPhoneNumber ? result.user_operatorInfo.operatorPhoneNumber : '',
              'operatorLicenseNumber': result.user_operatorInfo && result.user_operatorInfo.operatorLicenseNumber ? result.user_operatorInfo.operatorLicenseNumber : '',
              'user_cityId': result.user_cityId && result.user_cityId ? result.user_cityId : ''
            };
            if (result.user_operatorInfo && result.user_operatorInfo.operatorFddDocImage != null) {
              this.url = result.user_operatorInfo.operatorFddDocImage;
            }

            if (result.user_cityId) {
              this.changeCountry('withCity')
            } else {
              this.changeCountry('withOutCity')
            }
            await this.addOperatorForm2.patchValue(fd2);
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            this.stateSubscription.unsubscribe();
          }
          if (result.user_bankDetail && result.user_bankDetail != undefined) {
            let fd3 = {
              'bankName': result.user_bankDetail.bankName,
              'accountHolderName': result.user_bankDetail.accountHolderName,
              'accountNumber': result.user_bankDetail.accountNumber,
              'institutionNumber': result.user_bankDetail.institutionNumber,
              'transitNumber': result.user_bankDetail.transitNumber
            };
            this.addOperatorForm3.patchValue(fd3);
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            this.stateSubscription.unsubscribe();
          }
          if (result.user_operatorInfo.operatorCommission && result.user_operatorInfo.operatorCommission != undefined) {
            let fd4 = {
              'annualFee': result.user_operatorInfo.operatorCommission.annualFee,
              'frequencyType': result.user_operatorInfo.operatorCommission.frequencyType,
              'commissionPercentage': result.user_operatorInfo.operatorCommission.commissionPercentage,
              'ridePreAuthorisedPayment': result.user_operatorInfo.operatorCommission.ridePreAuthorisedPayment
            };
            this.addOperatorForm4.patchValue(fd4);
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            this.stateSubscription.unsubscribe();
          }
          // console.log("---------result--------------", result.user_operatorInfo)
          if (result.user_operatorInfo.operatorInvoiceDetails && result.user_operatorInfo.operatorInvoiceDetails != undefined) {
            let fd5 = {
              'address1': result.user_operatorInfo.operatorInvoiceDetails.address1,
              'address2': result.user_operatorInfo.operatorInvoiceDetails.address2,
              'postalCode': result.user_operatorInfo.operatorInvoiceDetails.postalCode,
              'province': result.user_operatorInfo.operatorInvoiceDetails.province,
              'isdCode': result.user_operatorInfo.operatorInvoiceDetails.isdCode,
              'contectNumber': result.user_operatorInfo.operatorInvoiceDetails.contectNumber,
              'email': result.user_operatorInfo.operatorInvoiceDetails.email
            };
            this.addOperatorForm5.patchValue(fd5);
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            this.stateSubscription.unsubscribe();
          }
          // if (result.user_operatorInfo.operatorInvoiceDetails && result.user_operatorInfo.operatorInvoiceDetails != undefined) {
          //   let fd6 = {
          //     'address1': result.user_operatorInfo.operatorInvoiceDetails.address1
          //   };
          //   this.addOperatorForm6.patchValue(fd6);
          //   if (this.dtr && !(this.dtr as ViewRef).destroyed) {
          //     this.dtr.detectChanges();
          //   }
          //   this.stateSubscription.unsubscribe();
          // }

          this.addOperatorForm1.patchValue(fd);
          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          this.stateSubscription.unsubscribe();
        } else {

          Helpers.setLoading(false);
          this.stateSubscription.unsubscribe();

          this.toastr.error(data['message']);
        }
      }
    });
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
  // user Image
  onSelectUserImage(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
        Helpers.setLoading(true);
        this.imageFile1 = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          Helpers.setLoading(false);
          this.url1 = reader.result;
          this.dtr.detectChanges();
        };
      } else {
        this.toastr.error(this.translate.instant("COMMON_VALIDATION_MESSAGES.FILE_SIZE"));
      }
    }
  }
  removeUserImage() {
    this.url1 = DEFAULT_IMAGES.ADD_PHOTO;
    this.imageFile1 = '';
  }

  async changeCountry(status) {
    if (status == 'withCity') {
      let countryId = { city_countryId: environment.webDefaultCountry };
      await this.cityService
        .getCountryCities(countryId).subscribe(async (data) => {
          if (data["code"] == 200) {
            this.cityList = await data["data"];
            this.dtr.detectChanges();
          }
        });
    } else if ('withOutCity') {
      let countryId = { city_countryId: environment.webDefaultCountry };
      await this.cityService
        .getCityListOperetor(countryId).subscribe(async (data) => {
          if (data["code"] == 200) {
            this.cityList = await data["data"];
           
            this.dtr.detectChanges();
          }
        });
    }

  }

  savePersonalDetail() {
    this.submitted = true;
    if (this.addOperatorForm1.valid) {
      if (this.imageFile1 == "" || this.imageFile1 == DEFAULT_IMAGES.ADD_PHOTO) {
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
          this.saveData('1');
        }
      }
    } else if (!this.addOperatorForm1.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
  saveOperatorDetail() {
    this.submitted1 = true;
    if (this.addOperatorForm2.valid) {
      if (this.imageFile == "" || this.imageFile == DEFAULT_IMAGES.ADD_PHOTO) {
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
  
  // savePreferredLocation() {
  //   this.submitted5 = true;
  //   if (this.addOperatorForm6.valid) {
  //     this.saveData('6')
  //   } else if (!this.addOperatorForm6.valid) {
  //     this.toastr.error('All Tabs Field is Required');
  //   }
  // }

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
      fd.append('user_roleId', this.operatorDetail && this.operatorDetail.user_roleId ? this.operatorDetail.user_roleId : '5');
      if (res.user_password && res.user_password != '') {
        fd.append('user_password', res.user_password);
      }
      if (this.imageFile1) {
        fd.append('user_profileImage', this.imageFile1);
      }
      let obj = {
        id: this.id,
        data: fd
      }

      this.stateSubscription = this.store.dispatch(new operatorActions.UpdateOperator(obj))
      this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);

            this.submitStep['step'] = step;
            this.navObj.link = 'operator';
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

    } else if (step === '2') {
      // const mergedArray = [...this.user_operator_polygon_array, ...this.operatorDetail.user_operator_polygon_array]
      Helpers.setLoading(true);
      let res = this.addOperatorForm2.value;
      const fd = new FormData();

      fd.append('operatorName', res.operatorName);
      fd.append('operatorPhoneNumber', res.operatorPhoneNumber);
      fd.append('operatorIsdCode', res.operatorIsdCode);
      fd.append('operatorLicenseNumber', res.operatorLicenseNumber);
      fd.append('user_countryId', environment.webDefaultCountry);
      fd.append('user_cityId', res.user_cityId);
      fd.append('user_operator_polygon_array', JSON.stringify(this.user_operator_polygon_array));

      if (this.imageFile) {
        fd.append('operatorFddDocImage', this.imageFile);
      }
      let obj = {
        id: this.id,
        data: fd
      }
      this.stateSubscription = this.store.dispatch(new operatorActions.UpdateOperatorProfile(obj))
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
      // console.log("-----form-----", form);
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
      // console.log("-----obj.data-----", obj.data);
      this.stateSubscription = this.store.dispatch(new operatorActions.UpdateOperatorInvoiceDetail(obj))
      this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.submitStep['step'] = step;
            this.navObj.link = 'preferredLocation';
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
    // else if (step === '6') {
    //   Helpers.setLoading(true)
    //   const form = this.addOperatorForm6.value;

    //   let obj = {
    //     id: this.id,
    //     data: {
    //       address1: form.address1
    //     }
    //   };

    //   this.stateSubscription = this.store.dispatch(new operatorActions.UpdateOperatorInvoiceDetail(obj))
    //   this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe(async (data) => {
    //     if (data && data != undefined) {
    //       if (data['code'] == 200) {
    //         Helpers.setLoading(false);
    //         this.toastr.success(data['message']);
    //         this.submitStep['step'] = step;
    //         this.router.navigate(['/operator-management/list']);
    //         this.stateSubscription.unsubscribe();
    //         this.submitted = false;
    //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
    //           this.dtr.detectChanges();
    //         }
    //       } else {
    //         Helpers.setLoading(false);
    //         this.toastr.error(data['message']);
    //         this.stateSubscription.unsubscribe();
    //       }
    //     }
    //   })
    // }
  }
}