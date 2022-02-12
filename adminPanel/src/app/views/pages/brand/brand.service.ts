import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) {

   }

   getHeader() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    const token = this.localStorageService.getToken();
    headers = headers.set('Authorization', token);
    return headers;
  }

  addBrand(data) {
    return this.http.post(ApiURIs.addBrand, data, { headers: this.getHeader() });
  }

  getBrandById(id) {
    return this.http.get(ApiURIs.getBrandById + '/' + id, { headers: this.getHeader() });
  }

  updateBrand(id, data) {
    return this.http.put(ApiURIs.updateBrand + '/' + id, data, { headers: this.getHeader() });
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteBrandById + '/' + id, { headers: this.getHeader() });
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateBrandStatus + '/' + id, data, { headers: this.getHeader() });
  }

  getAllBrands(){
    return this.http.get(ApiURIs.getAllBrands + '/EN',  { headers: this.getHeader() });
  }

}
