import { state } from '@angular/animations';
import { Component, 
         OnInit, 
         ChangeDetectorRef, 
         ViewRef, 
         ViewChild
         } from '@angular/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { validataion } from '../../../../helper/regular.expression';
import { Store, select } from "@ngrx/store";
import { APPNAME } from '../../../../helper/page.title';
import { NgxImgZoomService } from 'ngx-img-zoom';

import * as driverActions from "../state/driver.actions";
import * as fromDriver from "../state/driver.reducer";

import { Helpers } from '../../../../helper/helper';
import { TranslateService } from '@ngx-translate/core';
import { StateService } from '../../state/state.service';

import { CityService } from '../../city/city.service';
import { BrandService } from '../../brand/brand.service';
import { ModelService } from '../../model/model.service';

import { ServiceOperatorService } from '../../service-operator/service-operator.service';
import { appConstants } from '../../../../../app-contants';
import { environment } from '../../../../../environments/environment';
import { DriverManagementService } from '../driver-management.service';
import { AccountTypeService } from '../../account-type/account-type.service';
import { BsDatepickerConfig, BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { RiderManagementService } from '../../rider-management/rider-management.service';

function _window(): any {
  // return the global native browser window object
  return window;
}

declare const $: any;
@Component({
  selector: 'kt-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.scss']
})

export class EditDriverComponent implements OnInit {

  enableZoom: Boolean = true;
  previewImageSrc = 'pathToImage';
  zoomImageSrc = 'pathToImage';
  myThumbnail = "https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage = "https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";

  @ViewChild('dp', { static: false }) datepicker: BsDaterangepickerDirective;
  @ViewChild('dp1', { static: false }) datepickers: BsDaterangepickerDirective;
  bsConfig: Partial<BsDatepickerConfig>;
  bsConfigs: Partial<BsDatepickerConfig>;

  minDate = new Date();
  maxDate = new Date();
  navObj = { 'link': 'personal' }
  navObjAddress = { 'link': 'address' }
  navObjDocument = { 'link': 'document' }
  navObjOtherDocument = { 'link': 'otherDocument' }
  navObjCitizenShip = { 'link': 'citizenShip' }
  // minDate:any = [];
  addDriverForm1: FormGroup;
  // addDriverForm2: FormGroup;
  addDriverForm3: FormGroup;
  addDriverForm4: FormGroup;
  addDriverForm5: FormGroup;
  addDriverForm6: FormGroup;
  addDriverForm7: FormGroup;

  submitted: Boolean = false;
  submitted1: Boolean = false;
  submitted2: Boolean = false;
  submitted3: Boolean = false;
  submitted4: Boolean = false;
  submitted5: Boolean = false;
  submitted6: Boolean = false;

  id: any;
  driverId: any;
  cityList: any
  stateList: any = [];
  submitStep: any = { step: '0' };

  stateSubscription: any;
  imageFile: any;
  imageFile1: any;
  imageFile2: any;
  imageFile3: any;
  imageFile4: any;
  imageFile5: any;

  url: any = '../../../../../assets/media/newMedia/add.png';
  url1: any = '../../../../../assets/media/newMedia/add.png';
  url2: any = '../../../../../assets/media/newMedia/add.png';
  url3: any = '../../../../../assets/media/newMedia/add.png';
  url4: any = '../../../../../assets/media/newMedia/add.png';
  url5: any = '../../../../../assets/media/newMedia/add.png';



  countries: any = [];
  cities: any = [];
  operators: any = [];
  DRIVER_CONST: any = [];
  brands: any = [];
  models: any = [];
  colors: any = [];
  vehiclelists: any = [];
  data: any = {};
  years: any = [];
  verifiedStatus: any = [];
  documentTypes: any = [];
  accountTypes: any = [];
  driverDocumentVerifiedStatus: any = appConstants.DRIVER_VERIFIED_STATUS;
  states: any = []

  userFirstName: any;
  userLastName: any;

  // for show hid text field for others document  
  isNameSelected: boolean;

  driverDetails: any
  subscription: any;
  selectInput(event) {
    let selected = event ? event.target.value : '';
    if (selected == "Select Document") {
      this.isNameSelected = true;
    } else {
      this.isNameSelected = false;
    }
  }
  // for show hid text field for bank details
  // isVerifiedSelected: boolean;

