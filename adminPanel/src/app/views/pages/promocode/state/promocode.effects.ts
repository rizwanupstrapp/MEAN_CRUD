import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as promocodeActions from "./promocode.actions";
import { Response } from "../../../../model/model";
import { PromocodeService } from '../promocode.service';


@Injectable()
export class PromocodeEffect {

    constructor(
        private actions$: Actions,
        private PromocodeService: PromocodeService
    ) { }

    @Effect()
    deletePromocode$: Observable<Action> = this.actions$.pipe(
        ofType<promocodeActions.DeletePromocode>(
            promocodeActions.PromocodeActionTypes.DELETE_PROMOCODE
        ),
        map((action: promocodeActions.DeletePromocode) => action.payload),
        mergeMap((id: any) =>
            this.PromocodeService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new promocodeActions.DeletePromocodeSuccess(response)
                ),
                catchError(err =>
                    of(new promocodeActions.DeletePromocodeFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<promocodeActions.UpdateStatus>(
            promocodeActions.PromocodeActionTypes.UPDATE_STATUS
        ),
        map((action: promocodeActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.PromocodeService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new promocodeActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new promocodeActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadPromocode$: Observable<Action> = this.actions$.pipe(
        ofType<promocodeActions.LoadPromocode>(
            promocodeActions.PromocodeActionTypes.LOAD_PROMOCODE
        ),
        map((action: promocodeActions.LoadPromocode) => action.payload),
        mergeMap((id: any) =>
            this.PromocodeService.getPromocodeById(id).pipe(
                map(
                    (response: Response) =>
                        new promocodeActions.LoadPromocodeSuccess(response)
                ),
                catchError(err =>
                    of(new promocodeActions.LoadPromocodeFail(err)))
            )
        )
    );

    @Effect()
    updatePromocode$: Observable<Action> = this.actions$.pipe(
        ofType<promocodeActions.UpdatePromocode>(
            promocodeActions.PromocodeActionTypes.UPDATE_PROMOCODE
        ),
        map((action: promocodeActions.UpdatePromocode) => action.payload),
        mergeMap((data: any) =>
            this.PromocodeService.updatePromocode(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new promocodeActions.UpdatePromocodeSuccess(response)
                ),
                catchError(err => of(new promocodeActions.UpdatePromocodeFail(err)))
            )
        )
    );


    @Effect()
    addPromocode$: Observable<Action> = this.actions$.pipe(
        ofType<promocodeActions.AddPromocode>(
            promocodeActions.PromocodeActionTypes.ADD_PROMOCODE
        ),
        map((action: promocodeActions.AddPromocode) => action.payload),
        mergeMap((data: any) =>
            this.PromocodeService.addPromocode(data).pipe(
                map(
                    (response: Response) =>
                        new promocodeActions.AddPromocodeSuccess(response)
                ),
                catchError(err =>
                    of(new promocodeActions.AddPromocodeFail(err)))
            )
        )
    );
}