import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum TimeFrameActionTypes {

    UPDATE_STATUS = "[TIMEFRAME] Update Status",
    UPDATE_STATUS_SUCCESS = "[TIMEFRAME]  Update Status Success",
    UPDATE_STATUS_FAIL = "[TIMEFRAME]  Update Status Fail",

    LOAD_TIMEFRAME = "[TIMEFRAME] Load TIMEFRAME",
    LOAD_TIMEFRAME_SUCCESS = "[TIMEFRAME] Load TIMEFRAME Success",
    LOAD_TIMEFRAME_FAIL = "[TIMEFRAME] Load TIMEFRAME Fail",

    UPDATE_TIMEFRAME = "[TIMEFRAME] Update TIMEFRAME",
    UPDATE_TIMEFRAME_SUCCESS = "[TIMEFRAME] Update TIMEFRAME Success",
    UPDATE_TIMEFRAME_FAIL = "[TIMEFRAME] Update TIMEFRAME Fail",

    DELETE_TIMEFRAME = "[TIMEFRAME] Delete TIMEFRAME",
    DELETE_TIMEFRAME_SUCCESS = "[TIMEFRAME] Delete TIMEFRAME Success",
    DELETE_TIMEFRAME_FAIL = "[TIMEFRAME] Delete TIMEFRAME Fail",

    ADD_TIMEFRAME = "[TIMEFRAME] Upload Data",
    ADD_TIMEFRAME_SUCCESS = "[TIMEFRAME] Upload Data Success",
    ADD_TIMEFRAME_FAIL = "[TIMEFRAME] Upload Data Fail",

    UPLOAD_DATA = "[TIMEFRAME] Upload Data",
    UPLOAD_DATA_SUCCESS = "[TIMEFRAME] Upload Data Success",
    UPLOAD_DATA_FAIL = "[TIMEFRAME] Upload Data Fail",
}

export class LoadTimeFrame implements Action {
    readonly type = TimeFrameActionTypes.LOAD_TIMEFRAME;

    constructor(public payload: any) { }
}

export class LoadTimeFrameSuccess implements Action {
    readonly type = TimeFrameActionTypes.LOAD_TIMEFRAME_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadTimeFrameFail implements Action {
    readonly type = TimeFrameActionTypes.LOAD_TIMEFRAME_FAIL;

    constructor(public payload: any) { }
}

export class UpdateTimeFrame implements Action {
    readonly type = TimeFrameActionTypes.UPDATE_TIMEFRAME;

    constructor(public payload: any) { }
}

export class UpdateTimeFrameSuccess implements Action {
    readonly type = TimeFrameActionTypes.UPDATE_TIMEFRAME_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateTimeFrameFail implements Action {
    readonly type = TimeFrameActionTypes.UPDATE_TIMEFRAME_FAIL;

    constructor(public payload: any) { }
}

export class DeleteTimeFrame implements Action {
    readonly type = TimeFrameActionTypes.DELETE_TIMEFRAME;

    constructor(public payload: any) { }
}

export class DeleteTimeFrameSuccess implements Action {
    readonly type = TimeFrameActionTypes.DELETE_TIMEFRAME_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteTimeFrameFail implements Action {
    readonly type = TimeFrameActionTypes.DELETE_TIMEFRAME_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = TimeFrameActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = TimeFrameActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = TimeFrameActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddTimeFrame implements Action {
    readonly type = TimeFrameActionTypes.ADD_TIMEFRAME;

    constructor(public payload: any) { }
}

export class AddTimeFrameSuccess implements Action {
    readonly type = TimeFrameActionTypes.ADD_TIMEFRAME_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddTimeFrameFail implements Action {
    readonly type = TimeFrameActionTypes.ADD_TIMEFRAME_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadTimeFrame
    | LoadTimeFrameSuccess
    | LoadTimeFrameFail
    | UpdateTimeFrame
    | UpdateTimeFrameSuccess
    | UpdateTimeFrameFail
    | DeleteTimeFrame
    | DeleteTimeFrameSuccess
    | DeleteTimeFrameFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddTimeFrame
    | AddTimeFrameSuccess
    | AddTimeFrameFail

