import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum EmailTemplateActionTypes {

    UPDATE_STATUS = "[EMAIL_TEMPLATE] Update Status",
    UPDATE_STATUS_SUCCESS = "[EMAIL_TEMPLATE]  Update Status Success",
    UPDATE_STATUS_FAIL = "[EMAIL_TEMPLATE]  Update Status Fail",

    LOAD_EMAIL_TEMPLATE = "[EMAIL_TEMPLATE] Load Email Template",
    LOAD_EMAIL_TEMPLATE_SUCCESS = "[EMAIL_TEMPLATE] Load Email Template Success",
    LOAD_EMAIL_TEMPLATE_FAIL = "[EMAIL_TEMPLATE] Load Email Template Fail",

    UPDATE_EMAIL_TEMPLATE = "[EMAIL_TEMPLATE] Update Email Template",
    UPDATE_EMAIL_TEMPLATE_SUCCESS = "[EMAIL_TEMPLATE] Update Email Template Success",
    UPDATE_EMAIL_TEMPLATE_FAIL = "[EMAIL_TEMPLATE] Update Email Template Fail",

    DELETE_EMAIL_TEMPLATE = "[EMAIL_TEMPLATE] Delete Email Template",
    DELETE_EMAIL_TEMPLATE_SUCCESS = "[EMAIL_TEMPLATE] Delete Email Template Success",
    DELETE_EMAIL_TEMPLATE_FAIL = "[EMAIL_TEMPLATE] Delete Email Template Fail",

    ADD_EMAIL_TEMPLATE = "[EMAIL_TEMPLATE] Upload Data",
    ADD_EMAIL_TEMPLATE_SUCCESS = "[EMAIL_TEMPLATE] Upload Data Success",
    ADD_EMAIL_TEMPLATE_FAIL = "[EMAIL_TEMPLATE] Upload Data Fail",
}

export class LoadEmailTemplate implements Action {
    readonly type = EmailTemplateActionTypes.LOAD_EMAIL_TEMPLATE;

    constructor(public payload: any) { }
}

export class LoadEmailTemplateSuccess implements Action {
    readonly type = EmailTemplateActionTypes.LOAD_EMAIL_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadEmailTemplateFail implements Action {
    readonly type = EmailTemplateActionTypes.LOAD_EMAIL_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}

export class UpdateEmailTemplate implements Action {
    readonly type = EmailTemplateActionTypes.UPDATE_EMAIL_TEMPLATE;

    constructor(public payload: any) { }
}

export class UpdateEmailTemplateSuccess implements Action {
    readonly type = EmailTemplateActionTypes.UPDATE_EMAIL_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateEmailTemplateFail implements Action {
    readonly type = EmailTemplateActionTypes.UPDATE_EMAIL_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}

export class DeleteEmailTemplate implements Action {
    readonly type = EmailTemplateActionTypes.DELETE_EMAIL_TEMPLATE;

    constructor(public payload: any) { }
}

export class DeleteEmailTemplateSuccess implements Action {
    readonly type = EmailTemplateActionTypes.DELETE_EMAIL_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteEmailTemplateFail implements Action {
    readonly type = EmailTemplateActionTypes.DELETE_EMAIL_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = EmailTemplateActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = EmailTemplateActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = EmailTemplateActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddEmailTemplate implements Action {
    readonly type = EmailTemplateActionTypes.ADD_EMAIL_TEMPLATE;

    constructor(public payload: any) { }
}

export class AddEmailTemplateSuccess implements Action {
    readonly type = EmailTemplateActionTypes.ADD_EMAIL_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddEmailTemplateFail implements Action {
    readonly type = EmailTemplateActionTypes.ADD_EMAIL_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadEmailTemplate
    | LoadEmailTemplateSuccess
    | LoadEmailTemplateFail
    | UpdateEmailTemplate
    | UpdateEmailTemplateSuccess
    | UpdateEmailTemplateFail
    | DeleteEmailTemplate
    | DeleteEmailTemplateSuccess
    | DeleteEmailTemplateFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddEmailTemplate
    | AddEmailTemplateSuccess
    | AddEmailTemplateFail
