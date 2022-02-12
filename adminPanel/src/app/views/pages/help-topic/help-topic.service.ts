import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
  providedIn: 'root'
})
export class HelpTopicService {

  constructor(
    private http: HttpClient, 
    public localStorageService: LocalstorageService
    ) { }

 
  addHelpTopic(data) {
    return this.http.post(ApiURIs.addHelpTopic, data, this.localStorageService.getHeader());
  }

  getHelpTopicById(id) {
    return this.http.get(ApiURIs.getHelpTopicById + '/' + id, this.localStorageService.getHeader());
  }

  updateHelpTopic(id, data) {
    return this.http.put(ApiURIs.updateHelpTopic + '/' + id, data, this.localStorageService.getHeader());
  }

  deleteById(id) {
    return this.http.delete(ApiURIs.deleteHelpTopicById + '/' + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateHelpTopicStatus + '/' + id, data, this.localStorageService.getHeader());
  }
}
