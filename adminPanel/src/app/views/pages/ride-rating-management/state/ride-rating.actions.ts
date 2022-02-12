import { Action } from "@ngrx/store";

import { Response } from "../../../../model/model";

export enum RideRatingActionTypes {
  UPDATE_STATUS = "[RIDE_RATING] Update Status",
  UPDATE_STATUS_SUCCESS = "[RIDE_RATING]  Update Status Success",
  UPDATE_STATUS_FAIL = "[RIDE_RATING]  Update Status Fail",

  LOAD_RIDE_RATING = "[RIDE_RATING] Load RIDE_RATING",
  LOAD_RIDE_RATING_SUCCESS = "[RIDE_RATING] Load RIDE_RATING Success",
  LOAD_RIDE_RATING_FAIL = "[RIDE_RATING] Load RIDE_RATING Fail",

  UPDATE_RIDE_RATING = "[RIDE_RATING] Update RIDE_RATING",
  UPDATE_RIDE_RATING_SUCCESS = "[RIDE_RATING] Update RIDE_RATING Success",
  UPDATE_RIDE_RATING_FAIL = "[RIDE_RATING] Update RIDE_RATING Fail",

  DELETE_RIDE_RATING = "[RIDE_RATING] Delete RIDE_RATING",
  DELETE_RIDE_RATING_SUCCESS = "[RIDE_RATING] Delete RIDE_RATING Success",
  DELETE_RIDE_RATING_FAIL = "[RIDE_RATING] Delete RIDE_RATING Fail",

  ADD_RIDE_RATING = "[RIDE_RATING] Upload Data",
  ADD_RIDE_RATING_SUCCESS = "[RIDE_RATING] Upload Data Success",
  ADD_RIDE_RATING_FAIL = "[RIDE_RATING] Upload Data Fail",

  UPLOAD_DATA = "[RIDE_RATING] Upload Data",
  UPLOAD_DATA_SUCCESS = "[RIDE_RATING] Upload Data Success",
  UPLOAD_DATA_FAIL = "[RIDE_RATING] Upload Data Fail",
}

export class LoadRideRating implements Action {
  readonly type = RideRatingActionTypes.LOAD_RIDE_RATING;

  constructor(public payload: any) {}
}

export class LoadRideRatingSuccess implements Action {
  readonly type = RideRatingActionTypes.LOAD_RIDE_RATING_SUCCESS;

  constructor(public payload: Response) {}
}

export class LoadRideRatingFail implements Action {
  readonly type = RideRatingActionTypes.LOAD_RIDE_RATING_FAIL;

  constructor(public payload: any) {}
}

export class UpdateRideRating implements Action {
  readonly type = RideRatingActionTypes.UPDATE_RIDE_RATING;

  constructor(public payload: any) {}
}

export class UpdateRideRatingSuccess implements Action {
  readonly type = RideRatingActionTypes.UPDATE_RIDE_RATING_SUCCESS;

  constructor(public payload: Response) {}
}

export class UpdateRideRatingFail implements Action {
  readonly type = RideRatingActionTypes.UPDATE_RIDE_RATING_FAIL;

  constructor(public payload: any) {}
}

export class DeleteRideRating implements Action {
  readonly type = RideRatingActionTypes.DELETE_RIDE_RATING;

  constructor(public payload: any) {}
}

export class DeleteRideRatingSuccess implements Action {
  readonly type = RideRatingActionTypes.DELETE_RIDE_RATING_SUCCESS;

  constructor(public payload: Response) {}
}

export class DeleteRideRatingFail implements Action {
  readonly type = RideRatingActionTypes.DELETE_RIDE_RATING_FAIL;

  constructor(public payload: any) {}
}

export class UpdateStatus implements Action {
  readonly type = RideRatingActionTypes.UPDATE_STATUS;

  constructor(public payload: any) {}
}

export class UpdateStatusSuccess implements Action {
  readonly type = RideRatingActionTypes.UPDATE_STATUS_SUCCESS;

  constructor(public payload: Response) {}
}

export class UpdateStatusFail implements Action {
  readonly type = RideRatingActionTypes.UPDATE_STATUS_FAIL;

  constructor(public payload: any) {}
}

export class AddRideRating implements Action {
  readonly type = RideRatingActionTypes.ADD_RIDE_RATING;

  constructor(public payload: any) {}
}

export class AddRideRatingSuccess implements Action {
  readonly type = RideRatingActionTypes.ADD_RIDE_RATING_SUCCESS;

  constructor(public payload: Response) {}
}

export class AddRideRatingFail implements Action {
  readonly type = RideRatingActionTypes.ADD_RIDE_RATING_FAIL;

  constructor(public payload: any) {}
}

export type action =
  | LoadRideRating
  | LoadRideRatingSuccess
  | LoadRideRatingFail
  | UpdateRideRating
  | UpdateRideRatingSuccess
  | UpdateRideRatingFail
  | DeleteRideRating
  | DeleteRideRatingSuccess
  | DeleteRideRatingFail
  | UpdateStatus
  | UpdateStatusSuccess
  | UpdateStatusFail
  | AddRideRating
  | AddRideRatingSuccess
  | AddRideRatingFail;
