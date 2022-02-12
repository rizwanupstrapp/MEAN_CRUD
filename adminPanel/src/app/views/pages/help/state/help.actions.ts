import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum HelpActionTypes {

    UPDATE_STATUS = "[HELP] Update Status",
    UPDATE_STATUS_SUCCESS = "[HELP]  Update Status Success",
    UPDATE_STATUS_FAIL = "[HELP]  Update Status Fail",

    LOAD_HELP = "[HELP] Load HELP",
    LOAD_HELP_SUCCESS = "[HELP] Load HELP Success",
    LOAD_HELP_FAIL = "[HELP] Load HELP Fail",

    UPDATE_HELP = "[HELP] Update HELP",
    UPDATE_HELP_SUCCESS = "[HELP] Update HELP Success",
    UPDATE_HELP_FAIL = "[HELP] Update HELP Fail",

    DELETE_HELP = "[HELP] Delete HELP",
    DELETE_HELP_SUCCESS = "[HELP] Delete HELP Success",
    DELETE_HELP_FAIL = "[HELP] Delete HELP Fail",

    ADD_HELP = "[HELP] Upload Data",
    ADD_HELP_SUCCESS = "[HELP] Upload Data Success",
    ADD_HELP_FAIL = "[HELP] Upload Data Fail",

    UPLOAD_DATA = "[HELP] Upload Data",
    UPLOAD_DATA_SUCCESS = "[HELP] Upload Data Success",
    UPLOAD_DATA_FAIL = "[HELP] Upload Data Fail",
}

export class LoadHelp implements Action {
    readonly type = HelpActionTypes.LOAD_HELP;

    constructor(public payload: any) { }
}

export class LoadHelpSuccess implements Action {
    readonly type = HelpActionTypes.LOAD_HELP_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadHelpFail implements Action {
    readonly type = HelpActionTypes.LOAD_HELP_FAIL;

    constructor(public payload: any) { }
}

export class UpdateHelp implements Action {
    readonly type = HelpActionTypes.UPDATE_HELP;

    constructor(public payload: any) { }
}

export class UpdateHelpSuccess implements Action {
    readonly type = HelpActionTypes.UPDATE_HELP_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateHelpFail implements Action {
    readonly type = HelpActionTypes.UPDATE_HELP_FAIL;

    constructor(public payload: any) { }
}

export class DeleteHelp implements Action {
    readonly type = HelpActionTypes.DELETE_HELP;

    constructor(public payload: any) { }
}

export class DeleteHelpSuccess implements Action {
    readonly type = HelpActionTypes.DELETE_HELP_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteHelpFail implements Action {
    readonly type = HelpActionTypes.DELETE_HELP_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = HelpActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = HelpActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = HelpActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddHelp implements Action {
    readonly type = HelpActionTypes.ADD_HELP;

    constructor(public payload: any) { }
}

export class AddHelpSuccess implements Action {
    readonly type = HelpActionTypes.ADD_HELP_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddHelpFail implements Action {
    readonly type = HelpActionTypes.ADD_HELP_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadHelp
    | LoadHelpSuccess
    | LoadHelpFail
    | UpdateHelp
    | UpdateHelpSuccess
    | UpdateHelpFail
    | DeleteHelp
    | DeleteHelpSuccess
    | DeleteHelpFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddHelp
    | AddHelpSuccess
    | AddHelpFail

