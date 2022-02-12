import * as NotificationTemplateActions from "./notificationTemplate.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function NotificationTemplateReducer(
    state = initialState,
    action: NotificationTemplateActions.action
) {
    switch (action.type) {
        // for notificationTemplate load-----------------------------
        case NotificationTemplateActions.NotificationTemplateActionTypes.LOAD_NOTIFICATION_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case NotificationTemplateActions.NotificationTemplateActionTypes.LOAD_NOTIFICATION_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for notificationTemplate delete-----------------------------
        case NotificationTemplateActions.NotificationTemplateActionTypes.DELETE_NOTIFICATION_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case NotificationTemplateActions.NotificationTemplateActionTypes.DELETE_NOTIFICATION_TEMPLATE_FAIL: {
            return action.payload.error
        }

        // for notificationTemplate update-----------------------------
        case NotificationTemplateActions.NotificationTemplateActionTypes.UPDATE_NOTIFICATION_TEMPLATE_SUCCESS: {
            return action.payload
        }
        case NotificationTemplateActions.NotificationTemplateActionTypes.UPDATE_NOTIFICATION_TEMPLATE_FAIL: {
            return action.payload.error;
        }

        // for notificationTemplate upadat status-----------------------------
        case NotificationTemplateActions.NotificationTemplateActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case NotificationTemplateActions.NotificationTemplateActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for notificationTemplate add-----------------------------
        case NotificationTemplateActions.NotificationTemplateActionTypes.ADD_NOTIFICATION_TEMPLATE_SUCCESS: {
            return action.payload
        }
        case NotificationTemplateActions.NotificationTemplateActionTypes.ADD_NOTIFICATION_TEMPLATE_FAIL: {
            return action.payload.error;
        }

    }

}

const getTemplateState = createFeatureSelector(
    "notificationTemplate"
);

export const selectPageState = createSelector(
    getTemplateState,
    state => state // return error message
)


