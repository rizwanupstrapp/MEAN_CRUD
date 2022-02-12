import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class ReasonService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addReason(data) {
    return this.http.post(ApiURIs.addReason, data, this.localStorageService.getHeader());
  }

  getReasonById(id) {
    return this.http.get(ApiURIs.getReasonById + '/' + id, this.localStorageService.getHeader());
  }

  updateReason(id, data) {
    return this.http.put(ApiURIs.updateReason + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteReasonById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateReasonStatus + '/' + id, data, this.localStorageService.getHeader());
  }
 
}
