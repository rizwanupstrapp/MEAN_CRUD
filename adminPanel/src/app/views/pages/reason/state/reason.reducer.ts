import * as ReasonActions from "./reason.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function ReasonReducer(
    state = initialState,
    action: ReasonActions.action
) {
    switch (action.type) {
        // for Reason load-----------------------------
        case ReasonActions.ReasonActionTypes.LOAD_REASON_SUCCESS: {
            return action.payload;
        }
        case ReasonActions.ReasonActionTypes.LOAD_REASON_FAIL: {
            return action.payload.error;
        }
        // for Reason  delete-----------------------------
        case ReasonActions.ReasonActionTypes.DELETE_REASON_SUCCESS: {
            return action.payload;
        }
        case ReasonActions.ReasonActionTypes.DELETE_REASON_FAIL: {
            return action.payload.error
        }

        // for Reason  update-----------------------------
        case ReasonActions.ReasonActionTypes.UPDATE_REASON_SUCCESS: {
            return action.payload
        }
        case ReasonActions.ReasonActionTypes.UPDATE_REASON_FAIL: {
            return action.payload.error;
        }

        // for Reason  upadat status-----------------------------
        case ReasonActions.ReasonActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case ReasonActions.ReasonActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Reason  add-----------------------------
        case ReasonActions.ReasonActionTypes.ADD_REASON_SUCCESS: {
            return action.payload
        }
        case ReasonActions.ReasonActionTypes.ADD_REASON_FAIL: {
            return action.payload.error;
        }


    }

}

const getReasonState = createFeatureSelector(
    "reason"
);

export const selectPageState = createSelector(
    getReasonState,
    state => state // return error message
)


