import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient, 
    public localStorageService: LocalstorageService
    ) { }

  addCountry(data) {
    return this.http.post(ApiURIs.addCountry, data,this.localStorageService.getHeader());
  }

  getCountryById(id) {
    return this.http.get(ApiURIs.getCountryById + '/' + id,this.localStorageService.getHeader());
  }

  updateCountry(id, data) {
    return this.http.put(ApiURIs.updateCountry + '/' + id, data,this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteCountryById + '/' + id,this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateCountryStatus + '/' + id, data,this.localStorageService.getHeader());
  }

  getAllCountries(){
    return this.http.get(ApiURIs.getCountriesArray + '/EN', this.localStorageService.getHeader());
  }
}
