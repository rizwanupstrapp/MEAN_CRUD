import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum DriverActionTypes {

    UPDATE_STATUS = "[DRIVER] Update Status",
    UPDATE_STATUS_SUCCESS = "[DRIVER]  Update Status Success",
    UPDATE_STATUS_FAIL = "[DRIVER]  Update Status Fail",

    LOAD_DRIVER = "[DRIVER] Load DRIVER",
    LOAD_DRIVER_SUCCESS = "[DRIVER] Load DRIVER Success",
    LOAD_DRIVER_FAIL = "[DRIVER] Load DRIVER Fail",
    
    
    LOAD_VEHICLE = "[DRIVER] Load Vehicle",
    LOAD_VEHICLE_SUCCESS = "[DRIVER] Load Vehicle Success",
    LOAD_VEHICLE_FAIL = "[DRIVER] Load Vehicle Fail",
    
    UPDATE_DRIVER = "[DRIVER] Update DRIVER",
    UPDATE_DRIVER_SUCCESS = "[DRIVER] Update DRIVER Success",
    UPDATE_DRIVER_FAIL = "[DRIVER] Update DRIVER Fail",

    UPDATE_BANK_DETAIL = "[DRIVER] Update Driver Bank Detail",
    UPDATE_BANK_DETAIL_SUCCESS = "[DRIVER] Update Driver Bank Success",
    UPDATE_BANK_DETAIL_FAIL = "[DRIVER] Update Driver Bank Fail",

    UPDATE_VEHICLE_INFO = "[DRIVER] Update Vehicle Info",
    UPDATE_VEHICLE_INFO_SUCCESS = "[DRIVER] Update Vehicle Info Success",
    UPDATE_VEHICLE_INFO_FAIL = "[DRIVER] Update Vehicle Info Fail",

    UPDATE_USER_ADDRESS = "[DRIVER] Update User Address",
    UPDATE_USER_ADDRESS_SUCCESS = "[DRIVER] Update User Addres Success",
    UPDATE_USER_ADDRESS_FAIL = "[DRIVER] Update User Addres Fail",

    UPDATE_USER_DETAILS = "[DRIVER] Update User Details",
    UPDATE_USER_DETAILS_SUCCESS = "[DRIVER] Update User Details Success",
    UPDATE_USER_DETAILS_FAIL = "[DRIVER] Update User Details Fail",

    UPDATE_USER_OTHER_DETAILS = "[DRIVER] Update User Other Details",
    UPDATE_USER_OTHER_DETAILS_SUCCESS = "[DRIVER] Update User Other Details Success",
    UPDATE_USER_OTHER_DETAILS_FAIL = "[DRIVER] Update User Other Details Fail",
    
    UPDATE_USER_CITIZEN_SHIP = "[DRIVER] Update User citizen ship Details",
    UPDATE_USER_CITIZEN_SHIP_SUCCESS = "[DRIVER] Update User citizen ship Details Success",
    UPDATE_USER_CITIZEN_SHIP_FAIL = "[DRIVER] Update User citizen ship Details Fail",

    DELETE_DRIVER = "[DRIVER] Delete DRIVER",
    DELETE_DRIVER_SUCCESS = "[DRIVER] Delete DRIVER Success",
    DELETE_DRIVER_FAIL = "[DRIVER] Delete DRIVER Fail",

    ADD_DRIVER = "[DRIVER] Add DRIVER",
    ADD_DRIVER_SUCCESS = "[DRIVER] Add DRIVER Success",
    ADD_DRIVER_FAIL = "[DRIVER] Add DRIVER Fail",

    ADD_DRIVER2 = "[DRIVER] Add DRIVER2",
    ADD_DRIVER2_SUCCESS = "[DRIVER] Add DRIVER2 Success",
    ADD_DRIVER2_FAIL = "[DRIVER] Add DRIVER2 Fail",


    UPLOAD_DATA = "[DRIVER] Upload Data",
    UPLOAD_DATA_SUCCESS = "[DRIVER] Upload Data Success",
    UPLOAD_DATA_FAIL = "[DRIVER] Upload Data Fail",
}

