import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as serviceOperatorActions from "./service-operator.actions";
import { Response } from "../../../../model/model";
import { ServiceOperatorService } from "../service-operator.service";


@Injectable()
export class ServiceOperatorEffect {

    constructor(
        private actions$: Actions,
        private serviceOperatorService: ServiceOperatorService
    ) { }

    @Effect()
    deleteServiceOperator$: Observable<Action> = this.actions$.pipe(
        ofType<serviceOperatorActions.DeleteServiceOperator>(
            serviceOperatorActions.ServiceOperatorActionTypes.DELETE_SERVICEOPERATOR
        ),
        map((action: serviceOperatorActions.DeleteServiceOperator) => action.payload),
        mergeMap((id: any) =>
            this.serviceOperatorService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new serviceOperatorActions.DeleteServiceOperatorSuccess(response)
                ),
                catchError(err =>
                    of(new serviceOperatorActions.DeleteServiceOperatorFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<serviceOperatorActions.UpdateStatus>(
            serviceOperatorActions.ServiceOperatorActionTypes.UPDATE_STATUS
        ),
        map((action: serviceOperatorActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.serviceOperatorService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new serviceOperatorActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new serviceOperatorActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadServiceOperator$: Observable<Action> = this.actions$.pipe(
        ofType<serviceOperatorActions.LoadServiceOperator>(
            serviceOperatorActions.ServiceOperatorActionTypes.LOAD_SERVICEOPERATOR
        ),
        map((action: serviceOperatorActions.LoadServiceOperator) => action.payload),
        mergeMap((id: any) =>
            this.serviceOperatorService.getServiceOperatorById(id).pipe(
                map(
                    (response: Response) =>
                        new serviceOperatorActions.LoadServiceOperatorSuccess(response)
                ),
                catchError(err =>
                    of(new serviceOperatorActions.LoadServiceOperatorFail(err)))
            )
        )
    );

    @Effect()
    updateServiceOperator$: Observable<Action> = this.actions$.pipe(
        ofType<serviceOperatorActions.UpdateServiceOperator>(
            serviceOperatorActions.ServiceOperatorActionTypes.UPDATE_SERVICEOPERATOR
        ),
        map((action: serviceOperatorActions.UpdateServiceOperator) => action.payload),
        mergeMap((data: any) =>
            this.serviceOperatorService.updateServiceOperator(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new serviceOperatorActions.UpdateServiceOperatorSuccess(response)
                ),
                catchError(err => of(new serviceOperatorActions.UpdateServiceOperatorFail(err)))
            )
        )
    );


    @Effect()
    addServiceOperator$: Observable<Action> = this.actions$.pipe(
        ofType<serviceOperatorActions.AddServiceOperator>(
            serviceOperatorActions.ServiceOperatorActionTypes.ADD_SERVICEOPERATOR
        ),
        map((action: serviceOperatorActions.AddServiceOperator) => action.payload),
        mergeMap((data: any) =>
            this.serviceOperatorService.addServiceOperator(data).pipe(
                map(
                    (response: Response) =>
                        new serviceOperatorActions.AddServiceOperatorSuccess(response)
                ),
                catchError(err =>
                    of(new serviceOperatorActions.AddServiceOperatorFail(err)))
            )
        )
    );


}