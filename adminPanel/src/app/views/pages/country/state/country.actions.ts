import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum CountryActionTypes {

    UPDATE_STATUS = "[COUNTRY] Update Status",
    UPDATE_STATUS_SUCCESS = "[COUNTRY]  Update Status Success",
    UPDATE_STATUS_FAIL = "[COUNTRY]  Update Status Fail",

    LOAD_COUNTRY = "[COUNTRY] Load COUNTRY",
    LOAD_COUNTRY_SUCCESS = "[COUNTRY] Load COUNTRY Success",
    LOAD_COUNTRY_FAIL = "[COUNTRY] Load COUNTRY Fail",

    UPDATE_COUNTRY = "[COUNTRY] Update COUNTRY",
    UPDATE_COUNTRY_SUCCESS = "[COUNTRY] Update COUNTRY Success",
    UPDATE_COUNTRY_FAIL = "[COUNTRY] Update COUNTRY Fail",

    DELETE_COUNTRY = "[COUNTRY] Delete COUNTRY",
    DELETE_COUNTRY_SUCCESS = "[COUNTRY] Delete COUNTRY Success",
    DELETE_COUNTRY_FAIL = "[COUNTRY] Delete COUNTRY Fail",

    ADD_COUNTRY = "[COUNTRY] Upload Data",
    ADD_COUNTRY_SUCCESS = "[COUNTRY] Upload Data Success",
    ADD_COUNTRY_FAIL = "[COUNTRY] Upload Data Fail",
}

export class LoadCountry implements Action {
    readonly type = CountryActionTypes.LOAD_COUNTRY;

    constructor(public payload: any) { }
}

export class LoadCountrySuccess implements Action {
    readonly type = CountryActionTypes.LOAD_COUNTRY_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadCountryFail implements Action {
    readonly type = CountryActionTypes.LOAD_COUNTRY_FAIL;

    constructor(public payload: any) { }
}

export class UpdateCountry implements Action {
    readonly type = CountryActionTypes.UPDATE_COUNTRY;

    constructor(public payload: any) { }
}

export class UpdateCountrySuccess implements Action {
    readonly type = CountryActionTypes.UPDATE_COUNTRY_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateCountryFail implements Action {
    readonly type = CountryActionTypes.UPDATE_COUNTRY_FAIL;

    constructor(public payload: any) { }
}

export class DeleteCountry implements Action {
    readonly type = CountryActionTypes.DELETE_COUNTRY;

    constructor(public payload: any) { }
}

export class DeleteCountrySuccess implements Action {
    readonly type = CountryActionTypes.DELETE_COUNTRY_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteCountryFail implements Action {
    readonly type = CountryActionTypes.DELETE_COUNTRY_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = CountryActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = CountryActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = CountryActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddCountry implements Action {
    readonly type = CountryActionTypes.ADD_COUNTRY;

    constructor(public payload: any) { }
}

export class AddCountrySuccess implements Action {
    readonly type = CountryActionTypes.ADD_COUNTRY_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddCountryFail implements Action {
    readonly type = CountryActionTypes.ADD_COUNTRY_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadCountry
    | LoadCountrySuccess
    | LoadCountryFail
    | UpdateCountry
    | UpdateCountrySuccess
    | UpdateCountryFail
    | DeleteCountry
    | DeleteCountrySuccess
    | DeleteCountryFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddCountry
    | AddCountrySuccess
    | AddCountryFail