  // bank
  selectVerifiedBankValue(event) {
    var selected = event.target.value;
    if (selected == 2) {
      const rejectedReasonControl = this.addDriverForm3.get('rejectedReason');
      rejectedReasonControl.setValidators([Validators.required])
      rejectedReasonControl.updateValueAndValidity();
      // this.isVerifiedSelected = false;
      // console.log('--------show---------')
    } else {
      const rejectedReasonControl = this.addDriverForm3.get('rejectedReason');
      rejectedReasonControl.clearValidators();
      rejectedReasonControl.updateValueAndValidity();
      // this.isVerifiedSelected = true;
      // console.log('--------hide---------')
    }
  }

  // for address
  selectVerifiedAddressValue(event) {
    var selected = event.target.value;
    if (selected == 2) {
      const rejectedReasonControl = this.addDriverForm4.get('rejectedReason');
      rejectedReasonControl.setValidators([Validators.required])
      rejectedReasonControl.updateValueAndValidity();
      // this.isVerifiedSelected = false;
      // console.log('--------show---------')
    } else {
      const rejectedReasonControl = this.addDriverForm4.get('rejectedReason');
      rejectedReasonControl.clearValidators();
      rejectedReasonControl.updateValueAndValidity();
      // this.isVerifiedSelected = true;
      // console.log('--------hide---------')
    }
  }

