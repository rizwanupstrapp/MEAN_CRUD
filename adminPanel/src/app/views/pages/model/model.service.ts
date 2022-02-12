import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addModel(data) {
    return this.http.post(ApiURIs.addModel, data, this.localStorageService.getHeader());
  }

  getModelById(id) {
    return this.http.get(ApiURIs.getModelById + '/' + id, this.localStorageService.getHeader());
  }

  updateModel(id, data) {
    return this.http.put(ApiURIs.updateModel + "/" + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteModel + "/" + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateModelStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  getAllModel() {
    return this.http.post(ApiURIs.listModel, this.localStorageService.getHeader());
  }

  getAllBrands() {
    return this.http.get(ApiURIs.getAllBrand + '/EN', this.localStorageService.getHeader());
  }

  getAllModelsList() {
    return this.http.get(ApiURIs.getAllModels, this.localStorageService.getHeader());
  }
 
  getBrandModel(id) {
    return this.http.get(ApiURIs.getBrandModel + '/' + id, this.localStorageService.getHeader());
  }

  getModelColor(id) {
    return this.http.get(ApiURIs.getModelColor + '/' + id, this.localStorageService.getHeader());
  }

  getAllColors(){
    return this.http.get(ApiURIs.getAllColors + '/' , this.localStorageService.getHeader());
  }

}
