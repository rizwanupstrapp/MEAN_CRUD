import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { environment } from '../../../../environments/environment';
import { ApiURIs } from '../../../../api-constants';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private http: HttpClient, 
    public localStorageService: LocalstorageService
    ) { }

  addCity(data) {
    return this.http.post(ApiURIs.addCity, data, this.localStorageService.getHeader());
  }

  getCityById(id) {
    return this.http.get(ApiURIs.getCityById + '/' + id, this.localStorageService.getHeader());
  }

  updateCity(id, data) {
    return this.http.put(ApiURIs.updateCity + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteCityById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateCityStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  getAllCities() {
    return this.http.get(ApiURIs.getCitiesArray + '/' + environment.webDefaultLang, this.localStorageService.getHeader());
  }

  getCountryCities(data) {
    return this.http.post(ApiURIs.getCountryCitiesArray + '/' + environment.webDefaultLang, data, this.localStorageService.getHeader());
  }

  //--------- new Api ---------
  getCityListOperetor(data) {
    return this.http.post(ApiURIs.getCityListOperetor + '/' + environment.webDefaultLang, data, this.localStorageService.getHeader());
  }

  getCityListServiceOperator(data) {
    return this.http.post(ApiURIs.getCityListServiceOperator + '/' + environment.webDefaultLang, data, this.localStorageService.getHeader());
  }

  getCityListFareCalculation(data) {
    return this.http.post(ApiURIs.getCityListFareCalculation + '/' + environment.webDefaultLang, data, this.localStorageService.getHeader());
  }

  getCityListAutomaticDriverAssign(data) {
    return this.http.post(ApiURIs.getCityListAutomaticDriverAssign + '/' + environment.webDefaultLang, data, this.localStorageService.getHeader());
  }
  //------------------ 
  getAllTimezone() {
    return this.http.get(ApiURIs.getAllTimezone, this.localStorageService.getHeader());
  }

  getStateCity(data) {
    return this.http.post(ApiURIs.getStateCityList + '/' + environment.webDefaultLang, data, this.localStorageService.getHeader());
  }
}
