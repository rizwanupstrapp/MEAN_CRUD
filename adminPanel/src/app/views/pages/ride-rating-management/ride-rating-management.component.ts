import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service';
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-ride-rating-management',
  templateUrl: './ride-rating-management.component.html',
  styleUrls: ['./ride-rating-management.component.scss']
})
export class RideRatingManagementComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
    this.subheaderService.setTitle(subHeader.RIDE_RATING);
    titleService.setTitle(titles.rideRatingManagement);
     }

  ngOnInit() {
  }

}
