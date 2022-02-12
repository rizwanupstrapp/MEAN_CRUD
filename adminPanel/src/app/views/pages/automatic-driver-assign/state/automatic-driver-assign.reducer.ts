import * as AutomaticDriverAssignActions from "./automatic-driver-assign.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function AutomaticDriverAssignReducer(
    state = initialState,
    action: AutomaticDriverAssignActions.action
) {
    switch (action.type) {
        // for  load-----------------------------
        case AutomaticDriverAssignActions.AutomaticDriverAssignActionTypes.LOAD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS: {
            return action.payload;
        }
        case AutomaticDriverAssignActions.AutomaticDriverAssignActionTypes.LOAD_AUTOMATIC_DRIVER_ASSIGN_FAIL: {
            return action.payload.error;
        }
        // for   delete-----------------------------
        case AutomaticDriverAssignActions.AutomaticDriverAssignActionTypes.DELETE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS: {
            return action.payload;
        }
        case AutomaticDriverAssignActions.AutomaticDriverAssignActionTypes.DELETE_AUTOMATIC_DRIVER_ASSIGN_FAIL: {
            return action.payload.error
        }

        // for   update-----------------------------
        case AutomaticDriverAssignActions.AutomaticDriverAssignActionTypes.UPDATE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS: {
            return action.payload
        }
        case AutomaticDriverAssignActions.AutomaticDriverAssignActionTypes.UPDATE_AUTOMATIC_DRIVER_ASSIGN_FAIL: {
            return action.payload.error;
        }

        // for   update status-----------------------------
        case AutomaticDriverAssignActions.AutomaticDriverAssignActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case AutomaticDriverAssignActions.AutomaticDriverAssignActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }


        // for  add-----------------------------
        case AutomaticDriverAssignActions.AutomaticDriverAssignActionTypes.ADD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS: {
            return action.payload
        }
        case AutomaticDriverAssignActions.AutomaticDriverAssignActionTypes.ADD_AUTOMATIC_DRIVER_ASSIGN_FAIL: {
            return action.payload.error;
        }


    }

}

const getDriverAssignmentState = createFeatureSelector(
    "driverAssignment"
);

export const selectPageState = createSelector(
    getDriverAssignmentState,
    state => state // return error message
)


