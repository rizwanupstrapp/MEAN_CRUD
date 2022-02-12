import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum BrandActionTypes {

    UPDATE_STATUS = "[BRAND] Update Status",
    UPDATE_STATUS_SUCCESS = "[BRAND]  Update Status Success",
    UPDATE_STATUS_FAIL = "[BRAND]  Update Status Fail",

    LOAD_BRAND = "[BRAND] Load BRAND",
    LOAD_BRAND_SUCCESS = "[BRAND] Load BRAND Success",
    LOAD_BRAND_FAIL = "[BRAND] Load BRAND Fail",

    UPDATE_BRAND = "[BRAND] Update BRAND",
    UPDATE_BRAND_SUCCESS = "[BRAND] Update BRAND Success",
    UPDATE_BRAND_FAIL = "[BRAND] Update BRAND Fail",

    DELETE_BRAND = "[BRAND] Delete BRAND",
    DELETE_BRAND_SUCCESS = "[BRAND] Delete BRAND Success",
    DELETE_BRAND_FAIL = "[BRAND] Delete BRAND Fail",

    ADD_BRAND = "[BRAND] Upload Data",
    ADD_BRAND_SUCCESS = "[BRAND] Upload Data Success",
    ADD_BRAND_FAIL = "[BRAND] Upload Data Fail",

    UPLOAD_DATA = "[BRAND] Upload Data",
    UPLOAD_DATA_SUCCESS = "[BRAND] Upload Data Success",
    UPLOAD_DATA_FAIL = "[BRAND] Upload Data Fail",
}

export class LoadBrand implements Action {
    readonly type = BrandActionTypes.LOAD_BRAND;

    constructor(public payload: any) { }
}

export class LoadBrandSuccess implements Action {
    readonly type = BrandActionTypes.LOAD_BRAND_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadBrandFail implements Action {
    readonly type = BrandActionTypes.LOAD_BRAND_FAIL;

    constructor(public payload: any) { }
}

export class UpdateBrand implements Action {
    readonly type = BrandActionTypes.UPDATE_BRAND;

    constructor(public payload: any) { }
}

export class UpdateBrandSuccess implements Action {
    readonly type = BrandActionTypes.UPDATE_BRAND_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateBrandFail implements Action {
    readonly type = BrandActionTypes.UPDATE_BRAND_FAIL;

    constructor(public payload: any) { }
}

export class DeleteBrand implements Action {
    readonly type = BrandActionTypes.DELETE_BRAND;

    constructor(public payload: any) { }
}

export class DeleteBrandSuccess implements Action {
    readonly type = BrandActionTypes.DELETE_BRAND_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteBrandFail implements Action {
    readonly type = BrandActionTypes.DELETE_BRAND_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = BrandActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = BrandActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = BrandActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddBrand implements Action {
    readonly type = BrandActionTypes.ADD_BRAND;

    constructor(public payload: any) { }
}

export class AddBrandSuccess implements Action {
    readonly type = BrandActionTypes.ADD_BRAND_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddBrandFail implements Action {
    readonly type = BrandActionTypes.ADD_BRAND_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadBrand
    | LoadBrandSuccess
    | LoadBrandFail
    | UpdateBrand
    | UpdateBrandSuccess
    | UpdateBrandFail
    | DeleteBrand
    | DeleteBrandSuccess
    | DeleteBrandFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddBrand
    | AddBrandSuccess
    | AddBrandFail

