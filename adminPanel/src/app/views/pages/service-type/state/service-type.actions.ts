import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum ServiceTypeActionTypes {

    UPDATE_STATUS = "[SERVICETYPE] Update Status",
    UPDATE_STATUS_SUCCESS = "[SERVICETYPE]  Update Status Success",
    UPDATE_STATUS_FAIL = "[SERVICETYPE]  Update Status Fail",

    LOAD_SERVICETYPE = "[SERVICETYPE] Load SERVICETYPE",
    LOAD_SERVICETYPE_SUCCESS = "[SERVICETYPE] Load SERVICETYPE Success",
    LOAD_SERVICETYPE_FAIL = "[SERVICETYPE] Load SERVICETYPE Fail",

    UPDATE_SERVICETYPE = "[SERVICETYPE] Update SERVICETYPE",
    UPDATE_SERVICETYPE_SUCCESS = "[SERVICETYPE] Update SERVICETYPE Success",
    UPDATE_SERVICETYPE_FAIL = "[SERVICETYPE] Update SERVICETYPE Fail",

    DELETE_SERVICETYPE = "[SERVICETYPE] Delete SERVICETYPE",
    DELETE_SERVICETYPE_SUCCESS = "[SERVICETYPE] Delete SERVICETYPE Success",
    DELETE_SERVICETYPE_FAIL = "[SERVICETYPE] Delete SERVICETYPE Fail",

    ADD_SERVICETYPE = "[SERVICETYPE] Upload Data",
    ADD_SERVICETYPE_SUCCESS = "[SERVICETYPE] Upload Data Success",
    ADD_SERVICETYPE_FAIL = "[SERVICETYPE] Upload Data Fail",

    UPLOAD_DATA = "[SERVICETYPE] Upload Data",
    UPLOAD_DATA_SUCCESS = "[SERVICETYPE] Upload Data Success",
    UPLOAD_DATA_FAIL = "[SERVICETYPE] Upload Data Fail",
}

export class LoadServiceType implements Action {
    readonly type = ServiceTypeActionTypes.LOAD_SERVICETYPE;

    constructor(public payload: any) { }
}

export class LoadServiceTypeSuccess implements Action {
    readonly type = ServiceTypeActionTypes.LOAD_SERVICETYPE_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadServiceTypeFail implements Action {
    readonly type = ServiceTypeActionTypes.LOAD_SERVICETYPE_FAIL;

    constructor(public payload: any) { }
}

export class UpdateServiceType implements Action {
    readonly type = ServiceTypeActionTypes.UPDATE_SERVICETYPE;

    constructor(public payload: any) { }
}

export class UpdateServiceTypeSuccess implements Action {
    readonly type = ServiceTypeActionTypes.UPDATE_SERVICETYPE_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateServiceTypeFail implements Action {
    readonly type = ServiceTypeActionTypes.UPDATE_SERVICETYPE_FAIL;

    constructor(public payload: any) { }
}

export class DeleteServiceType implements Action {
    readonly type = ServiceTypeActionTypes.DELETE_SERVICETYPE;

    constructor(public payload: any) { }
}

export class DeleteServiceTypeSuccess implements Action {
    readonly type = ServiceTypeActionTypes.DELETE_SERVICETYPE_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteServiceTypeFail implements Action {
    readonly type = ServiceTypeActionTypes.DELETE_SERVICETYPE_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = ServiceTypeActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = ServiceTypeActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = ServiceTypeActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddServiceType implements Action {
    readonly type = ServiceTypeActionTypes.ADD_SERVICETYPE;

    constructor(public payload: any) { }
}

export class AddServiceTypeSuccess implements Action {
    readonly type = ServiceTypeActionTypes.ADD_SERVICETYPE_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddServiceTypeFail implements Action {
    readonly type = ServiceTypeActionTypes.ADD_SERVICETYPE_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadServiceType
    | LoadServiceTypeSuccess
    | LoadServiceTypeFail
    | UpdateServiceType
    | UpdateServiceTypeSuccess
    | UpdateServiceTypeFail
    | DeleteServiceType
    | DeleteServiceTypeSuccess
    | DeleteServiceTypeFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddServiceType
    | AddServiceTypeSuccess
    | AddServiceTypeFail

