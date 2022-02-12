import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';


@Component({
  selector: 'kt-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
    this.subheaderService.setTitle(subHeader.HELP);
    titleService.setTitle(titles.helpManagement);
  }

  ngOnInit() {
  }

}