  // for driving license
  selectVerifiedLicenseValue(event) {
    var selected = event.target.value;
    if (selected == 2) {
      const rejectedReasonControl = this.addDriverForm5.get('rejectedReason');
      rejectedReasonControl.setValidators([Validators.required])
      rejectedReasonControl.updateValueAndValidity();
      // this.isVerifiedSelected = false;
      // console.log('--------show---------')
    } else {
      const rejectedReasonControl = this.addDriverForm5.get('rejectedReason');
      rejectedReasonControl.clearValidators();
      rejectedReasonControl.updateValueAndValidity();
      // this.isVerifiedSelected = true;
      // console.log('--------hide---------')
    }
  }
  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private store: Store<{ admin: any }>,
    titleService: Title,
    private dtr: ChangeDetectorRef,
    public translate: TranslateService,
    public stateService: StateService,
    private cityService: CityService,
    private brandService: BrandService,
    private modelService: ModelService,
    private driverService: DriverManagementService,
    private serviceOperatorService: ServiceOperatorService,
    private accountTypeService: AccountTypeService,
    private driverManagementService: DriverManagementService,
    private ref: ChangeDetectorRef,
    private ngxImgZoom: NgxImgZoomService,
    public riderManagementService: RiderManagementService
  ) {
    this.bsConfig = Object.assign({}, { minDate: this.minDate });
    this.bsConfigs = Object.assign({}, { maxDate: this.maxDate });
    this.ngxImgZoom.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 }]);
    this.DRIVER_CONST = this.translate.instant('DRIVER');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.DRIVER'));
    titleService.setTitle(APPNAME + " | " + this.DRIVER_CONST.MODULE_NAME);
    // this.getAllAmmenities()
  }

  async clickLink(e) {
    this.navObj.link = e;
  }

  async ngOnInit() {
    this.subscription = this.driverManagementService.isUpdateVehicle.subscribe((data) => {
      if (data) {
        this.driverManagementService.updateVehicle('');
        if (data === 'updateVehicle') {
          this.clickLink('vehicle')
          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
        }
      }
    });
    await this.buildAddDriverForm1();
    // await this.buildAddDriverForm2();
    await this.buildAddDriverForm3();
    await this.buildAddDriverForm4();
    await this.buildAddDriverForm5();
    await this.buildAddDriverForm6();
    await this.buildAddDriverForm7();
    await this.getAllCountries();
    await this.getDriverById();

    await this.changeCountry(environment.webDefaultCountry);
    await this.changeState(state);
    this.getAllBrands();
    this.getAllColors();
    this.getAllOperators();
    this.getAllDocumentType();
    this.getAllAccountType();
    this.getYear();
    this.getAllState(environment.webDefaultCountry);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  async changeCountry(country) {
    // Helpers.setLoading(true);
    if (country) {
      // let countryId = { city_countryId: country };W
      await this.stateService.getStateList(country).subscribe(async (data) => {
        if (data["code"] == 200) {
          this.stateList = await data["data"];
          // Helpers.setLoading(false);
          this.dtr.detectChanges();
        }
      });
    }
  }

  regeneratedAndSendPassword() {
    this.id = this._route.snapshot.params['id'];
    this.riderManagementService.regeneratedAndSendPassword(this.id).subscribe((data) => {
      if (data["code"] == 200) {
        // this.toastr.success(this.RIDER_CONST.MESSAGES.UPDATED);
        this.toastr.success("New generated password has been send to driver");
        this.dtr.detectChanges();
      }
    })
  }

  async changeState(state) {
    console.log(state)
    // Helpers.setLoading(true);
    let stateId = { city_stateId: state };
    await this.cityService.getStateCity(stateId).subscribe(async (data) => {
      if (data["code"] == 200) {
        this.cityList = await data["data"];
        // Helpers.setLoading(false);
        this.dtr.detectChanges();
      }
    });

  }
  getAllVehicleList() {

    this.id = this._route.snapshot.params['id'];  // Driver id
    Helpers.setLoading(true);
    this.driverManagementService.getAllVehicleList(this.id).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {

          this.vehiclelists = data['data'];
          for (var i = 0; i < this.vehiclelists.length; i++) {

            if (this.vehiclelists[i].verifiedStatus == 0) {
              this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.PENDING
            }
            if (this.vehiclelists[i].verifiedStatus == 1) {
              this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.FILLED
            }
            if (this.vehiclelists[i].verifiedStatus == 2) {
              this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.REJECTED
            }
            if (this.vehiclelists[i].verifiedStatus == 3) {
              this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.VARIFIED
            }
            if (this.vehiclelists[i].isDefault == 0) {
              this.vehiclelists[i].isDefault = this.DRIVER_CONST.LABEL.IS_DEFAULTFalse
            }
            if (this.vehiclelists[i].isDefault == 1) {
              this.vehiclelists[i].isDefault = this.DRIVER_CONST.LABEL.IS_DEFAULTTrue
            }
          }
          // this.previewImageSrc =  this.vehiclelists.carIconImage;
          // this.zoomImageSrc = this.vehiclelists.carIconImage;
          // it is used to detect changes for html file
          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          console.log(this.vehiclelists)
          Helpers.setLoading(false);
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    });
  }
  getAllBrands() {
    Helpers.setLoading(true);
    this.brandService.getAllBrands().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.brands = data['data'];

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

  edit(id) {
    this.router.navigate(["/driver-management/" + this.id + "/vehicle/edit/" + id]);
  }

  delete(vehicleId) {
    this.driverId = this._route.snapshot.params['id'];
    Helpers.setLoading(true);
    this.driverManagementService.deleteVehicleInfo(this.driverId, vehicleId).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {

          this.toastr.success(this.DRIVER_CONST.MESSAGES.VEHICLEDELEDTED);

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

  getAllDocumentType() {
    Helpers.setLoading(true);
    this.driverService.getAllDocumentType().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.documentTypes = data['data'];
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

  getAllAccountType() {
    Helpers.setLoading(true);
    this.accountTypeService.getAllAccountType().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.accountTypes = data['data'];
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
  async changeBrand(brand) {
    Helpers.setLoading(true);
    if (brand) {
      await this.modelService
        .getBrandModel(brand)
        .subscribe(async (data) => {
          if (data["code"] == 200) {
            this.models = await data["data"];
            Helpers.setLoading(false);
            this.dtr.detectChanges();
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        });
    }
  }

  async getAllColors() {
    Helpers.setLoading(true);
    await this.modelService
      .getAllColors()
      .subscribe(async (data) => {
        if (data["code"] == 200) {
          this.colors = await data["data"];
          Helpers.setLoading(false);
          this.dtr.detectChanges();
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      });

  }

  getAllCountries() {
    Helpers.setLoading(true);
    this.driverService.getAllCountries().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.countries = data['data'];
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

  getAllState(country) {
    Helpers.setLoading(true);
    this.stateService.getStateList(country).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.states = data['data'];
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

  getAllOperators() {
    Helpers.setLoading(true);
    this.serviceOperatorService.getAllOperators().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.operators = data['data'];
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

  // async changeCountry(country) {
  //   Helpers.setLoading(true);
  //   if (country) {
  //     let countryId = { city_countryId: country };
  //     await this.cityService
  //       .getCountryCities(countryId)
  //       .subscribe(async (data) => {
  //         if (data["code"] == 200) {
  //           this.cities = await data["data"];
  //           Helpers.setLoading(false);
  //           this.dtr.detectChanges();
  //         }
  //       });
  //   }
  // }

  getYear() {
    Helpers.setLoading(true);
    let startYear = 1970;
    let currentYear = new Date().getFullYear();

    for (let i = startYear; i <= currentYear; i++) {
      this.years.push(i)
    }
  }

  buildAddDriverForm1() {
    this.addDriverForm1 = this._formBuilder.group({
      user_firstName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_lastName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_userName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      user_email: ["", [Validators.required, Validators.pattern(validataion.emailRegEx)]],
      user_phoneNumber: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      user_password: ['', [Validators.pattern(validataion.passwordRegEx)]],
      user_verifiedStatus: [[]],
      user_status: ["ACTIVE", []],
      user_isdCode: ["+964", [Validators.required]],
      user_invitationCode: [''],
      user_premiumUser: ['', [Validators.required]],
      // user_countryId: ["", [Validators.required]],
      user_operatorId: ["", [Validators.required]],
      user_rideInfo: ['', [Validators.required]],
      user_wallets: ['', [Validators.required]],
      user_dob: ['', [Validators.required]],
      user_zipCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      user_cityId: ['', [Validators.required]],
      user_stateId: ['', [Validators.required]],
    });
  }

  // Bank Detail form
  buildAddDriverForm3() {
    this.addDriverForm3 = this._formBuilder.group({
      bankName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      accountHolderName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      accountNumber: ["", [Validators.required, Validators.pattern(validataion.accountNumber)]],
      verifiedStatus: [appConstants.DRIVER_VERIFIED_STATUS['Pending'], []],
      accountType: ["", [Validators.required]],
      routingNumber: ["", [Validators.required]],
      rejectedReason: [""],
    });
  }
  // User Address Form
  buildAddDriverForm4() {
    this.addDriverForm4 = this._formBuilder.group({
      address1: ["", [Validators.required]],
      address2: [""],
      city: ["", [Validators.required]],
      // streetName: ["", [Validators.required]],
      zipCode: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      rejectedReason: [""],
      verifiedStatus: [appConstants.DRIVER_VERIFIED_STATUS['Pending'], []]
    });
  }
  // driver licence update
  buildAddDriverForm5() {
    this.addDriverForm5 = this._formBuilder.group({
      // licenceImage: ["", [Validators.required]],
      verifiedStatus: [appConstants.DRIVER_VERIFIED_STATUS['Pending'], []],
      stateIssued: ["", [Validators.required]],
      licenceNumber: ["", [Validators.required]],
      expiryDate: ["", [Validators.required]],
      rejectedReason: ["", [Validators.required]]
    });
  }
  // other document update
  buildAddDriverForm6() {
    this.addDriverForm6 = this._formBuilder.group({
      otherDocument: ["", [Validators.required]],
      documentName: [""],
      documentImage: [""],
      verifiedStatus: [appConstants.DRIVER_VERIFIED_STATUS['Pending'], []]
    });
  }

  //citizen ship update
  buildAddDriverForm7() {
    this.addDriverForm7 = this._formBuilder.group({
      type: ["", [Validators.required]],
      socialSecurityNumber: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //   identityNumber: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //   HST: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      verifiedStatus: [appConstants.DRIVER_VERIFIED_STATUS['Pending'], []]
    })
  }

  getDriverById() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);
    this.stateSubscription = this.store.dispatch(new driverActions.LoadDriver(this.id))
    this.stateSubscription = this.store.pipe(select(fromDriver.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
          this.getAllVehicleList();
          const result = await data['data'];
          var res = result.user_dob.split("/");
          let dob;
          dob = res[1] + "/" + res[0] + "/" + res[2]
          this.driverDetails = result
          let fd = {
            'user_firstName': result.user_firstName,
            'user_lastName': result.user_lastName,
            'user_userName': result.user_userName,
            'user_email': result.user_email,
            'user_phoneNumber': result.user_phoneNumber,
            'user_verifiedStatus': result.user_verifiedStatus != null && result.user_verifiedStatus != undefined ? result.user_verifiedStatus : "",
            'user_status': result.user_status != null && result.user_status != undefined ? result.user_status : "",
            'user_isdCode': result.user_isdCode,
            'user_invitationCode': result.user_invitationCode,
            'user_premiumUser': result.user_premiumUser,
            'user_countryId': result.user_countryId,
            'user_operatorId': result.user_operatorId != null && result.user_operatorId != undefined ? result.user_operatorId : "",
            'user_rideInfo': result.user_rideInfo,
            'user_wallets': result.user_wallets,
            'user_dob': new Date(dob),
            'user_zipCode': result.user_zipCode,
            'user_cityId': result.user_cityId,
            'user_stateId': result.user_stateId,
          };
          if (result.user_profileImage != undefined ||
            result.user_profileImage != null
          ) {
            this.url5 = result.user_profileImage;
          }
          await this.changeCountry(environment.webDefaultCountry);
          await this.changeState(result.user_stateId);
          this.addDriverForm1.patchValue(fd);
          // it is used to detect changes for html file
          this.ref.detectChanges();

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          this.stateSubscription.unsubscribe();

          if (result.user_bankDetail && result.user_bankDetail != undefined) {
            let fd3 = {
              bankName: result.user_bankDetail.bankName,
              accountHolderName: result.user_bankDetail.accountHolderName,
              accountNumber: result.user_bankDetail.accountNumber,
              verifiedStatus: result.user_bankDetail.verifiedStatus != null && result.user_bankDetail.verifiedStatus != undefined ? result.user_bankDetail.verifiedStatus : "",
              accountType: result.user_bankDetail.accountType,
              routingNumber: result.user_bankDetail.routingNumber,
              rejectedReason: result.user_bankDetail.rejectedReason
            };
            // for hidindg input field when data fetched
            if (typeof (result.user_bankDetail.rejectedReason) == "string" && typeof (result.user_bankDetail.rejectedReason) != undefined) {
              // this.isVerifiedSelected = false;
              this.dtr.detectChanges();
            } else {
              // this.isVerifiedSelected = true;
              this.dtr.detectChanges();
            }

            this.addDriverForm3.patchValue(fd3);
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            this.stateSubscription.unsubscribe();
          }
          if (result.user_Address && result.user_Address != undefined) {
            let fd4 = {
              address1: result.user_Address.address1,
              address2: result.user_Address.address2,
              city: result.user_Address.city,
              // streetName: result.user_Address.streetName,
              zipCode: result.user_Address.zipCode,
              state: result.user_Address.state,
              country: result.user_Address.country,
              rejectedReason: result.user_Address.rejectedReason,
              verifiedStatus: result.user_Address.verifiedStatus != null && result.user_Address.verifiedStatus != undefined ? result.user_Address.verifiedStatus : "",
            };
// console.log("result.user_Address patch vale", result.user_Address)
            // for hidindg input field when data fetched
            if (typeof (result.user_Address.rejectedReason) == "string" && typeof (result.user_Address.rejectedReason) != undefined) {
              // this.isVerifiedSelected = false;
            } else {
              // this.isVerifiedSelected = true;
            }

            // this.changeCountry(result.user_Address.country)
            this.addDriverForm4.patchValue(fd4);
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            this.stateSubscription.unsubscribe();
          }
          // Driving License 
          if (result.user_driverInfo.driverLicenceDocument && result.user_driverInfo.driverLicenceDocument != undefined) {
            var expiryDate = result.user_driverInfo.driverLicenceDocument.expiryDate.split("/")
            let fd5 = {
              'verifiedStatus': result.user_driverInfo.driverLicenceDocument.verifiedStatus,
              'stateIssued': result.user_driverInfo.driverLicenceDocument.stateIssued,
              'licenceNumber': result.user_driverInfo.driverLicenceDocument.licenceNumber,
              'expiryDate': new Date(expiryDate[2], expiryDate[1] - 1, expiryDate[0]),
              'rejectedReason': result.user_driverInfo.driverLicenceDocument.rejectedReason
            };
            // for hidindg input field when data fetched
            if (typeof (result.user_driverInfo.driverLicenceDocument.rejectedReason) == "string" &&
              typeof (result.user_driverInfo.driverLicenceDocument.rejectedReason) != undefined) {
              // this.isVerifiedSelected = false;
            } else {
              // this.isVerifiedSelected = true;
            }
            this.getAllState(environment.webDefaultCountry)
            if (result.user_driverInfo.driverLicenceDocument.licenceImage != undefined ||
              result.user_driverInfo.driverLicenceDocument.licenceImage != null) {
              this.url3 = result.user_driverInfo.driverLicenceDocument.licenceImage;
            }

            this.addDriverForm5.patchValue(fd5);
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            this.stateSubscription.unsubscribe();
          }
          // other document
          if (result.user_driverInfo.driverOtherDocument && result.user_driverInfo.driverOtherDocument != undefined) {
            let fd6 = {
              'otherDocument': result.user_driverInfo.driverOtherDocument.otherDocument != null && result.user_driverInfo.driverOtherDocument.otherDocument != undefined ? result.user_driverInfo.driverOtherDocument.otherDocument : "",
              'documentName': result.user_driverInfo.driverOtherDocument.documentName,
              'verifiedStatus': result.user_driverInfo.driverOtherDocument.verifiedStatus
            };
            if ((result.user_driverInfo.driverOtherDocument.documentImages != undefined ||
              result.user_driverInfo.driverOtherDocument.documentImages != null) && result.user_driverInfo.driverOtherDocument.documentImages.length
            ) {
              this.url4 = result.user_driverInfo.driverOtherDocument.documentImages[0].documentImage;
            }
            this.selectInput(result.user_driverInfo.driverOtherDocument.otherDocument);

            this.addDriverForm6.patchValue(fd6);
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            this.stateSubscription.unsubscribe();
          }
          // Citizen Ship
          if (result.user_driverInfo.driverCitizenShipDetail && result.user_driverInfo.driverCitizenShipDetail != undefined) {
            let fd7 = {
              'type': result.user_driverInfo.driverCitizenShipDetail.type != null && result.user_driverInfo.driverCitizenShipDetail.type != undefined ? result.user_driverInfo.driverCitizenShipDetail.type : "",
              'socialSecurityNumber': result.user_driverInfo.driverCitizenShipDetail.socialSecurityNumber,
              // 'identityNumber': result.user_driverInfo.driverCitizenShipDetail.identityNumber,
              // 'HST': result.user_driverInfo.driverCitizenShipDetail.HST
              'verifiedStatus': result.user_driverInfo.driverCitizenShipDetail.verifiedStatus != null && result.user_driverInfo.driverCitizenShipDetail.verifiedStatus != undefined ? result.user_driverInfo.driverCitizenShipDetail.verifiedStatus : "",
            };

            this.addDriverForm7.patchValue(fd7);
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            this.stateSubscription.unsubscribe();
          }
        } else {
          Helpers.setLoading(false);
          this.stateSubscription.unsubscribe();
          this.toastr.error(data['message']);
        }
      }
    });

  }
  // user Image
  onSelectUserImage(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
        Helpers.setLoading(true);
        this.imageFile5 = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          Helpers.setLoading(false);
          this.url5 = reader.result;
          this.dtr.detectChanges();
        };
      } else {
        // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
        this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }
  removeUserImage() {
    this.url5 = '../../../../../assets/media/newMedia/add.png';
    this.imageFile5 = '';
  }
  // vehicle image
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
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
        // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
        this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }
  imageRemove() {
    this.url = '../../../../../assets/media/newMedia/add.png';
    this.imageFile = '';
  }
  //for Vehicle Icon
  onSelectFileIcon(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
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
        // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
        this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }
  imageRemoveIcon() {
    this.url1 = '../../../../../assets/media/newMedia/add.png';
    this.imageFile1 = '';
  }
  // for number plate image
  onSelectFileNumberPlate(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
        Helpers.setLoading(true);
        this.imageFile2 = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          Helpers.setLoading(false);
          this.url2 = reader.result;
          this.dtr.detectChanges();
        };
      } else {
        // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
        this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }
  imageRemoveNumberPlate() {
    this.url2 = '../../../../../assets/media/newMedia/add.png';
    this.imageFile2 = '';
  }
  // for License image
  onSelectLicenceImage(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
        Helpers.setLoading(true);
        this.imageFile3 = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          Helpers.setLoading(false);
          this.url3 = reader.result;
          this.dtr.detectChanges();
        };
      } else {
        //  this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
        this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }
  RemoveLicenceImage() {
    this.url3 = '../../../../../assets/media/newMedia/add.png';
    this.imageFile3 = '';
  }
  // for other documents
  onSelectOtherDocumentImage(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
        Helpers.setLoading(true);
        this.imageFile4 = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          Helpers.setLoading(false);
          this.url4 = reader.result;
          this.dtr.detectChanges();
        };
      } else {
        // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
        this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }
  RemoveOtherDocumentImage() {
    this.url4 = '../../../../../assets/media/newMedia/add.png';
    this.imageFile4 = '';
  }
  //  save Personal Detail 
  savePersonalDetail() {
    this.submitted = true;
    if (this.addDriverForm1.valid) {
      if (this.imageFile3 == "" || this.imageFile3 == '../../../../../assets/media/newMedia/add.png') {
        this.submitted4 = false
        this.toastr.error("Driving license is required");
      } else {
        this.saveData('1');
      }
    } else if (!this.addDriverForm1.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
  // save Bank Detail
  saveBankDetail() {
    this.submitted2 = true;

    if (this.addDriverForm3.valid) {
      this.saveData('3')
    } else if (!this.addDriverForm3.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
  // save User Address
  saveUserAddress() {
    this.submitted3 = true;
    if (this.addDriverForm4.valid) {
      this.saveData('4')
    } else if (!this.addDriverForm4.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
  // license
  saveDriverDetails() {
    this.submitted4 = true;
    if (this.addDriverForm5.valid) {
      this.saveData('5')
    } else if (!this.addDriverForm5.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
  // other Docs
  saveDriverOtherDetails() {
    this.submitted5 = true;
    if (this.imageFile4 == "" || this.imageFile4 == '../../../../../assets/media/newMedia/add.png') {
      this.submitted5 = false
      this.toastr.error("Other document image is required");
    } else {
      this.saveData('6')
    }
  }

  //citizen ship
  saveCitizenShip() {
    this.submitted6 = true;
    if (this.addDriverForm7.valid) {
      this.saveData('7');
    } else if (!this.addDriverForm7.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
  saveData(step) {
    if (step === '1') {
      Helpers.setLoading(true)
      let res = this.addDriverForm1.value;
      // for the title case convertion
      this.userFirstName = res.user_firstName.replace(/\b\w/g, first => first.toLocaleUpperCase())
      this.userLastName = res.user_lastName.replace(/\b\w/g, first => first.toLocaleUpperCase())
      let dob = new Date(res.user_dob).getDate() + "/" + (new Date(res.user_dob).getMonth() + 1) + "/" + new Date(res.user_dob).getFullYear()

      let fd = new FormData();
      fd.append('user_firstName', this.userFirstName);
      fd.append('user_lastName', this.userLastName);
      fd.append('user_userName', res.user_userName);
      fd.append('user_email', res.user_email);
      fd.append('user_phoneNumber', res.user_phoneNumber);
      fd.append('user_isdCode', res.user_isdCode);
      fd.append('user_verifiedStatus', res.user_verifiedStatus);
      fd.append('user_status', res.user_status);
      fd.append('user_invitationCode', res.user_invitationCode);
      fd.append('user_premiumUser', res.user_premiumUser);
      fd.append('user_countryId', environment.webDefaultCountry);
      fd.append('user_operatorId', res.user_operatorId);
      fd.append('user_rideInfo', res.user_rideInfo);
      fd.append('user_wallets', res.user_wallets);
      fd.append('user_dob', dob);
      fd.append('user_zipCode', res.user_zipCode);
      fd.append('user_cityId', res.user_cityId);
      fd.append('user_stateId', res.user_stateId);
      if (this.imageFile5) {
        fd.append('user_profileImage', this.imageFile5);
      }
      let obj = {
        id: this.id,
        data: fd
      }
      this.stateSubscription = this.store.dispatch(new driverActions.UpdateDriver(obj))
      this.stateSubscription = this.store.pipe(select(fromDriver.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);

            this.submitStep['step'] = step;
            this.navObj.link = 'personal';
            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
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

    else if (step === '3') {
      Helpers.setLoading(true)
      const form = this.addDriverForm3.value;
      let obj = {
        id: this.id,
        data: {
          bankName: form.bankName,
          accountHolderName: form.accountHolderName,
          accountNumber: form.accountNumber,
          verifiedStatus: form.verifiedStatus,
          accountType: form.accountType,
          routingNumber: form.routingNumber,
          rejectedReason: form.rejectedReason
        }
      };

      this.stateSubscription = this.store.dispatch(new driverActions.UpdateBankDetail(obj))
      this.stateSubscription = this.store.pipe(select(fromDriver.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.submitStep['step'] = step;
            this.navObj.link = 'bank';
            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
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
      const form = this.addDriverForm4.value;
      let obj = {
        id: this.id,
        data: {
          address1: form.address1,
          address2: form.address2,
          // streetName: form.streetName,
          city: form.city,
          zipCode: form.zipCode,
          country: form.country,
          state: form.state,
          rejectedReason: form.rejectedReason,
          verifiedStatus: form.verifiedStatus
        }
      };
      // console.log("obj.dataa", obj.data)
      this.dtr.detectChanges();
      this.stateSubscription = this.store.dispatch(new driverActions.UpdateUserAddress(obj))
      this.stateSubscription = this.store.pipe(select(fromDriver.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.submitStep['step'] = step;
            this.navObj.link = 'address';
            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
            this.stateSubscription.unsubscribe();
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
      const form = this.addDriverForm5.value;
      let fd = new FormData();
      let expiryDate = new Date(form.expiryDate).getDate() + "/" + (new Date(form.expiryDate).getMonth() + 1) + "/" + new Date(form.expiryDate).getFullYear()
      fd.append('verifiedStatus', form.verifiedStatus);
      fd.append('stateIssued', form.stateIssued);
      fd.append('licenceNumber', form.licenceNumber);
      fd.append('rejectedReason', form.rejectedReason);
      fd.append('expiryDate', expiryDate);
      // it append image if we send new image
      if (this.imageFile3) {
        fd.append('licenceImage', this.imageFile3);
      }

      let obj = {
        id: this.id,
        data: fd
      }
      this.stateSubscription = this.store.dispatch(new driverActions.UpdateUserDetails(obj))
      this.stateSubscription = this.store.pipe(select(fromDriver.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.submitStep['step'] = step;
            this.navObjDocument.link = 'document';
            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
            this.stateSubscription.unsubscribe();
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
    } else if (step === '6') {
      Helpers.setLoading(true)
      const form = this.addDriverForm6.value;
      let fd = new FormData();
      fd.append('otherDocument', form.otherDocument);
      fd.append('documentName', form.documentName);
      fd.append('verifiedStatus', form.verifiedStatus);
      // it append image if we send new image
      if (this.imageFile4) {
        fd.append('documentImage', this.imageFile4);
      }

      let obj = {
        id: this.id,
        data: fd
      }
      this.stateSubscription = this.store.dispatch(new driverActions.UpdateUserOtherDetails(obj))
      this.stateSubscription = this.store.pipe(select(fromDriver.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.submitStep['step'] = step;
            this.navObjOtherDocument.link = 'otherDocument';
            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
            this.stateSubscription.unsubscribe();
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
    } else if (step == '7') {
      Helpers.setLoading(true)
      const form = this.addDriverForm7.value;
      let obj = {
        id: this.id,
        data: {
          type: form.type,
          socialSecurityNumber: form.socialSecurityNumber,
          verifiedStatus: form.verifiedStatus,
          // identityNumber: form.identityNumber,
          // hst: form.hst
        },
      };

      this.stateSubscription = this.store.dispatch(new driverActions.UpdateUserCitizenShip(obj))
      this.stateSubscription = this.store.pipe(select(fromDriver.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.submitStep['step'] = step;
            this.navObjCitizenShip.link = 'citizenShip';
            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
            this.stateSubscription.unsubscribe();
            this.router.navigate(["/driver-management/list"]);
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
