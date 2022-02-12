import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as permissionActions from "./permission.actions";
import { Response } from "../../../../model/model";
import { PermissionService } from '../permission.service';


@Injectable()
export class PermissionEffect {

    constructor(
        private actions$: Actions,
        private PermissionService: PermissionService
    ) { }

    @Effect()
    deletePermission$: Observable<Action> = this.actions$.pipe(
        ofType<permissionActions.DeletePermission>(
            permissionActions.PermissionActionTypes.DELETE_PERMISSION
        ),
        map((action: permissionActions.DeletePermission) => action.payload),
        mergeMap((id: any) =>
            this.PermissionService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new permissionActions.DeletePermissionSuccess(response)
                ),
                catchError(err =>
                    of(new permissionActions.DeletePermissionFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<permissionActions.UpdateStatus>(
            permissionActions.PermissionActionTypes.UPDATE_STATUS
        ),
        map((action: permissionActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.PermissionService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new permissionActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new permissionActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadPermission$: Observable<Action> = this.actions$.pipe(
        ofType<permissionActions.LoadPermission>(
            permissionActions.PermissionActionTypes.LOAD_PERMISSION
        ),
        map((action: permissionActions.LoadPermission) => action.payload),
        mergeMap((id: any) =>
            this.PermissionService.getPermissionById(id).pipe(
                map(
                    (response: Response) =>
                        new permissionActions.LoadPermissionSuccess(response)
                ),
                catchError(err =>
                    of(new permissionActions.LoadPermissionFail(err)))
            )
        )
    );

    @Effect()
    addPermission$: Observable<Action> = this.actions$.pipe(
        ofType<permissionActions.AddPermission>(
            permissionActions.PermissionActionTypes.ADD_PERMISSION
        ),
        map((action: permissionActions.AddPermission) => action.payload),
        mergeMap((data: any) =>
            this.PermissionService.addPermission(data).pipe(
                map(
                    (response: Response) =>
                        new permissionActions.AddPermissionSuccess(response)
                ),
                catchError(err =>
                    of(new permissionActions.AddPermissionFail(err)))
            )
        )
    );
}