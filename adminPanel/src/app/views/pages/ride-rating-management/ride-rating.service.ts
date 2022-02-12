import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class RideRatingService {

  constructor(
    private http: HttpClient, 
    public localStorageService: LocalstorageService
    ) { }

    addRideRating(data) {
      return this.http.post(ApiURIs.addModel, data, this.localStorageService.getHeader());
    }
  
    getRideRatingById(id) {
      return this.http.get(ApiURIs.getRideRatingById + '/' + id, this.localStorageService.getHeader());
    }
  
    updateRideRating(id, data) {
      return this.http.put(ApiURIs.updateModel + "/" + id, data, this.localStorageService.getHeader());
    }
  
    deleteById(id) {
      return this.http.delete(ApiURIs.deleteModel + "/" + id, this.localStorageService.getHeader());
    }
  
}
