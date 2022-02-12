import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { validataion } from '../../../../helper/regular.expression';
import { Store, select } from "@ngrx/store";
import { APPNAME } from '../../../../helper/page.title';

import * as riderActions from "../state/rider.actions";
import * as fromRider from "../state/rider.reducer";

import { Helpers } from '../../../../helper/helper';
import { TranslateService } from '@ngx-translate/core';
import { CountryService } from '../../country/country.service';
import { environment } from '../../../../../environments/environment';
import { StateService } from '../../state/state.service';
import { CityService } from '../../city/city.service';
import { state } from '@angular/animations';
import { RiderManagementService } from '../rider-management.service';


@Component({
  selector: 'kt-edit-rider',
  templateUrl: './edit-rider.component.html',
  styleUrls: ['./edit-rider.component.scss']
})
export class EditRiderComponent implements OnInit {

  navObj = { 'link': 'personal' }
  addRiderForm1: FormGroup;

  submitted: Boolean = false;
  submitted1: Boolean = false;
  submitted2: Boolean = false;

  id: any;
  countryList: any = [];
  submitStep: any = { step: '0' };

  stateSubscription: any;
  imageFile: any = '';
  url: any = '../../../../../assets/media/newMedia/add.png';

  imageFile1: any = '';
  url1: any = '../../../../../assets/media/newMedia/add.png';

  stateList: any = [];
  cityList: any = [];
  RIDER_CONST: any = [];
  riderDetail: any = {};

