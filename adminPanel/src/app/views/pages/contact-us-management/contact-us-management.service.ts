import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class ContactUsManagementService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) {

   }

  getContactUsById(id) {
    return this.http.get(ApiURIs.getContactUsById + '/' + id, this.localStorageService.getHeader());
  }

  getContactUsList() {
    return this.http.get(ApiURIs.listContacts, this.localStorageService.getHeader());
  }

}
