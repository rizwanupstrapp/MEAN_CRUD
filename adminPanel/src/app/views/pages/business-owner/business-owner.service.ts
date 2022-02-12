import { Injectable } from '@angular/core';
import { LocalstorageService } from '../../../../app/services/localstorage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiURIs } from '../../../../../src/api-constants';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessOwnerService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  getAllCountries() {
    return this.http.get(ApiURIs.getCountriesArray + '/EN', this.localStorageService.getHeader());
  }
  
  getCountryWiseCityList(id) {
    let data = {
      city_countryId: id
    };
    return this.http.post(ApiURIs.getCountryCitiesArray + '/EN', data, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  updateBusinessOwner(id, data) {
    return this.http.put(ApiURIs.updateBusinessOwnerProfile + '/' + id, data, this.localStorageService.getFormHeader());
  }

  uploadData(type, data: any) {
    const fd = new FormData();
    fd.append('updType', type);
    fd.append('updDocs', data);
    return this.http.post(ApiURIs.uploadData, fd, {});
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteUserById + '/' + id, this.localStorageService.getHeader());
  }

  getBusinessOwnerById(id) {
    return this.http.get(ApiURIs.getBusinessOwnerById + '/' + id, this.localStorageService.getHeader());
  }
}






