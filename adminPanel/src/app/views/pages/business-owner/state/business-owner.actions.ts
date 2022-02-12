import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum BusinessOwnerActionTypes {

    UPDATE_STATUS = "[BUSINESS_OWNER] Update Status",
    UPDATE_STATUS_SUCCESS = "[BUSINESS_OWNER]  Update Status Success",
    UPDATE_STATUS_FAIL = "[BUSINESS_OWNER]  Update Status Fail",

    LOAD_BUSINESS_OWNER = "[BUSINESS_OWNER] Load Business Owner",
    LOAD_BUSINESS_OWNER_SUCCESS = "[BUSINESS_OWNER] Load Business Owner Success",
    LOAD_BUSINESS_OWNER_FAIL = "[BUSINESS_OWNER] Load Business Owner Fail",

    UPDATE_BUSINESS_OWNER = "[BUSINESS_OWNER] Update Business_Owner",
    UPDATE_BUSINESS_OWNER_SUCCESS = "[BUSINESS_OWNER] Update Business_Owner Success",
    UPDATE_BUSINESS_OWNER_FAIL = "[BUSINESS_OWNER] Update Business_Owner Fail",

    DELETE_BUSINESS_OWNER = "[BUSINESS_OWNER] Delete Business Owner",
    DELETE_BUSINESS_OWNER_SUCCESS = "[BUSINESS_OWNER] Delete Business Owner Success",
    DELETE_BUSINESS_OWNER_FAIL = "[BUSINESS_OWNER] Delete Business Owner Fail",

    UPLOAD_DATA = "[BUSINESS_OWNER] Upload Data",
    UPLOAD_DATA_SUCCESS = "[BUSINESS_OWNER] Upload Data Success",
    UPLOAD_DATA_FAIL = "[BUSINESS_OWNER] Upload Data Fail",
}

export class LoadBusinessOwner implements Action {
    readonly type = BusinessOwnerActionTypes.LOAD_BUSINESS_OWNER;

    constructor(public payload: any) { }
}

export class LoadBusinessOwnerSuccess implements Action {
    readonly type = BusinessOwnerActionTypes.LOAD_BUSINESS_OWNER_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadBusinessOwnerFail implements Action {
    readonly type = BusinessOwnerActionTypes.LOAD_BUSINESS_OWNER_FAIL;

    constructor(public payload: any) { }
}

export class UpdateBusinessOwner implements Action {
    readonly type = BusinessOwnerActionTypes.UPDATE_BUSINESS_OWNER;

    constructor(public payload: any) { }
}

export class UpdateBusinessOwnerSuccess implements Action {
    readonly type = BusinessOwnerActionTypes.UPDATE_BUSINESS_OWNER_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateBusinessOwnerFail implements Action {
    readonly type = BusinessOwnerActionTypes.UPDATE_BUSINESS_OWNER_FAIL;

    constructor(public payload: any) { }
}


export class DeleteBusinessOwner implements Action {
    readonly type = BusinessOwnerActionTypes.DELETE_BUSINESS_OWNER;

    constructor(public payload: any) { }
}

export class DeleteBusinessOwnerSuccess implements Action {
    readonly type = BusinessOwnerActionTypes.DELETE_BUSINESS_OWNER_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteBusinessOwnerFail implements Action {
    readonly type = BusinessOwnerActionTypes.DELETE_BUSINESS_OWNER_FAIL;

    constructor(public payload: any) { }
}

export class UpdateStatus implements Action {
    readonly type = BusinessOwnerActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = BusinessOwnerActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = BusinessOwnerActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}

export class UploadData implements Action {
    readonly type = BusinessOwnerActionTypes.UPLOAD_DATA;

    constructor(public payload: any) { }
}

export class UploadDataSuccess implements Action {
    readonly type = BusinessOwnerActionTypes.UPLOAD_DATA_SUCCESS;

    constructor(public payload: Response) { }
}

export class UploadDataFail implements Action {
    readonly type = BusinessOwnerActionTypes.UPLOAD_DATA_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadBusinessOwner
    | LoadBusinessOwnerSuccess
    | LoadBusinessOwnerFail
    | UpdateBusinessOwner
    | UpdateBusinessOwnerSuccess
    | UpdateBusinessOwnerFail
    | DeleteBusinessOwner
    | DeleteBusinessOwnerSuccess
    | DeleteBusinessOwnerFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | UploadData
    | UploadDataSuccess
    | UploadDataFail
     