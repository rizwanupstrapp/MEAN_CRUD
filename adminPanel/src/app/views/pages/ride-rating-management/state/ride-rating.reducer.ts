import * as RideRatingActions from "./ride-rating.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function RideRatingReducer(
  state = initialState,
  action: RideRatingActions.action
) {
  switch (action.type) {
    // for Ride Rating load-----------------------------
    case RideRatingActions.RideRatingActionTypes.LOAD_RIDE_RATING_SUCCESS: {
      return action.payload;
    }
    case RideRatingActions.RideRatingActionTypes.LOAD_RIDE_RATING_FAIL: {
      return action.payload.error;
    }
    // for Ride Rating delete-----------------------------
    case RideRatingActions.RideRatingActionTypes.DELETE_RIDE_RATING_SUCCESS: {
      return action.payload;
    }
    case RideRatingActions.RideRatingActionTypes.DELETE_RIDE_RATING_FAIL: {
      return action.payload.error;
    }

    // for Ride Rating update-----------------------------
    case RideRatingActions.RideRatingActionTypes.UPDATE_RIDE_RATING_SUCCESS: {
      return action.payload;
    }
    case RideRatingActions.RideRatingActionTypes.UPDATE_RIDE_RATING_FAIL: {
      return action.payload.error;
    }

    // for Ride Rating upadat status-----------------------------
    case RideRatingActions.RideRatingActionTypes.UPDATE_STATUS_SUCCESS: {
      return action.payload;
    }
    case RideRatingActions.RideRatingActionTypes.UPDATE_STATUS_FAIL: {
      return action.payload.error;
    }

    // for Ride Rating add-----------------------------
    case RideRatingActions.RideRatingActionTypes.ADD_RIDE_RATING_SUCCESS: {
      return action.payload;
    }
    case RideRatingActions.RideRatingActionTypes.ADD_RIDE_RATING_FAIL: {
      return action.payload.error;
    }
  }
}

const getRideRatingState = createFeatureSelector("ride-rating");

export const selectPageState = createSelector(
  getRideRatingState,
  state => state // return error message
);
