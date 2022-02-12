import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../core/_base/layout/services/subheader.service'
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../helper/page.title';

@Component({
  selector: 'kt-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {

  constructor(
    private subheaderService: SubheaderService, titleService: Title) {
    this.subheaderService.setTitle(subHeader.COMPLAINT);
    titleService.setTitle(titles.complaintManagement);
  }

  ngOnInit() {
  }

}
