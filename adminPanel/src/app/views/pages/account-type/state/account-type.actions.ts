import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum AccountTypeActionTypes {

    UPDATE_STATUS = "[ACCOUNT_TYPE] Update Status",
    UPDATE_STATUS_SUCCESS = "[ACCOUNT_TYPE]  Update Status Success",
    UPDATE_STATUS_FAIL = "[ACCOUNT_TYPE]  Update Status Fail",

    LOAD_ACCOUNT_TYPE = "[ACCOUNT_TYPE] Load ACCOUNT_TYPE",
    LOAD_ACCOUNT_TYPE_SUCCESS = "[ACCOUNT_TYPE] Load ACCOUNT_TYPE Success",
    LOAD_ACCOUNT_TYPE_FAIL = "[ACCOUNT_TYPE] Load ACCOUNT_TYPE Fail",

    UPDATE_ACCOUNT_TYPE = "[ACCOUNT_TYPE] Update ACCOUNT_TYPE",
    UPDATE_ACCOUNT_TYPE_SUCCESS = "[ACCOUNT_TYPE] Update ACCOUNT_TYPE Success",
    UPDATE_ACCOUNT_TYPE_FAIL = "[ACCOUNT_TYPE] Update ACCOUNT_TYPE Fail",

    DELETE_ACCOUNT_TYPE = "[ACCOUNT_TYPE] Delete ACCOUNT_TYPE",
    DELETE_ACCOUNT_TYPE_SUCCESS = "[ACCOUNT_TYPE] Delete ACCOUNT_TYPE Success",
    DELETE_ACCOUNT_TYPE_FAIL = "[ACCOUNT_TYPE] Delete ACCOUNT_TYPE Fail",

    ADD_ACCOUNT_TYPE = "[ACCOUNT_TYPE] Upload Data",
    ADD_ACCOUNT_TYPE_SUCCESS = "[ACCOUNT_TYPE] Upload Data Success",
    ADD_ACCOUNT_TYPE_FAIL = "[ACCOUNT_TYPE] Upload Data Fail",

    UPLOAD_DATA = "[ACCOUNT_TYPE] Upload Data",
    UPLOAD_DATA_SUCCESS = "[ACCOUNT_TYPE] Upload Data Success",
    UPLOAD_DATA_FAIL = "[ACCOUNT_TYPE] Upload Data Fail",
}

export class LoadAccountType implements Action {
    readonly type = AccountTypeActionTypes.LOAD_ACCOUNT_TYPE;

    constructor(public payload: any) { }
}

export class LoadAccountTypeSuccess implements Action {
    readonly type = AccountTypeActionTypes.LOAD_ACCOUNT_TYPE_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadAccountTypeFail implements Action {
    readonly type = AccountTypeActionTypes.LOAD_ACCOUNT_TYPE_FAIL;

    constructor(public payload: any) { }
}

export class UpdateAccountType implements Action {
    readonly type = AccountTypeActionTypes.UPDATE_ACCOUNT_TYPE;

    constructor(public payload: any) { }
}

export class UpdateAccountTypeSuccess implements Action {
    readonly type = AccountTypeActionTypes.UPDATE_ACCOUNT_TYPE_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateAccountTypeFail implements Action {
    readonly type = AccountTypeActionTypes.UPDATE_ACCOUNT_TYPE_FAIL;

    constructor(public payload: any) { }
}

export class DeleteAccountType implements Action {
    readonly type = AccountTypeActionTypes.DELETE_ACCOUNT_TYPE;

    constructor(public payload: any) { }
}

export class DeleteAccountTypeSuccess implements Action {
    readonly type = AccountTypeActionTypes.DELETE_ACCOUNT_TYPE_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteAccountTypeFail implements Action {
    readonly type = AccountTypeActionTypes.DELETE_ACCOUNT_TYPE_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = AccountTypeActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = AccountTypeActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = AccountTypeActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddAccountType implements Action {
    readonly type = AccountTypeActionTypes.ADD_ACCOUNT_TYPE;

    constructor(public payload: any) { }
}

export class AddAccountTypeSuccess implements Action {
    readonly type = AccountTypeActionTypes.ADD_ACCOUNT_TYPE_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddAccountTypeFail implements Action {
    readonly type = AccountTypeActionTypes.ADD_ACCOUNT_TYPE_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadAccountType
    | LoadAccountTypeSuccess
    | LoadAccountTypeFail
    | UpdateAccountType
    | UpdateAccountTypeSuccess
    | UpdateAccountTypeFail
    | DeleteAccountType
    | DeleteAccountTypeSuccess
    | DeleteAccountTypeFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddAccountType
    | AddAccountTypeSuccess
    | AddAccountTypeFail

