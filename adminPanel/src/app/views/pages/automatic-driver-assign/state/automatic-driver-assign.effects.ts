import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as automaticDriverAssignActions from "./automatic-driver-assign.actions";
import { Response } from "../../../../model/model";
import { AutomaticDriverAssignService } from '../automatic-driver-assign.service';


@Injectable()
export class AutomaticDriverAssignEffect {

    constructor(
        private actions$: Actions,
        private AutomaticDriverAssignService: AutomaticDriverAssignService
    ) { }

    @Effect()
    deleteAutomaticDriverAssign$: Observable<Action> = this.actions$.pipe(
        ofType<automaticDriverAssignActions.DeleteAutomaticDriverAssign>(
            automaticDriverAssignActions.AutomaticDriverAssignActionTypes.DELETE_AUTOMATIC_DRIVER_ASSIGN
        ),
        map((action: automaticDriverAssignActions.DeleteAutomaticDriverAssign) => action.payload),
        mergeMap((id: any) =>
            this.AutomaticDriverAssignService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new automaticDriverAssignActions.DeleteAutomaticDriverAssignSuccess(response)
                ),
                catchError(err =>
                    of(new automaticDriverAssignActions.DeleteAutomaticDriverAssignFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<automaticDriverAssignActions.UpdateStatus>(
            automaticDriverAssignActions.AutomaticDriverAssignActionTypes.UPDATE_STATUS
        ),
        map((action: automaticDriverAssignActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.AutomaticDriverAssignService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new automaticDriverAssignActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new automaticDriverAssignActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadAutomaticDriverAssign$: Observable<Action> = this.actions$.pipe(
        ofType<automaticDriverAssignActions.LoadAutomaticDriverAssign>(
            automaticDriverAssignActions.AutomaticDriverAssignActionTypes.LOAD_AUTOMATIC_DRIVER_ASSIGN
        ),
        map((action: automaticDriverAssignActions.LoadAutomaticDriverAssign) => action.payload),
        mergeMap((id: any) =>
            this.AutomaticDriverAssignService.getAutomaticDriverAssignById(id).pipe(
                map(
                    (response: Response) =>
                        new automaticDriverAssignActions.LoadAutomaticDriverAssignSuccess(response)
                ),
                catchError(err =>
                    of(new automaticDriverAssignActions.LoadAutomaticDriverAssignFail(err)))
            )
        )
    );

    @Effect()
    updateAutomaticDriverAssign$: Observable<Action> = this.actions$.pipe(
        ofType<automaticDriverAssignActions.UpdateAutomaticDriverAssign>(
            automaticDriverAssignActions.AutomaticDriverAssignActionTypes.UPDATE_AUTOMATIC_DRIVER_ASSIGN
        ),
        map((action: automaticDriverAssignActions.UpdateAutomaticDriverAssign) => action.payload),
        mergeMap((data: any) =>
            this.AutomaticDriverAssignService.updateAutomaticDriverAssign(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new automaticDriverAssignActions.UpdateAutomaticDriverAssignSuccess(response)
                ),
                catchError(err => of(new automaticDriverAssignActions.UpdateAutomaticDriverAssignFail(err)))
            )
        )
    );


    @Effect()
    addAutomaticDriverAssign$: Observable<Action> = this.actions$.pipe(
        ofType<automaticDriverAssignActions.AddAutomaticDriverAssign>(
            automaticDriverAssignActions.AutomaticDriverAssignActionTypes.ADD_AUTOMATIC_DRIVER_ASSIGN
        ),
        map((action: automaticDriverAssignActions.AddAutomaticDriverAssign) => action.payload),
        mergeMap((data: any) =>
            this.AutomaticDriverAssignService.addAutomaticDriverAssign(data).pipe(
                map(
                    (response: Response) =>
                        new automaticDriverAssignActions.AddAutomaticDriverAssignSuccess(response)
                ),
                catchError(err =>
                    of(new automaticDriverAssignActions.AddAutomaticDriverAssignFail(err)))
            )
        )
    );
}