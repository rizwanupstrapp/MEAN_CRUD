import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as HighDemandAreaActions from "./highDemand-area.actions";
import { Response } from "../../../../model/model";
import { HighDemandAreaService } from '../highDemand-area.service';


@Injectable()
export class HighDemandAreaEffect {

    constructor(
        private actions$: Actions,
        private HighDemandAreaService: HighDemandAreaService
    ) { }

    @Effect()
    deleteHighDemandArea$: Observable<Action> = this.actions$.pipe(
        ofType<HighDemandAreaActions.DeleteHighDemandArea>(
            HighDemandAreaActions.HighDemandAreaActionTypes.DELETE_HIGHDEMANDAREA
        ),
        map((action: HighDemandAreaActions.DeleteHighDemandArea) => action.payload),
        mergeMap((id: any) =>
            this.HighDemandAreaService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new HighDemandAreaActions.DeleteHighDemandAreaSuccess(response)
                ),
                catchError(err =>
                    of(new HighDemandAreaActions.DeleteHighDemandAreaFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<HighDemandAreaActions.UpdateStatus>(
            HighDemandAreaActions.HighDemandAreaActionTypes.UPDATE_STATUS
        ),
        map((action: HighDemandAreaActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.HighDemandAreaService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new HighDemandAreaActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new HighDemandAreaActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadHighDemandArea$: Observable<Action> = this.actions$.pipe(
        ofType<HighDemandAreaActions.LoadHighDemandArea>(
            HighDemandAreaActions.HighDemandAreaActionTypes.LOAD_HIGHDEMANDAREA
        ),
        map((action: HighDemandAreaActions.LoadHighDemandArea) => action.payload),
        mergeMap((id: any) =>
            this.HighDemandAreaService.getHighDemandAreaById(id).pipe(
                map(
                    (response: Response) =>
                        new HighDemandAreaActions.LoadHighDemandAreaSuccess(response)
                ),
                catchError(err =>
                    of(new HighDemandAreaActions.LoadHighDemandAreaFail(err)))
            )
        )
    );

    @Effect()
    updateHighDemandArea$: Observable<Action> = this.actions$.pipe(
        ofType<HighDemandAreaActions.UpdateHighDemandArea>(
            HighDemandAreaActions.HighDemandAreaActionTypes.UPDATE_HIGHDEMANDAREA
        ),
        map((action: HighDemandAreaActions.UpdateHighDemandArea) => action.payload),
        mergeMap((data: any) =>
            this.HighDemandAreaService.updateHighDemandArea(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new HighDemandAreaActions.UpdateHighDemandAreaSuccess(response)
                ),
                catchError(err => of(new HighDemandAreaActions.UpdateHighDemandAreaFail(err)))
            )
        )
    );


    @Effect()
    addHighDemandArea$: Observable<Action> = this.actions$.pipe(
        ofType<HighDemandAreaActions.AddHighDemandArea>(
            HighDemandAreaActions.HighDemandAreaActionTypes.ADD_HIGHDEMANDAREA
        ),
        map((action: HighDemandAreaActions.AddHighDemandArea) => action.payload),
        mergeMap((data: any) =>
            this.HighDemandAreaService.addHighDemandArea(data).pipe(
                map(
                    (response: Response) =>
                        new HighDemandAreaActions.AddHighDemandAreaSuccess(response)
                ),
                catchError(err =>
                    of(new HighDemandAreaActions.AddHighDemandAreaFail(err)))
            )
        )
    );
}