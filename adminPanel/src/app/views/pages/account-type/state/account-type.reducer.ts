import * as accountTypeActions from "./account-type.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function AccountTypeReducer(
    state = initialState,
    action: accountTypeActions.action
) {
    switch (action.type) {
        // for Account Type load-----------------------------
        case accountTypeActions.AccountTypeActionTypes.LOAD_ACCOUNT_TYPE_SUCCESS: {
            return action.payload;
        }
        case accountTypeActions.AccountTypeActionTypes.LOAD_ACCOUNT_TYPE_FAIL: {
            return action.payload.error;
        }
        // for Account Type delete-----------------------------
        case accountTypeActions.AccountTypeActionTypes.DELETE_ACCOUNT_TYPE_SUCCESS: {
            return action.payload;
        }
        case accountTypeActions.AccountTypeActionTypes.DELETE_ACCOUNT_TYPE_FAIL: {
            return action.payload.error
        }

        // for Account Type update-----------------------------
        case accountTypeActions.AccountTypeActionTypes.UPDATE_ACCOUNT_TYPE_SUCCESS: {
            return action.payload
        }
        case accountTypeActions.AccountTypeActionTypes.UPDATE_ACCOUNT_TYPE_FAIL: {
            return action.payload.error;
        }

        // for Account Type upadat status-----------------------------
        case accountTypeActions.AccountTypeActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case accountTypeActions.AccountTypeActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Account Type add-----------------------------
        case accountTypeActions.AccountTypeActionTypes.ADD_ACCOUNT_TYPE_SUCCESS: {
            return action.payload
        }
        case accountTypeActions.AccountTypeActionTypes.ADD_ACCOUNT_TYPE_FAIL: {
            return action.payload.error;
        }


    }

}

const getAccountTypeState = createFeatureSelector(
    "account-type"
);

export const selectPageState = createSelector(
    getAccountTypeState,
    state => state // return error message
)


