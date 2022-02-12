import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class RideRequestService {

  constructor(
    private http: HttpClient, 
    public localStorageService: LocalstorageService
    ) { }

  getRideRequestById(id) {
    return this.http.get(ApiURIs.getRideRequestById + '/' + id, this.localStorageService.getHeader());
  }

  updateRideRequest(id, data) {
    return this.http.put(ApiURIs.updateRideRequest + '/' + id, data, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateRideRequestStatus + '/' + id, data, this.localStorageService.getHeader());
  }
}
