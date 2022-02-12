import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addState(data) {
    return this.http.post(ApiURIs.addState, data, this.localStorageService.getHeader());
  }

  getStateById(id) {
    return this.http.get(ApiURIs.getStateById + '/' + id, this.localStorageService.getHeader());
  }

  updateState(id, data) {
    return this.http.put(ApiURIs.updateState + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteStateById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateStateStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  getStateList(id) {
    return this.http.get(ApiURIs.getAllStates + '/' + id + '/' + environment.webDefaultLang, this.localStorageService.getHeader());
  }
}
