import * as roleActions from "./roles.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";


export const initialState = [];

export function roleReducer(
    state = initialState,
    action: roleActions.action
) {
    switch (action.type) {

        case roleActions.RoleActionTypes.LOAD_ROLE_SUCCESS: {
            return action.payload;
        }
        case roleActions.RoleActionTypes.LOAD_ROLE_FAIL: {
            return action.payload.error;
        }

        case roleActions.RoleActionTypes.ADD_ROLE_SUCCESS: {
            return action.payload
        }
        case roleActions.RoleActionTypes.ADD_ROLE_FAIL: {
            return action.payload.error;
        }

        case roleActions.RoleActionTypes.DELETE_ROLE_SUCCESS: {

            return action.payload;
        }

        case roleActions.RoleActionTypes.DELETE_ROLE_FAIL: {
            return action.payload.error
        }

        case roleActions.RoleActionTypes.UPDATE_ROLE_SUCCESS: {
            return action.payload
        }
        case roleActions.RoleActionTypes.UPDATE_ROLE_FAIL: {
            return action.payload.error;
        }

        case roleActions.RoleActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case roleActions.RoleActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        case roleActions.RoleActionTypes.GET_ROLE_SUCCESS: {
            return action.payload
        }
        case roleActions.RoleActionTypes.GET_ROLE_FAIL: {
            return action.payload.error;
        }
    }
}

const getRoleState = createFeatureSelector(
    "roles"
);

export const selectPageState = createSelector(
    getRoleState,
    state => state // return error message
)
