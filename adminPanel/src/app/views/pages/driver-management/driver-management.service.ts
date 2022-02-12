import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverManagementService {

  private updateVehicleReq = new BehaviorSubject('');
  isUpdateVehicle = this.updateVehicleReq.asObservable();

  constructor(
    private http: HttpClient, 
    public localStorageService: LocalstorageService
    ) { }

  updateVehicle(value) {
    this.updateVehicleReq.next(value);
  }

  getAllCountries() {
    return this.http.get(ApiURIs.getCountryList + '/EN', this.localStorageService.getHeader());
  }

  getAllStates() {
    return this.http.get(ApiURIs.getAllStates + '/EN', this.localStorageService.getHeader());
  }

  getAllAmmenities() {
    return this.http.get(ApiURIs.getAllAmmenities + '/EN', this.localStorageService.getHeader());
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

  createProfile(data) {
    return this.http.post(ApiURIs.createProfile, data, this.localStorageService.getHeader());
  }

  updateProfile(data) {
    return this.http.post(ApiURIs.updateProfile, data, this.localStorageService.getFormHeader());
  }

  updateDriver(id, data) {
    return this.http.put(ApiURIs.updateDriver + '/' + id, data, this.localStorageService.getFormHeader());
  }

  updateBankDetail(id, data) {
    return this.http.put(ApiURIs.updateDriverBankDetail + '/' + id, data, this.localStorageService.getHeader());
  }

  updateUserAddress(id, data) {
    return this.http.put(ApiURIs.updateAddress + '/' + id, data, this.localStorageService.getHeader());
  }

  updateVehicleInfo(id, data) {
    return this.http.put(ApiURIs.updateVehicleInfo + '/' + id, data, this.localStorageService.getFormHeader());
  }

  updateLicenceDetails(id, data) {
    return this.http.put(ApiURIs.updateLicenceDetails + '/' + id, data, this.localStorageService.getFormHeader());
  }

  updateUserOtherDetails(id, data) {
    return this.http.put(ApiURIs.updateUserOtherDetails + '/' + id, data, this.localStorageService.getFormHeader());
  }

  updateUserCitizenSHip(id, data) {
    return this.http.put(ApiURIs.updateUserCitizenShip + '/' + id, data, this.localStorageService.getFormHeader());
  }

  uploadData(type, data: any) {
    const fd = new FormData();
    fd.append('updType', type);
    fd.append('updDocs', data);
    return this.http.post(ApiURIs.uploadData, fd, {});
  }

  getDriverById(id) {
    return this.http.get(ApiURIs.getDriver + '/' + id, this.localStorageService.getHeader());
  }

  getVehicleById(driverId, vehicleId) {
    return this.http.put(ApiURIs.getVehicleInfoById + '/' + driverId, { id: vehicleId }, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteUserById + '/' + id, this.localStorageService.getHeader());
  }

  deleteVehicleInfo(driverId, vehicleId) {
    return this.http.put(ApiURIs.deleteVehicleInfo + '/' + driverId, { id: vehicleId }, this.localStorageService.getHeader());
  }

  getAllDocumentType() {
    return this.http.get(ApiURIs.getAllDocumentType + '/', this.localStorageService.getHeader());
  }

  getAllVehicleList(id) {
    return this.http.get(ApiURIs.getAllVehicleList + '/' + id, this.localStorageService.getHeader());
  }

}
