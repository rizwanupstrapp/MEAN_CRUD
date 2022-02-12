import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as emailTemplateActions from "./emailTemplate.actions";
import { Response } from "../../../../model/model";
import { EmailTemplateService } from '../email-template.service';


@Injectable()
export class EmailTemplateEffect {

    constructor(
        private actions$: Actions,
        private emailTemplateService: EmailTemplateService
    ) { }

    @Effect()
    deleteEmailTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<emailTemplateActions.DeleteEmailTemplate>(
            emailTemplateActions.EmailTemplateActionTypes.DELETE_EMAIL_TEMPLATE
        ),
        map((action: emailTemplateActions.DeleteEmailTemplate) => action.payload),
        mergeMap((id: any) =>
            this.emailTemplateService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new emailTemplateActions.DeleteEmailTemplateSuccess(response)
                ),
                catchError(err =>
                    of(new emailTemplateActions.DeleteEmailTemplateFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<emailTemplateActions.UpdateStatus>(
            emailTemplateActions.EmailTemplateActionTypes.UPDATE_STATUS
        ),
        map((action: emailTemplateActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.emailTemplateService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new emailTemplateActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new emailTemplateActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadEmailTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<emailTemplateActions.LoadEmailTemplate>(
            emailTemplateActions.EmailTemplateActionTypes.LOAD_EMAIL_TEMPLATE
        ),
        map((action: emailTemplateActions.LoadEmailTemplate) => action.payload),
        mergeMap((id: any) =>
            this.emailTemplateService.getEmailTemplateById(id).pipe(
                map(
                    (response: Response) =>
                        new emailTemplateActions.LoadEmailTemplateSuccess(response)
                ),
                catchError(err =>
                    of(new emailTemplateActions.LoadEmailTemplateFail(err)))
            )
        )
    );

    @Effect()
    updateEmailTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<emailTemplateActions.UpdateEmailTemplate>(
            emailTemplateActions.EmailTemplateActionTypes.UPDATE_EMAIL_TEMPLATE
        ),
        map((action: emailTemplateActions.UpdateEmailTemplate) => action.payload),
        mergeMap((data: any) =>
            this.emailTemplateService.updateEmailTemplate(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new emailTemplateActions.UpdateEmailTemplateSuccess(response)
                ),
                catchError(err => of(new emailTemplateActions.UpdateEmailTemplateFail(err)))
            )
        )
    );


    @Effect()
    addEmailTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<emailTemplateActions.AddEmailTemplate>(
            emailTemplateActions.EmailTemplateActionTypes.ADD_EMAIL_TEMPLATE
        ),
        map((action: emailTemplateActions.AddEmailTemplate) => action.payload),
        mergeMap((data: any) =>
            this.emailTemplateService.addEmailTemplate(data).pipe(
                map(
                    (response: Response) =>
                        new emailTemplateActions.AddEmailTemplateSuccess(response)
                ),
                catchError(err =>
                    of(new emailTemplateActions.AddEmailTemplateFail(err)))
            )
        )
    );


}