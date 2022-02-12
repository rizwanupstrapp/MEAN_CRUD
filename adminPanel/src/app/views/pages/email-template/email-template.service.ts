import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants'

@Injectable({
  providedIn: 'root'
})
export class EmailTemplateService {

  constructor(
    private http: HttpClient,
    public localStorageService: LocalstorageService
     ) { }

  addEmailTemplate(data) {
    return this.http.post(ApiURIs.addEmailTemplate, data, this.localStorageService.getHeader());
  }

  getEmailTemplateById(id) {
    return this.http.get(ApiURIs.getEmailTemplateById + '/' + id, this.localStorageService.getHeader());
  }

  updateEmailTemplate(id, data) {
    return this.http.put(ApiURIs.updateEmailTemplate + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteEmailTemplateById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateEmailTemplateStatus + '/' + id, data, this.localStorageService.getHeader());
  }

}
