import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

  addHelp(data) {
    return this.http.post(ApiURIs.addHelp, data, this.localStorageService.getHeader());
  }

  getHelpById(id) {
    return this.http.get(ApiURIs.getHelpById + '/' + id, this.localStorageService.getHeader());
  }

  updateHelp(id, data) {
    return this.http.put(ApiURIs.updateHelp + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteHelpById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateHelpStatus + '/' + id, data, this.localStorageService.getHeader());
  }

  getAllHelpTopicsList(){
    return this.http.get(ApiURIs.getHelpTopicsArray + '/EN',  this.localStorageService.getHeader());
  }
}
