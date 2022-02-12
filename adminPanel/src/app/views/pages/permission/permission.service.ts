import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) {}

  addPermission(data) {
    return this.http.post(ApiURIs.addPermission, data, this.localStorageService.getHeader());
  }

  getPermissionById(id) {
    return this.http.get(ApiURIs.getPermissionById + '/' + id, this.localStorageService.getHeader());
  }

  updatePermission(id, data) {
    return this.http.put(ApiURIs.updatePermission + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deletePermissionById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updatePermissionStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  
}
