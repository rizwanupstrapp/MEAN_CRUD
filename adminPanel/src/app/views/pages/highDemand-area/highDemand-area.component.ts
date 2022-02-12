import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
    selector: 'kt-highDemand-area',
    templateUrl: './highDemand-area.component.html',
    styleUrls: ['./highDemand-area.component.scss']
})
export class HighDemandAreaComponent implements OnInit {

    constructor(
        private subheaderService: SubheaderService, titleService: Title) {
        this.subheaderService.setTitle(subHeader.FARECALCULATION);
        titleService.setTitle(titles.highDemandAreaManagement);
    }

    ngOnInit() {
    }

}
