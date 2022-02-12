import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';


@Component({
  selector: 'kt-trim',
  templateUrl: './trim.component.html',
  styleUrls: ['./trim.component.scss']
})
export class TrimComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
    this.subheaderService.setTitle(subHeader.TRIM);
    titleService.setTitle(titles.trimManagement);
  }

  ngOnInit() {
  }

}
