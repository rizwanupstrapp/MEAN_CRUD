import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as AmmenitiesActions from "./ammenities.actions";
import { Response } from "../../../../model/model";
import { AmmenitiesService } from '../ammenities.service';


@Injectable()
export class AmmenitiesEffect {

    constructor(
        private actions$: Actions,
        private AmmenitiesService: AmmenitiesService
    ) { }

    @Effect()
    deleteAmmenities$: Observable<Action> = this.actions$.pipe(
        ofType<AmmenitiesActions.DeleteAmmenities>(
            AmmenitiesActions.AmmenitiesActionTypes.DELETE_AMMENITIES
        ),
        map((action: AmmenitiesActions.DeleteAmmenities) => action.payload),
        mergeMap((id: any) =>
            this.AmmenitiesService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new AmmenitiesActions.DeleteAmmenitiesSuccess(response)
                ),
                catchError(err =>
                    of(new AmmenitiesActions.DeleteAmmenitiesFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<AmmenitiesActions.UpdateStatus>(
            AmmenitiesActions.AmmenitiesActionTypes.UPDATE_STATUS
        ),
        map((action: AmmenitiesActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.AmmenitiesService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new AmmenitiesActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new AmmenitiesActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadAmmenities$: Observable<Action> = this.actions$.pipe(
        ofType<AmmenitiesActions.LoadAmmenities>(
            AmmenitiesActions.AmmenitiesActionTypes.LOAD_AMMENITIES
        ),
        map((action: AmmenitiesActions.LoadAmmenities) => action.payload),
        mergeMap((id: any) =>
            this.AmmenitiesService.getAmmenitiesById(id).pipe(
                map(
                    (response: Response) =>
                        new AmmenitiesActions.LoadAmmenitiesSuccess(response)
                ),
                catchError(err =>
                    of(new AmmenitiesActions.LoadAmmenitiesFail(err)))
            )
        )
    );

    @Effect()
    updateAmmenities$: Observable<Action> = this.actions$.pipe(
        ofType<AmmenitiesActions.UpdateAmmenities>(
            AmmenitiesActions.AmmenitiesActionTypes.UPDATE_AMMENITIES
        ),
        map((action: AmmenitiesActions.UpdateAmmenities) => action.payload),
        mergeMap((data: any) =>
            this.AmmenitiesService.updateAmmenities(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new AmmenitiesActions.UpdateAmmenitiesSuccess(response)
                ),
                catchError(err => of(new AmmenitiesActions.UpdateAmmenitiesFail(err)))
            )
        )
    );


    @Effect()
    addAmmenities$: Observable<Action> = this.actions$.pipe(
        ofType<AmmenitiesActions.AddAmmenities>(
            AmmenitiesActions.AmmenitiesActionTypes.ADD_AMMENITIES
        ),
        map((action: AmmenitiesActions.AddAmmenities) => action.payload),
        mergeMap((data: any) =>
            this.AmmenitiesService.addAmmenities(data).pipe(
                map(
                    (response: Response) =>
                        new AmmenitiesActions.AddAmmenitiesSuccess(response)
                ),
                catchError(err =>
                    of(new AmmenitiesActions.AddAmmenitiesFail(err)))
            )
        )
    );
}