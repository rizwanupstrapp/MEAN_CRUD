import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';


@Injectable({
  providedIn: 'root'
})
export class TrimService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addTrim(data) {
    return this.http.post(ApiURIs.addTrim, data, this.localStorageService.getHeader());
  }

  getTrimById(id) {
    return this.http.get(ApiURIs.getTrimById + '/' + id, this.localStorageService.getHeader());
  }

  updateTrim(id, data) {
    return this.http.put(ApiURIs.updateTrim + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteTrimById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateTrimStatus + '/' + id, data, this.localStorageService.getHeader());
  }
  
  getModelTrim(id){
    return this.http.get(ApiURIs.getModelTrim +'/' + id + '/EN', this.localStorageService.getHeader());
  }

}
