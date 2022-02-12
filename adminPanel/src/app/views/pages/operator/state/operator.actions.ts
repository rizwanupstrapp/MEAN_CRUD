import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum OperatorActionTypes {

    UPDATE_STATUS = "[OPERATOR] Update Status",
    UPDATE_STATUS_SUCCESS = "[OPERATOR]  Update Status Success",
    UPDATE_STATUS_FAIL = "[OPERATOR]  Update Status Fail",

    UPDATE_OPERATOR_BANK_DETAIL = "[OPERATOR] Update Operator Bank Detail",
    UPDATE_OPERATOR_BANK_DETAIL_SUCCESS = "[OPERATOR] Update Operator Bank Detail Success",
    UPDATE_OPERATOR_BANK_DETAIL_FAIL = "[OPERATOR] Update Operator Bank Detail Fail",

    LOAD_OPERATOR = "[OPERATOR] Load Operator",
    LOAD_OPERATOR_SUCCESS = "[OPERATOR] Load Operator Success",
    LOAD_OPERATOR_FAIL = "[OPERATOR] Load Operator Fail",

    UPDATE_OPERATOR = "[OPERATOR] Update Operator",
    UPDATE_OPERATOR_SUCCESS = "[OPERATOR] Update Operator Success",
    UPDATE_OPERATOR_FAIL = "[OPERATOR] Update Operator Fail",

    DELETE_OPERATOR = "[OPERATOR] Delete Operator",
    DELETE_OPERATOR_SUCCESS = "[OPERATOR] Delete Operator Success",
    DELETE_OPERATOR_FAIL = "[OPERATOR] Delete Operator Fail",

    ADD_OPERATOR = "[OPERATOR] Add Operator",
    ADD_OPERATOR_SUCCESS = "[OPERATOR] Add Operator Success",
    ADD_OPERATOR_FAIL = "[OPERATOR] Add Operator Fail",

    //--------
    LOAD_PREFERRED_LOCATION = "[OPERATOR] Load Preferred Location",
    LOAD_PREFERRED_LOCATION_SUCCESS = "[OPERATOR] Load Preferred Location Success",
    LOAD_PREFERRED_LOCATION_FAIL = "[OPERATOR] Load Preferred Location Fail",

    UPDATE_PREFERRED_LOCATION = "[OPERATOR] Update Preferred Location",
    UPDATE_PREFERRED_LOCATION_SUCCESS = "[OPERATOR] Update Preferred Location Success",
    UPDATE_PREFERRED_LOCATION_FAIL = "[OPERATOR] Update Preferred Location Fail",

    DELETE_PREFERRED_LOCATION = "[OPERATOR] Delete Preferred Location",
    DELETE_PREFERRED_LOCATION_SUCCESS = "[OPERATOR] Delete Preferred Location Success",
    DELETE_PREFERRED_LOCATION_FAIL = "[OPERATOR] Delete Preferred Location Fail",

    ADD_PREFERRED_LOCATION = "[OPERATOR] Add Preferred Location",
    ADD_PREFERRED_LOCATION_SUCCESS = "[OPERATOR] Add Preferred Location Success",
    ADD_PREFERRED_LOCATION_FAIL = "[OPERATOR] Add Preferred Location Fail",
    //--------
    UPDATE_OPERATOR_PROFILE = "[Operator] Update Operator Profile",
    UPDATE_OPERATOR_PROFILE_SUCCESS = "[Operator] Update Operator Profile Success",
    UPDATE_OPERATOR_PROFILE_FAIL = "[Operator] Update Operator Profile Fail",

    UPLOAD_DATA = "[OPERATOR] Upload Data",
    UPLOAD_DATA_SUCCESS = "[OPERATOR] Upload Data Success",
    UPLOAD_DATA_FAIL = "[OPERATOR] Upload Data Fail",

    UPDATE_OPERATOR_COMMISSION_DETAIL = "[OPERATOR] Update Operator Commission Detail",
    UPDATE_OPERATOR_COMMISSION_DETAIL_SUCCESS = "[OPERATOR] Update Operator Commission Detail Success",
    UPDATE_OPERATOR_COMMISSION_DETAIL_FAIL = "[OPERATOR] Update Operator Commission Detail Fail",

    UPDATE_OPERATOR_INVOICE_DETAIL = "[OPERATOR] Update Operator Invoice Detail",
    UPDATE_OPERATOR_INVOICE_DETAIL_SUCCESS = "[OPERATOR] Update Operator Invoice Detail Success",
    UPDATE_OPERATOR_INVOICE_DETAIL_FAIL = "[OPERATOR] Update Operator Invoice Detail Fail",
}

