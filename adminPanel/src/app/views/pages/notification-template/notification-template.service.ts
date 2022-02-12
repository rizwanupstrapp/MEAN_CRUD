import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants'

@Injectable({
  providedIn: 'root'
})
export class NotificationTemplateService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addNotificationTemplate(data) {
    return this.http.post(ApiURIs.addNotificationTemplate, data, this.localStorageService.getHeader());
  }

  getNotificationTemplateById(id) {
    return this.http.get(ApiURIs.getNotificationTemplateById + '/' + id, this.localStorageService.getHeader());
  }

  updateNotificationTemplate(id, data) {
    return this.http.put(ApiURIs.updateNotificationTemplate + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteNotificationTemplateById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateNotificationTemplateStatus + '/' + id, data, this.localStorageService.getHeader());
  }

}
