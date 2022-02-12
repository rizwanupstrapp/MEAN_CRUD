import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum PromocodeActionTypes {

    UPDATE_STATUS = "[PROMOCODE] Update Status",
    UPDATE_STATUS_SUCCESS = "[PROMOCODE]  Update Status Success",
    UPDATE_STATUS_FAIL = "[PROMOCODE]  Update Status Fail",

    LOAD_PROMOCODE = "[PROMOCODE] Load PROMOCODE",
    LOAD_PROMOCODE_SUCCESS = "[PROMOCODE] Load PROMOCODE Success",
    LOAD_PROMOCODE_FAIL = "[PROMOCODE] Load PROMOCODE Fail",

    UPDATE_PROMOCODE = "[PROMOCODE] Update PROMOCODE",
    UPDATE_PROMOCODE_SUCCESS = "[PROMOCODE] Update PROMOCODE Success",
    UPDATE_PROMOCODE_FAIL = "[PROMOCODE] Update PROMOCODE Fail",

    DELETE_PROMOCODE = "[PROMOCODE] Delete PROMOCODE",
    DELETE_PROMOCODE_SUCCESS = "[PROMOCODE] Delete PROMOCODE Success",
    DELETE_PROMOCODE_FAIL = "[PROMOCODE] Delete PROMOCODE Fail",

    ADD_PROMOCODE = "[PROMOCODE] Upload Data",
    ADD_PROMOCODE_SUCCESS = "[PROMOCODE] Upload Data Success",
    ADD_PROMOCODE_FAIL = "[PROMOCODE] Upload Data Fail",

    UPLOAD_DATA = "[PROMOCODE] Upload Data",
    UPLOAD_DATA_SUCCESS = "[PROMOCODE] Upload Data Success",
    UPLOAD_DATA_FAIL = "[PROMOCODE] Upload Data Fail",
}

export class LoadPromocode implements Action {
    readonly type = PromocodeActionTypes.LOAD_PROMOCODE;

    constructor(public payload: any) { }
}

export class LoadPromocodeSuccess implements Action {
    readonly type = PromocodeActionTypes.LOAD_PROMOCODE_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadPromocodeFail implements Action {
    readonly type = PromocodeActionTypes.LOAD_PROMOCODE_FAIL;

    constructor(public payload: any) { }
}

export class UpdatePromocode implements Action {
    readonly type = PromocodeActionTypes.UPDATE_PROMOCODE;

    constructor(public payload: any) { }
}

export class UpdatePromocodeSuccess implements Action {
    readonly type = PromocodeActionTypes.UPDATE_PROMOCODE_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdatePromocodeFail implements Action {
    readonly type = PromocodeActionTypes.UPDATE_PROMOCODE_FAIL;

    constructor(public payload: any) { }
}

export class DeletePromocode implements Action {
    readonly type = PromocodeActionTypes.DELETE_PROMOCODE;

    constructor(public payload: any) { }
}

export class DeletePromocodeSuccess implements Action {
    readonly type = PromocodeActionTypes.DELETE_PROMOCODE_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeletePromocodeFail implements Action {
    readonly type = PromocodeActionTypes.DELETE_PROMOCODE_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = PromocodeActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = PromocodeActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = PromocodeActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddPromocode implements Action {
    readonly type = PromocodeActionTypes.ADD_PROMOCODE;

    constructor(public payload: any) { }
}

export class AddPromocodeSuccess implements Action {
    readonly type = PromocodeActionTypes.ADD_PROMOCODE_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddPromocodeFail implements Action {
    readonly type = PromocodeActionTypes.ADD_PROMOCODE_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadPromocode
    | LoadPromocodeSuccess
    | LoadPromocodeFail
    | UpdatePromocode
    | UpdatePromocodeSuccess
    | UpdatePromocodeFail
    | DeletePromocode
    | DeletePromocodeSuccess
    | DeletePromocodeFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddPromocode
    | AddPromocodeSuccess
    | AddPromocodeFail

