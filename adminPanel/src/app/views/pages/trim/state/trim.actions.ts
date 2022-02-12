import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum TrimActionTypes {

    UPDATE_STATUS = "[TRIM] Update Status",
    UPDATE_STATUS_SUCCESS = "[TRIM]  Update Status Success",
    UPDATE_STATUS_FAIL = "[TRIM]  Update Status Fail",

    LOAD_TRIM = "[TRIM] Load TRIM",
    LOAD_TRIM_SUCCESS = "[TRIM] Load TRIM Success",
    LOAD_TRIM_FAIL = "[TRIM] Load TRIM Fail",

    UPDATE_TRIM = "[TRIM] Update TRIM",
    UPDATE_TRIM_SUCCESS = "[TRIM] Update TRIM Success",
    UPDATE_TRIM_FAIL = "[TRIM] Update TRIM Fail",

    DELETE_TRIM = "[TRIM] Delete TRIM",
    DELETE_TRIM_SUCCESS = "[TRIM] Delete TRIM Success",
    DELETE_TRIM_FAIL = "[TRIM] Delete TRIM Fail",

    ADD_TRIM = "[TRIM] Upload Data",
    ADD_TRIM_SUCCESS = "[TRIM] Upload Data Success",
    ADD_TRIM_FAIL = "[TRIM] Upload Data Fail",

    UPLOAD_DATA = "[TRIM] Upload Data",
    UPLOAD_DATA_SUCCESS = "[TRIM] Upload Data Success",
    UPLOAD_DATA_FAIL = "[TRIM] Upload Data Fail",
}

export class LoadTrim implements Action {
    readonly type = TrimActionTypes.LOAD_TRIM;

    constructor(public payload: any) { }
}

export class LoadTrimSuccess implements Action {
    readonly type = TrimActionTypes.LOAD_TRIM_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadTrimFail implements Action {
    readonly type = TrimActionTypes.LOAD_TRIM_FAIL;

    constructor(public payload: any) { }
}

export class UpdateTrim implements Action {
    readonly type = TrimActionTypes.UPDATE_TRIM;

    constructor(public payload: any) { }
}

export class UpdateTrimSuccess implements Action {
    readonly type = TrimActionTypes.UPDATE_TRIM_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateTrimFail implements Action {
    readonly type = TrimActionTypes.UPDATE_TRIM_FAIL;

    constructor(public payload: any) { }
}

export class DeleteTrim implements Action {
    readonly type = TrimActionTypes.DELETE_TRIM;

    constructor(public payload: any) { }
}

export class DeleteTrimSuccess implements Action {
    readonly type = TrimActionTypes.DELETE_TRIM_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteTrimFail implements Action {
    readonly type = TrimActionTypes.DELETE_TRIM_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = TrimActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = TrimActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = TrimActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddTrim implements Action {
    readonly type = TrimActionTypes.ADD_TRIM;

    constructor(public payload: any) { }
}

export class AddTrimSuccess implements Action {
    readonly type = TrimActionTypes.ADD_TRIM_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddTrimFail implements Action {
    readonly type = TrimActionTypes.ADD_TRIM_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadTrim
    | LoadTrimSuccess
    | LoadTrimFail
    | UpdateTrim
    | UpdateTrimSuccess
    | UpdateTrimFail
    | DeleteTrim
    | DeleteTrimSuccess
    | DeleteTrimFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddTrim
    | AddTrimSuccess
    | AddTrimFail

