import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addBadge(data) {
    return this.http.post(ApiURIs.addBadge, data, this.localStorageService.getFormHeader());
  }

  getBadgeById(id) {
    return this.http.get(ApiURIs.getBadgeById + '/' + id, this.localStorageService.getHeader());
  }

  updateBadge(id, data) {
    return this.http.put(ApiURIs.updateBadge + '/' + id, data, this.localStorageService.getFormHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteBadgeById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateBadgeStatus + '/' + id, data, this.localStorageService.getHeader());
  }
}
