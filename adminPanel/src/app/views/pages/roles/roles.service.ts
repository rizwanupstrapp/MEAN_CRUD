import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { environment } from '../../../../environments/environment';
import { ApiURIs } from '../../../../api-constants';


@Injectable({
  providedIn: 'root'
})
export class RolesService {
  constructor(private http: HttpClient, public localStorageService: LocalstorageService) {

  }


  addRole(data) {
    return this.http.post(ApiURIs.addRole, data, this.localStorageService.getHeader());
  }

  getRoleById(id) {
    return this.http.get(ApiURIs.getRoleById + '/' + id, this.localStorageService.getHeader());
  }

  updateRole(id, data) {
    return this.http.post(ApiURIs.updateRole + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteRoleById + '/' + id, this.localStorageService.getHeader());
  }

  updateRoleStatus(id, data) {
    return this.http.put(ApiURIs.updateRoleStatus + '/' + id, data, this.localStorageService.getHeader());
  }

 
  getPermissionList() {
    return this.http.get(ApiURIs.getPermissions , this.localStorageService.getHeader());
  }

  getRoleWisePermissions(id) {
    return this.http.get(ApiURIs.getRoleWisePermissions+"/"+id , this.localStorageService.getHeader());
  }

  getRoleWisePermissionMatrix() {
    return this.http.get(ApiURIs.getRoleWisePermissionMatrix , this.localStorageService.getHeader());
  }


  getRolesList() {
    return this.http.get(ApiURIs.getRolesListArray , this.localStorageService.getHeader());
  }

  getAllRolesList() {
    return this.http.get(ApiURIs.getAllRolesList + '/EN', this.localStorageService.getHeader());
  }

  updatePermissionMatrix( data) {
    return this.http.post(ApiURIs.updatePermissionMatrix, data, this.localStorageService.getHeader());
  }

  appUserRoleList() {
    return this.http.get(ApiURIs.appUserRoleListArray, this.localStorageService.getHeader());
  }

}
