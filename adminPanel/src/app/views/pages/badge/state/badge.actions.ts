import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum BadgeActionTypes {

    UPDATE_STATUS = "[BADGE] Update Status",
    UPDATE_STATUS_SUCCESS = "[BADGE]  Update Status Success",
    UPDATE_STATUS_FAIL = "[BADGE]  Update Status Fail",

    LOAD_BADGE = "[BADGE] Load BADGE",
    LOAD_BADGE_SUCCESS = "[BADGE] Load BADGE Success",
    LOAD_BADGE_FAIL = "[BADGE] Load BADGE Fail",

    UPDATE_BADGE = "[BADGE] Update BADGE",
    UPDATE_BADGE_SUCCESS = "[BADGE] Update BADGE Success",
    UPDATE_BADGE_FAIL = "[BADGE] Update BADGE Fail",

    DELETE_BADGE = "[BADGE] Delete BADGE",
    DELETE_BADGE_SUCCESS = "[BADGE] Delete BADGE Success",
    DELETE_BADGE_FAIL = "[BADGE] Delete BADGE Fail",

    ADD_BADGE = "[BADGE] Upload Data",
    ADD_BADGE_SUCCESS = "[BADGE] Upload Data Success",
    ADD_BADGE_FAIL = "[BADGE] Upload Data Fail",
}

export class LoadBadge implements Action {
    readonly type = BadgeActionTypes.LOAD_BADGE;

    constructor(public payload: any) { }
}

export class LoadBadgeSuccess implements Action {
    readonly type = BadgeActionTypes.LOAD_BADGE_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadBadgeFail implements Action {
    readonly type = BadgeActionTypes.LOAD_BADGE_FAIL;

    constructor(public payload: any) { }
}

export class UpdateBadge implements Action {
    readonly type = BadgeActionTypes.UPDATE_BADGE;

    constructor(public payload: any) { }
}

export class UpdateBadgeSuccess implements Action {
    readonly type = BadgeActionTypes.UPDATE_BADGE_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateBadgeFail implements Action {
    readonly type = BadgeActionTypes.UPDATE_BADGE_FAIL;

    constructor(public payload: any) { }
}

export class DeleteBadge implements Action {
    readonly type = BadgeActionTypes.DELETE_BADGE;

    constructor(public payload: any) { }
}

export class DeleteBadgeSuccess implements Action {
    readonly type = BadgeActionTypes.DELETE_BADGE_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteBadgeFail implements Action {
    readonly type = BadgeActionTypes.DELETE_BADGE_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = BadgeActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = BadgeActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = BadgeActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddBadge implements Action {
    readonly type = BadgeActionTypes.ADD_BADGE;

    constructor(public payload: any) { }
}

export class AddBadgeSuccess implements Action {
    readonly type = BadgeActionTypes.ADD_BADGE_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddBadgeFail implements Action {
    readonly type = BadgeActionTypes.ADD_BADGE_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadBadge
    | LoadBadgeSuccess
    | LoadBadgeFail
    | UpdateBadge
    | UpdateBadgeSuccess
    | UpdateBadgeFail
    | DeleteBadge
    | DeleteBadgeSuccess
    | DeleteBadgeFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddBadge
    | AddBadgeSuccess
    | AddBadgeFail
