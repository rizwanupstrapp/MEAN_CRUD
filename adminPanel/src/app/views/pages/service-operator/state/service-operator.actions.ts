import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum ServiceOperatorActionTypes {

    UPDATE_STATUS = "[SERVICEOPERATOR] Update Status",
    UPDATE_STATUS_SUCCESS = "[SERVICEOPERATOR]  Update Status Success",
    UPDATE_STATUS_FAIL = "[SERVICEOPERATOR]  Update Status Fail",

    LOAD_SERVICEOPERATOR = "[SERVICEOPERATOR] Load SERVICEOPERATOR",
    LOAD_SERVICEOPERATOR_SUCCESS = "[SERVICEOPERATOR] Load SERVICEOPERATOR Success",
    LOAD_SERVICEOPERATOR_FAIL = "[SERVICEOPERATOR] Load SERVICEOPERATOR Fail",

    UPDATE_SERVICEOPERATOR = "[SERVICEOPERATOR] Update SERVICEOPERATOR",
    UPDATE_SERVICEOPERATOR_SUCCESS = "[SERVICEOPERATOR] Update SERVICEOPERATOR Success",
    UPDATE_SERVICEOPERATOR_FAIL = "[SERVICEOPERATOR] Update SERVICEOPERATOR Fail",

    DELETE_SERVICEOPERATOR = "[SERVICEOPERATOR] Delete SERVICEOPERATOR",
    DELETE_SERVICEOPERATOR_SUCCESS = "[SERVICEOPERATOR] Delete SERVICEOPERATOR Success",
    DELETE_SERVICEOPERATOR_FAIL = "[SERVICEOPERATOR] Delete SERVICEOPERATOR Fail",

    ADD_SERVICEOPERATOR = "[SERVICEOPERATOR] Upload Data",
    ADD_SERVICEOPERATOR_SUCCESS = "[SERVICEOPERATOR] Upload Data Success",
    ADD_SERVICEOPERATOR_FAIL = "[SERVICEOPERATOR] Upload Data Fail",

    UPLOAD_DATA = "[SERVICEOPERATOR] Upload Data",
    UPLOAD_DATA_SUCCESS = "[SERVICEOPERATOR] Upload Data Success",
    UPLOAD_DATA_FAIL = "[SERVICEOPERATOR] Upload Data Fail",
}

export class LoadServiceOperator implements Action {
    readonly type = ServiceOperatorActionTypes.LOAD_SERVICEOPERATOR;

    constructor(public payload: any) { }
}

export class LoadServiceOperatorSuccess implements Action {
    readonly type = ServiceOperatorActionTypes.LOAD_SERVICEOPERATOR_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadServiceOperatorFail implements Action {
    readonly type = ServiceOperatorActionTypes.LOAD_SERVICEOPERATOR_FAIL;

    constructor(public payload: any) { }
}

export class UpdateServiceOperator implements Action {
    readonly type = ServiceOperatorActionTypes.UPDATE_SERVICEOPERATOR;

    constructor(public payload: any) { }
}

export class UpdateServiceOperatorSuccess implements Action {
    readonly type = ServiceOperatorActionTypes.UPDATE_SERVICEOPERATOR_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateServiceOperatorFail implements Action {
    readonly type = ServiceOperatorActionTypes.UPDATE_SERVICEOPERATOR_FAIL;

    constructor(public payload: any) { }
}

export class DeleteServiceOperator implements Action {
    readonly type = ServiceOperatorActionTypes.DELETE_SERVICEOPERATOR;

    constructor(public payload: any) { }
}

export class DeleteServiceOperatorSuccess implements Action {
    readonly type = ServiceOperatorActionTypes.DELETE_SERVICEOPERATOR_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteServiceOperatorFail implements Action {
    readonly type = ServiceOperatorActionTypes.DELETE_SERVICEOPERATOR_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = ServiceOperatorActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = ServiceOperatorActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = ServiceOperatorActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddServiceOperator implements Action {
    readonly type = ServiceOperatorActionTypes.ADD_SERVICEOPERATOR;

    constructor(public payload: any) { }
}

export class AddServiceOperatorSuccess implements Action {
    readonly type = ServiceOperatorActionTypes.ADD_SERVICEOPERATOR_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddServiceOperatorFail implements Action {
    readonly type = ServiceOperatorActionTypes.ADD_SERVICEOPERATOR_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadServiceOperator
    | LoadServiceOperatorSuccess
    | LoadServiceOperatorFail
    | UpdateServiceOperator
    | UpdateServiceOperatorSuccess
    | UpdateServiceOperatorFail
    | DeleteServiceOperator
    | DeleteServiceOperatorSuccess
    | DeleteServiceOperatorFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddServiceOperator
    | AddServiceOperatorSuccess
    | AddServiceOperatorFail

