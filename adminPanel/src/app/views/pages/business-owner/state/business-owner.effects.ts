import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as businessOwnerActions from "./business-owner.actions";
import { Response } from "../../../../model/model";
import { BusinessOwnerService } from '../business-owner.service';

@Injectable()
export class BusinessOwnerEffect {
    constructor(
        private actions$: Actions,
        private businessOwnerService: BusinessOwnerService
    ) { }

    @Effect()
    deleteBusinessOwner$: Observable<Action> = this.actions$.pipe(
        ofType<businessOwnerActions.DeleteBusinessOwner>(
            businessOwnerActions.BusinessOwnerActionTypes.DELETE_BUSINESS_OWNER
        ),
        map((action: businessOwnerActions.DeleteBusinessOwner) => action.payload),
        mergeMap((id: any) =>
            this.businessOwnerService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new businessOwnerActions.DeleteBusinessOwnerSuccess(response)
                ),
                catchError(err =>
                    of(new businessOwnerActions.DeleteBusinessOwnerFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<businessOwnerActions.UpdateStatus>(
            businessOwnerActions.BusinessOwnerActionTypes.UPDATE_STATUS
        ),
        map((action: businessOwnerActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.businessOwnerService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new businessOwnerActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new businessOwnerActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadBusinessOwner$: Observable<Action> = this.actions$.pipe(
        ofType<businessOwnerActions.LoadBusinessOwner>(
            businessOwnerActions.BusinessOwnerActionTypes.LOAD_BUSINESS_OWNER
        ),
        map((action: businessOwnerActions.LoadBusinessOwner) => action.payload),
        mergeMap((id: any) =>
            this.businessOwnerService.getBusinessOwnerById(id).pipe(
                map(
                    (response: Response) =>
                        new businessOwnerActions.LoadBusinessOwnerSuccess(response)
                ),
                catchError(err =>
                    of(new businessOwnerActions.LoadBusinessOwnerFail(err)))
            )
        )
    );

    @Effect()
    updateBusinessOwner$: Observable<Action> = this.actions$.pipe(
        ofType<businessOwnerActions.UpdateBusinessOwner>(
            businessOwnerActions.BusinessOwnerActionTypes.UPDATE_BUSINESS_OWNER
        ),
        map((action: businessOwnerActions.UpdateBusinessOwner) => action.payload),
        mergeMap((data: any) =>
            this.businessOwnerService.updateBusinessOwner(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new businessOwnerActions.UpdateBusinessOwnerSuccess(response)
                ),
                catchError(err => of(new businessOwnerActions.UpdateBusinessOwnerFail(err)))
            )
        )
    );

    @Effect()
    uploadData$: Observable<Action> = this.actions$.pipe(
        ofType<businessOwnerActions.UploadData>(
            businessOwnerActions.BusinessOwnerActionTypes.UPLOAD_DATA
        ),
        map((action: businessOwnerActions.UploadData) => action.payload),
        mergeMap((data: any) =>
            this.businessOwnerService.uploadData(data.updType, data.updDocs).pipe(
                map(
                    (updateAdmin: Response) =>
                        new businessOwnerActions.UploadDataSuccess(updateAdmin)
                ),
                catchError(err => of(new businessOwnerActions.UploadDataFail(err)))
            )
        )
    );
}