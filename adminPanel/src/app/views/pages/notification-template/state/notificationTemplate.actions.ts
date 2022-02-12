import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum NotificationTemplateActionTypes {

    UPDATE_STATUS = "[NOTIFICATION_TEMPLATE] Update Status",
    UPDATE_STATUS_SUCCESS = "[NOTIFICATION_TEMPLATE]  Update Status Success",
    UPDATE_STATUS_FAIL = "[NOTIFICATION_TEMPLATE]  Update Status Fail",

    LOAD_NOTIFICATION_TEMPLATE = "[NOTIFICATION_TEMPLATE] Load TEMPLATE",
    LOAD_NOTIFICATION_TEMPLATE_SUCCESS = "[NOTIFICATION_TEMPLATE] Load TEMPLATE Success",
    LOAD_NOTIFICATION_TEMPLATE_FAIL = "[NOTIFICATION_TEMPLATE] Load TEMPLATE Fail",

    UPDATE_NOTIFICATION_TEMPLATE = "[NOTIFICATION_TEMPLATE] Update TEMPLATE",
    UPDATE_NOTIFICATION_TEMPLATE_SUCCESS = "[NOTIFICATION_TEMPLATE] Update TEMPLATE Success",
    UPDATE_NOTIFICATION_TEMPLATE_FAIL = "[NOTIFICATION_TEMPLATE] Update TEMPLATE Fail",

    DELETE_NOTIFICATION_TEMPLATE = "[NOTIFICATION_TEMPLATE] Delete TEMPLATE",
    DELETE_NOTIFICATION_TEMPLATE_SUCCESS = "[NOTIFICATION_TEMPLATE] Delete TEMPLATE Success",
    DELETE_NOTIFICATION_TEMPLATE_FAIL = "[NOTIFICATION_TEMPLATE] Delete TEMPLATE Fail",

    ADD_NOTIFICATION_TEMPLATE = "[NOTIFICATION_TEMPLATE] Upload Data",
    ADD_NOTIFICATION_TEMPLATE_SUCCESS = "[NOTIFICATION_TEMPLATE] Upload Data Success",
    ADD_NOTIFICATION_TEMPLATE_FAIL = "[NOTIFICATION_TEMPLATE] Upload Data Fail",
}

export class LoadNotificationTemplate implements Action {
    readonly type = NotificationTemplateActionTypes.LOAD_NOTIFICATION_TEMPLATE;

    constructor(public payload: any) { }
}

export class LoadNotificationTemplateSuccess implements Action {
    readonly type = NotificationTemplateActionTypes.LOAD_NOTIFICATION_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadNotificationTemplateFail implements Action {
    readonly type = NotificationTemplateActionTypes.LOAD_NOTIFICATION_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}

export class UpdateNotificationTemplate implements Action {
    readonly type = NotificationTemplateActionTypes.UPDATE_NOTIFICATION_TEMPLATE;

    constructor(public payload: any) { }
}

export class UpdateNotificationTemplateSuccess implements Action {
    readonly type = NotificationTemplateActionTypes.UPDATE_NOTIFICATION_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateNotificationTemplateFail implements Action {
    readonly type = NotificationTemplateActionTypes.UPDATE_NOTIFICATION_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}

export class DeleteNotificationTemplate implements Action {
    readonly type = NotificationTemplateActionTypes.DELETE_NOTIFICATION_TEMPLATE;

    constructor(public payload: any) { }
}

export class DeleteNotificationTemplateSuccess implements Action {
    readonly type = NotificationTemplateActionTypes.DELETE_NOTIFICATION_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteNotificationTemplateFail implements Action {
    readonly type = NotificationTemplateActionTypes.DELETE_NOTIFICATION_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = NotificationTemplateActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = NotificationTemplateActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = NotificationTemplateActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddNotificationTemplate implements Action {
    readonly type = NotificationTemplateActionTypes.ADD_NOTIFICATION_TEMPLATE;

    constructor(public payload: any) { }
}

export class AddNotificationTemplateSuccess implements Action {
    readonly type = NotificationTemplateActionTypes.ADD_NOTIFICATION_TEMPLATE_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddNotificationTemplateFail implements Action {
    readonly type = NotificationTemplateActionTypes.ADD_NOTIFICATION_TEMPLATE_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadNotificationTemplate
    | LoadNotificationTemplateSuccess
    | LoadNotificationTemplateFail
    | UpdateNotificationTemplate
    | UpdateNotificationTemplateSuccess
    | UpdateNotificationTemplateFail
    | DeleteNotificationTemplate
    | DeleteNotificationTemplateSuccess
    | DeleteNotificationTemplateFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddNotificationTemplate
    | AddNotificationTemplateSuccess
    | AddNotificationTemplateFail
