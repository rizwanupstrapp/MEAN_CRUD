import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class AutomaticDriverAssignService {

  constructor(
    private http: HttpClient, 
    public localStorageService: LocalstorageService
    ) { }
  
  addAutomaticDriverAssign(data) {
    return this.http.post(ApiURIs.addAutomaticDriverAssign, data, this.localStorageService.getHeader());
  }

  getAutomaticDriverAssignById(id) {
    return this.http.get(ApiURIs.getAutomaticDriverAssignById + '/' + id, this.localStorageService.getHeader());
  }

  updateAutomaticDriverAssign(id, data) {
    return this.http.put(ApiURIs.updateAutomaticDriverAssign + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteAutomaticDriverAssign + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateAutomaticDriverAssignstatus + '/' + id, data, this.localStorageService.getHeader());
  }

  getAllAutomaticDriverAssignList() {
    return this.http.get(ApiURIs.listAutomaticDriverAssign, this.localStorageService.getHeader());
  }
  
}
