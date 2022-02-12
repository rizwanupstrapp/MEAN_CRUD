import * as EmailTemplateActions from "./emailTemplate.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function EmailTemplateReducer(
    state = initialState,
    action: EmailTemplateActions.action
) {
    switch (action.type) {
        // for emailTemplate load-----------------------------
        case EmailTemplateActions.EmailTemplateActionTypes.LOAD_EMAIL_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case EmailTemplateActions.EmailTemplateActionTypes.LOAD_EMAIL_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for emailTemplate delete-----------------------------
        case EmailTemplateActions.EmailTemplateActionTypes.DELETE_EMAIL_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case EmailTemplateActions.EmailTemplateActionTypes.DELETE_EMAIL_TEMPLATE_FAIL: {
            return action.payload.error
        }

        // for emailTemplate update-----------------------------
        case EmailTemplateActions.EmailTemplateActionTypes.UPDATE_EMAIL_TEMPLATE_SUCCESS: {
            return action.payload
        }
        case EmailTemplateActions.EmailTemplateActionTypes.UPDATE_EMAIL_TEMPLATE_FAIL: {
            return action.payload.error;
        }

        // for emailTemplate upadat status-----------------------------
        case EmailTemplateActions.EmailTemplateActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case EmailTemplateActions.EmailTemplateActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

        // for emailTemplate add-----------------------------
        case EmailTemplateActions.EmailTemplateActionTypes.ADD_EMAIL_TEMPLATE_SUCCESS: {
            return action.payload
        }
        case EmailTemplateActions.EmailTemplateActionTypes.ADD_EMAIL_TEMPLATE_FAIL: {
            return action.payload.error;
        }

    }

}

const getTemplateState = createFeatureSelector(
    "emailTemplate"
);

export const selectPageState = createSelector(
    getTemplateState,
    state => state // return error message
)


