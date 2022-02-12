import * as HelpTopicActions from "./help-topic.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function HelpTopicReducer(
    state = initialState,
    action: HelpTopicActions.action
) {
    switch (action.type) {
        // for Help Topic load-----------------------------
        case HelpTopicActions.HelpTopicActionTypes.LOAD_HELPTOPIC_SUCCESS: {
            return action.payload;
        }
        case HelpTopicActions.HelpTopicActionTypes.LOAD_HELPTOPIC_FAIL: {
            return action.payload.error;
        }
        // for Help Topic delete-----------------------------
        case HelpTopicActions.HelpTopicActionTypes.DELETE_HELPTOPIC_SUCCESS: {
            return action.payload;
        }
        case HelpTopicActions.HelpTopicActionTypes.DELETE_HELPTOPIC_FAIL: {
            return action.payload.error
        }

        // for Help Topic update-----------------------------
        case HelpTopicActions.HelpTopicActionTypes.UPDATE_HELPTOPIC_SUCCESS: {
            return action.payload
        }
        case HelpTopicActions.HelpTopicActionTypes.UPDATE_HELPTOPIC_FAIL: {
            return action.payload.error;
        }

        // for Help Topic upadat status-----------------------------
        case HelpTopicActions.HelpTopicActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case HelpTopicActions.HelpTopicActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Help Topic add-----------------------------
        case HelpTopicActions.HelpTopicActionTypes.ADD_HELPTOPIC_SUCCESS: {
            return action.payload
        }
        case HelpTopicActions.HelpTopicActionTypes.ADD_HELPTOPIC_FAIL: {
            return action.payload.error;
        }


    }

}

const getHelpTopicState = createFeatureSelector(
    "help-topic"
);

export const selectPageState = createSelector(
    getHelpTopicState,
    state => state // return error message
)


