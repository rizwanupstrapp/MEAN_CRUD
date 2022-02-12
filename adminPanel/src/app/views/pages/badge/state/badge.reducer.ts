import * as BadgeActions from "./badge.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function BadgeReducer(
    state = initialState,
    action: BadgeActions.action
) {
    switch (action.type) {
        // for Badge load-----------------------------
        case BadgeActions.BadgeActionTypes.LOAD_BADGE_SUCCESS: {
            return action.payload;
        }
        case BadgeActions.BadgeActionTypes.LOAD_BADGE_FAIL: {
            return action.payload.error;
        }
        // for Badge delete-----------------------------
        case BadgeActions.BadgeActionTypes.DELETE_BADGE_SUCCESS: {
            return action.payload;
        }
        case BadgeActions.BadgeActionTypes.DELETE_BADGE_FAIL: {
            return action.payload.error
        }

        // for Badge update-----------------------------
        case BadgeActions.BadgeActionTypes.UPDATE_BADGE_SUCCESS: {
            return action.payload
        }
        case BadgeActions.BadgeActionTypes.UPDATE_BADGE_FAIL: {
            return action.payload.error;
        }

        // for Badge upadat status-----------------------------
        case BadgeActions.BadgeActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case BadgeActions.BadgeActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Badge add-----------------------------
        case BadgeActions.BadgeActionTypes.ADD_BADGE_SUCCESS: {
            return action.payload
        }
        case BadgeActions.BadgeActionTypes.ADD_BADGE_FAIL: {
            return action.payload.error;
        }

    }

}

const getBadgeState = createFeatureSelector(
    "badge"
);

export const selectPageState = createSelector(
    getBadgeState,
    state => state // return error message
)


