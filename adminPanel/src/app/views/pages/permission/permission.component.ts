import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
    this.subheaderService.setTitle(subHeader.PERMISSION);
    titleService.setTitle(titles.permissionManagement);
  }

  ngOnInit() {
  }

}
