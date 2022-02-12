import * as ServiceTypeActions from "./service-type.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function ServiceTypeReducer(
    state = initialState,
    action: ServiceTypeActions.action
) {
    switch (action.type) {
        // for Service Type load-----------------------------
        case ServiceTypeActions.ServiceTypeActionTypes.LOAD_SERVICETYPE_SUCCESS: {
            return action.payload;
        }
        case ServiceTypeActions.ServiceTypeActionTypes.LOAD_SERVICETYPE_FAIL: {
            return action.payload.error;
        }
        // for Service Type delete-----------------------------
        case ServiceTypeActions.ServiceTypeActionTypes.DELETE_SERVICETYPE_SUCCESS: {
            return action.payload;
        }
        case ServiceTypeActions.ServiceTypeActionTypes.DELETE_SERVICETYPE_FAIL: {
            return action.payload.error
        }

        // for Service Type update-----------------------------
        case ServiceTypeActions.ServiceTypeActionTypes.UPDATE_SERVICETYPE_SUCCESS: {
            return action.payload
        }
        case ServiceTypeActions.ServiceTypeActionTypes.UPDATE_SERVICETYPE_FAIL: {
            return action.payload.error;
        }

        // for Service Type upadat status-----------------------------
        case ServiceTypeActions.ServiceTypeActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case ServiceTypeActions.ServiceTypeActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Service Type add-----------------------------
        case ServiceTypeActions.ServiceTypeActionTypes.ADD_SERVICETYPE_SUCCESS: {
            return action.payload
        }
        case ServiceTypeActions.ServiceTypeActionTypes.ADD_SERVICETYPE_FAIL: {
            return action.payload.error;
        }


    }

}

const getServiceTypeState = createFeatureSelector(
    "service-type"
);

export const selectPageState = createSelector(
    getServiceTypeState,
    state => state // return error message
)


