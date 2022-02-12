import * as PromocodeActions from "./promocode.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function PromocodeReducer(
    state = initialState,
    action: PromocodeActions.action
) {
    switch (action.type) {
        // for Promocode load-----------------------------
        case PromocodeActions.PromocodeActionTypes.LOAD_PROMOCODE_SUCCESS: {
            return action.payload;
        }
        case PromocodeActions.PromocodeActionTypes.LOAD_PROMOCODE_FAIL: {
            return action.payload.error;
        }
        // for Promocode  delete-----------------------------
        case PromocodeActions.PromocodeActionTypes.DELETE_PROMOCODE_SUCCESS: {
            return action.payload;
        }
        case PromocodeActions.PromocodeActionTypes.DELETE_PROMOCODE_FAIL: {
            return action.payload.error
        }

        // for Promocode  update-----------------------------
        case PromocodeActions.PromocodeActionTypes.UPDATE_PROMOCODE_SUCCESS: {
            return action.payload
        }
        case PromocodeActions.PromocodeActionTypes.UPDATE_PROMOCODE_FAIL: {
            return action.payload.error;
        }

        // for Promocode  upadat status-----------------------------
        case PromocodeActions.PromocodeActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case PromocodeActions.PromocodeActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Promocode  add-----------------------------
        case PromocodeActions.PromocodeActionTypes.ADD_PROMOCODE_SUCCESS: {
            return action.payload
        }
        case PromocodeActions.PromocodeActionTypes.ADD_PROMOCODE_FAIL: {
            return action.payload.error;
        }


    }

}

const getPromocodeState = createFeatureSelector(
    "promocode"
);

export const selectPageState = createSelector(
    getPromocodeState,
    state => state // return error message
)


