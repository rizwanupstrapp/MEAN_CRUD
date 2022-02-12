import * as driverActions from "./driver.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function driverReducer(
    state = initialState,
    action: driverActions.action
) {
    switch (action.type) {
      // for driver add-----------------------------
      case driverActions.DriverActionTypes.ADD_DRIVER_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.ADD_DRIVER_FAIL: {
        return action.payload.error;
      }

      // for driver load-----------------------------
      case driverActions.DriverActionTypes.LOAD_DRIVER_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.LOAD_DRIVER_FAIL: {
        return action.payload.error;
      }

      // for Vehicle load-----------------------------
       case driverActions.DriverActionTypes.LOAD_VEHICLE_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.LOAD_VEHICLE_FAIL: {
        return action.payload.error;
      }
      
      // for driver delete-----------------------------
      case driverActions.DriverActionTypes.DELETE_DRIVER_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.DELETE_DRIVER_FAIL: {
        return action.payload.error;
      }

      // for driver update-----------------------------
      case driverActions.DriverActionTypes.UPDATE_DRIVER_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.UPDATE_DRIVER_FAIL: {
        return action.payload.error;
      }

      // for driver update bank detail-----------------------------
      case driverActions.DriverActionTypes.UPDATE_BANK_DETAIL_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.UPDATE_BANK_DETAIL_FAIL: {
        return action.payload.error;
      }

      // for update address-----------------------------
      case driverActions.DriverActionTypes.UPDATE_USER_ADDRESS_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.UPDATE_USER_ADDRESS_FAIL: {
        return action.payload.error;
      }

      // for vehicle info -----------------------------
      case driverActions.DriverActionTypes.UPDATE_VEHICLE_INFO_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.UPDATE_VEHICLE_INFO_FAIL: {
        return action.payload.error;
      }

      // for User Details -----------------------------
      case driverActions.DriverActionTypes.UPDATE_USER_DETAILS_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.UPDATE_USER_DETAILS_FAIL: {
        return action.payload.error;
      }

      // for User Other Details -----------------------------
      case driverActions.DriverActionTypes.UPDATE_USER_OTHER_DETAILS_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.UPDATE_USER_OTHER_DETAILS_FAIL: {
        return action.payload.error;
      }

      // for User Citizen ship -----------------------------
      case driverActions.DriverActionTypes.UPDATE_USER_CITIZEN_SHIP_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.UPDATE_USER_CITIZEN_SHIP_FAIL: {
        return action.payload.error;
      }

      // for driver upadat status-----------------------------
      case driverActions.DriverActionTypes.UPDATE_STATUS_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.UPDATE_STATUS_FAIL: {
        return action.payload.error;
      }

      // for driver add-----------------------------
      case driverActions.DriverActionTypes.ADD_DRIVER2_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.ADD_DRIVER2_FAIL: {
        return action.payload.error;
      }

      // for driver upadate-----------------------------
      case driverActions.DriverActionTypes.UPLOAD_DATA_SUCCESS: {
        return action.payload;
      }
      case driverActions.DriverActionTypes.UPLOAD_DATA_FAIL: {
        return action.payload.error;
      }
    }

}

const getDriverState = createFeatureSelector(
    "driver"
);

export const selectPageState = createSelector(
    getDriverState,
    state => state // return error message
)