export class LoadDriver implements Action {
    readonly type = DriverActionTypes.LOAD_DRIVER;

    constructor(public payload: any) { }
}

export class LoadDriverSuccess implements Action {
    readonly type = DriverActionTypes.LOAD_DRIVER_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadDriverFail implements Action {
    readonly type = DriverActionTypes.LOAD_DRIVER_FAIL;

    constructor(public payload: any) { }
}

export class LoadVehicle implements Action {
    readonly type = DriverActionTypes.LOAD_VEHICLE;

    constructor(public payload: any) { }
}

export class LoadVehicleSuccess implements Action {
    readonly type = DriverActionTypes.LOAD_VEHICLE_SUCCESS;

    constructor(public payload: Response) { }
}

export class LoadVehicleFail implements Action {
    readonly type = DriverActionTypes.LOAD_VEHICLE_FAIL;

    constructor(public payload: any) { }
}

export class UpdateDriver implements Action {
    readonly type = DriverActionTypes.UPDATE_DRIVER;

    constructor(public payload: any) { }
}

export class UpdateDriverSuccess implements Action {
    readonly type = DriverActionTypes.UPDATE_DRIVER_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateDriverFail implements Action {
    readonly type = DriverActionTypes.UPDATE_DRIVER_FAIL;

    constructor(public payload: any) { }
}


export class UpdateBankDetail implements Action {
    readonly type = DriverActionTypes.UPDATE_BANK_DETAIL;

    constructor(public payload: any) { }
}

export class UpdateBankDetailSuccess implements Action {
    readonly type = DriverActionTypes.UPDATE_BANK_DETAIL_SUCCESS;

    constructor(public payload: any) { }
}

export class UpdateBankDetailFail implements Action {
    readonly type = DriverActionTypes.UPDATE_BANK_DETAIL_FAIL;

    constructor(public payload: any) { }
}

export class UpdateVehicleInfo implements Action {
    readonly type = DriverActionTypes.UPDATE_VEHICLE_INFO;

    constructor(public payload: any) { }
}

export class UpdateVehicleInfoSuccess implements Action {
    readonly type = DriverActionTypes.UPDATE_VEHICLE_INFO_SUCCESS;

    constructor(public payload: any) { }
}

export class UpdateVehicleInfoFail implements Action {
    readonly type = DriverActionTypes.UPDATE_VEHICLE_INFO_FAIL;

    constructor(public payload: any) { }
}

export class UpdateUserAddress implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_ADDRESS;

    constructor(public payload: any) { }
}

export class UpdateUserAddressSuccess implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_ADDRESS_SUCCESS;

    constructor(public payload: any) { }
}

export class UpdateUserAddressFail implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_ADDRESS_FAIL;

    constructor(public payload: any) { }
}

export class UpdateUserDetails implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_DETAILS;

    constructor(public payload: any) { }
}

export class UpdateUserDetailsSuccess implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_DETAILS_SUCCESS;

    constructor(public payload: any) { }
}

export class UpdateUserDetailsFail implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_DETAILS_FAIL;

    constructor(public payload: any) { }
}

export class UpdateUserOtherDetails implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_OTHER_DETAILS;

    constructor(public payload: any) { }
}

export class UpdateUserOtherDetailsSuccess implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_OTHER_DETAILS_SUCCESS;

    constructor(public payload: any) { }
}

export class UpdateUserOtherDetailsFail implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_OTHER_DETAILS_FAIL;

    constructor(public payload: any) { }
}

export class UpdateUserCitizenShip implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_CITIZEN_SHIP;

    constructor(public payload: any) { }
}

