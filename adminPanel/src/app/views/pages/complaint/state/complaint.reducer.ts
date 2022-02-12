import * as ComplaintActions from "./complaint.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function ComplaintReducer(
    state = initialState,
    action: ComplaintActions.action
) {
    switch (action.type) {
        // for Complaint load-----------------------------
        case ComplaintActions.ComplaintActionTypes.LOAD_COMPLAINT_SUCCESS: {
            return action.payload;
        }
        case ComplaintActions.ComplaintActionTypes.LOAD_COMPLAINT_FAIL: {
            return action.payload.error;
        }
      
        // for Complaint update-----------------------------
        case ComplaintActions.ComplaintActionTypes.UPDATE_COMPLAINT_SUCCESS: {
            return action.payload
        }
        case ComplaintActions.ComplaintActionTypes.UPDATE_COMPLAINT_FAIL: {
            return action.payload.error;
        }

        // for Complaint update status-----------------------------
        case ComplaintActions.ComplaintActionTypes.UPDATE_STATUS_SUCCESS: {
            return action.payload
        }
        case ComplaintActions.ComplaintActionTypes.UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }

    }

}

const getComplaintState = createFeatureSelector(
    "complaint"
);

export const selectPageState = createSelector(
    getComplaintState,
    state => state // return error message
)


