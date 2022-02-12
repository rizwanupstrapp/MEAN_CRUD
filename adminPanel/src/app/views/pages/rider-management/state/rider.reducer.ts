import * as riderActions from "./rider.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function RiderReducer(
    state = initialState,
    action: riderActions.action
) {
    switch (action.type) {

        // for rider add-----------------------------
        case riderActions.RiderActionTypes.ADD_RIDER_SUCCESS: {
            return action.payload
        }
        case riderActions.RiderActionTypes.ADD_RIDER_FAIL: {
            return action.payload.error;
        }

        // for rider load-----------------------------
        case riderActions.RiderActionTypes.LOAD_RIDER_SUCCESS: {
            return action.payload;
        }
        case riderActions.RiderActionTypes.LOAD_RIDER_FAIL: {
            return action.payload.error;
        }
        // for rider delete-----------------------------
        case riderActions.RiderActionTypes.DELETE_RIDER_SUCCESS: {
            return action.payload;
        }
        case riderActions.RiderActionTypes.DELETE_RIDER_FAIL: {
            return action.payload.error
        }

        // for rider update-----------------------------
        case riderActions.RiderActionTypes.UPDATE_RIDER_SUCCESS: {
            return action.payload
        }
        case riderActions.RiderActionTypes.UPDATE_RIDER_FAIL: {
            return action.payload.error;
        }

        // for rider update bank detail-----------------------------
        case riderActions.RiderActionTypes.UPDATE_BANK_DETAIL_SUCCESS: {
            return action.payload
        }
        case riderActions.RiderActionTypes.UPDATE_BANK_DETAIL_FAIL: {
            return action.payload.error;
        }

        // for rider upadat status-----------------------------
        case riderActions.RiderActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case riderActions.RiderActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for rider add-----------------------------
        case riderActions.RiderActionTypes.ADD_RIDER2_SUCCESS: {

            return action.payload
        }
        case riderActions.RiderActionTypes.ADD_RIDER2_FAIL: {

            return action.payload.error;
        }

        // for rider upadate-----------------------------
        case riderActions.RiderActionTypes.UPLOAD_DATA_SUCCESS: {

            return action.payload
        }
        case riderActions.RiderActionTypes.UPLOAD_DATA_FAIL: {

            return action.payload.error;
        }
        // default: {

        //     return action
        // }
    }

}

const getriderState = createFeatureSelector(
    "rider"
);

export const selectPageState = createSelector(
    getriderState,
    state => state // return error message
)


