import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';

import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { APPNAME } from '../../../../helper/page.title';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { validataion } from '../../../../helper/regular.expression';
import { Store, select } from "@ngrx/store";
import { Helpers } from '../../../../helper/helper';

import * as serviceTypeActions from "../state/service-type.actions";
import * as fromServiceType from "../state/service-type.reducer";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kt-add-service-type',
  templateUrl: './add-edit-service-type.component.html',
  styleUrls: ['./add-edit-service-type.component.scss']
})

export class AddServiceTypeComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditServiceTypeForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  SERVICETYPE_CONST: any;
  id: any;
  url: any = '../../../../../assets/media/newMedia/add.png';
  imageFile: any;

  serviceType_code: any;
  serviceType_imagePubilcId: any;
  serviceType_noOfSeats: any;

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private dtr: ChangeDetectorRef,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService
  ) {

    this.SERVICETYPE_CONST = this.translate.instant('SERVICETYPE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.SERVICE_TYPE'));
    titleService.setTitle(APPNAME + " | " + this.SERVICETYPE_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditServiveTypeForm();
    this.Editor = ClassicEditor;
  }

  buildAddEditServiveTypeForm() {
    this.addEditServiceTypeForm = this._formBuilder.group({
      serviceType_name_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      // serviceType_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      serviceType_noOfSeats: ["", [Validators.required, Validators.pattern(validataion.noOfSeats)]],
      serviceType_code: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      serviceType_status: ["ACTIVE", []],
    });
  }

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
        this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
      }
    }
  }

  imageRemove() {
    this.url = '../../../../../assets/media/newMedia/add.png';
    this.imageFile = '';
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditServiceTypeForm.valid) {
      if (this.url.length > 200) {
        let obj = {
          updType: 'image',
          updDocs: this.imageFile
        };
        this.saveData()
      } else {
        this.toastr.error('Please Select Image');
      }
    } else if (!this.addEditServiceTypeForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }
  saveData() {
    Helpers.setLoading(true);
    const result = this.addEditServiceTypeForm.value;
    let fd = new FormData();
    fd.append('serviceType_name', JSON.stringify([{
      lang: 'EN',
      title: result.serviceType_name_en
    }
      // , {
      //   lang: 'AR',
      //   title: result.serviceType_name_ar
      // }
    ]));
    fd.append('serviceType_code', result.serviceType_code);
    fd.append('serviceType_noOfSeats', result.serviceType_noOfSeats);
    fd.append('serviceType_status', result.serviceType_status);
    fd.append('serviceType_image', this.imageFile);


    this.stateSubscription = this.store.dispatch(new serviceTypeActions.AddServiceType(fd))
    this.stateSubscription = this.store.pipe(select(fromServiceType.selectPageState)).subscribe((data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
          this.toastr.success(data['message']);
          this.stateSubscription.unsubscribe();
          this.router.navigate(['/service-type/list'])
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
          this.stateSubscription.unsubscribe();

        }
      }
    });
  }
}

@Component({
  selector: 'kt-edit-service-type',
  templateUrl: './add-edit-service-type.component.html',
  styleUrls: ['./add-edit-service-type.component.scss']
})

export class EditServiceTypeComponent implements OnInit {
  id: any;
  isAdd: Boolean = false;
  addEditServiceTypeForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  url: any = '../../../../../assets/media/newMedia/add.png';
  imageFile: any;
  SERVICETYPE_CONST: any;
  serviceType_code: any;
  serviceType_noOfSeats: any;

  constructor(private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private dtr: ChangeDetectorRef,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService
  ) {
    // SET SUBHEAD AND TITLE
    this.SERVICETYPE_CONST = this.translate.instant('SERVICETYPE');
    this.subheaderService.setTitle(this.translate.instant('MENU.SERVICE_TYPE'));
    titleService.setTitle(APPNAME + " | " + this.SERVICETYPE_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditServiceTypeForm();
    this.getServiceTypeDetails();

  }

  buildAddEditServiceTypeForm() {
    this.addEditServiceTypeForm = this._formBuilder.group({
      serviceType_name_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      // serviceType_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      serviceType_noOfSeats: ["", [Validators.required, Validators.pattern(validataion.noOfSeats)]],
      serviceType_code: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      serviceType_status: ["ACTIVE", []]
    });
  }

  getServiceTypeDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new serviceTypeActions.LoadServiceType(this.id));
    this.stateSubscription = this.store.pipe(select(fromServiceType.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];
          let fd = {
            serviceType_name_en: result.serviceType_name.filter((obj) => obj.lang == "EN")[0].title,
            // serviceType_name_ar: result.serviceType_name.filter((obj) => obj.lang == "AR")[0].title,
            serviceType_noOfSeats: result.serviceType_noOfSeats,
            serviceType_code: result.serviceType_code,
            serviceType_status: result.serviceType_status != null && result.serviceType_status != undefined ? result.serviceType_status : "",
          };
          this.imageFile = result.serviceType_image;
          this.url = result.serviceType_image;

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          this.addEditServiceTypeForm.patchValue(fd);
          Helpers.setLoading(false);
          this.stateSubscription.unsubscribe();
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
          this.stateSubscription.unsubscribe();
        }
      }
    });
  }

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
        this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
      }
    }
  }

  imageRemove() {
    this.url = '../../../../../assets/media/newMedia/add.png';
    this.imageFile = '';
  }

  onSubmit() {
    this.submitted = true;
    if (this.addEditServiceTypeForm.valid) {
      if (this.imageFile) {
        this.saveData()
      } else {
        this.toastr.error('Please Select Image');
      }
    } else if (!this.addEditServiceTypeForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }

  saveData() {
    Helpers.setLoading(true);
    const result = this.addEditServiceTypeForm.value;
    let fd = new FormData();
    fd.append('serviceType_name', JSON.stringify([{
      lang: 'EN',
      title: result.serviceType_name_en
    }
      // , {
      //   lang: 'AR',
      //   title: result.serviceType_name_ar
      // }
    ]));
    fd.append('serviceType_code', result.serviceType_code);
    fd.append('serviceType_noOfSeats', result.serviceType_noOfSeats);
    fd.append('serviceType_status', result.serviceType_status);
    fd.append('serviceType_image', this.imageFile);

    let obj = {
      id: this.id,
      data: fd
    }

    this.stateSubscription = this.store.dispatch(new serviceTypeActions.UpdateServiceType(obj))
    this.stateSubscription = this.store.pipe(select(fromServiceType.selectPageState)).subscribe((data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
          this.toastr.success(data['message']);
          this.stateSubscription.unsubscribe();
          this.router.navigate(['/service-type/list'])
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    });
  }
}