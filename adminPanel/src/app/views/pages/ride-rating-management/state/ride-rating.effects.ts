import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as RideRatingActions from "./ride-rating.actions";
import { Response } from "../../../../model/model";
import { RideRatingService } from '../ride-rating.service';

@Injectable()
export class RideRatingEffect {
  constructor(
    private actions$: Actions,
    private rideRatingService: RideRatingService
  ) {}

  @Effect()
  deleteRideRating$: Observable<Action> = this.actions$.pipe(
    ofType<RideRatingActions.DeleteRideRating>(
      RideRatingActions.RideRatingActionTypes.DELETE_RIDE_RATING
    ),
    map(
      (action: RideRatingActions.DeleteRideRating) => action.payload
    ),
    mergeMap((id: any) =>
      this.rideRatingService.deleteById(id).pipe(
        map(
          (response: Response) =>
            new RideRatingActions.DeleteRideRatingSuccess(response)
        ),
        catchError((err) =>
          of(new RideRatingActions.DeleteRideRatingFail(err))
        )
      )
    )
  );

  // @Effect()
  // updateStatus$: Observable<Action> = this.actions$.pipe(
  //   ofType<RideRatingActions.UpdateStatus>(
  //     RideRatingActions.RideRatingActionTypes.UPDATE_STATUS
  //   ),
  //   map((action: RideRatingActions.UpdateStatus) => action.payload),
  //   mergeMap((data: any) =>
  //     this.rideRatingService.updateStatus(data.id, data.data).pipe(
  //       map(
  //         (response: Response) =>
  //           new RideRatingActions.UpdateStatusSuccess(response)
  //       ),
  //       catchError((err) =>
  //         of(new RideRatingActions.UpdateStatusFail(err))
  //       )
  //     )
  //   )
  // );

  @Effect()
  loadRideRating$: Observable<Action> = this.actions$.pipe(
    ofType<RideRatingActions.LoadRideRating>(
      RideRatingActions.RideRatingActionTypes.LOAD_RIDE_RATING
    ),
    map((action: RideRatingActions.LoadRideRating) => action.payload),
    mergeMap((id: any) =>
      this.rideRatingService.getRideRatingById(id).pipe(
        map(
          (response: Response) =>
            new RideRatingActions.LoadRideRatingSuccess(response)
        ),
        catchError((err) =>
          of(new RideRatingActions.LoadRideRatingFail(err))
        )
      )
    )
  );

  @Effect()
  updateRideRating$: Observable<Action> = this.actions$.pipe(
    ofType<RideRatingActions.UpdateRideRating>(
      RideRatingActions.RideRatingActionTypes.UPDATE_RIDE_RATING
    ),
    map(
      (action: RideRatingActions.UpdateRideRating) => action.payload
    ),
    mergeMap((data: any) =>
      this.rideRatingService
        .updateRideRating(data.id, data.data)
        .pipe(
          map(
            (response: Response) =>
              new RideRatingActions.UpdateRideRatingSuccess(
                response
              )
          ),
          catchError((err) =>
            of(new RideRatingActions.UpdateRideRatingFail(err))
          )
        )
    )
  );

  @Effect()
  addRideRating$: Observable<Action> = this.actions$.pipe(
    ofType<RideRatingActions.AddRideRating>(
      RideRatingActions.RideRatingActionTypes.ADD_RIDE_RATING
    ),
    map((action: RideRatingActions.AddRideRating) => action.payload),
    mergeMap((data: any) =>
      this.rideRatingService.addRideRating(data).pipe(
        map(
          (response: Response) =>
            new RideRatingActions.AddRideRatingSuccess(response)
        ),
        catchError((err) =>
          of(new RideRatingActions.AddRideRatingFail(err))
        )
      )
    )
  );
}
