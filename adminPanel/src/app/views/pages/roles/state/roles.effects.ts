import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

// import { StudentManagementService } from "../student-management.service";
import * as roleActions from "./roles.actions";
import { Response } from "../../../../model/model";
import { RolesService } from '../roles.service';


@Injectable()
export class RolesEffect {

    constructor(
        private actions$: Actions,
        private roleService: RolesService
    ) { }

    @Effect()
    deleteRole$: Observable<Action> = this.actions$.pipe(
        ofType<roleActions.DeleteRole>(
            roleActions.RoleActionTypes.DELETE_ROLE
        ),
        map((action: roleActions.DeleteRole) => action.payload),
        mergeMap((id: any) =>
            this.roleService.deleteById(id).pipe(
                map(
                    (response: Response) =>
                        new roleActions.DeleteRoleSuccess(response)
                ),
                catchError(err =>
                    of(new roleActions.DeleteRoleFail(err)))
            )
        )
    );


    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<roleActions.UpdateStatus>(
            roleActions.RoleActionTypes.UPDATE_STATUS
        ),
        map((action: roleActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.roleService.updateRoleStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new roleActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new roleActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadRole$: Observable<Action> = this.actions$.pipe(
        ofType<roleActions.LoadRole>(
            roleActions.RoleActionTypes.LOAD_ROLE
        ),
        map((action: roleActions.LoadRole) => action.payload),
        mergeMap((id: any) =>
            this.roleService.getRoleById(id).pipe(
                map(
                    (response: Response) =>
                        new roleActions.LoadRoleSuccess(response)
                ),
                catchError(err =>
                    of(new roleActions.LoadRoleFail(err)))
            )
        )
    );

    @Effect()
    updateRole$: Observable<Action> = this.actions$.pipe(
        ofType<roleActions.UpdateRole>(
            roleActions.RoleActionTypes.UPDATE_ROLE
        ),
        map((action: roleActions.UpdateRole) => action.payload),
        mergeMap((data: any) =>
            this.roleService.updateRole(data.id, data.data).pipe(
                map(
                    (updateRole: Response) =>
                        new roleActions.UpdateRoleSuccess(updateRole)
                ),
                catchError(err => of(new roleActions.UpdateRoleFail(err)))
            )
        )
    );


    @Effect()
    addRole$: Observable<Action> = this.actions$.pipe(
        ofType<roleActions.AddRole>(
            roleActions.RoleActionTypes.ADD_ROLE
        ),
        map((action: roleActions.AddRole) => action.payload),
        mergeMap((data: any) =>
            this.roleService.addRole(data).pipe(
                map(
                    (newRole: Response) =>
                        new roleActions.AddRoleSuccess(newRole)
                ),
                catchError(err =>
                    of(new roleActions.AddRoleFail(err)))
            )
        )
    );

    @Effect()
    getPermissions$: Observable<Action> = this.actions$.pipe(
      ofType<roleActions.GetRole>(
        roleActions.RoleActionTypes.GET_ROLE
      ),
      mergeMap((action: roleActions.GetRole) =>
        this.roleService.getPermissionList().pipe(
          map(
            (permissions: Response) =>
              new roleActions.GetRoleSuccess(permissions)
          ),
          catchError(err => of(new roleActions.GetRoleFail(err)))
        )
      )
    );
}