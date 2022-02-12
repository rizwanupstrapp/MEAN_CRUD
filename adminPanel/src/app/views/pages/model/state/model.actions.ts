import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";

export enum ModelActionTypes {
  UPDATE_STATUS = "[MODEL] Update Status",
  UPDATE_STATUS_SUCCESS = "[MODEL]  Update Status Success",
  UPDATE_STATUS_FAIL = "[MODEL]  Update Status Fail",

  LOAD_MODEL = "[MODEL] Load MODEL",
  LOAD_MODEL_SUCCESS = "[MODEL] Load MODEL Success",
  LOAD_MODEL_FAIL = "[MODEL] Load MODEL Fail",

  UPDATE_MODEL = "[MODEL] Update MODEL",
  UPDATE_MODEL_SUCCESS = "[MODEL] Update MODEL Success",
  UPDATE_MODEL_FAIL = "[MODEL] Update MODEL Fail",

  DELETE_MODEL = "[MODEL] Delete MODEL",
  DELETE_MODEL_SUCCESS = "[MODEL] Delete MODEL Success",
  DELETE_MODEL_FAIL = "[MODEL] Delete MODEL Fail",

  ADD_MODEL = "[MODEL] Upload Data",
  ADD_MODEL_SUCCESS = "[MODEL] Upload Data Success",
  ADD_MODEL_FAIL = "[MODEL] Upload Data Fail",

  UPLOAD_DATA = "[MODEL] Upload Data",
  UPLOAD_DATA_SUCCESS = "[MODEL] Upload Data Success",
  UPLOAD_DATA_FAIL = "[MODEL] Upload Data Fail",
}

export class LoadModel implements Action {
  readonly type = ModelActionTypes.LOAD_MODEL;

  constructor(public payload: any) {}
}

export class LoadModelSuccess implements Action {
  readonly type = ModelActionTypes.LOAD_MODEL_SUCCESS;

  constructor(public payload: Response) {}
}

export class LoadModelFail implements Action {
  readonly type = ModelActionTypes.LOAD_MODEL_FAIL;

  constructor(public payload: any) {}
}

export class UpdateModel implements Action {
  readonly type = ModelActionTypes.UPDATE_MODEL;

  constructor(public payload: any) {}
}

export class UpdateModelSuccess implements Action {
  readonly type = ModelActionTypes.UPDATE_MODEL_SUCCESS;

  constructor(public payload: Response) {}
}

export class UpdateModelFail implements Action {
  readonly type = ModelActionTypes.UPDATE_MODEL_FAIL;

  constructor(public payload: any) {}
}

export class DeleteModel implements Action {
  readonly type = ModelActionTypes.DELETE_MODEL;

  constructor(public payload: any) {}
}

export class DeleteModelSuccess implements Action {
  readonly type = ModelActionTypes.DELETE_MODEL_SUCCESS;

  constructor(public payload: Response) {}
}

export class DeleteModelFail implements Action {
  readonly type = ModelActionTypes.DELETE_MODEL_FAIL;

  constructor(public payload: any) {}
}

export class UpdateStatus implements Action {
  readonly type = ModelActionTypes.UPDATE_STATUS;

  constructor(public payload: any) {}
}

export class UpdateStatusSuccess implements Action {
  readonly type = ModelActionTypes.UPDATE_STATUS_SUCCESS;

  constructor(public payload: Response) {}
}

export class UpdateStatusFail implements Action {
  readonly type = ModelActionTypes.UPDATE_STATUS_FAIL;

  constructor(public payload: any) {}
}

export class AddModel implements Action {
  readonly type = ModelActionTypes.ADD_MODEL;

  constructor(public payload: any) {}
}

export class AddModelSuccess implements Action {
  readonly type = ModelActionTypes.ADD_MODEL_SUCCESS;

  constructor(public payload: Response) {}
}

export class AddModelFail implements Action {
  readonly type = ModelActionTypes.ADD_MODEL_FAIL;

  constructor(public payload: any) {}
}

export type action =
  | LoadModel
  | LoadModelSuccess
  | LoadModelFail
  | UpdateModel
  | UpdateModelSuccess
  | UpdateModelFail
  | DeleteModel
  | DeleteModelSuccess
  | DeleteModelFail
  | UpdateStatus
  | UpdateStatusSuccess
  | UpdateStatusFail
  | AddModel
  | AddModelSuccess
  | AddModelFail;
