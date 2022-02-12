import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as FareCalculationActions from "./fare-calculation.actions";
import { Response } from "../../../../model/model";
import { FareCalculationService } from '../fare-calculation.service';


@Injectable()
export class FareCalculationEffect {

    constructor(
        private actions$: Actions,
        private FareCalculationService: FareCalculationService
    ) { }

    @Effect()
    deleteFareCalculation$: Observable<Action> = this.actions$.pipe(
        ofType<FareCalculationActions.DeleteFareCalculation>(
            FareCalculationActions.FareCalculationActionTypes.DELETE_FARECALCULATION
        ),
        map((action: FareCalculationActions.DeleteFareCalculation) => action.payload),
        mergeMap((id: any) =>
            this.FareCalculationService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new FareCalculationActions.DeleteFareCalculationSuccess(response)
                ),
                catchError(err =>
                    of(new FareCalculationActions.DeleteFareCalculationFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<FareCalculationActions.UpdateStatus>(
            FareCalculationActions.FareCalculationActionTypes.UPDATE_STATUS
        ),
        map((action: FareCalculationActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.FareCalculationService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new FareCalculationActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new FareCalculationActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadFareCalculation$: Observable<Action> = this.actions$.pipe(
        ofType<FareCalculationActions.LoadFareCalculation>(
            FareCalculationActions.FareCalculationActionTypes.LOAD_FARECALCULATION
        ),
        map((action: FareCalculationActions.LoadFareCalculation) => action.payload),
        mergeMap((id: any) =>
            this.FareCalculationService.getFareCalculationById(id).pipe(
                map(
                    (response: Response) =>
                        new FareCalculationActions.LoadFareCalculationSuccess(response)
                ),
                catchError(err =>
                    of(new FareCalculationActions.LoadFareCalculationFail(err)))
            )
        )
    );

    @Effect()
    updateFareCalculation$: Observable<Action> = this.actions$.pipe(
        ofType<FareCalculationActions.UpdateFareCalculation>(
            FareCalculationActions.FareCalculationActionTypes.UPDATE_FARECALCULATION
        ),
        map((action: FareCalculationActions.UpdateFareCalculation) => action.payload),
        mergeMap((data: any) =>
            this.FareCalculationService.updateFareCalculation(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new FareCalculationActions.UpdateFareCalculationSuccess(response)
                ),
                catchError(err => of(new FareCalculationActions.UpdateFareCalculationFail(err)))
            )
        )
    );


    @Effect()
    addFareCalculation$: Observable<Action> = this.actions$.pipe(
        ofType<FareCalculationActions.AddFareCalculation>(
            FareCalculationActions.FareCalculationActionTypes.ADD_FARECALCULATION
        ),
        map((action: FareCalculationActions.AddFareCalculation) => action.payload),
        mergeMap((data: any) =>
            this.FareCalculationService.addFareCalculation(data).pipe(
                map(
                    (response: Response) =>
                        new FareCalculationActions.AddFareCalculationSuccess(response)
                ),
                catchError(err =>
                    of(new FareCalculationActions.AddFareCalculationFail(err)))
            )
        )
    );
}