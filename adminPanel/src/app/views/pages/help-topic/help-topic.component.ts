import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';


@Component({
  selector: 'kt-help-topic',
  templateUrl: './help-topic.component.html',
  styleUrls: ['./help-topic.component.scss']
})
export class HelpTopicComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
      this.subheaderService.setTitle(subHeader.HELPTOPIC);
      titleService.setTitle(titles.helpTopicManagement);
   }


  ngOnInit() {
  }

}
