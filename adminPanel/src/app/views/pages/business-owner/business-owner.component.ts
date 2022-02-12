import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout';
import { Title } from '@angular/platform-browser';
import { titles, subHeader, APPNAME } from '../../../helper/page.title';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kt-business-owner',
  templateUrl: './business-owner.component.html',
  styleUrls: ['./business-owner.component.scss']
})
export class BusinessOwnerComponent implements OnInit {

  BUSINESS_OWNER_CONST : any = {};

  constructor(
    private subheaderService: SubheaderService, titleService: Title , private translate: TranslateService,) {

      this.BUSINESS_OWNER_CONST = this.translate.instant('BUSINESS_OWNER');
      // SET SUBHEAD AND TITLE
      this.subheaderService.setTitle( this.translate.instant('MENU.BUSINESS_OWNER'));
      titleService.setTitle(APPNAME + " | " + this.translate.instant('MENU.BUSINESS_OWNER'));
    }
  ngOnInit() {
  }

}
