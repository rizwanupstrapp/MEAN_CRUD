import * as HighDemandAreaActions from "./highDemand-area.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function HighDemandAreaReducer(
    state = initialState,
    action: HighDemandAreaActions.action
) {
    switch (action.type) {
        // for High Demand Area load-----------------------------
        case HighDemandAreaActions.HighDemandAreaActionTypes.LOAD_HIGHDEMANDAREA_SUCCESS: {
            return action.payload;
        }
        case HighDemandAreaActions.HighDemandAreaActionTypes.LOAD_HIGHDEMANDAREA_FAIL: {
            return action.payload.error;
        }
        // for High Demand Area delete-----------------------------
        case HighDemandAreaActions.HighDemandAreaActionTypes.DELETE_HIGHDEMANDAREA_SUCCESS: {
            return action.payload;
        }
        case HighDemandAreaActions.HighDemandAreaActionTypes.DELETE_HIGHDEMANDAREA_FAIL: {
            return action.payload.error
        }

        // for High Demand Area update-----------------------------
        case HighDemandAreaActions.HighDemandAreaActionTypes.UPDATE_HIGHDEMANDAREA_SUCCESS: {
            return action.payload
        }
        case HighDemandAreaActions.HighDemandAreaActionTypes.UPDATE_HIGHDEMANDAREA_FAIL: {
            return action.payload.error;
        }

        // for High Demand Area upadat status-----------------------------
        case HighDemandAreaActions.HighDemandAreaActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case HighDemandAreaActions.HighDemandAreaActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for High Demand Area add-----------------------------
        case HighDemandAreaActions.HighDemandAreaActionTypes.ADD_HIGHDEMANDAREA_SUCCESS: {
            return action.payload
        }
        case HighDemandAreaActions.HighDemandAreaActionTypes.ADD_HIGHDEMANDAREA_FAIL: {
            return action.payload.error;
        }


    }

}

const getHighDemandAreaState = createFeatureSelector(
    "highDemand-area"
);

export const selectPageState = createSelector(
    getHighDemandAreaState,
    state => state // return error message
)


