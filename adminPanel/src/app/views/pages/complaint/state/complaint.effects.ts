import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as complaintActions from "./complaint.actions";
import { Response } from "../../../../model/model";
import { ComplaintService } from '../complaint.service';


@Injectable()
export class ComplaintEffect {

    constructor(
        private actions$: Actions,
        private ComplaintService: ComplaintService
    ) { }

    @Effect()
    updateStatus$: Observable<Action> = this.actions$.pipe(
        ofType<complaintActions.UpdateStatus>(
            complaintActions.ComplaintActionTypes.UPDATE_STATUS
        ),
        map((action: complaintActions.UpdateStatus) => action.payload),
        mergeMap((data: any) =>
            this.ComplaintService.updateStatus(data.id, data.data).pipe(
                map(
                    (response: Response) =>
                        new complaintActions.UpdateStatusSuccess(response)
                ),
                catchError(err => of(new complaintActions.UpdateStatusFail(err)))
            )
        )
    );

    @Effect()
    loadComplaint$: Observable<Action> = this.actions$.pipe(
        ofType<complaintActions.LoadComplaint>(
            complaintActions.ComplaintActionTypes.LOAD_COMPLAINT
        ),
        map((action: complaintActions.LoadComplaint) => action.payload),
        mergeMap((id: any) =>
            this.ComplaintService.getComplaintById(id).pipe(
                map(
                    (response: Response) =>
                        new complaintActions.LoadComplaintSuccess(response)
                ),
                catchError(err =>
                    of(new complaintActions.LoadComplaintFail(err)))
            )
        )
    );

    @Effect()
    updateComplaint$: Observable<Action> = this.actions$.pipe(
        ofType<complaintActions.UpdateComplaint>(
            complaintActions.ComplaintActionTypes.UPDATE_COMPLAINT
        ),
        map((action: complaintActions.UpdateComplaint) => action.payload),
        mergeMap((data: any) =>
            this.ComplaintService.updateComplaint(data.id, data.data).pipe(
                map(
                    (updateComplaint: Response) =>
                        new complaintActions.UpdateComplaintSuccess(updateComplaint)
                ),
                catchError(err => of(new complaintActions.UpdateComplaintFail(err)))
            )
        )
    );


    // @Effect()
    // addComplaint$: Observable<Action> = this.actions$.pipe(
    //     ofType<complaintActions.AddComplaint>(
    //         complaintActions.ComplaintActionTypes.ADD_COMPLAINT
    //     ),
    //     map((action: complaintActions.AddComplaint) => action.payload),
    //     mergeMap((data: any) =>
    //         this.ComplaintService.addComplaint(data).pipe(
    //             map(
    //                 (response: Response) =>
    //                     new complaintActions.AddComplaintSuccess(response)
    //             ),
    //             catchError(err =>
    //                 of(new complaintActions.AddComplaintFail(err)))
    //         )
    //     )
    // );
}