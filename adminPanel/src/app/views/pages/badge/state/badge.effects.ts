import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as badgeActions from "./badge.actions";
import { Response } from "../../../../model/model";
import { BadgeService } from '../badge.service';


@Injectable()
export class BadgeEffect {

    constructor(
        private actions$: Actions,
        private BadgeService: BadgeService
    ) { }

    @Effect()
    deleteBadge$: Observable<Action> = this.actions$.pipe(
        ofType<badgeActions.DeleteBadge>(
            badgeActions.BadgeActionTypes.DELETE_BADGE
        ),
        map((action: badgeActions.DeleteBadge) => action.payload),
        mergeMap((id: any) =>
            this.BadgeService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new badgeActions.DeleteBadgeSuccess(response)
                ),
                catchError(err =>
                    of(new badgeActions.DeleteBadgeFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<badgeActions.UpdateStatus>(
            badgeActions.BadgeActionTypes.UPDATE_STATUS
        ),
        map((action: badgeActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.BadgeService.updateStatus(data.id, data.data).pipe(
                map(
                    (updateBadgeData: Response) =>
                        new badgeActions.UpdateStatusSuccess(updateBadgeData)
                ),
                catchError(err => of(new badgeActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadBadge$: Observable<Action> = this.actions$.pipe(
        ofType<badgeActions.LoadBadge>(
            badgeActions.BadgeActionTypes.LOAD_BADGE
        ),
        map((action: badgeActions.LoadBadge) => action.payload),
        mergeMap((id: any) =>
            this.BadgeService.getBadgeById(id).pipe(
                map(
                    (response: Response) =>
                        new badgeActions.LoadBadgeSuccess(response)
                ),
                catchError(err =>
                    of(new badgeActions.LoadBadgeFail(err)))
            )
        )
    );

    @Effect()
    updateBadge$: Observable<Action> = this.actions$.pipe(
        ofType<badgeActions.UpdateBadge>(
            badgeActions.BadgeActionTypes.UPDATE_BADGE
        ),
        map((action: badgeActions.UpdateBadge) => action.payload),
        mergeMap((data: any) =>
            this.BadgeService.updateBadge(data.id, data.data).pipe(
                map(
                    (updateBadgeData: Response) =>
                        new badgeActions.UpdateBadgeSuccess(updateBadgeData)
                ),
                catchError(err => of(new badgeActions.UpdateBadgeFail(err)))
            )
        )
    );


    @Effect()
    addBadge$: Observable<Action> = this.actions$.pipe(
        ofType<badgeActions.AddBadge>(
            badgeActions.BadgeActionTypes.ADD_BADGE
        ),
        map((action: badgeActions.AddBadge) => action.payload),
        mergeMap((data: any) =>
            this.BadgeService.addBadge(data).pipe(
                map(
                    (response: Response) =>
                        new badgeActions.AddBadgeSuccess(response)
                ),
                catchError(err =>
                    of(new badgeActions.AddBadgeFail(err)))
            )
        )
    );


}