import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum SMSTemplateActionTypes {

    UPDATE_STATUS = "[SMS_TEMPLATE] Update Status",
    UPDATE_STATUS_SUCCESS = "[SMS_TEMPLATE]  Update Status Success",
    UPDATE_STATUS_FAIL = "[SMS_TEMPLATE]  Update Status Fail",

    LOAD_SMS_TEMPLATE = "[SMS_TEMPLATE] Load SMS Template",
    LOAD_SMS_TEMPLATE_SUCCESS = "[SMS_TEMPLATE] Load SMS Template Success",
    LOAD_SMS_TEMPLATE_FAIL = "[SMS_TEMPLATE] Load SMS Template Fail",

    UPDATE_SMS_TEMPLATE = "[SMS_TEMPLATE] Update SMS Template",
    UPDATE_SMS_TEMPLATE_SUCCESS = "[SMS_TEMPLATE] Update SMS Template Success",
    UPDATE_SMS_TEMPLATE_FAIL = "[SMS_TEMPLATE] Update SMS Template Fail",

    DELETE_SMS_TEMPLATE = "[SMS_TEMPLATE] Delete SMS Template",
    DELETE_SMS_TEMPLATE_SUCCESS = "[SMS_TEMPLATE] Delete SMS Template Success",
    DELETE_SMS_TEMPLATE_FAIL = "[SMS_TEMPLATE] Delete SMS Template Fail",

    ADD_SMS_TEMPLATE = "[SMS_TEMPLATE] Upload Data",
    ADD_SMS_TEMPLATE_SUCCESS = "[SMS_TEMPLATE] Upload Data Success",
    ADD_SMS_TEMPLATE_FAIL = "[SMS_TEMPLATE] Upload Data Fail",
}

export class LoadSMSTemplate implements Action {
    readonly type = SMSTemplateActionTypes.LOAD_SMS_TEMPLATE;

    constructor(public payload: any) { }
}

export class LoadSMSTemplateSuccess implements Action {
    readonly type = SMSTemplateActionTypes.LOAD_SMS_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadSMSTemplateFail implements Action {
    readonly type = SMSTemplateActionTypes.LOAD_SMS_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}

export class UpdateSMSTemplate implements Action {
    readonly type = SMSTemplateActionTypes.UPDATE_SMS_TEMPLATE;

    constructor(public payload: any) { }
}

export class UpdateSMSTemplateSuccess implements Action {
    readonly type = SMSTemplateActionTypes.UPDATE_SMS_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateSMSTemplateFail implements Action {
    readonly type = SMSTemplateActionTypes.UPDATE_SMS_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}

export class DeleteSMSTemplate implements Action {
    readonly type = SMSTemplateActionTypes.DELETE_SMS_TEMPLATE;

    constructor(public payload: any) { }
}

export class DeleteSMSTemplateSuccess implements Action {
    readonly type = SMSTemplateActionTypes.DELETE_SMS_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteSMSTemplateFail implements Action {
    readonly type = SMSTemplateActionTypes.DELETE_SMS_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = SMSTemplateActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = SMSTemplateActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = SMSTemplateActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddSMSTemplate implements Action {
    readonly type = SMSTemplateActionTypes.ADD_SMS_TEMPLATE;

    constructor(public payload: any) { }
}

export class AddSMSTemplateSuccess implements Action {
    readonly type = SMSTemplateActionTypes.ADD_SMS_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddSMSTemplateFail implements Action {
    readonly type = SMSTemplateActionTypes.ADD_SMS_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadSMSTemplate
    | LoadSMSTemplateSuccess
    | LoadSMSTemplateFail
    | UpdateSMSTemplate
    | UpdateSMSTemplateSuccess
    | UpdateSMSTemplateFail
    | DeleteSMSTemplate
    | DeleteSMSTemplateSuccess
    | DeleteSMSTemplateFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddSMSTemplate
    | AddSMSTemplateSuccess
    | AddSMSTemplateFail