export class LoadOperator implements Action {
    readonly type = OperatorActionTypes.LOAD_OPERATOR;

    constructor(public payload: any) { }
}

export class LoadOperatorSuccess implements Action {
    readonly type = OperatorActionTypes.LOAD_OPERATOR_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadOperatorFail implements Action {
    readonly type = OperatorActionTypes.LOAD_OPERATOR_FAIL;

    constructor(public payload: any) { }
}

export class UpdateOperator implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR;

    constructor(public payload: any) { }
}

export class UpdateOperatorSuccess implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateOperatorFail implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_FAIL;

    constructor(public payload: any) { }
}


export class UpdateOperatorBankDetail implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_BANK_DETAIL;

    constructor(public payload: any) { }
}

export class UpdateOperatorBankDetailSuccess implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_BANK_DETAIL_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateOperatorBankDetailFail implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_BANK_DETAIL_FAIL;

    constructor(public payload: any) { }
}

export class DeleteOperator implements Action {
    readonly type = OperatorActionTypes.DELETE_OPERATOR;

    constructor(public payload: any) { }
}

export class DeleteOperatorSuccess implements Action {
    readonly type = OperatorActionTypes.DELETE_OPERATOR_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteOperatorFail implements Action {
    readonly type = OperatorActionTypes.DELETE_OPERATOR_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = OperatorActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = OperatorActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = OperatorActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddOperator implements Action {
    readonly type = OperatorActionTypes.ADD_OPERATOR;

    constructor(public payload: any) {
    }
}

export class AddOperatorSuccess implements Action {
    readonly type = OperatorActionTypes.ADD_OPERATOR_SUCCESS;

    constructor(public payload: any) {
    }
}

export class AddOperatorFail implements Action {
    readonly type = OperatorActionTypes.ADD_OPERATOR_FAIL;

    constructor(public payload: any) { }
}

export class UpdateOperatorProfile implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_PROFILE;

    constructor(public payload: any) { }
}

export class UpdateOperatorProfileSuccess implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_PROFILE_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateOperatorProfileFail implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_PROFILE_FAIL;

    constructor(public payload: any) { }
}

export class UploadData implements Action {
    readonly type = OperatorActionTypes.UPLOAD_DATA;

    constructor(public payload: any) { }
}

export class UploadDataSuccess implements Action {
    readonly type = OperatorActionTypes.UPLOAD_DATA_SUCCESS;

    constructor(public payload: Response) { }
}

export class UploadDataFail implements Action {
    readonly type = OperatorActionTypes.UPLOAD_DATA_FAIL;

    constructor(public payload: any) { }
}

export class UpdateOperatorCommissionDetail implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_COMMISSION_DETAIL;

    constructor(public payload: any) { }
}

export class UpdateOperatorCommissionDetailSuccess implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_COMMISSION_DETAIL_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateOperatorCommissionDetailFail implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_COMMISSION_DETAIL_FAIL;

    constructor(public payload: any) { }
}

export class UpdateOperatorInvoiceDetail implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_INVOICE_DETAIL;

    constructor(public payload: any) { }
}

