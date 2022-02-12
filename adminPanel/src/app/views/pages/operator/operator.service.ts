import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  private updatePrefLocReq = new BehaviorSubject('');
  isUpdatePrefLoc = this.updatePrefLocReq.asObservable();

  constructor(
    private http: HttpClient, 
    public localStorageService: LocalstorageService
    ) { }

    updatePrefLoc(value) {
    this.updatePrefLocReq.next(value);
  }
 
  createOperatorProfile(data) {
    return this.http.post(ApiURIs.createOperatorProfile, data, this.localStorageService.getFormHeader());
  }

  updateOperator(id, data) {
    return this.http.put(ApiURIs.updateOperator + '/' + id, data, this.localStorageService.getFormHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteUserById + '/' + id, this.localStorageService.getHeader());
  }

  uploadData(type, data: any) {
    const fd = new FormData();
    fd.append('updType', type);
    fd.append('updDocs', data);
    return this.http.post(ApiURIs.uploadData, fd, {});
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  updateBankDetail(id, data) {
    return this.http.put(ApiURIs.updateBankDetail + '/' + id, data, this.localStorageService.getHeader());
  }

  updateOperatorProfile(id, data) {
    return this.http.put(ApiURIs.updateOperatorProfile + '/' + id, data, this.localStorageService.getFormHeader());
  }

  updateCommissionDetail(id, data) {
    return this.http.put(ApiURIs.updateCommissionDetail + '/' + id, data, this.localStorageService.getHeader());
  }

  updateInvoiceDetail(id, data) {
    return this.http.put(ApiURIs.updateInvoiceDetail + '/' + id, data, this.localStorageService.getHeader());
  }

  getOperatorById(id) {
    return this.http.get(ApiURIs.getOperator + '/' + id, this.localStorageService.getHeader());
  }

  getALLPreferredLocationList(id) {
    return this.http.get(ApiURIs.getPreferenceLocList + '/' + id, this.localStorageService.getHeader());
  }

  //---
  deletePreferredLocationById(operatorId, preferredLocationId) {
    return this.http.put(ApiURIs.removePreferenceLoc + '/' + operatorId, { id: preferredLocationId }, this.localStorageService.getHeader());
  }

  getPreferredLocationById(operatorId, preferredLocationId) {
    return this.http.put(ApiURIs.getPreferenceLocById + '/' + operatorId, { id: preferredLocationId }, this.localStorageService.getHeader());
  }

  updatePreferredLocation(id, data) {
    return this.http.put(ApiURIs.updatePreferenceLoc + '/' + id, data, this.localStorageService.getFormHeader());
  }

  createPreferredLocation(id, data) {
    return this.http.post(ApiURIs.addPreferenceLoc + '/' + id, data, this.localStorageService.getFormHeader());
  }
}
