import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class AdminManagementService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) {

  }


  getHeader() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    const token = this.localStorageService.getToken();
    headers = headers.set('Authorization', token);
    return headers;
  }

  addAdmin(data) {
    return this.http.post(ApiURIs.addAdmin, data, this.localStorageService.getFormHeader());
  }

  getAdminById(id) {
    return this.http.get(ApiURIs.getAdminById + '/' + id, { headers: this.getHeader() });
  }

  updateAdmin(id, data) {
    return this.http.post(ApiURIs.updateAdmin + '/' + id, data, this.localStorageService.getFormHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteUserById + '/' + id, { headers: this.getHeader() });
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateStatus + '/' + id, data, { headers: this.getHeader() });
  }

  uploadData(type, data: any) {
    const fd = new FormData();
    fd.append('updType', type);
    fd.append('updDocs', data);
    return this.http.post(ApiURIs.uploadData + '/EN', fd, {});
  }

  
}
