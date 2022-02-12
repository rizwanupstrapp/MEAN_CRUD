import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-ride-request',
  templateUrl: './ride-request.component.html',
  styleUrls: ['./ride-request.component.scss']
})
export class RideRequestComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService,
            titleService: Title
    ) {
    this.subheaderService.setTitle(subHeader.RIDE_REQUEST);
    titleService.setTitle(titles.rideRequestManagement);
  }

  ngOnInit() {
  }

}
