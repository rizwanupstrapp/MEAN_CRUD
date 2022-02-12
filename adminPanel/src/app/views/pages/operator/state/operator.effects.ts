import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as operatorActions from "./operator.actions";
import { Response } from "../../../../model/model";
import { OperatorService } from '../operator.service';


@Injectable()
export class OperatorEffect {

    constructor(
        private actions$: Actions,
        private operatorService: OperatorService
    ) { }

    @Effect()
    deleteOperator$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.DeleteOperator>(
            operatorActions.OperatorActionTypes.DELETE_OPERATOR
        ),
        map((action: operatorActions.DeleteOperator) => action.payload),
        mergeMap((id: any) =>
            this.operatorService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new operatorActions.DeleteOperatorSuccess(response)
                ),
                catchError(err =>
                    of(new operatorActions.DeleteOperatorFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.UpdateStatus>(
            operatorActions.OperatorActionTypes.UPDATE_STATUS
        ),
        map((action: operatorActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.operatorService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new operatorActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new operatorActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadOperator$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.LoadOperator>(
            operatorActions.OperatorActionTypes.LOAD_OPERATOR
        ),
        map((action: operatorActions.LoadOperator) => action.payload),
        mergeMap((id: any) =>
            this.operatorService.getOperatorById(id).pipe(
                map(
                    (response: Response) =>
                        new operatorActions.LoadOperatorSuccess(response)
                ),
                catchError(err =>
                    of(new operatorActions.LoadOperatorFail(err)))
            )
        )
    );

    @Effect()
    updateOperator$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.UpdateOperator>(
            operatorActions.OperatorActionTypes.UPDATE_OPERATOR
        ),
        map((action: operatorActions.UpdateOperator) => action.payload),
        mergeMap((data: any) =>
            this.operatorService.updateOperator(data.id, data.data).pipe(
                map(
                    (updateOperator: Response) =>
                        new operatorActions.UpdateOperatorSuccess(updateOperator)
                ),
                catchError(err => of(new operatorActions.UpdateOperatorFail(err)))
            )
        )
    );


    @Effect()
    updateOperatorBankDetail$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.UpdateOperatorBankDetail>(
            operatorActions.OperatorActionTypes.UPDATE_OPERATOR_BANK_DETAIL
        ),
        map((action: operatorActions.UpdateOperatorBankDetail) => action.payload),
        mergeMap((data: any) =>
            this.operatorService.updateBankDetail(data.id, data.data).pipe(
                map(
                    (updateOperatorBank: Response) =>
                        new operatorActions.UpdateOperatorBankDetailSuccess(updateOperatorBank)
                ),
                catchError(err => of(new operatorActions.UpdateOperatorBankDetailFail(err)))
            )
        )
    );


    @Effect()
    addOperator$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.AddOperator>(
            operatorActions.OperatorActionTypes.ADD_OPERATOR
        ),
        map((action: operatorActions.AddOperator) => action.payload),
        mergeMap((data: any) =>
            this.operatorService.createOperatorProfile(data).pipe(
                map(
                    (aaa: Response) => new operatorActions.AddOperatorSuccess(aaa)
                ),
                catchError(err =>
                    of(new operatorActions.AddOperatorFail(err)))
            )
        )
    );

