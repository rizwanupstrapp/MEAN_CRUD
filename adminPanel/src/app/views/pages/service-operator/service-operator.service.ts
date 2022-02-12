import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class ServiceOperatorService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addServiceOperator(data) {
    return this.http.post(ApiURIs.addServiceOperator, data, this.localStorageService.getHeader());
  }

  getServiceOperatorById(id) {
    return this.http.get(ApiURIs.getServiceOperatorById + '/' + id, this.localStorageService.getHeader());
  }

  updateServiceOperator(id, data) {
    return this.http.put(ApiURIs.updateServiceOperator + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteServiceOperatorById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateServiceOperatorStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  getAllOperators() {
    return this.http.get(ApiURIs.getAllOperators + '/EN', this.localStorageService.getHeader());
  }

  getOperatorCityWise(id){
    return this.http.get(ApiURIs.getOperatorCityWise +'/' + id + '/EN', this.localStorageService.getHeader());
  }
  getAllServiceTypes() {
    return this.http.get(ApiURIs.getAllServiceTypes + '/EN', this.localStorageService.getHeader());
  }

  getOperatorServiceTypes(id) {
    return this.http.get(ApiURIs.getOperatorServiceTypes + '/' + id + '/EN' , this.localStorageService.getHeader());
  }


}
