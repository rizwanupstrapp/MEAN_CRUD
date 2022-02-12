import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class RiderManagementService {

  constructor(
    private http: HttpClient, 
    public localStorageService: LocalstorageService
    ) { }

  getAllCountries() {
    return this.http.get(ApiURIs.getCountriesArray + '/EN',this.localStorageService.getHeader());
  }

  getCountryWiseCityList(id) {
    let data = {
      city_countryId: id
    };
    return this.http.post(ApiURIs.getCountryCitiesArray + '/EN', data,this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateStatus + '/' + id, data,this.localStorageService.getHeader());
  }

  addRider1(data) {
    return this.http.post(ApiURIs.createProfile, data,this.localStorageService.getHeader());
  }

  addRider2(data) {
    return this.http.post(ApiURIs.updateProfile, data, this.localStorageService.getHeader());
  }

  updateRider(id, data) {
    return this.http.put(ApiURIs.updateRiderProfile + '/' + id, data,this.localStorageService.getFormHeader());
  }
  updateBankDetail(id, data) {
    return this.http.put(ApiURIs.updateBankDetail + '/' + id, data,this.localStorageService.getHeader());
  }

  uploadData(type, data: any) {
    const fd = new FormData();
    fd.append('updType', type);
    fd.append('updDocs', data);
    return this.http.post(ApiURIs.uploadData, fd, {});
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteUserById + '/' + id,this.localStorageService.getHeader());
  }

  getRiderById(id) {
    return this.http.get(ApiURIs.getRider + '/' + id,this.localStorageService.getHeader());
  }

  regeneratedAndSendPassword(id) {
    return this.http.post(ApiURIs.regeneratedAndSendPassword + '/' + id, this.localStorageService.getHeader());
  }
}
