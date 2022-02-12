import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as helpTopicActions from "./help.actions";
import { Response } from "../../../../model/model";
import { HelpService } from '../help.service';


@Injectable()
export class HelpEffect {

    constructor(
        private actions$: Actions,
        private HelpService: HelpService
    ) { }

    @Effect()
    deleteHelp$: Observable<Action> = this.actions$.pipe(
        ofType<helpTopicActions.DeleteHelp>(
            helpTopicActions.HelpActionTypes.DELETE_HELP
        ),
        map((action: helpTopicActions.DeleteHelp) => action.payload),
        mergeMap((id: any) =>
            this.HelpService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new helpTopicActions.DeleteHelpSuccess(response)
                ),
                catchError(err =>
                    of(new helpTopicActions.DeleteHelpFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<helpTopicActions.UpdateStatus>(
            helpTopicActions.HelpActionTypes.UPDATE_STATUS
        ),
        map((action: helpTopicActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.HelpService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new helpTopicActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new helpTopicActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadHelp$: Observable<Action> = this.actions$.pipe(
        ofType<helpTopicActions.LoadHelp>(
            helpTopicActions.HelpActionTypes.LOAD_HELP
        ),
        map((action: helpTopicActions.LoadHelp) => action.payload),
        mergeMap((id: any) =>
            this.HelpService.getHelpById(id).pipe(
                map(
                    (response: Response) =>
                        new helpTopicActions.LoadHelpSuccess(response)
                ),
                catchError(err =>
                    of(new helpTopicActions.LoadHelpFail(err)))
            )
        )
    );

    @Effect()
    updateHelp$: Observable<Action> = this.actions$.pipe(
        ofType<helpTopicActions.UpdateHelp>(
            helpTopicActions.HelpActionTypes.UPDATE_HELP
        ),
        map((action: helpTopicActions.UpdateHelp) => action.payload),
        mergeMap((data: any) =>
            this.HelpService.updateHelp(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new helpTopicActions.UpdateHelpSuccess(response)
                ),
                catchError(err => of(new helpTopicActions.UpdateHelpFail(err)))
            )
        )
    );


    @Effect()
    addHelp$: Observable<Action> = this.actions$.pipe(
        ofType<helpTopicActions.AddHelp>(
            helpTopicActions.HelpActionTypes.ADD_HELP
        ),
        map((action: helpTopicActions.AddHelp) => action.payload),
        mergeMap((data: any) =>
            this.HelpService.addHelp(data).pipe(
                map(
                    (response: Response) =>
                        new helpTopicActions.AddHelpSuccess(response)
                ),
                catchError(err =>
                    of(new helpTopicActions.AddHelpFail(err)))
            )
        )
    );
}