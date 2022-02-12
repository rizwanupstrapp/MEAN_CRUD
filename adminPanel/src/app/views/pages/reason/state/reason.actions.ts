import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum ReasonActionTypes {

    UPDATE_STATUS = "[REASON] Update Status",
    UPDATE_STATUS_SUCCESS = "[REASON]  Update Status Success",
    UPDATE_STATUS_FAIL = "[REASON]  Update Status Fail",

    LOAD_REASON = "[REASON] Load REASON",
    LOAD_REASON_SUCCESS = "[REASON] Load REASON Success",
    LOAD_REASON_FAIL = "[REASON] Load REASON Fail",

    UPDATE_REASON = "[REASON] Update REASON",
    UPDATE_REASON_SUCCESS = "[REASON] Update REASON Success",
    UPDATE_REASON_FAIL = "[REASON] Update REASON Fail",

    DELETE_REASON = "[REASON] Delete REASON",
    DELETE_REASON_SUCCESS = "[REASON] Delete REASON Success",
    DELETE_REASON_FAIL = "[REASON] Delete REASON Fail",

    ADD_REASON = "[REASON] Upload Data",
    ADD_REASON_SUCCESS = "[REASON] Upload Data Success",
    ADD_REASON_FAIL = "[REASON] Upload Data Fail",

    UPLOAD_DATA = "[REASON] Upload Data",
    UPLOAD_DATA_SUCCESS = "[REASON] Upload Data Success",
    UPLOAD_DATA_FAIL = "[REASON] Upload Data Fail",
}

export class LoadReason implements Action {
    readonly type = ReasonActionTypes.LOAD_REASON;

    constructor(public payload: any) { }
}

export class LoadReasonSuccess implements Action {
    readonly type = ReasonActionTypes.LOAD_REASON_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadReasonFail implements Action {
    readonly type = ReasonActionTypes.LOAD_REASON_FAIL;

    constructor(public payload: any) { }
}

export class UpdateReason implements Action {
    readonly type = ReasonActionTypes.UPDATE_REASON;

    constructor(public payload: any) { }
}

export class UpdateReasonSuccess implements Action {
    readonly type = ReasonActionTypes.UPDATE_REASON_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateReasonFail implements Action {
    readonly type = ReasonActionTypes.UPDATE_REASON_FAIL;

    constructor(public payload: any) { }
}

export class DeleteReason implements Action {
    readonly type = ReasonActionTypes.DELETE_REASON;

    constructor(public payload: any) { }
}

export class DeleteReasonSuccess implements Action {
    readonly type = ReasonActionTypes.DELETE_REASON_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteReasonFail implements Action {
    readonly type = ReasonActionTypes.DELETE_REASON_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = ReasonActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = ReasonActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = ReasonActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddReason implements Action {
    readonly type = ReasonActionTypes.ADD_REASON;

    constructor(public payload: any) { }
}

export class AddReasonSuccess implements Action {
    readonly type = ReasonActionTypes.ADD_REASON_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddReasonFail implements Action {
    readonly type = ReasonActionTypes.ADD_REASON_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadReason
    | LoadReasonSuccess
    | LoadReasonFail
    | UpdateReason
    | UpdateReasonSuccess
    | UpdateReasonFail
    | DeleteReason
    | DeleteReasonSuccess
    | DeleteReasonFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddReason
    | AddReasonSuccess
    | AddReasonFail

