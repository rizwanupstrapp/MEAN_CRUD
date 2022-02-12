import * as businessOwnerActions from "./business-owner.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function businessOwnerReducer(
    state = initialState,
    action: businessOwnerActions.action
) {
    switch (action.type) {
        // for businessOwner load-----------------------------
        case businessOwnerActions.BusinessOwnerActionTypes.LOAD_BUSINESS_OWNER_SUCCESS: {
            return action.payload;
        }
        case businessOwnerActions.BusinessOwnerActionTypes.LOAD_BUSINESS_OWNER_FAIL: {
            return action.payload.error;
        }
        // for businessOwner delete-----------------------------
        case businessOwnerActions.BusinessOwnerActionTypes.DELETE_BUSINESS_OWNER_SUCCESS: {
            return action.payload;
        }
        case businessOwnerActions.BusinessOwnerActionTypes.DELETE_BUSINESS_OWNER_FAIL: {
            return action.payload.error
        }
        // for businessOwner update-----------------------------
        case businessOwnerActions.BusinessOwnerActionTypes.UPDATE_BUSINESS_OWNER_SUCCESS: {
            return action.payload
        }
        case businessOwnerActions.BusinessOwnerActionTypes.UPDATE_BUSINESS_OWNER_FAIL: {
            return action.payload.error;
        }
        // for businessOwner upadat status-----------------------------
        case businessOwnerActions.BusinessOwnerActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case businessOwnerActions.BusinessOwnerActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for businessOwner upadate-----------------------------
        case businessOwnerActions.BusinessOwnerActionTypes.UPLOAD_DATA_SUCCESS: {
            return action.payload
        }
        case businessOwnerActions.BusinessOwnerActionTypes.UPLOAD_DATA_FAIL: {
            return action.payload.error;
        }
    }
}

const getBusinessOwnerState = createFeatureSelector(
    "businessOwner"
);

export const selectPageState = createSelector(
    getBusinessOwnerState,
    state => state // return error message
)