export class UpdateUserCitizenShipSuccess implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_CITIZEN_SHIP_SUCCESS;

    constructor(public payload: any) { }
}

export class UpdateUserCitizenShipFail implements Action {
    readonly type = DriverActionTypes.UPDATE_USER_CITIZEN_SHIP_FAIL;

    constructor(public payload: any) { }
}

export class DeleteDriver implements Action {
    readonly type = DriverActionTypes.DELETE_DRIVER;

    constructor(public payload: any) { }
}

export class DeleteDriverSuccess implements Action {
    readonly type = DriverActionTypes.DELETE_DRIVER_SUCCESS;

    constructor(public payload: Response) { }
}

export class DeleteDriverFail implements Action {
    readonly type = DriverActionTypes.DELETE_DRIVER_FAIL;

    constructor(public payload: any) { }
}

export class UpdateStatus implements Action {
    readonly type = DriverActionTypes.UPDATE_STATUS;

    constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
    readonly type = DriverActionTypes.UPDATE_STATUS_SUCCESS;

    constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
    readonly type = DriverActionTypes.UPDATE_STATUS_FAIL;

    constructor(public payload: any) { }
}


export class AddDriver implements Action {
    readonly type = DriverActionTypes.ADD_DRIVER;

    constructor(public payload: any) {
    }
}

export class AddDriverSuccess implements Action {
    readonly type = DriverActionTypes.ADD_DRIVER_SUCCESS;

    constructor(public payload: any) {
    }
}

export class AddDriverFail implements Action {
    readonly type = DriverActionTypes.ADD_DRIVER_FAIL;

    constructor(public payload: any) { }
}

export class AddDriver2 implements Action {
    readonly type = DriverActionTypes.ADD_DRIVER2;

    constructor(public payload: any) { }
}

export class AddDriver2Success implements Action {
    readonly type = DriverActionTypes.ADD_DRIVER2_SUCCESS;

    constructor(public payload: Response) { }
}

export class AddDriver2Fail implements Action {
    readonly type = DriverActionTypes.ADD_DRIVER2_FAIL;

    constructor(public payload: any) { }
}

export class UploadData implements Action {
    readonly type = DriverActionTypes.UPLOAD_DATA;

    constructor(public payload: any) { }
}

export class UploadDataSuccess implements Action {
    readonly type = DriverActionTypes.UPLOAD_DATA_SUCCESS;

    constructor(public payload: Response) { }
}

export class UploadDataFail implements Action {
    readonly type = DriverActionTypes.UPLOAD_DATA_FAIL;

    constructor(public payload: any) { }
}


export type action =
    | LoadDriver
    | LoadDriverSuccess
    | LoadDriverFail
    | LoadVehicle
    | LoadVehicleSuccess
    | LoadVehicleFail
    | UpdateDriver
    | UpdateDriverSuccess
    | UpdateDriverFail
    | DeleteDriver
    | DeleteDriverSuccess
    | DeleteDriverFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddDriver
    | AddDriverSuccess
    | AddDriverFail
    | AddDriver2
    | AddDriver2Success
    | AddDriver2Fail
    | UploadData
    | UploadDataSuccess
    | UploadDataFail
    | UpdateDriver
    | UpdateDriverSuccess
    | UpdateDriverFail
    | UpdateBankDetail
    | UpdateBankDetailSuccess
    | UpdateBankDetailFail
    | UpdateVehicleInfo
    | UpdateVehicleInfoSuccess
    | UpdateVehicleInfoFail
    | UpdateUserAddress
    | UpdateUserAddressSuccess
    | UpdateUserAddressFail
    | UpdateUserDetails
    | UpdateUserDetailsSuccess
    | UpdateUserDetailsFail
    | UpdateUserOtherDetails
    | UpdateUserOtherDetailsSuccess
    | UpdateUserOtherDetailsFail
    | UpdateUserCitizenShip
    | UpdateUserCitizenShipSuccess
    | UpdateUserCitizenShipFail