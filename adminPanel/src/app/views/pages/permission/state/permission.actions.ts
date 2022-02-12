import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum PermissionActionTypes {

    UPDATE_STATUS = "[PERMISSION] Update Status",
    UPDATE_STATUS_SUCCESS = "[PERMISSION]  Update Status Success",
    UPDATE_STATUS_FAIL = "[PERMISSION]  Update Status Fail",

    LOAD_PERMISSION = "[PERMISSION] Load PERMISSION",
    LOAD_PERMISSION_SUCCESS = "[PERMISSION] Load PERMISSION Success",
    LOAD_PERMISSION_FAIL = "[PERMISSION] Load PERMISSION Fail",

    UPDATE_PERMISSION = "[PERMISSION] Update PERMISSION",
    UPDATE_PERMISSION_SUCCESS = "[PERMISSION] Update PERMISSION Success",
    UPDATE_PERMISSION_FAIL = "[PERMISSION] Update PERMISSION Fail",

    DELETE_PERMISSION = "[PERMISSION] Delete PERMISSION",
    DELETE_PERMISSION_SUCCESS = "[PERMISSION] Delete PERMISSION Success",
    DELETE_PERMISSION_FAIL = "[PERMISSION] Delete PERMISSION Fail",

    ADD_PERMISSION = "[PERMISSION] Upload Data",
    ADD_PERMISSION_SUCCESS = "[PERMISSION] Upload Data Success",
    ADD_PERMISSION_FAIL = "[PERMISSION] Upload Data Fail",

    UPLOAD_DATA = "[PERMISSION] Upload Data",
    UPLOAD_DATA_SUCCESS = "[PERMISSION] Upload Data Success",
    UPLOAD_DATA_FAIL = "[PERMISSION] Upload Data Fail",
}

export class LoadPermission implements Action {
    readonly type = PermissionActionTypes.LOAD_PERMISSION;

    constructor(public payload: any) { }
}

export class LoadPermissionSuccess implements Action {
    readonly type = PermissionActionTypes.LOAD_PERMISSION_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadPermissionFail implements Action {
    readonly type = PermissionActionTypes.LOAD_PERMISSION_FAIL;

    constructor(public payload: any) { }
}

export class UpdatePermission implements Action {
    readonly type = PermissionActionTypes.UPDATE_PERMISSION;

    constructor(public payload: any) { }
}

export class UpdatePermissionSuccess implements Action {
    readonly type = PermissionActionTypes.UPDATE_PERMISSION_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdatePermissionFail implements Action {
    readonly type = PermissionActionTypes.UPDATE_PERMISSION_FAIL;

    constructor(public payload: any) { }
}

export class DeletePermission implements Action {
    readonly type = PermissionActionTypes.DELETE_PERMISSION;

    constructor(public payload: any) { }
}

export class DeletePermissionSuccess implements Action {
    readonly type = PermissionActionTypes.DELETE_PERMISSION_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeletePermissionFail implements Action {
    readonly type = PermissionActionTypes.DELETE_PERMISSION_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = PermissionActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = PermissionActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = PermissionActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddPermission implements Action {
    readonly type = PermissionActionTypes.ADD_PERMISSION;

    constructor(public payload: any) { }
}

export class AddPermissionSuccess implements Action {
    readonly type = PermissionActionTypes.ADD_PERMISSION_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddPermissionFail implements Action {
    readonly type = PermissionActionTypes.ADD_PERMISSION_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadPermission
    | LoadPermissionSuccess
    | LoadPermissionFail
    | UpdatePermission
    | UpdatePermissionSuccess
    | UpdatePermissionFail
    | DeletePermission
    | DeletePermissionSuccess
    | DeletePermissionFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddPermission
    | AddPermissionSuccess
    | AddPermissionFail

