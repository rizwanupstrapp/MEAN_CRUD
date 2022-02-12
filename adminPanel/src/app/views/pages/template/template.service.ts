import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addTemplate(data) {
    return this.http.post(ApiURIs.addTemplate, data, this.localStorageService.getHeader());
  }

  getTemplateById(id) {
    return this.http.get(ApiURIs.getTemplateById + '/' + id, this.localStorageService.getHeader());
  }

  updateTemplate(id, data) {
    return this.http.put(ApiURIs.updateTemplate + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteTemplateById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateTemplateStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  // getAllCountries(){
  //   return this.http.get(ApiURIs.getCountriesArray + '/EN',  this.localStorageService.getHeader());
  // }

}
