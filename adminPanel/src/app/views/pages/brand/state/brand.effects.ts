import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as brandActions from "./brand.actions";
import { Response } from "../../../../model/model";
import { BrandService } from '../brand.service';


@Injectable()
export class BrandEffect {

    constructor(
        private actions$: Actions,
        private BrandService: BrandService
    ) { }

    @Effect()
    deleteBrand$: Observable<Action> = this.actions$.pipe(
        ofType<brandActions.DeleteBrand>(
            brandActions.BrandActionTypes.DELETE_BRAND
        ),
        map((action: brandActions.DeleteBrand) => action.payload),
        mergeMap((id: any) =>
            this.BrandService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new brandActions.DeleteBrandSuccess(response)
                ),
                catchError(err =>
                    of(new brandActions.DeleteBrandFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<brandActions.UpdateStatus>(
            brandActions.BrandActionTypes.UPDATE_STATUS
        ),
        map((action: brandActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.BrandService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new brandActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new brandActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadBrand$: Observable<Action> = this.actions$.pipe(
        ofType<brandActions.LoadBrand>(
            brandActions.BrandActionTypes.LOAD_BRAND
        ),
        map((action: brandActions.LoadBrand) => action.payload),
        mergeMap((id: any) =>
            this.BrandService.getBrandById(id).pipe(
                map(
                    (response: Response) =>
                        new brandActions.LoadBrandSuccess(response)
                ),
                catchError(err =>
                    of(new brandActions.LoadBrandFail(err)))
            )
        )
    );

    @Effect()
    updateBrand$: Observable<Action> = this.actions$.pipe(
        ofType<brandActions.UpdateBrand>(
            brandActions.BrandActionTypes.UPDATE_BRAND
        ),
        map((action: brandActions.UpdateBrand) => action.payload),
        mergeMap((data: any) =>
            this.BrandService.updateBrand(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new brandActions.UpdateBrandSuccess(response)
                ),
                catchError(err => of(new brandActions.UpdateBrandFail(err)))
            )
        )
    );


    @Effect()
    addBrand$: Observable<Action> = this.actions$.pipe(
        ofType<brandActions.AddBrand>(
            brandActions.BrandActionTypes.ADD_BRAND
        ),
        map((action: brandActions.AddBrand) => action.payload),
        mergeMap((data: any) =>
            this.BrandService.addBrand(data).pipe(
                map(
                    (response: Response) =>
                        new brandActions.AddBrandSuccess(response)
                ),
                catchError(err =>
                    of(new brandActions.AddBrandFail(err)))
            )
        )
    );
}