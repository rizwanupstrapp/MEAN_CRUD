import * as FareCalculationActions from "./fare-calculation.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function FareCalculationReducer(
    state = initialState,
    action: FareCalculationActions.action
) {
    switch (action.type) {
        // for Fare Calculation load-----------------------------
        case FareCalculationActions.FareCalculationActionTypes.LOAD_FARECALCULATION_SUCCESS: {
            return action.payload;
        }
        case FareCalculationActions.FareCalculationActionTypes.LOAD_FARECALCULATION_FAIL: {
            return action.payload.error;
        }
        // for Fare Calculation delete-----------------------------
        case FareCalculationActions.FareCalculationActionTypes.DELETE_FARECALCULATION_SUCCESS: {
            return action.payload;
        }
        case FareCalculationActions.FareCalculationActionTypes.DELETE_FARECALCULATION_FAIL: {
            return action.payload.error
        }

        // for Fare Calculation update-----------------------------
        case FareCalculationActions.FareCalculationActionTypes.UPDATE_FARECALCULATION_SUCCESS: {
            return action.payload
        }
        case FareCalculationActions.FareCalculationActionTypes.UPDATE_FARECALCULATION_FAIL: {
            return action.payload.error;
        }

        // for Fare Calculation upadat status-----------------------------
        case FareCalculationActions.FareCalculationActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case FareCalculationActions.FareCalculationActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Fare Calculation add-----------------------------
        case FareCalculationActions.FareCalculationActionTypes.ADD_FARECALCULATION_SUCCESS: {
            return action.payload
        }
        case FareCalculationActions.FareCalculationActionTypes.ADD_FARECALCULATION_FAIL: {
            return action.payload.error;
        }


    }

}

const getFareCalculationState = createFeatureSelector(
    "fare-calculation"
);

export const selectPageState = createSelector(
    getFareCalculationState,
    state => state // return error message
)


