import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum HighDemandAreaActionTypes {

    UPDATE_STATUS = "[HIGHDEMANDAREA] Update Status",
    UPDATE_STATUS_SUCCESS = "[HIGHDEMANDAREA]  Update Status Success",
    UPDATE_STATUS_FAIL = "[HIGHDEMANDAREA]  Update Status Fail",

    LOAD_HIGHDEMANDAREA = "[HIGHDEMANDAREA] Load HIGHDEMANDAREA",
    LOAD_HIGHDEMANDAREA_SUCCESS = "[HIGHDEMANDAREA] Load HIGHDEMANDAREA Success",
    LOAD_HIGHDEMANDAREA_FAIL = "[HIGHDEMANDAREA] Load HIGHDEMANDAREA Fail",

    UPDATE_HIGHDEMANDAREA = "[HIGHDEMANDAREA] Update HIGHDEMANDAREA",
    UPDATE_HIGHDEMANDAREA_SUCCESS = "[HIGHDEMANDAREA] Update HIGHDEMANDAREA Success",
    UPDATE_HIGHDEMANDAREA_FAIL = "[HIGHDEMANDAREA] Update HIGHDEMANDAREA Fail",

    DELETE_HIGHDEMANDAREA = "[HIGHDEMANDAREA] Delete HIGHDEMANDAREA",
    DELETE_HIGHDEMANDAREA_SUCCESS = "[HIGHDEMANDAREA] Delete HIGHDEMANDAREA Success",
    DELETE_HIGHDEMANDAREA_FAIL = "[HIGHDEMANDAREA] Delete HIGHDEMANDAREA Fail",

    ADD_HIGHDEMANDAREA = "[HIGHDEMANDAREA] Upload Data",
    ADD_HIGHDEMANDAREA_SUCCESS = "[HIGHDEMANDAREA] Upload Data Success",
    ADD_HIGHDEMANDAREA_FAIL = "[HIGHDEMANDAREA] Upload Data Fail",

    UPLOAD_DATA = "[HIGHDEMANDAREA] Upload Data",
    UPLOAD_DATA_SUCCESS = "[HIGHDEMANDAREA] Upload Data Success",
    UPLOAD_DATA_FAIL = "[HIGHDEMANDAREA] Upload Data Fail",
}

export class LoadHighDemandArea implements Action {
    readonly type = HighDemandAreaActionTypes.LOAD_HIGHDEMANDAREA;

    constructor(public payload: any) { }
}

export class LoadHighDemandAreaSuccess implements Action {
    readonly type = HighDemandAreaActionTypes.LOAD_HIGHDEMANDAREA_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadHighDemandAreaFail implements Action {
    readonly type = HighDemandAreaActionTypes.LOAD_HIGHDEMANDAREA_FAIL;

    constructor(public payload: any) { }
}

export class UpdateHighDemandArea implements Action {
    readonly type = HighDemandAreaActionTypes.UPDATE_HIGHDEMANDAREA;

    constructor(public payload: any) { }
}

export class UpdateHighDemandAreaSuccess implements Action {
    readonly type = HighDemandAreaActionTypes.UPDATE_HIGHDEMANDAREA_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateHighDemandAreaFail implements Action {
    readonly type = HighDemandAreaActionTypes.UPDATE_HIGHDEMANDAREA_FAIL;

    constructor(public payload: any) { }
}

export class DeleteHighDemandArea implements Action {
    readonly type = HighDemandAreaActionTypes.DELETE_HIGHDEMANDAREA;

    constructor(public payload: any) { }
}

export class DeleteHighDemandAreaSuccess implements Action {
    readonly type = HighDemandAreaActionTypes.DELETE_HIGHDEMANDAREA_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteHighDemandAreaFail implements Action {
    readonly type = HighDemandAreaActionTypes.DELETE_HIGHDEMANDAREA_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = HighDemandAreaActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = HighDemandAreaActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = HighDemandAreaActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddHighDemandArea implements Action {
    readonly type = HighDemandAreaActionTypes.ADD_HIGHDEMANDAREA;

    constructor(public payload: any) { }
}

export class AddHighDemandAreaSuccess implements Action {
    readonly type = HighDemandAreaActionTypes.ADD_HIGHDEMANDAREA_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddHighDemandAreaFail implements Action {
    readonly type = HighDemandAreaActionTypes.ADD_HIGHDEMANDAREA_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadHighDemandArea
    | LoadHighDemandAreaSuccess
    | LoadHighDemandAreaFail
    | UpdateHighDemandArea
    | UpdateHighDemandAreaSuccess
    | UpdateHighDemandAreaFail
    | DeleteHighDemandArea
    | DeleteHighDemandAreaSuccess
    | DeleteHighDemandAreaFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddHighDemandArea
    | AddHighDemandAreaSuccess
    | AddHighDemandAreaFail

