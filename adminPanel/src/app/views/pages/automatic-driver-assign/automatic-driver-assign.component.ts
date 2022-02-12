import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-automatic-driver-assign',
  templateUrl: './automatic-driver-assign.component.html',
  styleUrls: ['./automatic-driver-assign.component.scss']
})
export class AutomaticDriverAssignComponent implements OnInit {

  constructor(
    private subheaerService: SubheaderService, titleService: Title) {
    this.subheaerService.setTitle(subHeader.AUTOMATIC_DRIVER_ASSIGN);
    titleService.setTitle(titles.automaticDriverAssign);
     }

  ngOnInit() {
  }

}
