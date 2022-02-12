import * as ServiceOperatorActions from "./service-operator.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function ServiceOperatorReducer(
    state = initialState,
    action: ServiceOperatorActions.action
) {
    switch (action.type) {
        // for Service Operator load-----------------------------
        case ServiceOperatorActions.ServiceOperatorActionTypes.LOAD_SERVICEOPERATOR_SUCCESS: {
            return action.payload;
        }
        case ServiceOperatorActions.ServiceOperatorActionTypes.LOAD_SERVICEOPERATOR_FAIL: {
            return action.payload.error;
        }
        // for Service Operator delete-----------------------------
        case ServiceOperatorActions.ServiceOperatorActionTypes.DELETE_SERVICEOPERATOR_SUCCESS: {
            return action.payload;
        }
        case ServiceOperatorActions.ServiceOperatorActionTypes.DELETE_SERVICEOPERATOR_FAIL: {
            return action.payload.error
        }

        // for Service Operator update-----------------------------
        case ServiceOperatorActions.ServiceOperatorActionTypes.UPDATE_SERVICEOPERATOR_SUCCESS: {
            return action.payload
        }
        case ServiceOperatorActions.ServiceOperatorActionTypes.UPDATE_SERVICEOPERATOR_FAIL: {
            return action.payload.error;
        }

        // for Service Operator upadat status-----------------------------
        case ServiceOperatorActions.ServiceOperatorActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case ServiceOperatorActions.ServiceOperatorActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for Service Operator add-----------------------------
        case ServiceOperatorActions.ServiceOperatorActionTypes.ADD_SERVICEOPERATOR_SUCCESS: {
            return action.payload
        }
        case ServiceOperatorActions.ServiceOperatorActionTypes.ADD_SERVICEOPERATOR_FAIL: {
            return action.payload.error;
        }
    }
}

const getServiceOperatorState = createFeatureSelector(
    "service-operator"
);

export const selectPageState = createSelector(
    getServiceOperatorState,
    state => state // return error message
)


