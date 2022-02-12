import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as accountTypeActions from "./account-type.actions";
import { Response } from "../../../../model/model";
import { AccountTypeService } from '../account-type.service';


@Injectable()
export class AccountTypeEffect {

    constructor(
        private actions$: Actions,
        private accountTypeService: AccountTypeService
    ) { }

    @Effect()
    deleteAccountType$: Observable<Action> = this.actions$.pipe(
        ofType<accountTypeActions.DeleteAccountType>(
            accountTypeActions.AccountTypeActionTypes.DELETE_ACCOUNT_TYPE
        ),
        map((action: accountTypeActions.DeleteAccountType) => action.payload),
        mergeMap((id: any) =>
            this.accountTypeService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new accountTypeActions.DeleteAccountTypeSuccess(response)
                ),
                catchError(err =>
                    of(new accountTypeActions.DeleteAccountTypeFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<accountTypeActions.UpdateStatus>(
            accountTypeActions.AccountTypeActionTypes.UPDATE_STATUS
        ),
        map((action: accountTypeActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.accountTypeService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new accountTypeActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new accountTypeActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadAccountType$: Observable<Action> = this.actions$.pipe(
        ofType<accountTypeActions.LoadAccountType>(
            accountTypeActions.AccountTypeActionTypes.LOAD_ACCOUNT_TYPE
        ),
        map((action: accountTypeActions.LoadAccountType) => action.payload),
        mergeMap((id: any) =>
            this.accountTypeService.getAccountTypeById(id).pipe(
                map(
                    (response: Response) =>
                        new accountTypeActions.LoadAccountTypeSuccess(response)
                ),
                catchError(err =>
                    of(new accountTypeActions.LoadAccountTypeFail(err)))
            )
        )
    );

    @Effect()
    updateAccountType$: Observable<Action> = this.actions$.pipe(
        ofType<accountTypeActions.UpdateAccountType>(
            accountTypeActions.AccountTypeActionTypes.UPDATE_ACCOUNT_TYPE
        ),
        map((action: accountTypeActions.UpdateAccountType) => action.payload),
        mergeMap((data: any) =>
            this.accountTypeService.updateAccountType(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new accountTypeActions.UpdateAccountTypeSuccess(response)
                ),
                catchError(err => of(new accountTypeActions.UpdateAccountTypeFail(err)))
            )
        )
    );


    @Effect()
    addAccountType$: Observable<Action> = this.actions$.pipe(
        ofType<accountTypeActions.AddAccountType>(
            accountTypeActions.AccountTypeActionTypes.ADD_ACCOUNT_TYPE        ),
        map((action: accountTypeActions.AddAccountType) => action.payload),
        mergeMap((data: any) =>
            this.accountTypeService.addAccountType(data).pipe(
                map(
                    (response: Response) =>
                        new accountTypeActions.AddAccountTypeSuccess(response)
                ),
                catchError(err =>
                    of(new accountTypeActions.AddAccountTypeFail(err)))
            )
        )
    );
}