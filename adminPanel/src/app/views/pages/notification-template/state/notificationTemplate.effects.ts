import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as notificationTemplateActions from "./notificationTemplate.actions";
import { Response } from "../../../../model/model";
import { NotificationTemplateService } from '../notification-template.service';


@Injectable()
export class NotificationTemplateEffect {

    constructor(
        private actions$: Actions,
        private notificationTemplateService: NotificationTemplateService
    ) { }

    @Effect()
    deleteTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<notificationTemplateActions.DeleteNotificationTemplate>(
            notificationTemplateActions.NotificationTemplateActionTypes.DELETE_NOTIFICATION_TEMPLATE
        ),
        map((action: notificationTemplateActions.DeleteNotificationTemplate) => action.payload),
        mergeMap((id: any) =>
            this.notificationTemplateService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new notificationTemplateActions.DeleteNotificationTemplateSuccess(response)
                ),
                catchError(err =>
                    of(new notificationTemplateActions.DeleteNotificationTemplateFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<notificationTemplateActions.UpdateStatus>(
            notificationTemplateActions.NotificationTemplateActionTypes.UPDATE_STATUS
        ),
        map((action: notificationTemplateActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.notificationTemplateService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new notificationTemplateActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new notificationTemplateActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadNotificationTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<notificationTemplateActions.LoadNotificationTemplate>(
            notificationTemplateActions.NotificationTemplateActionTypes.LOAD_NOTIFICATION_TEMPLATE
        ),
        map((action: notificationTemplateActions.LoadNotificationTemplate) => action.payload),
        mergeMap((id: any) =>
            this.notificationTemplateService.getNotificationTemplateById(id).pipe(
                map(
                    (response: Response) =>
                        new notificationTemplateActions.LoadNotificationTemplateSuccess(response)
                ),
                catchError(err =>
                    of(new notificationTemplateActions.LoadNotificationTemplateFail(err)))
            )
        )
    );

    @Effect()
    updateNotificationTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<notificationTemplateActions.UpdateNotificationTemplate>(
            notificationTemplateActions.NotificationTemplateActionTypes.UPDATE_NOTIFICATION_TEMPLATE
        ),
        map((action: notificationTemplateActions.UpdateNotificationTemplate) => action.payload),
        mergeMap((data: any) =>
            this.notificationTemplateService.updateNotificationTemplate(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new notificationTemplateActions.UpdateNotificationTemplateSuccess(response)
                ),
                catchError(err => of(new notificationTemplateActions.UpdateNotificationTemplateFail(err)))
            )
        )
    );


    @Effect()
    addNotificationTemplate$: Observable<Action> = this.actions$.pipe(
        ofType<notificationTemplateActions.AddNotificationTemplate>(
            notificationTemplateActions.NotificationTemplateActionTypes.ADD_NOTIFICATION_TEMPLATE
        ),
        map((action: notificationTemplateActions.AddNotificationTemplate) => action.payload),
        mergeMap((data: any) =>
            this.notificationTemplateService.addNotificationTemplate(data).pipe(
                map(
                    (response: Response) =>
                        new notificationTemplateActions.AddNotificationTemplateSuccess(response)
                ),
                catchError(err =>
                    of(new notificationTemplateActions.AddNotificationTemplateFail(err)))
            )
        )
    );


}