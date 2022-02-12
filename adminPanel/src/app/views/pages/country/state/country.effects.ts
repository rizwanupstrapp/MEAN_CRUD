import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

// import { StudentManagementService } from "../student-management.service";
import * as countryActions from "./country.actions";
import { Response } from "../../../../model/model";
import { CountryService } from '../country.service';


@Injectable()
export class CountryEffect {

    constructor(
        private actions$: Actions,
        private countryService: CountryService
    ) { }

    @Effect()
    deleteCountry$: Observable<Action> = this.actions$.pipe(
        ofType<countryActions.DeleteCountry>(
            countryActions.CountryActionTypes.DELETE_COUNTRY
        ),
        map((action: countryActions.DeleteCountry) => action.payload),
        mergeMap((id: any) =>
            this.countryService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new countryActions.DeleteCountrySuccess(response)
                ),
                catchError(err =>
                    of(new countryActions.DeleteCountryFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<countryActions.UpdateStatus>(
            countryActions.CountryActionTypes.UPDATE_STATUS
        ),
        map((action: countryActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.countryService.updateStatus(data.id, data.data).pipe(
                map(
                    (updateCountryData: Response) =>
                        new countryActions.UpdateStatusSuccess(updateCountryData)
                ),
                catchError(err => of(new countryActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadCountry$: Observable<Action> = this.actions$.pipe(
        ofType<countryActions.LoadCountry>(
            countryActions.CountryActionTypes.LOAD_COUNTRY
        ),
        map((action: countryActions.LoadCountry) => action.payload),
        mergeMap((id: any) =>
            this.countryService.getCountryById(id).pipe(
                map(
                    (response: Response) =>
                        new countryActions.LoadCountrySuccess(response)
                ),
                catchError(err =>
                    of(new countryActions.LoadCountryFail(err)))
            )
        )
    );

    @Effect()
    updateCountry$: Observable<Action> = this.actions$.pipe(
        ofType<countryActions.UpdateCountry>(
            countryActions.CountryActionTypes.UPDATE_COUNTRY
        ),
        map((action: countryActions.UpdateCountry) => action.payload),
        mergeMap((data: any) =>
            this.countryService.updateCountry(data.id, data.data).pipe(
                map(
                    (updateCountryData: Response) =>
                        new countryActions.UpdateCountrySuccess(updateCountryData)
                ),
                catchError(err => of(new countryActions.UpdateCountryFail(err)))
            )
        )
    );


    @Effect()
    addCountry$: Observable<Action> = this.actions$.pipe(
        ofType<countryActions.AddCountry>(
            countryActions.CountryActionTypes.ADD_COUNTRY
        ),
        map((action: countryActions.AddCountry) => action.payload),
        mergeMap((data: any) =>
            this.countryService.addCountry(data).pipe(
                map(
                    (response: Response) =>
                        new countryActions.AddCountrySuccess(response)
                ),
                catchError(err =>
                    of(new countryActions.AddCountryFail(err)))
            )
        )
    );


}