import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum FareCalculationActionTypes {

    UPDATE_STATUS = "[FARECALCULATION] Update Status",
    UPDATE_STATUS_SUCCESS = "[FARECALCULATION]  Update Status Success",
    UPDATE_STATUS_FAIL = "[FARECALCULATION]  Update Status Fail",

    LOAD_FARECALCULATION = "[FARECALCULATION] Load FARECALCULATION",
    LOAD_FARECALCULATION_SUCCESS = "[FARECALCULATION] Load FARECALCULATION Success",
    LOAD_FARECALCULATION_FAIL = "[FARECALCULATION] Load FARECALCULATION Fail",

    UPDATE_FARECALCULATION = "[FARECALCULATION] Update FARECALCULATION",
    UPDATE_FARECALCULATION_SUCCESS = "[FARECALCULATION] Update FARECALCULATION Success",
    UPDATE_FARECALCULATION_FAIL = "[FARECALCULATION] Update FARECALCULATION Fail",

    DELETE_FARECALCULATION = "[FARECALCULATION] Delete FARECALCULATION",
    DELETE_FARECALCULATION_SUCCESS = "[FARECALCULATION] Delete FARECALCULATION Success",
    DELETE_FARECALCULATION_FAIL = "[FARECALCULATION] Delete FARECALCULATION Fail",

    ADD_FARECALCULATION = "[FARECALCULATION] Upload Data",
    ADD_FARECALCULATION_SUCCESS = "[FARECALCULATION] Upload Data Success",
    ADD_FARECALCULATION_FAIL = "[FARECALCULATION] Upload Data Fail",

    UPLOAD_DATA = "[FARECALCULATION] Upload Data",
    UPLOAD_DATA_SUCCESS = "[FARECALCULATION] Upload Data Success",
    UPLOAD_DATA_FAIL = "[FARECALCULATION] Upload Data Fail",
}

export class LoadFareCalculation implements Action {
    readonly type = FareCalculationActionTypes.LOAD_FARECALCULATION;

    constructor(public payload: any) { }
}

export class LoadFareCalculationSuccess implements Action {
    readonly type = FareCalculationActionTypes.LOAD_FARECALCULATION_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadFareCalculationFail implements Action {
    readonly type = FareCalculationActionTypes.LOAD_FARECALCULATION_FAIL;

    constructor(public payload: any) { }
}

export class UpdateFareCalculation implements Action {
    readonly type = FareCalculationActionTypes.UPDATE_FARECALCULATION;

    constructor(public payload: any) { }
}

export class UpdateFareCalculationSuccess implements Action {
    readonly type = FareCalculationActionTypes.UPDATE_FARECALCULATION_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateFareCalculationFail implements Action {
    readonly type = FareCalculationActionTypes.UPDATE_FARECALCULATION_FAIL;

    constructor(public payload: any) { }
}

export class DeleteFareCalculation implements Action {
    readonly type = FareCalculationActionTypes.DELETE_FARECALCULATION;

    constructor(public payload: any) { }
}

export class DeleteFareCalculationSuccess implements Action {
    readonly type = FareCalculationActionTypes.DELETE_FARECALCULATION_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteFareCalculationFail implements Action {
    readonly type = FareCalculationActionTypes.DELETE_FARECALCULATION_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = FareCalculationActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = FareCalculationActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = FareCalculationActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddFareCalculation implements Action {
    readonly type = FareCalculationActionTypes.ADD_FARECALCULATION;

    constructor(public payload: any) { }
}

export class AddFareCalculationSuccess implements Action {
    readonly type = FareCalculationActionTypes.ADD_FARECALCULATION_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddFareCalculationFail implements Action {
    readonly type = FareCalculationActionTypes.ADD_FARECALCULATION_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadFareCalculation
    | LoadFareCalculationSuccess
    | LoadFareCalculationFail
    | UpdateFareCalculation
    | UpdateFareCalculationSuccess
    | UpdateFareCalculationFail
    | DeleteFareCalculation
    | DeleteFareCalculationSuccess
    | DeleteFareCalculationFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddFareCalculation
    | AddFareCalculationSuccess
    | AddFareCalculationFail

