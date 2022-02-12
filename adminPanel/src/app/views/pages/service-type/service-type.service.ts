import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';


@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addServiceType(data) {
    return this.http.post(ApiURIs.addServiceType, data, this.localStorageService.getFormHeader());
  }

  getServiceTypeById(id) {
    return this.http.get(ApiURIs.getServiceTypeById + '/' + id, this.localStorageService.getHeader());
  }

  updateServiceType(id, data) {
    return this.http.put(ApiURIs.updateServiceType + '/' + id, data, this.localStorageService.getFormHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteServiceTypeById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateServiceTypeStatus + '/' + id, data, this.localStorageService.getHeader());
  }

}
