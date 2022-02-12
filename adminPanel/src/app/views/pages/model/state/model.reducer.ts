import * as ModelActions from "./model.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState = [];

export function ModelReducer(
  state = initialState,
  action: ModelActions.action
) {
  switch (action.type) {
    // for Model load-----------------------------
    case ModelActions.ModelActionTypes.LOAD_MODEL_SUCCESS: {
      return action.payload;
    }
    case ModelActions.ModelActionTypes.LOAD_MODEL_FAIL: {
      return action.payload.error;
    }
    // for Model delete-----------------------------
    case ModelActions.ModelActionTypes.DELETE_MODEL_SUCCESS: {
      return action.payload;
    }
    case ModelActions.ModelActionTypes.DELETE_MODEL_FAIL: {
      return action.payload.error;
    }

    // for Model update-----------------------------
    case ModelActions.ModelActionTypes.UPDATE_MODEL_SUCCESS: {
      return action.payload;
    }
    case ModelActions.ModelActionTypes.UPDATE_MODEL_FAIL: {
      return action.payload.error;
    }

    // for Model upadat status-----------------------------
    case ModelActions.ModelActionTypes.UPDATE_STATUS_SUCCESS: {
      return action.payload;
    }
    case ModelActions.ModelActionTypes.UPDATE_STATUS_FAIL: {
      return action.payload.error;
    }

    // for Model add-----------------------------
    case ModelActions.ModelActionTypes.ADD_MODEL_SUCCESS: {
      return action.payload;
    }
    case ModelActions.ModelActionTypes.ADD_MODEL_FAIL: {
      return action.payload.error;
    }
  }
}

const getModelState = createFeatureSelector("models");

export const selectPageState = createSelector(
  getModelState,
  state => state // return error message
);
