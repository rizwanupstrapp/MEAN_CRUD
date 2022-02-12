import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as helpTopicActions from "./help-topic.actions";
import { Response } from "../../../../model/model";
import { HelpTopicService } from '../help-topic.service';


@Injectable()
export class HelpTopicEffect {

    constructor(
        private actions$: Actions,
        private HelpTopicService: HelpTopicService
    ) { }

    @Effect()
    deleteHelpTopic$: Observable<Action> = this.actions$.pipe(
        ofType<helpTopicActions.DeleteHelpTopic>(
            helpTopicActions.HelpTopicActionTypes.DELETE_HELPTOPIC
        ),
        map((action: helpTopicActions.DeleteHelpTopic) => action.payload),
        mergeMap((id: any) =>
            this.HelpTopicService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new helpTopicActions.DeleteHelpTopicSuccess(response)
                ),
                catchError(err =>
                    of(new helpTopicActions.DeleteHelpTopicFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<helpTopicActions.UpdateStatus>(
            helpTopicActions.HelpTopicActionTypes.UPDATE_STATUS
        ),
        map((action: helpTopicActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.HelpTopicService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new helpTopicActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new helpTopicActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadHelpTopic$: Observable<Action> = this.actions$.pipe(
        ofType<helpTopicActions.LoadHelpTopic>(
            helpTopicActions.HelpTopicActionTypes.LOAD_HELPTOPIC
        ),
        map((action: helpTopicActions.LoadHelpTopic) => action.payload),
        mergeMap((id: any) =>
            this.HelpTopicService.getHelpTopicById(id).pipe(
                map(
                    (response: Response) =>
                        new helpTopicActions.LoadHelpTopicSuccess(response)
                ),
                catchError(err =>
                    of(new helpTopicActions.LoadHelpTopicFail(err)))
            )
        )
    );

    @Effect()
    updateHelpTopic$: Observable<Action> = this.actions$.pipe(
        ofType<helpTopicActions.UpdateHelpTopic>(
            helpTopicActions.HelpTopicActionTypes.UPDATE_HELPTOPIC
        ),
        map((action: helpTopicActions.UpdateHelpTopic) => action.payload),
        mergeMap((data: any) =>
            this.HelpTopicService.updateHelpTopic(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new helpTopicActions.UpdateHelpTopicSuccess(response)
                ),
                catchError(err => of(new helpTopicActions.UpdateHelpTopicFail(err)))
            )
        )
    );


    @Effect()
    addHelpTopic$: Observable<Action> = this.actions$.pipe(
        ofType<helpTopicActions.AddHelpTopic>(
            helpTopicActions.HelpTopicActionTypes.ADD_HELPTOPIC
        ),
        map((action: helpTopicActions.AddHelpTopic) => action.payload),
        mergeMap((data: any) =>
            this.HelpTopicService.addHelpTopic(data).pipe(
                map(
                    (response: Response) =>
                        new helpTopicActions.AddHelpTopicSuccess(response)
                ),
                catchError(err =>
                    of(new helpTopicActions.AddHelpTopicFail(err)))
            )
        )
    );
}