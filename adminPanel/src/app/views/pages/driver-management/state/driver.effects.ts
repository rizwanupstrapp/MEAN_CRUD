import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as driverActions from "./driver.actions";
import { Response } from "../../../../model/model";
import { DriverManagementService } from '../driver-management.service';


@Injectable()
export class DriverEffect {

    constructor(
        private actions$: Actions,
        private driverService: DriverManagementService
    ) { }

    @Effect()
    deleteDriver$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.DeleteDriver>(
            driverActions.DriverActionTypes.DELETE_DRIVER
        ),
        map((action: driverActions.DeleteDriver) => action.payload),
        mergeMap((id: any) =>
            this.driverService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new driverActions.DeleteDriverSuccess(response)
                ),
                catchError(err =>
                    of(new driverActions.DeleteDriverFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.UpdateStatus>(
            driverActions.DriverActionTypes.UPDATE_STATUS
        ),
        map((action: driverActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.driverService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new driverActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new driverActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadDriver$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.LoadDriver>(
            driverActions.DriverActionTypes.LOAD_DRIVER
        ),
        map((action: driverActions.LoadDriver) => action.payload),
        mergeMap((id: any) =>
            this.driverService.getDriverById(id).pipe(
                map(
                    (response: Response) =>
                        new driverActions.LoadDriverSuccess(response)
                ),
                catchError(err =>
                    of(new driverActions.LoadDriverFail(err)))
            )
        )
    );

    @Effect()
    loadVehicle$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.LoadVehicle>(
            driverActions.DriverActionTypes.LOAD_VEHICLE
        ),
        map((action: driverActions.LoadVehicle) => action.payload),
        mergeMap((data: any) =>
            this.driverService.getVehicleById(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new driverActions.LoadVehicleSuccess(response)
                ),
                catchError(err =>
                    of(new driverActions.LoadVehicleFail(err)))
            )
        )
    );

    @Effect()
    updateDriver$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.UpdateDriver>(
            driverActions.DriverActionTypes.UPDATE_DRIVER
        ),
        map((action: driverActions.UpdateDriver) => action.payload),
        mergeMap((data: any) =>
            this.driverService.updateDriver(data.id, data.data).pipe(
                map(
                    (updateDriver: Response) =>
                        new driverActions.UpdateDriverSuccess(updateDriver)
                ),
                catchError(err => of(new driverActions.UpdateDriverFail(err)))
            )
        )
    );

    @Effect()
    updateDriverBank$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.UpdateBankDetail>(
            driverActions.DriverActionTypes.UPDATE_BANK_DETAIL
        ),
        map((action: driverActions.UpdateBankDetail) => action.payload),
        mergeMap((data: any) =>
            this.driverService.updateBankDetail(data.id, data.data).pipe(
                map(
                    (updateDriver: Response) =>
                        new driverActions.UpdateBankDetailSuccess(updateDriver)
                ),
                catchError(err => of(new driverActions.UpdateBankDetailFail(err)))
            )
        )
    );

    @Effect()
    updateVehicleInfo$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.UpdateVehicleInfo>(
            driverActions.DriverActionTypes.UPDATE_VEHICLE_INFO
        ),
        map((action: driverActions.UpdateVehicleInfo) => action.payload),
        mergeMap((data: any) =>
            this.driverService.updateVehicleInfo(data.id, data.data).pipe(
                map(
                    (updateVehicleInfo: Response) =>
                        new driverActions.UpdateVehicleInfoSuccess(updateVehicleInfo)
                ),
                catchError(err => of(new driverActions.UpdateVehicleInfoFail(err)))
            )
        )
    );

    @Effect()
    updateUserAddress$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.UpdateUserAddress>(
            driverActions.DriverActionTypes.UPDATE_USER_ADDRESS
        ),
        map((action: driverActions.UpdateUserAddress) => action.payload),
        mergeMap((data: any) =>
            this.driverService.updateUserAddress(data.id, data.data).pipe(
                map(
                    (updateDriver: Response) =>
                        new driverActions.UpdateUserAddressSuccess(updateDriver)
                ),
                catchError(err => of(new driverActions.UpdateUserAddressFail(err)))
            )
        )
    );

    @Effect()
    updateUserDetails$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.UpdateUserDetails>(
            driverActions.DriverActionTypes.UPDATE_USER_DETAILS
        ),
        map((action: driverActions.UpdateUserDetails) => action.payload),
        mergeMap((data: any) =>
            this.driverService.updateLicenceDetails(data.id, data.data).pipe(
                map(
                    (UpdateUserDetails: Response) =>
                        new driverActions.UpdateUserDetailsSuccess(UpdateUserDetails)
                ),
                catchError(err => of(new driverActions.UpdateUserDetailsFail(err)))
            )
        )
    );

    @Effect()
    updateUserOtherDetails$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.UpdateUserOtherDetails>(
            driverActions.DriverActionTypes.UPDATE_USER_OTHER_DETAILS
        ),
        map((action: driverActions.UpdateUserOtherDetails) => action.payload),
        mergeMap((data: any) =>
            this.driverService.updateUserOtherDetails(data.id, data.data).pipe(
                map(
                    (UpdateUserOtherDetails: Response) =>
                        new driverActions.UpdateUserOtherDetailsSuccess(UpdateUserOtherDetails)
                ),
                catchError(err => of(new driverActions.UpdateUserOtherDetailsFail(err)))
            )
        )
    );

@Effect()
    updateUserCitizenShip$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.UpdateUserOtherDetails>(
            driverActions.DriverActionTypes.UPDATE_USER_CITIZEN_SHIP
        ),
        map((action: driverActions.UpdateUserOtherDetails) => action.payload),
        mergeMap((data: any) =>
            this.driverService.updateUserCitizenSHip(data.id, data.data).pipe(
                map(
                    (UpdateUserOtherDetails: Response) =>
                        new driverActions.UpdateUserCitizenShipSuccess(UpdateUserOtherDetails)
                ),
                catchError(err => of(new driverActions.UpdateUserCitizenShipFail(err)))
            )
        )
    );

    @Effect()
    addDriver$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.AddDriver>(
            driverActions.DriverActionTypes.ADD_DRIVER
        ),
        map((action: driverActions.AddDriver) => action.payload),
        mergeMap((data: any) =>
            this.driverService.createProfile(data).pipe(
                map(
                    (aaa: Response) => new driverActions.AddDriverSuccess(aaa)
                ),
                catchError(err =>
                    of(new driverActions.AddDriverFail(err)))
            )
        )
    );

    @Effect()
    addDriver2$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.AddDriver2>(
            driverActions.DriverActionTypes.ADD_DRIVER2
        ),
        map((action: driverActions.AddDriver2) => action.payload),
        mergeMap((data: any) =>
            this.driverService.updateProfile(data).pipe(
                map(
                    (response: Response) =>
                        new driverActions.AddDriver2Success(response)
                ),
                catchError(err =>
                    of(new driverActions.AddDriver2Fail(err)))
            )
        )
    );
    @Effect()
    uploadData$: Observable<Action> = this.actions$.pipe(
        ofType<driverActions.UploadData>(
            driverActions.DriverActionTypes.UPLOAD_DATA
        ),
        map((action: driverActions.UploadData) => action.payload),
        mergeMap((data: any) =>
            this.driverService.uploadData(data.updType, data.updDocs).pipe(
                map(
                    (updateAdmin: Response) =>
                        new driverActions.UploadDataSuccess(updateAdmin)
                ),
                catchError(err => of(new driverActions.UploadDataFail(err)))
            )
        )
    );
}