import * as trimActions from "./trim.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function TrimReducer(
    state = initialState,
    action: trimActions.action
) {
    switch (action.type) {
        // for Brand load-----------------------------
        case trimActions.TrimActionTypes.LOAD_TRIM_SUCCESS: {
            return action.payload;
        }
        case trimActions.TrimActionTypes.LOAD_TRIM_FAIL: {
            return action.payload.error;
        }
        // for Brand  delete-----------------------------
        case trimActions.TrimActionTypes.DELETE_TRIM_SUCCESS: {
            return action.payload;
        }
        case trimActions.TrimActionTypes.DELETE_TRIM_FAIL: {
            return action.payload.error
        }

        // for Brand  update-----------------------------
        case trimActions.TrimActionTypes.UPDATE_TRIM_SUCCESS: {
            return action.payload
        }
        case trimActions.TrimActionTypes.UPDATE_TRIM_FAIL: {
            return action.payload.error;
        }

        // for Brand  upadat status-----------------------------
        case trimActions.TrimActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case trimActions.TrimActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Brand  add-----------------------------
        case trimActions.TrimActionTypes.ADD_TRIM_SUCCESS: {
            return action.payload
        }
        case trimActions.TrimActionTypes.ADD_TRIM_FAIL: {
            return action.payload.error;
        }


    }

}

const getTrimState = createFeatureSelector(
    "trim"
);

export const selectPageState = createSelector(
    getTrimState,
    state => state // return error message
)


