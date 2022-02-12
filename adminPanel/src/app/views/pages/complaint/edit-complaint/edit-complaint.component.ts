import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

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

import * as complaintActions from "../state/complaint.actions";
import * as fromComplaint from "../state/complaint.reducer";

import { TranslateService } from '@ngx-translate/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'kt-edit-complaint',
  templateUrl: './edit-complaint.component.html',
  styleUrls: ['./edit-complaint.component.scss']
})
export class EditComplaintComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditComplaintForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  COMPLAINT_CONST: any;

  complaints: any = [];
  id: any;

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService,
    private ref: ChangeDetectorRef
  ) {
    this.COMPLAINT_CONST = this.translate.instant('COMPLAINT');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.COMPLAINT'));
    titleService.setTitle(APPNAME + " | " + this.COMPLAINT_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditComplaintForm();
    this.Editor = ClassicEditor;
    this.getComplaintDetails();
  }

  buildAddEditComplaintForm() {
    this.addEditComplaintForm = this._formBuilder.group({
      complaint_comment: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      complaint_status: ["PENDING", []],
    });
  }

  getComplaintDetails(): any {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);
    this.stateSubscription = this.store.dispatch(new complaintActions.LoadComplaint(this.id));

    this.stateSubscription = this.store.pipe(select(fromComplaint.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];
          let fd = {
            complaint_comment: result.complaint_comment,
            complaint_status: result.complaint_status != null && result.complaint_status != undefined ? result.complaint_status : "",
          };
          this.complaints.push(result);
          // it is used to detect changes for html file
          this.ref.detectChanges();

          await this.addEditComplaintForm.patchValue(fd);
          Helpers.setLoading(false);

          this.stateSubscription.unsubscribe();
        } else {
          Helpers.setLoading(false);

          this.toastr.error(data['message']);
          this.stateSubscription.unsubscribe();
          return [];
        }
      }
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditComplaintForm.valid) {

      const form = this.addEditComplaintForm.value;
      Helpers.setLoading(true);
      let obj = {
        id: this.id,
        data: {
          complaint_comment: form.complaint_comment,
          complaint_status: form.complaint_status
        }
      };
      this.stateSubscription = this.store.dispatch(new complaintActions.UpdateComplaint(obj))
      this.stateSubscription = this.store.pipe(select(fromComplaint.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/complaint/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    }
  }
}
