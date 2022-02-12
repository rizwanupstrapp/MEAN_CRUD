import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum RiderActionTypes {

    UPDATE_STATUS = "[RIDER] Update Status",
    UPDATE_STATUS_SUCCESS = "[RIDER]  Update Status Success",
    UPDATE_STATUS_FAIL = "[RIDER]  Update Status Fail",

    LOAD_RIDER = "[RIDER] Load RIDER",
    LOAD_RIDER_SUCCESS = "[RIDER] Load RIDER Success",
    LOAD_RIDER_FAIL = "[RIDER] Load RIDER Fail",

    UPDATE_RIDER = "[RIDER] Update RIDER",
    UPDATE_RIDER_SUCCESS = "[RIDER] Update RIDER Success",
    UPDATE_RIDER_FAIL = "[RIDER] Update RIDER Fail",

    UPDATE_BANK_DETAIL = "[RIDER] Update RIDER Bank Detail",
    UPDATE_BANK_DETAIL_SUCCESS = "[RIDER] Update RIDER Bank Success",
    UPDATE_BANK_DETAIL_FAIL = "[RIDER] Update RIDER Bank Fail",

    DELETE_RIDER = "[RIDER] Delete RIDER",
    DELETE_RIDER_SUCCESS = "[RIDER] Delete RIDER Success",
    DELETE_RIDER_FAIL = "[RIDER] Delete RIDER Fail",

    ADD_RIDER = "[RIDER] Add RIDER",
    ADD_RIDER_SUCCESS = "[RIDER] Add RIDER Success",
    ADD_RIDER_FAIL = "[RIDER] Add RIDER Fail",

    ADD_RIDER2 = "[RIDER] Add RIDER2",
    ADD_RIDER2_SUCCESS = "[RIDER] Add RIDER2 Success",
    ADD_RIDER2_FAIL = "[RIDER] Add RIDER2 Fail",


    UPLOAD_DATA = "[RIDER] Upload Data",
    UPLOAD_DATA_SUCCESS = "[RIDER] Upload Data Success",
    UPLOAD_DATA_FAIL = "[RIDER] Upload Data Fail",
}

export class LoadRider implements Action {
    readonly type = RiderActionTypes.LOAD_RIDER;

    constructor(public payload: any) { }
}

export class LoadRiderSuccess implements Action {
    readonly type = RiderActionTypes.LOAD_RIDER_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadRiderFail implements Action {
    readonly type = RiderActionTypes.LOAD_RIDER_FAIL;

    constructor(public payload: any) { }
}

export class UpdateRider implements Action {
    readonly type = RiderActionTypes.UPDATE_RIDER;

    constructor(public payload: any) { }
}

export class UpdateBankDetail implements Action {
    readonly type = RiderActionTypes.UPDATE_BANK_DETAIL;

    constructor(public payload: any) { }
}
export class UpdateBankDetailSuccess implements Action {
    readonly type = RiderActionTypes.UPDATE_BANK_DETAIL_SUCCESS;

    constructor(public payload: any) { }
}

export class UpdateBankDetailFail implements Action {
    readonly type = RiderActionTypes.UPDATE_BANK_DETAIL_FAIL;

    constructor(public payload: any) { }
}

export class UpdateRiderSuccess implements Action {
    readonly type = RiderActionTypes.UPDATE_RIDER_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateRiderFail implements Action {
    readonly type = RiderActionTypes.UPDATE_RIDER_FAIL;

    constructor(public payload: any) { }
}

export class DeleteRider implements Action {
    readonly type = RiderActionTypes.DELETE_RIDER

    constructor(public payload: any) { }
}

export class DeleteRiderSuccess implements Action {
    readonly type = RiderActionTypes.DELETE_RIDER_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteRiderFail implements Action {
    readonly type = RiderActionTypes.DELETE_RIDER_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = RiderActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = RiderActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = RiderActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddRider implements Action {
    readonly type = RiderActionTypes.ADD_RIDER

    constructor(public payload: any) {
     }
}

export class AddRiderSuccess implements Action {
    readonly type = RiderActionTypes.ADD_RIDER_SUCCESS;

    constructor(public payload: any) {
     }
}

export class AddRiderFail implements Action {
    readonly type = RiderActionTypes.ADD_RIDER_FAIL;

    constructor(public payload: any) { }
}

export class AddRider2 implements Action {
    readonly type = RiderActionTypes.ADD_RIDER2;

    constructor(public payload: any) {     }
}

export class AddRider2Success implements Action {
    readonly type = RiderActionTypes.ADD_RIDER2_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddRider2Fail implements Action {
    readonly type = RiderActionTypes.ADD_RIDER2_FAIL;

    constructor(public payload: any) { }
}

export class UploadData implements Action {
    readonly type = RiderActionTypes.UPLOAD_DATA;

    constructor(public payload: any) { }
}

export class UploadDataSuccess implements Action {
    readonly type = RiderActionTypes.UPLOAD_DATA_SUCCESS;

    constructor(public payload: Response) { }
}

export class UploadDataFail implements Action {
    readonly type = RiderActionTypes.UPLOAD_DATA_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadRider
    | LoadRiderSuccess
    | LoadRiderFail
    | UpdateRider
    | UpdateRiderSuccess
    | UpdateRiderFail
    | DeleteRider
    | DeleteRiderSuccess
    | DeleteRiderFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddRider
    | AddRiderSuccess
    | AddRiderFail
    | AddRider2
    | AddRider2Success
    | AddRider2Fail
    | UploadData
    | UploadDataSuccess
    | UploadDataFail
    | UpdateRider
    | UpdateRiderSuccess
    | UpdateRiderFail
    | UpdateBankDetail
    | UpdateBankDetailSuccess
    | UpdateBankDetailFail