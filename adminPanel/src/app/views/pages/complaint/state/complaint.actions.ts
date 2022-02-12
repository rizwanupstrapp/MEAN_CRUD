import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum ComplaintActionTypes {

    UPDATE_STATUS = "[COMPLAINT] Update Status",
    UPDATE_STATUS_SUCCESS = "[COMPLAINT]  Update Status Success",
    UPDATE_STATUS_FAIL = "[COMPLAINT]  Update Status Fail",

    LOAD_COMPLAINT = "[COMPLAINT] Load COMPLAINT",
    LOAD_COMPLAINT_SUCCESS = "[COMPLAINT] Load COMPLAINT Success",
    LOAD_COMPLAINT_FAIL = "[COMPLAINT] Load COMPLAINT Fail",

    UPDATE_COMPLAINT = "[COMPLAINT] Update COMPLAINT",
    UPDATE_COMPLAINT_SUCCESS = "[COMPLAINT] Update COMPLAINT Success",
    UPDATE_COMPLAINT_FAIL = "[COMPLAINT] Update COMPLAINT Fail",

    DELETE_COMPLAINT = "[COMPLAINT] Delete COMPLAINT",
    DELETE_COMPLAINT_SUCCESS = "[COMPLAINT] Delete COMPLAINT Success",
    DELETE_COMPLAINT_FAIL = "[COMPLAINT] Delete COMPLAINT Fail",

    ADD_COMPLAINT = "[COMPLAINT] Upload Data",
    ADD_COMPLAINT_SUCCESS = "[COMPLAINT] Upload Data Success",
    ADD_COMPLAINT_FAIL = "[COMPLAINT] Upload Data Fail",

    UPLOAD_DATA = "[COMPLAINT] Upload Data",
    UPLOAD_DATA_SUCCESS = "[COMPLAINT] Upload Data Success",
    UPLOAD_DATA_FAIL = "[COMPLAINT] Upload Data Fail",
}

export class LoadComplaint implements Action {
    readonly type = ComplaintActionTypes.LOAD_COMPLAINT;

    constructor(public payload: any) { }
}

export class LoadComplaintSuccess implements Action {
    readonly type = ComplaintActionTypes.LOAD_COMPLAINT_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadComplaintFail implements Action {
    readonly type = ComplaintActionTypes.LOAD_COMPLAINT_FAIL;

    constructor(public payload: any) { }
}

export class UpdateComplaint implements Action {
    readonly type = ComplaintActionTypes.UPDATE_COMPLAINT;

    constructor(public payload: any) { }
}

export class UpdateComplaintSuccess implements Action {
    readonly type = ComplaintActionTypes.UPDATE_COMPLAINT_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateComplaintFail implements Action {
    readonly type = ComplaintActionTypes.UPDATE_COMPLAINT_FAIL;

    constructor(public payload: any) { }
}

export class DeleteComplaint implements Action {
    readonly type = ComplaintActionTypes.DELETE_COMPLAINT;

    constructor(public payload: any) { }
}

export class DeleteComplaintSuccess implements Action {
    readonly type = ComplaintActionTypes.DELETE_COMPLAINT_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteComplaintFail implements Action {
    readonly type = ComplaintActionTypes.DELETE_COMPLAINT_FAIL;

    constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
    readonly type = ComplaintActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = ComplaintActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = ComplaintActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


// export class AddComplaint implements Action {
//     readonly type = ComplaintActionTypes.ADD_COMPLAINT;

//     constructor(public payload: any) { }
// }

// export class AddComplaintSuccess implements Action {
//     readonly type = ComplaintActionTypes.ADD_COMPLAINT_SUCCESS;

//     constructor(public payload: Response) { }
// }

// export class AddComplaintFail implements Action {
//     readonly type = ComplaintActionTypes.ADD_COMPLAINT_FAIL;

//     constructor(public payload: any) { }
// }


export type action =
    | LoadComplaint
    | LoadComplaintSuccess
    | LoadComplaintFail
    | UpdateComplaint
    | UpdateComplaintSuccess
    | UpdateComplaintFail
    | DeleteComplaint
    | DeleteComplaintSuccess
    | DeleteComplaintFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
   

