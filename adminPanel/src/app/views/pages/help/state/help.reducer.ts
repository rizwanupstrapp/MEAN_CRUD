import * as HelpActions from "./help.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function HelpReducer(
    state = initialState,
    action: HelpActions.action
) {
    switch (action.type) {
        // for Help load-----------------------------
        case HelpActions.HelpActionTypes.LOAD_HELP_SUCCESS: {
            return action.payload;
        }
        case HelpActions.HelpActionTypes.LOAD_HELP_FAIL: {
            return action.payload.error;
        }
        // for Help  delete-----------------------------
        case HelpActions.HelpActionTypes.DELETE_HELP_SUCCESS: {
            return action.payload;
        }
        case HelpActions.HelpActionTypes.DELETE_HELP_FAIL: {
            return action.payload.error
        }

        // for Help  update-----------------------------
        case HelpActions.HelpActionTypes.UPDATE_HELP_SUCCESS: {
            return action.payload
        }
        case HelpActions.HelpActionTypes.UPDATE_HELP_FAIL: {
            return action.payload.error;
        }

        // for Help  upadat status-----------------------------
        case HelpActions.HelpActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case HelpActions.HelpActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Help  add-----------------------------
        case HelpActions.HelpActionTypes.ADD_HELP_SUCCESS: {
            return action.payload
        }
        case HelpActions.HelpActionTypes.ADD_HELP_FAIL: {
            return action.payload.error;
        }


    }

}

const getHelpState = createFeatureSelector(
    "help"
);

export const selectPageState = createSelector(
    getHelpState,
    state => state // return error message
)


