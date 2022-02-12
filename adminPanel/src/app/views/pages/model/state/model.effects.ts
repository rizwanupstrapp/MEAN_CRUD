import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as ModelActions from "./model.actions";
import { Response } from "../../../../model/model";
import { ModelService } from "../model.service";

@Injectable()
export class ModelEffect {
  constructor(
    private actions$: Actions,
    private ModelService: ModelService
  ) {}

  @Effect()
  deleteModel$: Observable<Action> = this.actions$.pipe(
    ofType<ModelActions.DeleteModel>(
      ModelActions.ModelActionTypes.DELETE_MODEL
    ),
    map(
      (action: ModelActions.DeleteModel) => action.payload
    ),
    mergeMap((id: any) =>
      this.ModelService.deleteById(id).pipe(
        map(
          (response: Response) =>
            new ModelActions.DeleteModelSuccess(response)
        ),
        catchError((err) =>
          of(new ModelActions.DeleteModelFail(err))
        )
      )
    )
  );

  @Effect()
  updateStatus$: Observable<Action> = this.actions$.pipe(
    ofType<ModelActions.UpdateStatus>(
      ModelActions.ModelActionTypes.UPDATE_STATUS
    ),
    map((action: ModelActions.UpdateStatus) => action.payload),
    mergeMap((data: any) =>
      this.ModelService.updateStatus(data.id, data.data).pipe(
        map(
          (response: Response) =>
            new ModelActions.UpdateStatusSuccess(response)
        ),
        catchError((err) =>
          of(new ModelActions.UpdateStatusFail(err))
        )
      )
    )
  );

  @Effect()
  loadModel$: Observable<Action> = this.actions$.pipe(
    ofType<ModelActions.LoadModel>(
      ModelActions.ModelActionTypes.LOAD_MODEL
    ),
    map((action: ModelActions.LoadModel) => action.payload),
    mergeMap((id: any) =>
      this.ModelService.getModelById(id).pipe(
        map(
          (response: Response) =>
            new ModelActions.LoadModelSuccess(response)
        ),
        catchError((err) =>
          of(new ModelActions.LoadModelFail(err))
        )
      )
    )
  );

  @Effect()
  updateModel$: Observable<Action> = this.actions$.pipe(
    ofType<ModelActions.UpdateModel>(
      ModelActions.ModelActionTypes.UPDATE_MODEL
    ),
    map(
      (action: ModelActions.UpdateModel) => action.payload
    ),
    mergeMap((data: any) =>
      this.ModelService
        .updateModel(data.id, data.data)
        .pipe(
          map(
            (response: Response) =>
              new ModelActions.UpdateModelSuccess(
                response
              )
          ),
          catchError((err) =>
            of(new ModelActions.UpdateModelFail(err))
          )
        )
    )
  );

  @Effect()
  addModel$: Observable<Action> = this.actions$.pipe(
    ofType<ModelActions.AddModel>(
      ModelActions.ModelActionTypes.ADD_MODEL
    ),
    map((action: ModelActions.AddModel) => action.payload),
    mergeMap((data: any) =>
      this.ModelService.addModel(data).pipe(
        map(
          (response: Response) =>
            new ModelActions.AddModelSuccess(response)
        ),
        catchError((err) =>
          of(new ModelActions.AddModelFail(err))
        )
      )
    )
  );
}
