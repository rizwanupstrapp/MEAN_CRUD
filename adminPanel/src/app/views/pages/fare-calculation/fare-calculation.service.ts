import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class FareCalculationService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addFareCalculation(data) {
    return this.http.post(ApiURIs.addFareCalculation, data, this.localStorageService.getHeader());
  }

  getFareCalculationById(id) {
    return this.http.get(ApiURIs.getFareCalculationById + '/' + id, this.localStorageService.getHeader());
  }

  updateFareCalculation(id, data) {
    return this.http.put(ApiURIs.updateFareCalculation + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteFareCalculationById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateFareCalculationStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  getAllFranchiseList() {
    return this.http.get(ApiURIs.getFranchiseArray + '/EN', this.localStorageService.getHeader());
  }
  getAllTimeFramesList() {
    return this.http.get(ApiURIs.getTimeFramesArray + '/EN', this.localStorageService.getHeader());
  }
}
