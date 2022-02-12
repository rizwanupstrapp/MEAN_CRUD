import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';


@Component({
  selector: 'kt-rider-management',
  templateUrl: './rider-management.component.html',
  styleUrls: ['./rider-management.component.scss']
})
export class RiderManagementComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
      this.subheaderService.setTitle(subHeader.RIDER);
      titleService.setTitle(titles.riderManagement);    
  }

  ngOnInit() {
  }

}
