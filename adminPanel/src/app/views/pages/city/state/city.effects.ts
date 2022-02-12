import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

// import { StudentManagementService } from "../student-management.service";
import * as cityActions from "./city.actions";
import { Response } from "../../../../model/model";
import { CityService } from '../city.service';


@Injectable()
export class CityEffect {

    constructor(
        private actions$: Actions,
        private cityService: CityService
    ) { }

    @Effect()
    deleteCity$: Observable<Action> = this.actions$.pipe(
        ofType<cityActions.DeleteCity>(
            cityActions.CityActionTypes.DELETE_CITY
        ),
        map((action: cityActions.DeleteCity) => action.payload),
        mergeMap((id: any) =>
            this.cityService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new cityActions.DeleteCitySuccess(response)
                ),
                catchError(err =>
                    of(new cityActions.DeleteCityFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<cityActions.UpdateStatus>(
            cityActions.CityActionTypes.UPDATE_STATUS
        ),
        map((action: cityActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.cityService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new cityActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new cityActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadCity$: Observable<Action> = this.actions$.pipe(
        ofType<cityActions.LoadCity>(
            cityActions.CityActionTypes.LOAD_CITY
        ),
        map((action: cityActions.LoadCity) => action.payload),
        mergeMap((id: any) =>
            this.cityService.getCityById(id).pipe(
                map(
                    (response: Response) =>
                        new cityActions.LoadCitySuccess(response)
                ),
                catchError(err =>
                    of(new cityActions.LoadCityFail(err)))
            )
        )
    );

    @Effect()
    updateCity$: Observable<Action> = this.actions$.pipe(
        ofType<cityActions.UpdateCity>(
            cityActions.CityActionTypes.UPDATE_CITY
        ),
        map((action: cityActions.UpdateCity) => action.payload),
        mergeMap((data: any) =>
            this.cityService.updateCity(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new cityActions.UpdateCitySuccess(response)
                ),
                catchError(err => of(new cityActions.UpdateCityFail(err)))
            )
        )
    );


    @Effect()
    addCity$: Observable<Action> = this.actions$.pipe(
        ofType<cityActions.AddCity>(
            cityActions.CityActionTypes.ADD_CITY
        ),
        map((action: cityActions.AddCity) => action.payload),
        mergeMap((data: any) =>
            this.cityService.addCity(data).pipe(
                map(
                    (response: Response) =>
                        new cityActions.AddCitySuccess(response)
                ),
                catchError(err =>
                    of(new cityActions.AddCityFail(err)))
            )
        )
    );


}