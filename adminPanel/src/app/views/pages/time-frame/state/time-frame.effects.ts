import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as timeFrameActions from "./time-frame.actions";
import { Response } from "../../../../model/model";
import { TimeFrameService } from '../time-frame.service';


@Injectable()
export class TimeFrameEffect {

    constructor(
        private actions$: Actions,
        private TimeFrameService: TimeFrameService
    ) { }

    @Effect()
    deleteTimeFrame$: Observable<Action> = this.actions$.pipe(
        ofType<timeFrameActions.DeleteTimeFrame>(
            timeFrameActions.TimeFrameActionTypes.DELETE_TIMEFRAME
        ),
        map((action: timeFrameActions.DeleteTimeFrame) => action.payload),
        mergeMap((id: any) =>
            this.TimeFrameService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new timeFrameActions.DeleteTimeFrameSuccess(response)
                ),
                catchError(err =>
                    of(new timeFrameActions.DeleteTimeFrameFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<timeFrameActions.UpdateStatus>(
            timeFrameActions.TimeFrameActionTypes.UPDATE_STATUS
        ),
        map((action: timeFrameActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.TimeFrameService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new timeFrameActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new timeFrameActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadTimeFrame$: Observable<Action> = this.actions$.pipe(
        ofType<timeFrameActions.LoadTimeFrame>(
            timeFrameActions.TimeFrameActionTypes.LOAD_TIMEFRAME
        ),
        map((action: timeFrameActions.LoadTimeFrame) => action.payload),
        mergeMap((id: any) =>
            this.TimeFrameService.getTimeFrameById(id).pipe(
                map(
                    (response: Response) =>
                        new timeFrameActions.LoadTimeFrameSuccess(response)
                ),
                catchError(err =>
                    of(new timeFrameActions.LoadTimeFrameFail(err)))
            )
        )
    );

    @Effect()
    updateTimeFrame$: Observable<Action> = this.actions$.pipe(
        ofType<timeFrameActions.UpdateTimeFrame>(
            timeFrameActions.TimeFrameActionTypes.UPDATE_TIMEFRAME
        ),
        map((action: timeFrameActions.UpdateTimeFrame) => action.payload),
        mergeMap((data: any) =>
            this.TimeFrameService.updateTimeFrame(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new timeFrameActions.UpdateTimeFrameSuccess(response)
                ),
                catchError(err => of(new timeFrameActions.UpdateTimeFrameFail(err)))
            )
        )
    );


    @Effect()
    addTimeFrame$: Observable<Action> = this.actions$.pipe(
        ofType<timeFrameActions.AddTimeFrame>(
            timeFrameActions.TimeFrameActionTypes.ADD_TIMEFRAME
        ),
        map((action: timeFrameActions.AddTimeFrame) => action.payload),
        mergeMap((data: any) =>
            this.TimeFrameService.addTimeFrame(data).pipe(
                map(
                    (response: Response) =>
                        new timeFrameActions.AddTimeFrameSuccess(response)
                ),
                catchError(err =>
                    of(new timeFrameActions.AddTimeFrameFail(err)))
            )
        )
    );
}