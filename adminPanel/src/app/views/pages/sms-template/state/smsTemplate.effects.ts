import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as templateActions from "./smsTemplate.actions";
import { Response } from "../../../../model/model";
import { SmsTemplateService } from '../sms-template.service';


@Injectable()
export class SMSTemplateEffect {

    constructor(
        private actions$: Actions,
        private smsTemplateService: SmsTemplateService
    ) { }

    @Effect()
    deleteTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<templateActions.DeleteSMSTemplate>(
            templateActions.SMSTemplateActionTypes.DELETE_SMS_TEMPLATE
        ),
        map((action: templateActions.DeleteSMSTemplate) => action.payload),
        mergeMap((id: any) =>
            this.smsTemplateService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new templateActions.DeleteSMSTemplateSuccess(response)
                ),
                catchError(err =>
                    of(new templateActions.DeleteSMSTemplateFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<templateActions.UpdateStatus>(
            templateActions.SMSTemplateActionTypes.UPDATE_STATUS
        ),
        map((action: templateActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.smsTemplateService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new templateActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new templateActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<templateActions.LoadSMSTemplate>(
            templateActions.SMSTemplateActionTypes.LOAD_SMS_TEMPLATE
        ),
        map((action: templateActions.LoadSMSTemplate) => action.payload),
        mergeMap((id: any) =>
            this.smsTemplateService.getSMSTemplateById(id).pipe(
                map(
                    (response: Response) =>
                        new templateActions.LoadSMSTemplateSuccess(response)
                ),
                catchError(err =>
                    of(new templateActions.LoadSMSTemplateFail(err)))
            )
        )
    );

    @Effect()
    updateTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<templateActions.UpdateSMSTemplate>(
            templateActions.SMSTemplateActionTypes.UPDATE_SMS_TEMPLATE
        ),
        map((action: templateActions.UpdateSMSTemplate) => action.payload),
        mergeMap((data: any) =>
            this.smsTemplateService.updateSMSTemplate(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new templateActions.UpdateSMSTemplateSuccess(response)
                ),
                catchError(err => of(new templateActions.UpdateSMSTemplateFail(err)))
            )
        )
    );


    @Effect()
    addTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<templateActions.AddSMSTemplate>(
            templateActions.SMSTemplateActionTypes.ADD_SMS_TEMPLATE
        ),
        map((action: templateActions.AddSMSTemplate) => action.payload),
        mergeMap((data: any) =>
            this.smsTemplateService.addSMSTemplate(data).pipe(
                map(
                    (response: Response) =>
                        new templateActions.AddSMSTemplateSuccess(response)
                ),
                catchError(err =>
                    of(new templateActions.AddSMSTemplateFail(err)))
            )
        )
    );


}