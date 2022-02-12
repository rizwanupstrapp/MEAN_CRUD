import { Component, OnInit } from '@angular/core';
import { APPNAME } from '../helper/page.title'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { environment } from '../../environments/environment';

@Component({
  selector: 'kt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HOMEComponent implements OnInit {
  APPNAME = APPNAME
  public Editor = ClassicEditor;
  logo: any
  constructor() { }

  ngOnInit() {
    this.logo = environment.site_logo
  }

}
