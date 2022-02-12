import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants'

@Injectable({
  providedIn: 'root'
})
export class SmsTemplateService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addSMSTemplate(data) {
    return this.http.post(ApiURIs.addSMSTemplate, data, this.localStorageService.getHeader());
  }

  getSMSTemplateById(id) {
    return this.http.get(ApiURIs.getSMSTemplateById + '/' + id, this.localStorageService.getHeader());
  }

  updateSMSTemplate(id, data) {
    return this.http.put(ApiURIs.updateSMSTemplate + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteSMSTemplateById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateSMSTemplateStatus + '/' + id, data, this.localStorageService.getHeader());
  }

}
