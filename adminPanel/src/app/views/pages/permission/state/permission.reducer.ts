import * as PermissionActions from "./permission.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function PermissionReducer(
    state = initialState,
    action: PermissionActions.action
) {
    switch (action.type) {
        // for Permission load-----------------------------
        case PermissionActions.PermissionActionTypes.LOAD_PERMISSION_SUCCESS: {
            return action.payload;
        }
        case PermissionActions.PermissionActionTypes.LOAD_PERMISSION_FAIL: {
            return action.payload.error;
        }
        // for Permission  delete-----------------------------
        case PermissionActions.PermissionActionTypes.DELETE_PERMISSION_SUCCESS: {
            return action.payload;
        }
        case PermissionActions.PermissionActionTypes.DELETE_PERMISSION_FAIL: {
            return action.payload.error
        }

        // for Permission  update-----------------------------
        case PermissionActions.PermissionActionTypes.UPDATE_PERMISSION_SUCCESS: {
            return action.payload
        }
        case PermissionActions.PermissionActionTypes.UPDATE_PERMISSION_FAIL: {
            return action.payload.error;
        }

        // for Permission  upadat status-----------------------------
        case PermissionActions.PermissionActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case PermissionActions.PermissionActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Permission  add-----------------------------
        case PermissionActions.PermissionActionTypes.ADD_PERMISSION_SUCCESS: {
            return action.payload
        }
        case PermissionActions.PermissionActionTypes.ADD_PERMISSION_FAIL: {
            return action.payload.error;
        }


    }

}

const getPermissionState = createFeatureSelector(
    "permission"
);

export const selectPageState = createSelector(
    getPermissionState,
    state => state // return error message
)


