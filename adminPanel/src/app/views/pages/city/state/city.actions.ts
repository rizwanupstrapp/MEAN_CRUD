import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum CityActionTypes {

    UPDATE_STATUS = "[CITY] Update Status",
    UPDATE_STATUS_SUCCESS = "[CITY]  Update Status Success",
    UPDATE_STATUS_FAIL = "[CITY]  Update Status Fail",

    LOAD_CITY = "[CITY] Load CITY",
    LOAD_CITY_SUCCESS = "[CITY] Load CITY Success",
    LOAD_CITY_FAIL = "[CITY] Load CITY Fail",

    UPDATE_CITY = "[CITY] Update CITY",
    UPDATE_CITY_SUCCESS = "[CITY] Update CITY Success",
    UPDATE_CITY_FAIL = "[CITY] Update CITY Fail",

    DELETE_CITY = "[CITY] Delete CITY",
    DELETE_CITY_SUCCESS = "[CITY] Delete CITY Success",
    DELETE_CITY_FAIL = "[CITY] Delete CITY Fail",

    ADD_CITY = "[CITY] Upload Data",
    ADD_CITY_SUCCESS = "[CITY] Upload Data Success",
    ADD_CITY_FAIL = "[CITY] Upload Data Fail",
}

export class LoadCity implements Action {
    readonly type = CityActionTypes.LOAD_CITY;

    constructor(public payload: any) { }
}

export class LoadCitySuccess implements Action {
    readonly type = CityActionTypes.LOAD_CITY_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadCityFail implements Action {
    readonly type = CityActionTypes.LOAD_CITY_FAIL;

    constructor(public payload: any) { }
}

export class UpdateCity implements Action {
    readonly type = CityActionTypes.UPDATE_CITY;

    constructor(public payload: any) { }
}

export class UpdateCitySuccess implements Action {
    readonly type = CityActionTypes.UPDATE_CITY_SUCCESS

    constructor(public payload: Response) { }
}

export class UpdateCityFail implements Action {
    readonly type = CityActionTypes.UPDATE_CITY_FAIL

    constructor(public payload: any) { }
}

export class DeleteCity implements Action {
    readonly type = CityActionTypes.DELETE_CITY;

    constructor(public payload: any) { }
}

export class DeleteCitySuccess implements Action {
    readonly type = CityActionTypes.DELETE_CITY_SUCCESS

    constructor(public payload: Response) { }
}

export class DeleteCityFail implements Action {
    readonly type = CityActionTypes.DELETE_CITY_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = CityActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = CityActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = CityActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddCity implements Action {
    readonly type = CityActionTypes.ADD_CITY;

    constructor(public payload: any) { }
}

export class AddCitySuccess implements Action {
    readonly type = CityActionTypes.ADD_CITY_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddCityFail implements Action {
    readonly type = CityActionTypes.ADD_CITY_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadCity
    | LoadCitySuccess
    | LoadCityFail
    | UpdateCity
    | UpdateCitySuccess
    | UpdateCityFail
    | DeleteCity
    | DeleteCitySuccess
    | DeleteCityFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddCity
    | AddCitySuccess
    | AddCityFail
