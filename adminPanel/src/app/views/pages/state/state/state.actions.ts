import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum StateActionTypes {

    UPDATE_STATUS = "[STATE] Update Status",
    UPDATE_STATUS_SUCCESS = "[STATE]  Update Status Success",
    UPDATE_STATUS_FAIL = "[STATE]  Update Status Fail",

    LOAD_STATE = "[STATE] Load STATE",
    LOAD_STATE_SUCCESS = "[STATE] Load STATE Success",
    LOAD_STATE_FAIL = "[STATE] Load STATE Fail",

    UPDATE_STATE = "[STATE] Update STATE",
    UPDATE_STATE_SUCCESS = "[STATE] Update STATE Success",
    UPDATE_STATE_FAIL = "[STATE] Update STATE Fail",

    DELETE_STATE = "[STATE] Delete STATE",
    DELETE_STATE_SUCCESS = "[STATE] Delete STATE Success",
    DELETE_STATE_FAIL = "[STATE] Delete STATE Fail",

    ADD_STATE = "[STATE] Upload Data",
    ADD_STATE_SUCCESS = "[STATE] Upload Data Success",
    ADD_STATE_FAIL = "[STATE] Upload Data Fail",
}

export class LoadState implements Action {
    readonly type = StateActionTypes.LOAD_STATE;

    constructor(public payload: any) { }
}

export class LoadStateSuccess implements Action {
    readonly type = StateActionTypes.LOAD_STATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadStateFail implements Action {
    readonly type = StateActionTypes.LOAD_STATE_FAIL;

    constructor(public payload: any) { }
}

export class UpdateState implements Action {
    readonly type = StateActionTypes.UPDATE_STATE;

    constructor(public payload: any) { }
}

export class UpdateStateSuccess implements Action {
    readonly type = StateActionTypes.UPDATE_STATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStateFail implements Action {
    readonly type = StateActionTypes.UPDATE_STATE_FAIL;

    constructor(public payload: any) { }
}

export class DeleteState implements Action {
    readonly type = StateActionTypes.DELETE_STATE;

    constructor(public payload: any) { }
}

export class DeleteStateSuccess implements Action {
    readonly type = StateActionTypes.DELETE_STATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteStateFail implements Action {
    readonly type = StateActionTypes.DELETE_STATE_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = StateActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = StateActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = StateActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddState implements Action {
    readonly type = StateActionTypes.ADD_STATE;

    constructor(public payload: any) { }
}

export class AddStateSuccess implements Action {
    readonly type = StateActionTypes.ADD_STATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddStateFail implements Action {
    readonly type = StateActionTypes.ADD_STATE_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadState
    | LoadStateSuccess
    | LoadStateFail
    | UpdateState
    | UpdateStateSuccess
    | UpdateStateFail
    | DeleteState
    | DeleteStateSuccess
    | DeleteStateFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddState
    | AddStateSuccess
    | AddStateFail
