import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';


@Injectable({
  providedIn: 'root'
})
export class AccountTypeService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addAccountType(data) {
    return this.http.post(ApiURIs.addAccountType, data, this.localStorageService.getHeader());
  }

  getAccountTypeById(id) {
    return this.http.get(ApiURIs.getAccountTypeById + '/' + id, this.localStorageService.getHeader());
  }

  updateAccountType(id, data) {
    return this.http.put(ApiURIs.updateAccountType + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteAccountTypeById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateAccountTypeStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  getAllAccountType() {
    return this.http.get(ApiURIs.getAllAccountType + '/',  this.localStorageService.getHeader());
  }
 
}
