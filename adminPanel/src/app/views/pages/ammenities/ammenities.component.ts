import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-ammenities',
  templateUrl: './ammenities.component.html',
  styleUrls: ['./ammenities.component.scss']
})
export class AmmenitiesComponent implements OnInit {

  constructor(
      private subheaderService: SubheaderService, titleService: Title) {
      this.subheaderService.setTitle(subHeader.AMMENITIES);
      titleService.setTitle(titles.ammenitiesManagement);
   }

  ngOnInit() {
  }

}
