import * as TimeFrameActions from "./time-frame.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function TimeFrameReducer(
    state = initialState,
    action: TimeFrameActions.action
) {
    switch (action.type) {
        // for Time Frame load-----------------------------
        case TimeFrameActions.TimeFrameActionTypes.LOAD_TIMEFRAME_SUCCESS: {
            return action.payload;
        }
        case TimeFrameActions.TimeFrameActionTypes.LOAD_TIMEFRAME_FAIL: {
            return action.payload.error;
        }
        // for Time Frame delete-----------------------------
        case TimeFrameActions.TimeFrameActionTypes.DELETE_TIMEFRAME_SUCCESS: {
            return action.payload;
        }
        case TimeFrameActions.TimeFrameActionTypes.DELETE_TIMEFRAME_FAIL: {
            return action.payload.error
        }

        // for Time Frame update-----------------------------
        case TimeFrameActions.TimeFrameActionTypes.UPDATE_TIMEFRAME_SUCCESS: {
            return action.payload
        }
        case TimeFrameActions.TimeFrameActionTypes.UPDATE_TIMEFRAME_FAIL: {
            return action.payload.error;
        }

        // for Time Frame upadat status-----------------------------
        case TimeFrameActions.TimeFrameActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case TimeFrameActions.TimeFrameActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Time Frame add-----------------------------
        case TimeFrameActions.TimeFrameActionTypes.ADD_TIMEFRAME_SUCCESS: {
            return action.payload
        }
        case TimeFrameActions.TimeFrameActionTypes.ADD_TIMEFRAME_FAIL: {
            return action.payload.error;
        }


    }

}

const getTimeFrameState = createFeatureSelector(
    "time-frame"
);

export const selectPageState = createSelector(
    getTimeFrameState,
    state => state // return error message
)


