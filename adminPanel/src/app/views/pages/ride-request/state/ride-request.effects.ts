import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as rideRequestActions from "./ride-request.actions";
import { Response } from "../../../../model/model";
import { RideRequestService } from '../ride-request.service';


@Injectable()
export class RideRequestEffect {

    constructor(
        private actions$: Actions,
        private RideRequestService: RideRequestService
    ) { }



    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<rideRequestActions.UpdateStatus>(
            rideRequestActions.RideRequestActionTypes.UPDATE_STATUS
        ),
        map((action: rideRequestActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.RideRequestService.updateStatus(data.id, data.data).pipe(
                map(
                    (updateRideRequestData: Response) =>
                        new rideRequestActions.UpdateStatusSuccess(updateRideRequestData)
                ),
                catchError(err => of(new rideRequestActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadRideRequest$: Observable<Action> = this.actions$.pipe(
        ofType<rideRequestActions.LoadRideRequest>(
            rideRequestActions.RideRequestActionTypes.LOAD_RIDE_REQUEST
        ),
        map((action: rideRequestActions.LoadRideRequest) => action.payload),
        mergeMap((id: any) =>
            this.RideRequestService.getRideRequestById(id).pipe(
                map(
                    (response: Response) =>
                        new rideRequestActions.LoadRideRequestSuccess(response)
                ),
                catchError(err =>
                    of(new rideRequestActions.LoadRideRequestFail(err)))
            )
        )
    );

    @Effect()
    updateRideRequest$: Observable<Action> = this.actions$.pipe(
        ofType<rideRequestActions.UpdateRideRequest>(
            rideRequestActions.RideRequestActionTypes.UPDATE_RIDE_REQUEST
        ),
        map((action: rideRequestActions.UpdateRideRequest) => action.payload),
        mergeMap((data: any) =>
            this.RideRequestService.updateRideRequest(data.id, data.data).pipe(
                map(
                    (updateRideRequestData: Response) =>
                        new rideRequestActions.UpdateRideRequestSuccess(updateRideRequestData)
                ),
                catchError(err => of(new rideRequestActions.UpdateRideRequestFail(err)))
            )
        )
    );

}