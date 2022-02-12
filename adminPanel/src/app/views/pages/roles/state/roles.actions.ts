
import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";


export enum RoleActionTypes {

  UPDATE_STATUS = "[ROLE] Update Status",
  UPDATE_STATUS_SUCCESS = "[ROLE]  Update Status Success",
  UPDATE_STATUS_FAIL = "[ROLE]  Update Status Fail",

  LOAD_ROLE = "[ROLE] Load ROLE",
  LOAD_ROLE_SUCCESS = "[ROLE] Load ROLE Success",
  LOAD_ROLE_FAIL = "[ROLE] Load ROLE Fail",

  UPDATE_ROLE = "[ROLE] Update ROLE",
  UPDATE_ROLE_SUCCESS = "[ROLE] Update ROLE Success",
  UPDATE_ROLE_FAIL = "[ROLE] Update ROLE Fail",

  DELETE_ROLE = "[ROLE] Delete ROLE",
  DELETE_ROLE_SUCCESS = "[ROLE] Delete ROLE Success",
  DELETE_ROLE_FAIL = "[ROLE] Delete ROLE Fail",

  ADD_ROLE = "[ROLE] Add Data",
  ADD_ROLE_SUCCESS = "[ROLE] Add Data Success",
  ADD_ROLE_FAIL = "[ROLE] Add Data Fail",


  GET_ROLE = "[ROLE] Get Permission Detail",
  GET_ROLE_SUCCESS = "[ROLE] Get Permission Detail Success",
  GET_ROLE_FAIL = "[ROLE] Get Permission Detail Fail",
}

export class LoadRole implements Action {
  readonly type = RoleActionTypes.LOAD_ROLE;

  constructor(public payload: any) { }
}

export class LoadRoleSuccess implements Action {
  readonly type = RoleActionTypes.LOAD_ROLE_SUCCESS;

  constructor(public payload: Response) { }
}

export class LoadRoleFail implements Action {
  readonly type = RoleActionTypes.LOAD_ROLE_FAIL;

  constructor(public payload: any) { }
}

export class UpdateRole implements Action {
  readonly type = RoleActionTypes.UPDATE_ROLE;

  constructor(public payload: any) { }
}

export class UpdateRoleSuccess implements Action {
  readonly type = RoleActionTypes.UPDATE_ROLE_SUCCESS;

  constructor(public payload: Response) { }
}

export class UpdateRoleFail implements Action {
  readonly type = RoleActionTypes.UPDATE_ROLE_FAIL;

  constructor(public payload: any) { }
}

export class DeleteRole implements Action {
  readonly type = RoleActionTypes.DELETE_ROLE;

  constructor(public payload: any) { }
}

export class DeleteRoleSuccess implements Action {
  readonly type = RoleActionTypes.DELETE_ROLE_SUCCESS;

  constructor(public payload: Response) { }
}

export class DeleteRoleFail implements Action {
  readonly type = RoleActionTypes.DELETE_ROLE_FAIL;

  constructor(public payload: any) { }
}


export class UpdateStatus implements Action {
  readonly type = RoleActionTypes.UPDATE_STATUS;

  constructor(public payload: any) { }
}

export class UpdateStatusSuccess implements Action {
  readonly type = RoleActionTypes.UPDATE_STATUS_SUCCESS;

  constructor(public payload: Response) { }
}

export class UpdateStatusFail implements Action {
  readonly type = RoleActionTypes.UPDATE_STATUS_FAIL;

  constructor(public payload: any) { }
}


export class AddRole implements Action {
  readonly type = RoleActionTypes.ADD_ROLE;

  constructor(public payload: any) { }
}

export class AddRoleSuccess implements Action {
  readonly type = RoleActionTypes.ADD_ROLE_SUCCESS;

  constructor(public payload: Response) { }
}

export class AddRoleFail implements Action {
  readonly type = RoleActionTypes.ADD_ROLE_FAIL;

  constructor(public payload: any) { }
}


export class GetRole implements Action {
  readonly type = RoleActionTypes.GET_ROLE;

  constructor() { }
}

export class GetRoleSuccess implements Action {
  readonly type = RoleActionTypes.GET_ROLE_SUCCESS;

  constructor(public payload: Response) { }
}

export class GetRoleFail implements Action {
  readonly type = RoleActionTypes.GET_ROLE_FAIL;

  constructor(public payload: any) { }
}

export type action =
    | LoadRole
    | LoadRoleSuccess
    | LoadRoleFail
    | UpdateRole
    | UpdateRoleSuccess
    | UpdateRoleFail
    | DeleteRole
    | DeleteRoleSuccess
    | DeleteRoleFail
    | UpdateStatus
    | UpdateStatusSuccess
    | UpdateStatusFail
    | AddRole
    | AddRoleSuccess
    | AddRoleFail
    | GetRole
    | GetRoleSuccess
    | GetRoleFail