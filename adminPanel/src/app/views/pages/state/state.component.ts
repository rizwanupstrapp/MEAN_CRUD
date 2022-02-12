import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor(private subheaderService: SubheaderService, titleService: Title) {
    this.subheaderService.setTitle(subHeader.STATE);
    titleService.setTitle(titles.stateManagement);
  }

  ngOnInit() {
  }

}
