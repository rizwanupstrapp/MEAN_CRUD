import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-fare-calculation',
  templateUrl: './fare-calculation.component.html',
  styleUrls: ['./fare-calculation.component.scss']
})
export class FareCalculationComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
    this.subheaderService.setTitle(subHeader.FARECALCULATION);
    titleService.setTitle(titles.fareCalculationManagement);
  }

  ngOnInit() {
  }

}
