import * as operatorActions from "./operator.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function operatorReducer(
    state = initialState,
    action: operatorActions.action
) {
    switch (action.type) {

        // for Operator add-----------------------------
        case operatorActions.OperatorActionTypes.ADD_OPERATOR_SUCCESS: {
            return action.payload
        }
        case operatorActions.OperatorActionTypes.ADD_OPERATOR_FAIL: {
            return action.payload.error;
        }

        // for Operator load-----------------------------
        case operatorActions.OperatorActionTypes.LOAD_OPERATOR_SUCCESS: {
            return action.payload;
        }
        case operatorActions.OperatorActionTypes.LOAD_OPERATOR_FAIL: {
            return action.payload.error;
        }
        // for Operator delete-----------------------------
        case operatorActions.OperatorActionTypes.DELETE_OPERATOR_SUCCESS: {
            return action.payload;
        }
        case operatorActions.OperatorActionTypes.DELETE_OPERATOR_FAIL: {
            return action.payload.error
        }

        // for Operator update-----------------------------
        case operatorActions.OperatorActionTypes.UPDATE_OPERATOR_SUCCESS: {
            return action.payload
        }
        case operatorActions.OperatorActionTypes.UPDATE_OPERATOR_FAIL: {
            return action.payload.error;
        }

        // for Operator update-----------------------------
        case operatorActions.OperatorActionTypes.UPDATE_OPERATOR_BANK_DETAIL_SUCCESS: {
            return action.payload
        }
        case operatorActions.OperatorActionTypes.UPDATE_OPERATOR_BANK_DETAIL_FAIL: {
            return action.payload.error;
        }


        // for Operator upadat status-----------------------------
        case operatorActions.OperatorActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case operatorActions.OperatorActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Upadte Operator Profile -----------------------------
        case operatorActions.OperatorActionTypes.UPDATE_OPERATOR_PROFILE_SUCCESS: {

            return action.payload
        }
        case operatorActions.OperatorActionTypes.UPDATE_OPERATOR_PROFILE_FAIL: {

            return action.payload.error;
        }

        // for operator upadate-----------------------------
        case operatorActions.OperatorActionTypes.UPLOAD_DATA_SUCCESS: {

            return action.payload
        }
        case operatorActions.OperatorActionTypes.UPLOAD_DATA_FAIL: {

            return action.payload.error;
        }

        // for Operator update-----------------------------
        case operatorActions.OperatorActionTypes.UPDATE_OPERATOR_COMMISSION_DETAIL_SUCCESS: {
            return action.payload
        }
        case operatorActions.OperatorActionTypes.UPDATE_OPERATOR_COMMISSION_DETAIL_FAIL: {
            return action.payload.error;
        }

        // for Operator update-----------------------------
        case operatorActions.OperatorActionTypes.UPDATE_OPERATOR_INVOICE_DETAIL_SUCCESS: {
            return action.payload
        }
        case operatorActions.OperatorActionTypes.UPDATE_OPERATOR_INVOICE_DETAIL_FAIL: {
            return action.payload.error;
        }

        // for Preferred Location add-----------------------------
        case operatorActions.OperatorActionTypes.ADD_PREFERRED_LOCATION_SUCCESS: {
            return action.payload
        }
        case operatorActions.OperatorActionTypes.ADD_PREFERRED_LOCATION_FAIL: {
            return action.payload.error;
        }

        // for Preferred Location load-----------------------------
        case operatorActions.OperatorActionTypes.LOAD_PREFERRED_LOCATION_SUCCESS: {
            return action.payload;
        }
        case operatorActions.OperatorActionTypes.LOAD_PREFERRED_LOCATION_FAIL: {
            return action.payload.error;
        }
        // for preferred location delete-----------------------------
        case operatorActions.OperatorActionTypes.DELETE_PREFERRED_LOCATION_SUCCESS: {
            return action.payload;
        }
        case operatorActions.OperatorActionTypes.DELETE_PREFERRED_LOCATION_FAIL: {
            return action.payload.error
        }

        // for Preferred Location update-----------------------------
        case operatorActions.OperatorActionTypes.UPDATE_PREFERRED_LOCATION_SUCCESS: {
            return action.payload
        }
        case operatorActions.OperatorActionTypes.UPDATE_PREFERRED_LOCATION_FAIL: {
            return action.payload.error;
        }

    }

}

const getOperatorState = createFeatureSelector(
    "operator"
);

export const selectPageState = createSelector(
    getOperatorState,
    state => state // return error message
)


