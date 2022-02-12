import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class TimeFrameService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }
 
  addTimeFrame(data) {
    return this.http.post(ApiURIs.addTimeFrame, data, this.localStorageService.getHeader());
  }

  getTimeFrameById(id) {
    return this.http.get(ApiURIs.getTimeFrameById + '/' + id, this.localStorageService.getHeader());
  }

  updateTimeFrame(id, data) {
    return this.http.put(ApiURIs.updateTimeFrame + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteTimeFrameById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateTimeFrameStatus + '/' + id, data, this.localStorageService.getHeader());
  }
}
