import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-service-operator',
  templateUrl: './service-operator.component.html',
  styleUrls: ['./service-operator.component.scss']
})
export class ServiceOperatorComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
      this.subheaderService.setTitle(subHeader.SERVICEOPERATOR);
      titleService.setTitle(titles.serviceOperatorManagement);
   }

  ngOnInit() {
  }

}
