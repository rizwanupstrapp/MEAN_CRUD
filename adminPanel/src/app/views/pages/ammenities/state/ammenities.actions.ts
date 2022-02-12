import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum AmmenitiesActionTypes {

    UPDATE_STATUS = "[AMMENITIES] Update Status",
    UPDATE_STATUS_SUCCESS = "[AMMENITIES]  Update Status Success",
    UPDATE_STATUS_FAIL = "[AMMENITIES]  Update Status Fail",

    LOAD_AMMENITIES = "[AMMENITIES] Load AMMENITIES",
    LOAD_AMMENITIES_SUCCESS = "[AMMENITIES] Load AMMENITIES Success",
    LOAD_AMMENITIES_FAIL = "[AMMENITIES] Load AMMENITIES Fail",

    UPDATE_AMMENITIES = "[AMMENITIES] Update AMMENITIES",
    UPDATE_AMMENITIES_SUCCESS = "[AMMENITIES] Update AMMENITIES Success",
    UPDATE_AMMENITIES_FAIL = "[AMMENITIES] Update AMMENITIES Fail",

    DELETE_AMMENITIES = "[AMMENITIES] Delete AMMENITIES",
    DELETE_AMMENITIES_SUCCESS = "[AMMENITIES] Delete AMMENITIES Success",
    DELETE_AMMENITIES_FAIL = "[AMMENITIES] Delete AMMENITIES Fail",

    ADD_AMMENITIES = "[AMMENITIES] Upload Data",
    ADD_AMMENITIES_SUCCESS = "[AMMENITIES] Upload Data Success",
    ADD_AMMENITIES_FAIL = "[AMMENITIES] Upload Data Fail",

    UPLOAD_DATA = "[AMMENITIES] Upload Data",
    UPLOAD_DATA_SUCCESS = "[AMMENITIES] Upload Data Success",
    UPLOAD_DATA_FAIL = "[AMMENITIES] Upload Data Fail",
}

export class LoadAmmenities implements Action {
    readonly type = AmmenitiesActionTypes.LOAD_AMMENITIES;

    constructor(public payload: any) { }
}

export class LoadAmmenitiesSuccess implements Action {
    readonly type = AmmenitiesActionTypes.LOAD_AMMENITIES_SUCCESS

    constructor(public payload: Response) { }
}

export class LoadAmmenitiesFail implements Action {
    readonly type = AmmenitiesActionTypes.LOAD_AMMENITIES_FAIL;

    constructor(public payload: any) { }
}

export class UpdateAmmenities implements Action {
    readonly type = AmmenitiesActionTypes.UPDATE_AMMENITIES;

    constructor(public payload: any) { }
}

export class UpdateAmmenitiesSuccess implements Action {
    readonly type = AmmenitiesActionTypes.UPDATE_AMMENITIES_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateAmmenitiesFail implements Action {
    readonly type = AmmenitiesActionTypes.UPDATE_AMMENITIES_FAIL;

    constructor(public payload: any) { }
}

export class DeleteAmmenities implements Action {
    readonly type = AmmenitiesActionTypes.DELETE_AMMENITIES;

    constructor(public payload: any) { }
}

export class DeleteAmmenitiesSuccess implements Action {
    readonly type = AmmenitiesActionTypes.DELETE_AMMENITIES_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteAmmenitiesFail implements Action {
    readonly type = AmmenitiesActionTypes.DELETE_AMMENITIES_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = AmmenitiesActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = AmmenitiesActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = AmmenitiesActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddAmmenities implements Action {
    readonly type = AmmenitiesActionTypes.ADD_AMMENITIES;

    constructor(public payload: any) { }
}

export class AddAmmenitiesSuccess implements Action {
    readonly type = AmmenitiesActionTypes.ADD_AMMENITIES_SUCCESS

    constructor(public payload: Response) { }
}

export class AddAmmenitiesFail implements Action {
    readonly type = AmmenitiesActionTypes.ADD_AMMENITIES_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadAmmenities
    | LoadAmmenitiesSuccess
    | LoadAmmenitiesFail
    | UpdateAmmenities
    | UpdateAmmenitiesSuccess
    | UpdateAmmenitiesFail
    | DeleteAmmenities
    | DeleteAmmenitiesSuccess
    | DeleteAmmenitiesFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddAmmenities
    | AddAmmenitiesSuccess
    | AddAmmenitiesFail

