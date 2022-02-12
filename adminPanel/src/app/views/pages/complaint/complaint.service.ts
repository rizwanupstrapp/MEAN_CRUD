import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocalstorageService } from "../../../services/localstorage.service";
import { ApiURIs } from "../../../../api-constants";

@Injectable({
  providedIn: "root",
})
export class ComplaintService {
  constructor(
    private http: HttpClient,
    public localStorageService: LocalstorageService
  ) {}

  addComplaint(data) {
    return this.http.post(ApiURIs.addComplaint, data, this.localStorageService.getHeader());
  }

  getComplaintById(id) {
    return this.http.get(ApiURIs.getComplaintById + "/" + id, this.localStorageService.getHeader());
  }

  updateComplaint(id, data) {
    return this.http.put(ApiURIs.updateComplaint + "/" + id, data, this.localStorageService.getHeader());
  }

  getAllComplaint(id) {
    return this.http.delete(ApiURIs.getAllComplaint + "/" + id, this.localStorageService.getHeader());
  }

  updateStatus(id, data) {
    return this.http.put(ApiURIs.updateComplaintStatus + "/" + id, data, this.localStorageService.getHeader());
  }
}
