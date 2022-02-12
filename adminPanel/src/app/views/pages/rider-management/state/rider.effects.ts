import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

// import { StudentManagementService } from "../student-management.service";
import * as riderActions from "./rider.actions";
import { Response } from "../../../../model/model";
import { RiderManagementService } from '../rider-management.service';


@Injectable()
export class RiderEffect {

    constructor(
        private actions$: Actions,
        private riderService: RiderManagementService
    ) { }

    @Effect()
    deleteRider$: Observable<Action> = this.actions$.pipe(
        ofType<riderActions.DeleteRider>(
            riderActions.RiderActionTypes.DELETE_RIDER
        ),
        map((action: riderActions.DeleteRider) => action.payload),
        mergeMap((id: any) =>
            this.riderService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new riderActions.DeleteRiderSuccess(response)
                ),
                catchError(err =>
                    of(new riderActions.DeleteRiderFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<riderActions.UpdateStatus>(
            riderActions.RiderActionTypes.UPDATE_STATUS
        ),
        map((action: riderActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.riderService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new riderActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new riderActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadRider$: Observable<Action> = this.actions$.pipe(
        ofType<riderActions.LoadRider>(
            riderActions.RiderActionTypes.LOAD_RIDER
        ),
        map((action: riderActions.LoadRider) => action.payload),
        mergeMap((id: any) =>
            this.riderService.getRiderById(id).pipe(
                map(
                    (response: Response) =>
                        new riderActions.LoadRiderSuccess(response)
                ),
                catchError(err =>
                    of(new riderActions.LoadRiderFail(err)))
            )
        )
    );

    @Effect()
    updateRider$: Observable<Action> = this.actions$.pipe(
        ofType<riderActions.UpdateRider>(
            riderActions.RiderActionTypes.UPDATE_RIDER
        ),
        map((action: riderActions.UpdateRider) => action.payload),
        mergeMap((data: any) =>
            this.riderService.updateRider(data.id, data.data).pipe(
                map(
                    (updateRider: Response) =>
                        new riderActions.UpdateRiderSuccess(updateRider)
                ),
                catchError(err => of(new riderActions.UpdateRiderFail(err)))
            )
        )
    );

    @Effect()
    updateRiderBank$: Observable<Action> = this.actions$.pipe(
        ofType<riderActions.UpdateBankDetail>(
            riderActions.RiderActionTypes.UPDATE_BANK_DETAIL
        ),
        map((action: riderActions.UpdateBankDetail) => action.payload),
        mergeMap((data: any) =>
            this.riderService.updateBankDetail(data.id, data.data).pipe(
                map(
                    (updateRider: Response) =>
                        new riderActions.UpdateBankDetailSuccess(updateRider)
                ),
                catchError(err => of(new riderActions.UpdateBankDetailFail(err)))
            )
        )
    );


    @Effect()
    addRider$: Observable<Action> = this.actions$.pipe(
        ofType<riderActions.AddRider>(
            riderActions.RiderActionTypes.ADD_RIDER
        ),
        map((action: riderActions.AddRider) => action.payload),
        mergeMap((data: any) =>
            this.riderService.addRider1(data).pipe(
                map(
                    (aaa: Response) => new riderActions.AddRiderSuccess(aaa)
                ),
                catchError(err =>
                    of(new riderActions.AddRiderFail(err)))
            )
        )
    );

    @Effect()
    addRider2$: Observable<Action> = this.actions$.pipe(
        ofType<riderActions.AddRider2>(
            riderActions.RiderActionTypes.ADD_RIDER2
        ),
        map((action: riderActions.AddRider2) => action.payload),
        mergeMap((data: any) =>
            this.riderService.addRider2(data).pipe(
                map(
                    (response: Response) =>
                        new riderActions.AddRider2Success(response)
                ),
                catchError(err =>
                    of(new riderActions.AddRider2Fail(err)))
            )
        )
    );
    @Effect()
    uploadData$: Observable<Action> = this.actions$.pipe(
        ofType<riderActions.UploadData>(
            riderActions.RiderActionTypes.UPLOAD_DATA
        ),
        map((action: riderActions.UploadData) => action.payload),
        mergeMap((data: any) =>
            this.riderService.uploadData(data.updType, data.updDocs).pipe(
                map(
                    (updateAdmin: Response) =>
                        new riderActions.UploadDataSuccess(updateAdmin)
                ),
                catchError(err => of(new riderActions.UploadDataFail(err)))
            )
        )
    );
}