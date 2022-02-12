import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
    this.subheaderService.setTitle(subHeader.COUNTRY);
    titleService.setTitle(titles.countryManagement);
  }

  ngOnInit() {
  }

}
