import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum AutomaticDriverAssignActionTypes {

    UPDATE_STATUS = "[AUTOMATIC_DRIVER_ASSIGN] Update Status",
    UPDATE_STATUS_SUCCESS = "[AUTOMATIC_DRIVER_ASSIGN]  Update Status Success",
    UPDATE_STATUS_FAIL = "[AUTOMATIC_DRIVER_ASSIGN]  Update Status Fail",

    LOAD_AUTOMATIC_DRIVER_ASSIGN = "[AUTOMATIC_DRIVER_ASSIGN] Load AUTOMATIC_DRIVER_ASSIGN",
    LOAD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS = "[AUTOMATIC_DRIVER_ASSIGN] Load AUTOMATIC_DRIVER_ASSIGN Success",
    LOAD_AUTOMATIC_DRIVER_ASSIGN_FAIL = "[AUTOMATIC_DRIVER_ASSIGN] Load AUTOMATIC_DRIVER_ASSIGN Fail",

    UPDATE_AUTOMATIC_DRIVER_ASSIGN = "[AUTOMATIC_DRIVER_ASSIGN] Update AUTOMATIC_DRIVER_ASSIGN",
    UPDATE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS = "[AUTOMATIC_DRIVER_ASSIGN] Update AUTOMATIC_DRIVER_ASSIGN Success",
    UPDATE_AUTOMATIC_DRIVER_ASSIGN_FAIL = "[AUTOMATIC_DRIVER_ASSIGN] Update AUTOMATIC_DRIVER_ASSIGN Fail",

    DELETE_AUTOMATIC_DRIVER_ASSIGN = "[AUTOMATIC_DRIVER_ASSIGN] Delete AUTOMATIC_DRIVER_ASSIGN",
    DELETE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS = "[AUTOMATIC_DRIVER_ASSIGN] Delete AUTOMATIC_DRIVER_ASSIGN Success",
    DELETE_AUTOMATIC_DRIVER_ASSIGN_FAIL = "[AUTOMATIC_DRIVER_ASSIGN] Delete AUTOMATIC_DRIVER_ASSIGN Fail",

    ADD_AUTOMATIC_DRIVER_ASSIGN = "[AUTOMATIC_DRIVER_ASSIGN] Add Data",
    ADD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS = "[AUTOMATIC_DRIVER_ASSIGN] Add Data Success",
    ADD_AUTOMATIC_DRIVER_ASSIGN_FAIL = "[AUTOMATIC_DRIVER_ASSIGN] Add Data Fail",

    UPLOAD_DATA = "[AUTOMATIC_DRIVER_ASSIGN] Upload Data",
    UPLOAD_DATA_SUCCESS = "[AUTOMATIC_DRIVER_ASSIGN] Upload Data Success",
    UPLOAD_DATA_FAIL = "[AUTOMATIC_DRIVER_ASSIGN] Upload Data Fail",
}

export class LoadAutomaticDriverAssign implements Action {
    readonly type = AutomaticDriverAssignActionTypes.LOAD_AUTOMATIC_DRIVER_ASSIGN;

    constructor(public payload: any) { }
}

export class LoadAutomaticDriverAssignSuccess implements Action {
    readonly type = AutomaticDriverAssignActionTypes.LOAD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadAutomaticDriverAssignFail implements Action {
    readonly type = AutomaticDriverAssignActionTypes.LOAD_AUTOMATIC_DRIVER_ASSIGN_FAIL;

    constructor(public payload: any) { }
}

export class UpdateAutomaticDriverAssign implements Action {
    readonly type = AutomaticDriverAssignActionTypes.UPDATE_AUTOMATIC_DRIVER_ASSIGN;

    constructor(public payload: any) { }
}

export class UpdateAutomaticDriverAssignSuccess implements Action {
    readonly type = AutomaticDriverAssignActionTypes.UPDATE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateAutomaticDriverAssignFail implements Action {
    readonly type = AutomaticDriverAssignActionTypes.UPDATE_AUTOMATIC_DRIVER_ASSIGN_FAIL;

    constructor(public payload: any) { }
}

export class DeleteAutomaticDriverAssign implements Action {
    readonly type = AutomaticDriverAssignActionTypes.DELETE_AUTOMATIC_DRIVER_ASSIGN;

    constructor(public payload: any) { }
}

export class DeleteAutomaticDriverAssignSuccess implements Action {
    readonly type = AutomaticDriverAssignActionTypes.DELETE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteAutomaticDriverAssignFail implements Action {
    readonly type = AutomaticDriverAssignActionTypes.DELETE_AUTOMATIC_DRIVER_ASSIGN_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = AutomaticDriverAssignActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = AutomaticDriverAssignActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = AutomaticDriverAssignActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddAutomaticDriverAssign implements Action {
    readonly type = AutomaticDriverAssignActionTypes.ADD_AUTOMATIC_DRIVER_ASSIGN;

    constructor(public payload: any) {
        console.log(payload);
    }
}



export class AddAutomaticDriverAssignSuccess implements Action {
    readonly type = AutomaticDriverAssignActionTypes.ADD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddAutomaticDriverAssignFail implements Action {
    readonly type = AutomaticDriverAssignActionTypes.ADD_AUTOMATIC_DRIVER_ASSIGN_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadAutomaticDriverAssign
    | LoadAutomaticDriverAssignSuccess
    | LoadAutomaticDriverAssignFail
    | UpdateAutomaticDriverAssign
    | UpdateAutomaticDriverAssignSuccess
    | UpdateAutomaticDriverAssignFail
    | DeleteAutomaticDriverAssign
    | DeleteAutomaticDriverAssignSuccess
    | DeleteAutomaticDriverAssignFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddAutomaticDriverAssign
    | AddAutomaticDriverAssignSuccess
    | AddAutomaticDriverAssignFail

