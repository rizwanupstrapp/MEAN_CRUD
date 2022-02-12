import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as trimActions from "./trim.actions";
import { Response } from "../../../../model/model";
import { TrimService } from '../trim.service';


@Injectable()
export class TrimEffect {

    constructor(
        private actions$: Actions,
        private trimService: TrimService
    ) { }

    @Effect()
    deleteTrim$: Observable<Action> = this.actions$.pipe(
        ofType<trimActions.DeleteTrim>(
            trimActions.TrimActionTypes.DELETE_TRIM
        ),
        map((action: trimActions.DeleteTrim) => action.payload),
        mergeMap((id: any) =>
            this.trimService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new trimActions.DeleteTrimSuccess(response)
                ),
                catchError(err =>
                    of(new trimActions.DeleteTrimFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<trimActions.UpdateStatus>(
            trimActions.TrimActionTypes.UPDATE_STATUS
        ),
        map((action: trimActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.trimService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new trimActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new trimActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadTrim$: Observable<Action> = this.actions$.pipe(
        ofType<trimActions.LoadTrim>(
            trimActions.TrimActionTypes.LOAD_TRIM
        ),
        map((action: trimActions.LoadTrim) => action.payload),
        mergeMap((id: any) =>
            this.trimService.getTrimById(id).pipe(
                map(
                    (response: Response) =>
                        new trimActions.LoadTrimSuccess(response)
                ),
                catchError(err =>
                    of(new trimActions.LoadTrimFail(err)))
            )
        )
    );

    @Effect()
    updateTrim$: Observable<Action> = this.actions$.pipe(
        ofType<trimActions.UpdateTrim>(
            trimActions.TrimActionTypes.UPDATE_TRIM
        ),
        map((action: trimActions.UpdateTrim) => action.payload),
        mergeMap((data: any) =>
            this.trimService.updateTrim(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new trimActions.UpdateTrimSuccess(response)
                ),
                catchError(err => of(new trimActions.UpdateTrimFail(err)))
            )
        )
    );


    @Effect()
    addTrim$: Observable<Action> = this.actions$.pipe(
        ofType<trimActions.AddTrim>(
            trimActions.TrimActionTypes.ADD_TRIM
        ),
        map((action: trimActions.AddTrim) => action.payload),
        mergeMap((data: any) =>
            this.trimService.addTrim(data).pipe(
                map(
                    (response: Response) =>
                        new trimActions.AddTrimSuccess(response)
                ),
                catchError(err =>
                    of(new trimActions.AddTrimFail(err)))
            )
        )
    );
}