import * as CityActions from "./city.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function CityReducer(
    state = initialState,
    action: CityActions.action
) {
    switch (action.type) {
        // for City load-----------------------------
        case CityActions.CityActionTypes.LOAD_CITY_SUCCESS: {
            return action.payload;
        }
        case CityActions.CityActionTypes.LOAD_CITY_FAIL: {
            return action.payload.error;
        }
        // for City delete-----------------------------
        case CityActions.CityActionTypes.DELETE_CITY_SUCCESS: {
            return action.payload;
        }
        case CityActions.CityActionTypes.DELETE_CITY_FAIL: {
            return action.payload.error
        }

        // for City update-----------------------------
        case CityActions.CityActionTypes.UPDATE_CITY_SUCCESS: {
            return action.payload
        }
        case CityActions.CityActionTypes.UPDATE_CITY_FAIL: {
            return action.payload.error;
        }

        // for City upadat status-----------------------------
        case CityActions.CityActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case CityActions.CityActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for City add-----------------------------
        case CityActions.CityActionTypes.ADD_CITY_SUCCESS: {
            return action.payload
        }
        case CityActions.CityActionTypes.ADD_CITY_FAIL: {
            return action.payload.error;
        }

    }

}

const getCityState = createFeatureSelector(
    "city"
);

export const selectPageState = createSelector(
    getCityState,
    state => state // return error message
)


