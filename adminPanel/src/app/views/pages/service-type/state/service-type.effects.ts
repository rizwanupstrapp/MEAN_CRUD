import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as serviceTypeActions from "./service-type.actions";
import { Response } from "../../../../model/model";
import { ServiceTypeService } from '../service-type.service';


@Injectable()
export class ServiceTypeEffect {

    constructor(
        private actions$: Actions,
        private serviceTypeService: ServiceTypeService
    ) { }

    @Effect()
    deleteServiceType$: Observable<Action> = this.actions$.pipe(
        ofType<serviceTypeActions.DeleteServiceType>(
            serviceTypeActions.ServiceTypeActionTypes.DELETE_SERVICETYPE
        ),
        map((action: serviceTypeActions.DeleteServiceType) => action.payload),
        mergeMap((id: any) =>
            this.serviceTypeService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new serviceTypeActions.DeleteServiceTypeSuccess(response)
                ),
                catchError(err =>
                    of(new serviceTypeActions.DeleteServiceTypeFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<serviceTypeActions.UpdateStatus>(
            serviceTypeActions.ServiceTypeActionTypes.UPDATE_STATUS
        ),
        map((action: serviceTypeActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.serviceTypeService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new serviceTypeActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new serviceTypeActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadServiceType$: Observable<Action> = this.actions$.pipe(
        ofType<serviceTypeActions.LoadServiceType>(
            serviceTypeActions.ServiceTypeActionTypes.LOAD_SERVICETYPE
        ),
        map((action: serviceTypeActions.LoadServiceType) => action.payload),
        mergeMap((id: any) =>
            this.serviceTypeService.getServiceTypeById(id).pipe(
                map(
                    (response: Response) =>
                        new serviceTypeActions.LoadServiceTypeSuccess(response)
                ),
                catchError(err =>
                    of(new serviceTypeActions.LoadServiceTypeFail(err)))
            )
        )
    );

    @Effect()
    updateServiceType$: Observable<Action> = this.actions$.pipe(
        ofType<serviceTypeActions.UpdateServiceType>(
            serviceTypeActions.ServiceTypeActionTypes.UPDATE_SERVICETYPE
        ),
        map((action: serviceTypeActions.UpdateServiceType) => action.payload),
        mergeMap((data: any) =>
            this.serviceTypeService.updateServiceType(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new serviceTypeActions.UpdateServiceTypeSuccess(response)
                ),
                catchError(err => of(new serviceTypeActions.UpdateServiceTypeFail(err)))
            )
        )
    );


    @Effect()
    addServiceType$: Observable<Action> = this.actions$.pipe(
        ofType<serviceTypeActions.AddServiceType>(
            serviceTypeActions.ServiceTypeActionTypes.ADD_SERVICETYPE
        ),
        map((action: serviceTypeActions.AddServiceType) => action.payload),
        mergeMap((data: any) =>
            this.serviceTypeService.addServiceType(data).pipe(
                map(
                    (response: Response) =>
                        new serviceTypeActions.AddServiceTypeSuccess(response)
                ),
                catchError(err =>
                    of(new serviceTypeActions.AddServiceTypeFail(err)))
            )
        )
    );


}