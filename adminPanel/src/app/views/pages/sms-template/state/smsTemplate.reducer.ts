import * as SMSTemplateActions from "./smsTemplate.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function SMSTemplateReducer(
    state = initialState,
    action: SMSTemplateActions.action
) {
    switch (action.type) {
        // for smsTemplate load-----------------------------
        case SMSTemplateActions.SMSTemplateActionTypes.LOAD_SMS_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case SMSTemplateActions.SMSTemplateActionTypes.LOAD_SMS_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for smsTemplate delete-----------------------------
        case SMSTemplateActions.SMSTemplateActionTypes.DELETE_SMS_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case SMSTemplateActions.SMSTemplateActionTypes.DELETE_SMS_TEMPLATE_FAIL: {
            return action.payload.error
        }

        // for smsTemplate update-----------------------------
        case SMSTemplateActions.SMSTemplateActionTypes.UPDATE_SMS_TEMPLATE_SUCCESS: {
            return action.payload
        }
        case SMSTemplateActions.SMSTemplateActionTypes.UPDATE_SMS_TEMPLATE_FAIL: {
            return action.payload.error;
        }

        // for smsTemplate upadat status-----------------------------
        case SMSTemplateActions.SMSTemplateActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case SMSTemplateActions.SMSTemplateActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for smsTemplate add-----------------------------
        case SMSTemplateActions.SMSTemplateActionTypes.ADD_SMS_TEMPLATE_SUCCESS: {
            return action.payload
        }
        case SMSTemplateActions.SMSTemplateActionTypes.ADD_SMS_TEMPLATE_FAIL: {
            return action.payload.error;
        }

    }

}

const getTemplateState = createFeatureSelector(
    "smsTemplate"
);

export const selectPageState = createSelector(
    getTemplateState,
    state => state // return error message
)