    @Effect()
    updateOperatorProfile$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.UpdateOperatorProfile>(
            operatorActions.OperatorActionTypes.UPDATE_OPERATOR_PROFILE
        ),
        map((action: operatorActions.UpdateOperatorProfile) => action.payload),
        mergeMap((data: any) =>
            this.operatorService.updateOperatorProfile(data.id, data.data).pipe(
                map(
                    (udateOperator: Response) =>
                        new operatorActions.UpdateOperatorProfileSuccess(udateOperator)
                ),
                catchError(err =>
                    of(new operatorActions.UpdateOperatorProfileFail(err)))
            )
        )
    );
    @Effect()
    uploadData$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.UploadData>(
            operatorActions.OperatorActionTypes.UPLOAD_DATA
        ),
        map((action: operatorActions.UploadData) => action.payload),
        mergeMap((data: any) =>
            this.operatorService.uploadData(data.updType, data.updDocs).pipe(
                map(
                    (updateAdmin: Response) =>
                        new operatorActions.UploadDataSuccess(updateAdmin)
                ),
                catchError(err => of(new operatorActions.UploadDataFail(err)))
            )
        )
    );

    @Effect()
    updateCommissionDetail$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.UpdateOperatorCommissionDetail>(
            operatorActions.OperatorActionTypes.UPDATE_OPERATOR_COMMISSION_DETAIL
        ),
        map((action: operatorActions.UpdateOperatorCommissionDetail) => action.payload),
        mergeMap((data: any) =>
            this.operatorService.updateCommissionDetail(data.id, data.data).pipe(
                map(
                    (updateOperatorCommission: Response) =>
                        new operatorActions.UpdateOperatorCommissionDetailSuccess(updateOperatorCommission)
                ),
                catchError(err => of(new operatorActions.UpdateOperatorCommissionDetailFail(err)))
            )
        )
    );

    @Effect()
    updateInvoiceDetail$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.UpdateOperatorInvoiceDetail>(
            operatorActions.OperatorActionTypes.UPDATE_OPERATOR_INVOICE_DETAIL
        ),
        map((action: operatorActions.UpdateOperatorInvoiceDetail) => action.payload),
        mergeMap((data: any) =>
            this.operatorService.updateInvoiceDetail(data.id, data.data).pipe(
                map(
                    (updateOperatorInvoice: Response) =>
                        new operatorActions.UpdateOperatorInvoiceDetailSuccess(updateOperatorInvoice)
                ),
                catchError(err => of(new operatorActions.UpdateOperatorInvoiceDetailFail(err)))
            )
        )
    );

    //-----
    // @Effect()
    // deletePreferredLocation$: Observable<Action> = this.actions$.pipe(
    //     ofType<operatorActions.DeletePreferredLocation>(
    //         operatorActions.OperatorActionTypes.DELETE_PREFERRED_LOCATION
    //     ),
    //     map((action: operatorActions.DeletePreferredLocation) => action.payload),
    //     mergeMap((id: any) =>
    //         this.operatorService.deletePreferredLocationById(id).pipe(
    //             map(
    //                 (response: Response) =>
    //                     new operatorActions.DeletePreferredLocationSuccess(response)
    //             ),
    //             catchError(err =>
    //                 of(new operatorActions.DeletePreferredLocationFail(err)))
    //         )
    //     )
    // );

    // @Effect()
    // loadPreferredLocation$: Observable<Action> = this.actions$.pipe(
    //     ofType<operatorActions.LoadPreferredLocation>(
    //         operatorActions.OperatorActionTypes.LOAD_PREFERRED_LOCATION
    //     ),
    //     map((action: operatorActions.LoadPreferredLocation) => action.payload),
    //     mergeMap((id: any) =>
    //         this.operatorService.getPreferredLocationById(id).pipe(
    //             map(
    //                 (response: Response) =>
    //                     new operatorActions.LoadPreferredLocationSuccess(response)
    //             ),
    //             catchError(err =>
    //                 of(new operatorActions.LoadPreferredLocationFail(err)))
    //         )
    //     )
    // );

    @Effect()
    updatePreferredLocation$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.UpdatePreferredLocation>(
            operatorActions.OperatorActionTypes.UPDATE_PREFERRED_LOCATION_FAIL
        ),
        map((action: operatorActions.UpdatePreferredLocation) => action.payload),
        mergeMap((data: any) =>
            this.operatorService.updatePreferredLocation(data.id, data.data).pipe(
                map(
                    (updatePreferredLocation: Response) =>
                        new operatorActions.UpdatePreferredLocationSuccess(updatePreferredLocation)
                ),
                catchError(err => of(new operatorActions.UpdatePreferredLocationFail(err)))
            )
        )
    );


    // @Effect()
    // addPreferredLocation$: Observable<Action> = this.actions$.pipe(
    //     ofType<operatorActions.AddPreferredLocation>(
    //         operatorActions.OperatorActionTypes.ADD_PREFERRED_LOCATION
    //     ),
    //     map((action: operatorActions.AddPreferredLocation) => action.payload),
    //     mergeMap((data: any) =>
    //         this.operatorService.createPreferredLocation(data).pipe(
    //             map(
    //                 (aaa: Response) => new operatorActions.AddPreferredLocationSuccess(aaa)
    //             ),
    //             catchError(err =>
    //                 of(new operatorActions.AddPreferredLocationFail(err)))
    //         )
    //     )
    // );


    @Effect()
    addPreferredLocation$: Observable<Action> = this.actions$.pipe(
        ofType<operatorActions.AddPreferredLocation>(
            operatorActions.OperatorActionTypes.ADD_PREFERRED_LOCATION
        ),
        map((action: operatorActions.AddPreferredLocation) => action.payload),
        mergeMap((data: any) =>
            this.operatorService.createPreferredLocation(data.id, data.data).pipe(
                map(
                    (updateOperator: Response) =>
                        new operatorActions.AddPreferredLocationSuccess(updateOperator)
                ),
                catchError(err => of(new operatorActions.AddPreferredLocationFail(err)))
            )
        )
    );

}

