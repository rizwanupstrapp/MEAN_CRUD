import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum RideRequestActionTypes {

    UPDATE_STATUS = "[RIDE_REQUEST] Update Status",
    UPDATE_STATUS_SUCCESS = "[RIDE_REQUEST]  Update Status Success",
    UPDATE_STATUS_FAIL = "[RIDE_REQUEST]  Update Status Fail",

    LOAD_RIDE_REQUEST = "[RIDE_REQUEST] Load Ride Request",
    LOAD_RIDE_REQUEST_SUCCESS = "[RIDE_REQUEST] Load Ride Request Success",
    LOAD_RIDE_REQUEST_FAIL = "[RIDE_REQUEST] Load Ride Request Fail",

    UPDATE_RIDE_REQUEST = "[RIDE_REQUEST] Update Ride Request",
    UPDATE_RIDE_REQUEST_SUCCESS = "[RIDE_REQUEST] Update Ride Request Success",
    UPDATE_RIDE_REQUEST_FAIL = "[RIDE_REQUEST] Update Ride Request Fail",
}

export class LoadRideRequest implements Action {
    readonly type = RideRequestActionTypes.LOAD_RIDE_REQUEST;

    constructor(public payload: any) { }
}

export class LoadRideRequestSuccess implements Action {
    readonly type = RideRequestActionTypes.LOAD_RIDE_REQUEST_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadRideRequestFail implements Action {
    readonly type = RideRequestActionTypes.LOAD_RIDE_REQUEST_FAIL;

    constructor(public payload: any) { }
}

export class UpdateStatus implements Action {
    readonly type = RideRequestActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = RideRequestActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = RideRequestActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}

export class UpdateRideRequest implements Action {
    readonly type = RideRequestActionTypes.UPDATE_RIDE_REQUEST;

    constructor(public payload: any) { }
}

export class UpdateRideRequestSuccess implements Action {
    readonly type = RideRequestActionTypes.UPDATE_RIDE_REQUEST_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateRideRequestFail implements Action {
    readonly type = RideRequestActionTypes.UPDATE_RIDE_REQUEST_FAIL;

    constructor(public payload: any) { }
}

export type action =
    | LoadRideRequest
    | LoadRideRequestSuccess
    | LoadRideRequestFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | UpdateRideRequest
    | UpdateRideRequestSuccess
    | UpdateRideRequestFail
