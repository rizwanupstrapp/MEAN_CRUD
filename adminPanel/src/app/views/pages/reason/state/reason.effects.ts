import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as reasonActions from "./reason.actions";
import { Response } from "../../../../model/model";
import { ReasonService } from '../reason.service';


@Injectable()
export class ReasonEffect {

    constructor(
        private actions$: Actions,
        private ReasonService: ReasonService
    ) { }

    @Effect()
    deleteReason$: Observable<Action> = this.actions$.pipe(
        ofType<reasonActions.DeleteReason>(
            reasonActions.ReasonActionTypes.DELETE_REASON
        ),
        map((action: reasonActions.DeleteReason) => action.payload),
        mergeMap((id: any) =>
            this.ReasonService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new reasonActions.DeleteReasonSuccess(response)
                ),
                catchError(err =>
                    of(new reasonActions.DeleteReasonFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<reasonActions.UpdateStatus>(
            reasonActions.ReasonActionTypes.UPDATE_STATUS
        ),
        map((action: reasonActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.ReasonService.updateStatus(data.id, data.data).pipe(
                map(
                    (updateCustomer: Response) =>
                        new reasonActions.UpdateStatusSuccess(updateCustomer)
                ),
                catchError(err => of(new reasonActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadReason$: Observable<Action> = this.actions$.pipe(
        ofType<reasonActions.LoadReason>(
            reasonActions.ReasonActionTypes.LOAD_REASON
        ),
        map((action: reasonActions.LoadReason) => action.payload),
        mergeMap((id: any) =>
            this.ReasonService.getReasonById(id).pipe(
                map(
                    (response: Response) =>
                        new reasonActions.LoadReasonSuccess(response)
                ),
                catchError(err =>
                    of(new reasonActions.LoadReasonFail(err)))
            )
        )
    );

    @Effect()
    updateReason$: Observable<Action> = this.actions$.pipe(
        ofType<reasonActions.UpdateReason>(
            reasonActions.ReasonActionTypes.UPDATE_REASON
        ),
        map((action: reasonActions.UpdateReason) => action.payload),
        mergeMap((data: any) =>
            this.ReasonService.updateReason(data.id, data.data).pipe(
                map(
                    (updateCustomer: Response) =>
                        new reasonActions.UpdateReasonSuccess(updateCustomer)
                ),
                catchError(err => of(new reasonActions.UpdateReasonFail(err)))
            )
        )
    );


    @Effect()
    addReason$: Observable<Action> = this.actions$.pipe(
        ofType<reasonActions.AddReason>(
            reasonActions.ReasonActionTypes.ADD_REASON
        ),
        map((action: reasonActions.AddReason) => action.payload),
        mergeMap((data: any) =>
            this.ReasonService.addReason(data).pipe(
                map(
                    (newAdmin: Response) =>
                        new reasonActions.AddReasonSuccess(newAdmin)
                ),
                catchError(err =>
                    of(new reasonActions.AddReasonFail(err)))
            )
        )
    );
}