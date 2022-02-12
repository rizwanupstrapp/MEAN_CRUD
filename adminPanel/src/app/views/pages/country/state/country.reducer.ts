import * as CountryActions from "./country.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function CountryReducer(
    state = initialState,
    action: CountryActions.action
) {
    switch (action.type) {
        // for Country load-----------------------------
        case CountryActions.CountryActionTypes.LOAD_COUNTRY_SUCCESS: {
            return action.payload;
        }
        case CountryActions.CountryActionTypes.LOAD_COUNTRY_FAIL: {
            return action.payload.error;
        }
        // for Country delete-----------------------------
        case CountryActions.CountryActionTypes.DELETE_COUNTRY_SUCCESS: {
            return action.payload;
        }
        case CountryActions.CountryActionTypes.DELETE_COUNTRY_FAIL: {
            return action.payload.error
        }

        // for Country update-----------------------------
        case CountryActions.CountryActionTypes.UPDATE_COUNTRY_SUCCESS: {
            return action.payload
        }
        case CountryActions.CountryActionTypes.UPDATE_COUNTRY_FAIL: {
            return action.payload.error;
        }

        // for Country upadat status-----------------------------
        case CountryActions.CountryActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case CountryActions.CountryActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Country add-----------------------------
        case CountryActions.CountryActionTypes.ADD_COUNTRY_SUCCESS: {
            return action.payload
        }
        case CountryActions.CountryActionTypes.ADD_COUNTRY_FAIL: {
            return action.payload.error;
        }

    }

}

const getCountryState = createFeatureSelector(
    "country"
);

export const selectPageState = createSelector(
    getCountryState,
    state => state // return error message
)


