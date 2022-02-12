import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as stateActions from "./state.actions";
import { Response } from "../../../../model/model";
import { StateService } from '../state.service';


@Injectable()
export class StateEffect {

    constructor(
        private actions$: Actions,
        private StateService: StateService
    ) { }

    @Effect()
    deleteState$: Observable<Action> = this.actions$.pipe(
        ofType<stateActions.DeleteState>(
            stateActions.StateActionTypes.DELETE_STATE
        ),
        map((action: stateActions.DeleteState) => action.payload),
        mergeMap((id: any) =>
            this.StateService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new stateActions.DeleteStateSuccess(response)
                ),
                catchError(err =>
                    of(new stateActions.DeleteStateFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<stateActions.UpdateStatus>(
            stateActions.StateActionTypes.UPDATE_STATUS
        ),
        map((action: stateActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.StateService.updateStatus(data.id, data.data).pipe(
                map(
                    (updateStateData: Response) =>
                        new stateActions.UpdateStatusSuccess(updateStateData)
                ),
                catchError(err => of(new stateActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadState$: Observable<Action> = this.actions$.pipe(
        ofType<stateActions.LoadState>(
            stateActions.StateActionTypes.LOAD_STATE
        ),
        map((action: stateActions.LoadState) => action.payload),
        mergeMap((id: any) =>
            this.StateService.getStateById(id).pipe(
                map(
                    (response: Response) =>
                        new stateActions.LoadStateSuccess(response)
                ),
                catchError(err =>
                    of(new stateActions.LoadStateFail(err)))
            )
        )
    );

    @Effect()
    updateState$: Observable<Action> = this.actions$.pipe(
        ofType<stateActions.UpdateState>(
            stateActions.StateActionTypes.UPDATE_STATE
        ),
        map((action: stateActions.UpdateState) => action.payload),
        mergeMap((data: any) =>
            this.StateService.updateState(data.id, data.data).pipe(
                map(
                    (updateStateData: Response) =>
                        new stateActions.UpdateStateSuccess(updateStateData)
                ),
                catchError(err => of(new stateActions.UpdateStateFail(err)))
            )
        )
    );


    @Effect()
    addState$: Observable<Action> = this.actions$.pipe(
        ofType<stateActions.AddState>(
            stateActions.StateActionTypes.ADD_STATE
        ),
        map((action: stateActions.AddState) => action.payload),
        mergeMap((data: any) =>
            this.StateService.addState(data).pipe(
                map(
                    (response: Response) =>
                        new stateActions.AddStateSuccess(response)
                ),
                catchError(err =>
                    of(new stateActions.AddStateFail(err)))
            )
        )
    );


}