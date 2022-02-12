import * as AmmenitiesActions from "./ammenities.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function AmmenitiesReducer(
    state = initialState,
    action: AmmenitiesActions.action
) {
    switch (action.type) {
        // for Ammenities load-----------------------------
        case AmmenitiesActions.AmmenitiesActionTypes.LOAD_AMMENITIES_SUCCESS: {
            return action.payload;
        }
        case AmmenitiesActions.AmmenitiesActionTypes.LOAD_AMMENITIES_FAIL: {
            return action.payload.error;
        }
        // for Ammenities delete-----------------------------
        case AmmenitiesActions.AmmenitiesActionTypes.DELETE_AMMENITIES_SUCCESS: {
            return action.payload;
        }
        case AmmenitiesActions.AmmenitiesActionTypes.DELETE_AMMENITIES_FAIL: {
            return action.payload.error
        }

        // for Ammenities update-----------------------------
        case AmmenitiesActions.AmmenitiesActionTypes.UPDATE_AMMENITIES_SUCCESS: {
            return action.payload
        }
        case AmmenitiesActions.AmmenitiesActionTypes.UPDATE_AMMENITIES_FAIL: {
            return action.payload.error;
        }

        // for Ammenities update status-----------------------------
        case AmmenitiesActions.AmmenitiesActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case AmmenitiesActions.AmmenitiesActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Ammenities add-----------------------------
        case AmmenitiesActions.AmmenitiesActionTypes.ADD_AMMENITIES_SUCCESS: {
            return action.payload
        }
        case AmmenitiesActions.AmmenitiesActionTypes.ADD_AMMENITIES_FAIL: {
            return action.payload.error;
        }


    }

}

const getAmmenitiesState = createFeatureSelector(
    "ammenities"
);

export const selectPageState = createSelector(
    getAmmenitiesState,
    state => state // return error message
)