  userFirstName: any;
  userLastName: any;
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
    public countryService: CountryService,
    public stateService: StateService,
    public cityService: CityService,
    public riderManagementService: RiderManagementService
  ) {
    this.RIDER_CONST = this.translate.instant('RIDER');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.RIDER'));
    titleService.setTitle(APPNAME + " | " + this.RIDER_CONST.MODULE_NAME);
  }

  clickLink(e) {
    this.navObj.link = e;
  }

  async ngOnInit() {
    await this.buildAddRiderForm1();
    // await this.getCountryList();
    await this.getRiderById();
    await this.changeCountry(environment.webDefaultCountry);
    await this.changeState(state);

  }

  // getCountryList() {
  //   Helpers.setLoading(true);
  //   this.countryService.getAllCountries().subscribe(async (data) => {
  //     if (data && data != undefined) {
  //       if (data["code"] == 200) {
  //         this.countryList = data["data"];
  //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
  //           this.dtr.detectChanges();
  //         }
  //         Helpers.setLoading(false);
  //       } else {
  //         Helpers.setLoading(false);
  //         this.toastr.error(data["message"]);
  //       }
  //     }
  //   });
  // }
  regeneratedAndSendPassword() {
    this.id = this._route.snapshot.params['id'];
        this.riderManagementService.regeneratedAndSendPassword(this.id).subscribe((data)=> {
          if (data["code"] == 200) {
            // this.toastr.success(this.RIDER_CONST.MESSAGES.UPDATED);
            this.toastr.success("New generated password has been send to rider");
            this.dtr.detectChanges();
          }
        })
  }

  async changeCountry(country) {
    // Helpers.setLoading(true);
    if (country) {
      // let countryId = { city_countryId: country };
      await this.stateService.getStateList(country).subscribe(async (data) => {
        if (data["code"] == 200) {
          this.stateList = await data["data"];
          // Helpers.setLoading(false);
          this.dtr.detectChanges();
        }
      });
    }
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

  buildAddRiderForm1() {
    this.addRiderForm1 = this._formBuilder.group({
      user_firstName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_lastName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_userName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      user_email: ["", [Validators.required, Validators.pattern(validataion.emailRegEx)]],
      user_phoneNumber: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      user_password: ["", [Validators.pattern(validataion.passwordRegEx)]],
      user_status: ["ACTIVE", []],
      user_isdCode: ["+1"],
      user_dob: ['', [Validators.required]],
      user_alternatePhoneNumber: [''],
      user_cityId: ['', [Validators.required]],
      user_stateId: ['', [Validators.required]],
      user_zipCode: ['', [Validators.required]],
      user_invitationCode: [''],
      // user_premiumUser: [0, [Validators.required]],
      // user_countryId: ["", [Validators.required]],
      user_alternatenumber_isdCode: ["+1"]
    });
  }


  getRiderById() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);
    this.stateSubscription = this.store.dispatch(new riderActions.LoadRider(this.id))
    this.stateSubscription = this.store.pipe(select(fromRider.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
          const result = await data['data'];
          var res = result.user_dob.split("/");
          let dob;
          dob = res[1] + "/" + res[0] + "/" + res[2]
          this.riderDetail = data['data'];
          let fd = {
            'user_firstName': result.user_firstName,
            'user_lastName': result.user_lastName,
            'user_userName': result.user_userName,
            'user_email': result.user_email,
            'user_phoneNumber': result.user_phoneNumber,
            'user_status': result.user_status != null && result.user_status != undefined ? result.user_status : "",
            'user_isdCode': result.user_isdCode != null && result.user_isdCode != undefined ? result.user_isdCode : "",
            'user_invitationCode': result.user_invitationCode,
            // 'user_premiumUser': result.user_premiumUser,
            'user_dob': dob,
            'user_alternatePhoneNumber': result.user_alternatePhoneNumber,
            'user_cityId': result.user_cityId,
            'user_stateId': result.user_stateId,
            'user_zipCode': result.user_zipCode,
            "user_alternatenumber_isdCode": result.user_alternatenumber_isdCode
            // 'user_countryId': result. user_countryId || environment.webDefaultCountry
          };
          if (result.user_profileImage) {
            this.url = result.user_profileImage;
          }
          if (result.user_userIdProofImage) {
            this.url1 = result.user_userIdProofImage;
          }
          this.changeCountry(environment.webDefaultCountry);
          this.changeState(result.user_stateId);
          this.addRiderForm1.patchValue(fd);
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

  onSelectUserImage(event) {
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
        this.toastr.error(this.RIDER_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }

  removeUserImage() {
    this.url = '../../../../../assets/media/newMedia/add.png';
    this.imageFile = '';
  }

  onSelectUserIdProofImage(event) {
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
        // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
        this.toastr.error(this.RIDER_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }

  removeUserIdProofImage() {
    this.url1 = '../../../../../assets/media/newMedia/add.png';
    this.imageFile1 = '';
  }

  savePersonalDetail() {
    this.submitted = true;
    if (this.addRiderForm1.valid) {
      let res = this.addRiderForm1.value;
      if (res.user_password && res.user_password != '' && res.user_confirm_password && res.user_confirm_password != '') {
        if ((res.user_password === res.user_confirm_password)) {
          this.saveData('1');
        } else {
          // this.toastr.error('Password & Confirm Password Should be Match')
          this.submitted = false;
          this.toastr.error(this.RIDER_CONST.LABEL.PASSWORD_CONFORMEDPASSWORD_MATCH)
        }
      } else {
        this.saveData('1');
      }
    } else if (!this.addRiderForm1.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

  saveData(step) {
    if (step === '1') {
      const res = this.addRiderForm1.value;
      let dob = new Date(res.user_dob).getDate() + "/" + (new Date(res.user_dob).getMonth() + 1) + "/" + new Date(res.user_dob).getFullYear()

      Helpers.setLoading(true)
      // for the title case convertion
      this.userFirstName = res.user_firstName.replace(/\b\w/g, first => first.toLocaleUpperCase())
      this.userLastName = res.user_lastName.replace(/\b\w/g, first => first.toLocaleUpperCase())

      let fd = new FormData();
      fd.append('user_firstName', this.userFirstName);
      fd.append('user_lastName', this.userLastName);
      fd.append('user_userName', res.user_userName);
      fd.append('user_email', res.user_email);
      fd.append('user_phoneNumber', res.user_phoneNumber);
      fd.append('user_isdCode', res.user_isdCode);
      fd.append('user_status', res.user_status);
      fd.append('user_invitationCode', res.user_invitationCode);
      // fd.append('user_premiumUser', res.user_premiumUser);
      fd.append('user_countryId', environment.webDefaultCountry);
      fd.append('user_dob', dob);
      fd.append('user_alternatePhoneNumber', res.user_alternatePhoneNumber)
      fd.append('user_cityId', res.user_cityId);
      fd.append('user_stateId', res.user_stateId)
      fd.append('user_zipCode', res.user_zipCode)
      fd.append('user_alternatenumber_isdCode', res.user_alternatenumber_isdCode)
      if (this.imageFile) {
        fd.append('user_profileImage', this.imageFile);
      }
      if (this.imageFile1) {
        fd.append('user_userIdProofImage', this.imageFile1);
      }
      let obj = {
        id: this.id,
        data: fd
      }
      this.stateSubscription = this.store.dispatch(new riderActions.UpdateRider(obj))
      this.stateSubscription = this.store.pipe(select(fromRider.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.submitStep['step'] = step;
            this.navObj.link = 'Rider';
            this.toastr.success(this.RIDER_CONST.MESSAGES.UPDATED);
            this.router.navigate(["/rider-management/list"]);
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
    }
  }
}