export class UpdateOperatorInvoiceDetailSuccess implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_INVOICE_DETAIL_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateOperatorInvoiceDetailFail implements Action {
    readonly type = OperatorActionTypes.UPDATE_OPERATOR_INVOICE_DETAIL_FAIL;

    constructor(public payload: any) { }
}

//----
export class LoadPreferredLocation implements Action {
    readonly type = OperatorActionTypes.LOAD_PREFERRED_LOCATION;

    constructor(public payload: any) { }
}
export class LoadPreferredLocationSuccess implements Action {
    readonly type = OperatorActionTypes.LOAD_PREFERRED_LOCATION_SUCCESS;

    constructor(public payload: Response) { }
}
export class LoadPreferredLocationFail implements Action {
    readonly type = OperatorActionTypes.LOAD_PREFERRED_LOCATION_FAIL;

    constructor(public payload: any) { }
}
export class UpdatePreferredLocation implements Action {
    readonly type = OperatorActionTypes.UPDATE_PREFERRED_LOCATION;

    constructor(public payload: any) { }
}
export class UpdatePreferredLocationSuccess implements Action {
    readonly type = OperatorActionTypes.UPDATE_PREFERRED_LOCATION_SUCCESS;

    constructor(public payload: Response) { }
}
export class UpdatePreferredLocationFail implements Action {
    readonly type = OperatorActionTypes.UPDATE_PREFERRED_LOCATION_FAIL;

    constructor(public payload: any) { }
}
export class AddPreferredLocation implements Action {
    readonly type = OperatorActionTypes.ADD_PREFERRED_LOCATION;

    constructor(public payload: any) {
    }
}
export class AddPreferredLocationSuccess implements Action {
    readonly type = OperatorActionTypes.ADD_PREFERRED_LOCATION_SUCCESS;

    constructor(public payload: any) {
    }
}
export class AddPreferredLocationFail implements Action {
    readonly type = OperatorActionTypes.ADD_PREFERRED_LOCATION_FAIL;

    constructor(public payload: any) { }
}
export class DeletePreferredLocation implements Action {
    readonly type = OperatorActionTypes.DELETE_PREFERRED_LOCATION;

    constructor(public payload: any) { }
}

export class DeletePreferredLocationSuccess implements Action {
    readonly type = OperatorActionTypes.DELETE_PREFERRED_LOCATION_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeletePreferredLocationFail implements Action {
    readonly type = OperatorActionTypes.DELETE_PREFERRED_LOCATION_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadOperator
    | LoadOperatorSuccess
    | LoadOperatorFail
    | UpdateOperator
    | UpdateOperatorSuccess
    | UpdateOperatorFail
    | DeleteOperator
    | DeleteOperatorSuccess
    | DeleteOperatorFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddOperator
    | AddOperatorSuccess
    | AddOperatorFail
    | UpdateOperatorProfile
    | UpdateOperatorProfileSuccess
    | UpdateOperatorProfileFail
    | UploadData
    | UploadDataSuccess
    | UploadDataFail
    | UpdateOperatorBankDetail
    | UpdateOperatorBankDetailSuccess
    | UpdateOperatorBankDetailFail
    | UpdateOperatorCommissionDetail
    | UpdateOperatorCommissionDetailSuccess
    | UpdateOperatorCommissionDetailFail
    | UpdateOperatorInvoiceDetail
    | UpdateOperatorInvoiceDetailSuccess
    | UpdateOperatorInvoiceDetailFail
    | LoadPreferredLocation
    | LoadPreferredLocationSuccess
    | LoadPreferredLocationFail
    | UpdatePreferredLocation
    | UpdatePreferredLocationSuccess
    | UpdatePreferredLocationFail
    | AddPreferredLocation
    | AddPreferredLocationSuccess
    | AddPreferredLocationFail
    | DeletePreferredLocation
    | DeletePreferredLocationSuccess
    | DeletePreferredLocationFail
