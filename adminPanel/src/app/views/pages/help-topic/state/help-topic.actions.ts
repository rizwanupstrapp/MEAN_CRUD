import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum HelpTopicActionTypes {

    UPDATE_STATUS = "[HELPTOPIC] Update Status",
    UPDATE_STATUS_SUCCESS = "[HELPTOPIC]  Update Status Success",
    UPDATE_STATUS_FAIL = "[HELPTOPIC]  Update Status Fail",

    LOAD_HELPTOPIC = "[HELPTOPIC] Load HELPTOPIC",
    LOAD_HELPTOPIC_SUCCESS = "[HELPTOPIC] Load HELPTOPIC Success",
    LOAD_HELPTOPIC_FAIL = "[HELPTOPIC] Load HELPTOPIC Fail",

    UPDATE_HELPTOPIC = "[HELPTOPIC] Update HELPTOPIC",
    UPDATE_HELPTOPIC_SUCCESS = "[HELPTOPIC] Update HELPTOPIC Success",
    UPDATE_HELPTOPIC_FAIL = "[HELPTOPIC] Update HELPTOPIC Fail",

    DELETE_HELPTOPIC = "[HELPTOPIC] Delete HELPTOPIC",
    DELETE_HELPTOPIC_SUCCESS = "[HELPTOPIC] Delete HELPTOPIC Success",
    DELETE_HELPTOPIC_FAIL = "[HELPTOPIC] Delete HELPTOPIC Fail",

    ADD_HELPTOPIC = "[HELPTOPIC] Upload Data",
    ADD_HELPTOPIC_SUCCESS = "[HELPTOPIC] Upload Data Success",
    ADD_HELPTOPIC_FAIL = "[HELPTOPIC] Upload Data Fail",

    UPLOAD_DATA = "[HELPTOPIC] Upload Data",
    UPLOAD_DATA_SUCCESS = "[HELPTOPIC] Upload Data Success",
    UPLOAD_DATA_FAIL = "[HELPTOPIC] Upload Data Fail",
}

export class LoadHelpTopic implements Action {
    readonly type = HelpTopicActionTypes.LOAD_HELPTOPIC;

    constructor(public payload: any) { }
}

export class LoadHelpTopicSuccess implements Action {
    readonly type = HelpTopicActionTypes.LOAD_HELPTOPIC_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadHelpTopicFail implements Action {
    readonly type = HelpTopicActionTypes.LOAD_HELPTOPIC_FAIL;

    constructor(public payload: any) { }
}

export class UpdateHelpTopic implements Action {
    readonly type = HelpTopicActionTypes.UPDATE_HELPTOPIC;

    constructor(public payload: any) { }
}

export class UpdateHelpTopicSuccess implements Action {
    readonly type = HelpTopicActionTypes.UPDATE_HELPTOPIC_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateHelpTopicFail implements Action {
    readonly type = HelpTopicActionTypes.UPDATE_HELPTOPIC_FAIL;

    constructor(public payload: any) { }
}

export class DeleteHelpTopic implements Action {
    readonly type = HelpTopicActionTypes.DELETE_HELPTOPIC;

    constructor(public payload: any) { }
}

export class DeleteHelpTopicSuccess implements Action {
    readonly type = HelpTopicActionTypes.DELETE_HELPTOPIC_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteHelpTopicFail implements Action {
    readonly type = HelpTopicActionTypes.DELETE_HELPTOPIC_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = HelpTopicActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = HelpTopicActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = HelpTopicActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddHelpTopic implements Action {
    readonly type = HelpTopicActionTypes.ADD_HELPTOPIC;

    constructor(public payload: any) { }
}

export class AddHelpTopicSuccess implements Action {
    readonly type = HelpTopicActionTypes.ADD_HELPTOPIC_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddHelpTopicFail implements Action {
    readonly type = HelpTopicActionTypes.ADD_HELPTOPIC_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadHelpTopic
    | LoadHelpTopicSuccess
    | LoadHelpTopicFail
    | UpdateHelpTopic
    | UpdateHelpTopicSuccess
    | UpdateHelpTopicFail
    | DeleteHelpTopic
    | DeleteHelpTopicSuccess
    | DeleteHelpTopicFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddHelpTopic
    | AddHelpTopicSuccess
    | AddHelpTopicFail

