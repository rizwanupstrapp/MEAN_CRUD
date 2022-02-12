import * as StateActions from "./state.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function StateReducer(
    state = initialState,
    action: StateActions.action
) {
    switch (action.type) {
        // for State load-----------------------------
        case StateActions.StateActionTypes.LOAD_STATE_SUCCESS: {
            return action.payload;
        }
        case StateActions.StateActionTypes.LOAD_STATE_FAIL: {
            return action.payload.error;
        }
        // for State delete-----------------------------
        case StateActions.StateActionTypes.DELETE_STATE_SUCCESS: {
            return action.payload;
        }
        case StateActions.StateActionTypes.DELETE_STATE_FAIL: {
            return action.payload.error
        }

        // for State update-----------------------------
        case StateActions.StateActionTypes.UPDATE_STATE_SUCCESS: {
            return action.payload
        }
        case StateActions.StateActionTypes.UPDATE_STATE_FAIL: {
            return action.payload.error;
        }

        // for State upadat status-----------------------------
        case StateActions.StateActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case StateActions.StateActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for State add-----------------------------
        case StateActions.StateActionTypes.ADD_STATE_SUCCESS: {
            return action.payload
        }
        case StateActions.StateActionTypes.ADD_STATE_FAIL: {
            return action.payload.error;
        }

    }

}

const getStateState = createFeatureSelector(
    "State"
);

export const selectPageState = createSelector(
    getStateState,
    state => state // return error message
)


