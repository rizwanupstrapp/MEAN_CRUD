import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';


@Component({
  selector: 'kt-driver-management',
  templateUrl: './driver-management.component.html',
  styleUrls: ['./driver-management.component.scss']
})
export class DriverManagementComponent implements OnInit {
  
  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
      this.subheaderService.setTitle(subHeader.DRIVER);
      titleService.setTitle(titles.driverManagement);    
  }

  ngOnInit() {
  }

}
