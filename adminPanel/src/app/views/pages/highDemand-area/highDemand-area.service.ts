import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApiURIs } from '../../../../api-constants';

@Injectable({
    providedIn: 'root'
})
export class HighDemandAreaService {

    constructor(private http: HttpClient, public localStorageService: LocalstorageService) { }

    addHighDemandArea(data) {
        return this.http.post(ApiURIs.addHighDemandArea, data, this.localStorageService.getHeader());
    }

    getHighDemandAreaById(id) {
        return this.http.get(ApiURIs.getHighDemandAreaById + '/' + id, this.localStorageService.getHeader());
    }

    updateHighDemandArea(id, data) {
        return this.http.put(ApiURIs.updateHighDemandArea + '/' + id, data, this.localStorageService.getHeader());
    }

    deleteById(id) {
        return this.http.patch(ApiURIs.deleteHighDemandAreaById + '/' + id, '', this.localStorageService.getHeader());
    }

    updateStatus(id, data) {
        return this.http.put(ApiURIs.updateHighDemandAreaStatus + '/' + id, data, this.localStorageService.getHeader());
    }

    // getAllFareCalculationTopicsList(){
    //   return this.http.get(ApiURIs.getHelpTopicsArray + '/EN', this.localStorageService.getHeader());
    // }

    // getAllFranchiseList() {
    //     return this.http.get(ApiURIs.getFranchiseArray + '/EN', this.localStorageService.getHeader());
    // }
    getAllTimeFramesList() {
        return this.http.get(ApiURIs.getTimeFramesArray + '/EN', this.localStorageService.getHeader());
    }
}
