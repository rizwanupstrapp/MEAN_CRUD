import * as BrandActions from "./brand.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function BrandReducer(
    state = initialState,
    action: BrandActions.action
) {
    switch (action.type) {
        // for Brand load-----------------------------
        case BrandActions.BrandActionTypes.LOAD_BRAND_SUCCESS: {
            return action.payload;
        }
        case BrandActions.BrandActionTypes.LOAD_BRAND_FAIL: {
            return action.payload.error;
        }
        // for Brand  delete-----------------------------
        case BrandActions.BrandActionTypes.DELETE_BRAND_SUCCESS: {
            return action.payload;
        }
        case BrandActions.BrandActionTypes.DELETE_BRAND_FAIL: {
            return action.payload.error
        }

        // for Brand  update-----------------------------
        case BrandActions.BrandActionTypes.UPDATE_BRAND_SUCCESS: {
            return action.payload
        }
        case BrandActions.BrandActionTypes.UPDATE_BRAND_FAIL: {
            return action.payload.error;
        }

        // for Brand  upadat status-----------------------------
        case BrandActions.BrandActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case BrandActions.BrandActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Brand  add-----------------------------
        case BrandActions.BrandActionTypes.ADD_BRAND_SUCCESS: {
            return action.payload
        }
        case BrandActions.BrandActionTypes.ADD_BRAND_FAIL: {
            return action.payload.error;
        }


    }

}

const getBrandState = createFeatureSelector(
    "brand"
);

export const selectPageState = createSelector(
    getBrandState,
    state => state // return error message
)


