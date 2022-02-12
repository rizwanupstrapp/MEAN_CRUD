import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';


@Injectable({
  providedIn: 'root'
})
export class PromocodeService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addPromocode(data) {
    return this.http.post(ApiURIs.addPromocode, data,this.localStorageService.getHeader());
  }

  getPromocodeById(id) {
    return this.http.get(ApiURIs.getPromocodeById + '/' + id,this.localStorageService.getHeader());
  }

  updatePromocode(id, data) {
    return this.http.put(ApiURIs.updatePromocode + '/' + id, data,this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deletePromocodeById + '/' + id,this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updatePromocodeStatus + '/' + id, data,this.localStorageService.getHeader());
  }
  
}
