import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class AmmenitiesService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }
  addAmmenities(data) {
    return this.http.post(ApiURIs.addAmmenities, data, this.localStorageService.getHeader());
  }

  getAmmenitiesById(id) {
    return this.http.get(ApiURIs.getAmmenitiesById + '/' + id, this.localStorageService.getHeader());
  }

  updateAmmenities(id, data) {
    return this.http.put(ApiURIs.updateAmmenities + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteAmmenitiesById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateAmmenitiesStatus + '/' + id, data, this.localStorageService.getHeader());
  }
}
