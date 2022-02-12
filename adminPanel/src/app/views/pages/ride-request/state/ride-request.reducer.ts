import * as RideRequestActions from "./ride-request.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function RideRequestReducer(
    state = initialState,
    action: RideRequestActions.action
) {
    switch (action.type) {
        // for Ride Request load-----------------------------
        case RideRequestActions.RideRequestActionTypes.LOAD_RIDE_REQUEST_SUCCESS: {
            return action.payload;
        }
        case RideRequestActions.RideRequestActionTypes.LOAD_RIDE_REQUEST_FAIL: {
            return action.payload.error;
        }

        // for Ride Request upadat status-----------------------------
        case RideRequestActions.RideRequestActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case RideRequestActions.RideRequestActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Ride Request update-----------------------------
        case RideRequestActions.RideRequestActionTypes.UPDATE_RIDE_REQUEST_SUCCESS: {
            return action.payload
        }
        case RideRequestActions.RideRequestActionTypes.UPDATE_RIDE_REQUEST_FAIL: {
            return action.payload.error;
        }
    }

}

const getRideRequestState = createFeatureSelector(
    "ride-request"
);

export const selectPageState = createSelector(
    getRideRequestState,
    state => state // return error message
)


