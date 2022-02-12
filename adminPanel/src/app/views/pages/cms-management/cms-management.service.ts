import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class CmsManagementService {
  constructor(private http: HttpClient, public localStorageService: LocalstorageService) {
  }


  addCMS(data) {
    return this.http.post(ApiURIs.addCMS, data, this.localStorageService.getHeader());
  }

  getCMSById(id) {
    return this.http.get(ApiURIs.getCMSById + '/' + id, this.localStorageService.getHeader());
  }

  updateCMS(id, data) {
    return this.http.put(ApiURIs.updateCMS + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteCMSById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateCMSStatus + '/' + id, data, this.localStorageService.getHeader());
  }

}
