import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout';
import { Title } from '@angular/platform-browser';
import { titles,subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  constructor(private subheaderService: SubheaderService,titleService: Title) {
    this.subheaderService.setTitle(subHeader.ROLE);
		titleService.setTitle(titles.roleManagement);
  }
  ngOnInit() {
  }

}
