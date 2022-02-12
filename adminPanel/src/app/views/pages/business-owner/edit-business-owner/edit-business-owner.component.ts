import { Component, OnInit, ViewRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { APPNAME } from '../../../../helper/page.title';
import { Store, select } from '@ngrx/store';
import { SubheaderService } from '../../../../core/_base/layout';
import { validataion } from '../../../../helper/regular.expression';
import { ActivatedRoute } from '@angular/router';
import { Helpers } from '../../../../helper/helper';
import * as businessOwnerActions from "../state/business-owner.actions";
import * as fromBusinessOwner from "../state/business-owner.reducer";

import { ToastrService } from 'ngx-toastr';
import { CountryService } from '../../country/country.service';
@Component({
  selector: 'kt-edit-business-owner',
  templateUrl: './edit-business-owner.component.html',
  styleUrls: ['./edit-business-owner.component.scss']
})
export class EditBusinessOwnerComponent implements OnInit {
  navObj = { 'link': 'personal' }
  navObjOtherDocument = { 'link': 'otherDocument' }
  personalInfoForm: FormGroup;
  personalInfoSubmitted: Boolean = false;
  id: any;
  submitStep: any = { step: '0' };
  stateSubscription: any;
  data: any = {};
  countries: any = {};
  BUSINESS_OWNER_CONST: any = {};

  imageFile: any;
  url: any = '../../../../../assets/media/newMedia/add.png';

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    public translate: TranslateService,
    private store: Store<{ admin: any }>,
    private _route: ActivatedRoute,
    private dtr: ChangeDetectorRef,
    private toastr: ToastrService,
    private countryService: CountryService,
    titleService: Title, ) {
    this.BUSINESS_OWNER_CONST = this.translate.instant('BUSINESS_OWNER');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.BUSINESS_OWNER'));
    titleService.setTitle(APPNAME + " | " + this.BUSINESS_OWNER_CONST.MODULE_NAME);
  }

  clickLink(e) {
    this.navObj.link = e;
  }


  async ngOnInit() {
    await this.buildPersonalInfoForm();

    this.getUserDetail();
    this.getAllCountries();
  }
  buildPersonalInfoForm() {
    this.personalInfoForm = this._formBuilder.group({
      user_firstName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_lastName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_email: ["", [Validators.required, Validators.pattern(validataion.emailRegEx)]],
      user_phoneNumber: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      user_verifiedStatus: [0, []],
      user_countryId: ["", [Validators.required]],
      user_status: ["ACTIVE", []],
      user_invitationCode: ['', [Validators.required]],
      user_premiumUser: ['', [Validators.required]],
    });
  }

  // user Image
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
        this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
      }
    }
  }
  removeUserImage() {
    this.url = '../../../../../assets/media/newMedia/add.png';
    this.imageFile = '';
  }

  getAllCountries() {
    Helpers.setLoading(true);
    this.countryService.getAllCountries().subscribe(async (data) => {
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
  getUserDetail() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);
    this.stateSubscription = this.store.dispatch(new businessOwnerActions.LoadBusinessOwner(this.id))
    this.stateSubscription = this.store.pipe(select(fromBusinessOwner.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
          const result = await data['data'];
          let fd = {
            'user_firstName': result.user_firstName,
            'user_lastName': result.user_lastName,
            'user_email': result.user_email,
            'user_countryId': result.user_countryId != null && result.user_countryId != undefined ? result.user_countryId : "",
            'user_phoneNumber': result.user_phoneNumber,
            'user_roleId': result.user_roleId,
            'user_verifiedStatus': result.user_verifiedStatus != null && result.user_verifiedStatus != undefined ? result.user_verifiedStatus : "",
            'user_status': result.user_status != null && result.user_status != undefined ? result.user_status : "",
            'user_invitationCode': result.user_invitationCode,
            'user_premiumUser': result.user_premiumUser,
          };
          if (result.user_profileImage) {
            this.url = result.user_profileImage;
          }
          this.personalInfoForm.patchValue(fd);

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

  savePersonalDetail() {
    this.personalInfoSubmitted = true;
    if (this.personalInfoForm.valid) {
      this.saveData('1');
    }
  }
  saveData(step) {
    if (step === '1') {
      Helpers.setLoading(true)
      let res = this.personalInfoForm.value;

      let fd = new FormData();
      fd.append('user_firstName', res.user_firstName);
      fd.append('user_lastName', res.user_lastName);
      fd.append('user_email', res.user_email);
      fd.append('user_phoneNumber', res.user_phoneNumber);
      fd.append('user_verifiedStatus', res.user_verifiedStatus);
      fd.append('user_status', res.user_status);
      fd.append('user_invitationCode', res.user_invitationCode);
      fd.append('user_premiumUser', res.user_premiumUser);
      fd.append('user_countryId', res.user_countryId);
      if (this.imageFile) {
        fd.append('user_profileImage', this.imageFile);
      }
      let obj = {
        id: this.id,
        data: fd
      }

      this.stateSubscription = this.store.dispatch(new businessOwnerActions.UpdateBusinessOwner(obj))
      this.stateSubscription = this.store.pipe(select(fromBusinessOwner.selectPageState)).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.submitStep['step'] = step;
            this.navObj.link = 'personal';
            this.toastr.success(this.BUSINESS_OWNER_CONST.MESSAGES.UPDATED);
            this.stateSubscription.unsubscribe();
            this.personalInfoSubmitted = false;
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
