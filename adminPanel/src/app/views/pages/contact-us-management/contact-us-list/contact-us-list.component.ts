import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { ScriptLoaderService } from '../../../../services/script-loader.service';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../../helper/page.title';
import { ApiURIs } from '../../../../../api-constants';
import { validataion } from '../../../../helper/regular.expression';
import { Helpers } from '../../../../helper/helper';


function _window(): any {
  // return the global native browser window object
  return window;
}
declare const $: any;

@Component({
  selector: 'kt-contact-us-list',
  templateUrl: './contact-us-list.component.html',
  styleUrls: ['./contact-us-list.component.scss']
})
export class ContactUsListComponent implements OnInit {

  role: any = '';
  stateSubscription: any;
  id: any;
  message: any = '';

  showMore = false;

  constructor(
    private subheaderService: SubheaderService,
    public localStorageService: LocalstorageService,
    private _script: ScriptLoaderService,
    private router: Router,
    private dtr: ChangeDetectorRef,
    titleService: Title,
  ) {
    this.subheaderService.setTitle(subHeader.CONTACT);
    titleService.setTitle(titles.contactUs);
  }

  ngOnInit() {
    _window().my = _window().my || {};
    _window().my.notimgmt = _window().my.notimgmt || {};
    _window().my.notimgmt.edit = this.edit.bind(this);
    _window().my.notimgmt.delete = this.delete.bind(this);
    _window().my.notimgmt.viewMore = this.viewMore.bind(this);

    if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
      _window().isScriptLoadednotimgmt = false;
    }
  }

  ngAfterViewInit() {
    Helpers.setLoading(true);
    const that = this;
    let scripts = [];
    if (!_window().isScriptLoadednotimgmt) {
      scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
    }

    this._script.loadScripts('kt-contact-us-list', scripts).then(function () {
      _window().isScriptLoadednotimgmt = true;


      // begin first table
      var table = $('#kt_datatable').DataTable({
        responsive: false, // for table responsive
        searchDelay: 500,
        processing: true,
        //colReorder: true, // for column reorder
        order: [],
        serverSide: true,
        oLanguage: {
          sProcessing: 'Contact Us keeps processing...',
        },

        //   // Pagination settings
        dom: `<'row'<'col-sm-12'tr>>
              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

        ajax: {

          url: ApiURIs.listContacts,
          type: 'POST',
          headers: {
            'Authorization': that.localStorageService.getToken(),
          },
          'dataFilter': function (data) {
            const json = $.parseJSON(data);

            if (json['code'] === 200) {
              json.recordsTotal = json.data.totalDocs;
              json.recordsFiltered = json.data.totalDocs;
              json.data = json.data.docs;
            } else if (json['code'] === 401 || json['code'] === 500 || json['code'] === 403) {
              that.router.navigate(['/dashboard']);
            }
            Helpers.setLoading(false);
            return JSON.stringify(json);
          }
        },

        columns: [
          {
            title: 'Sr.No.',
            data: null
          },
          { title: 'Full Name', data: 'contactus_fullName' },
          { title: 'Email', data: 'contactus_email' },
          { title: 'Message', data: 'contactus_message' },
          { title: 'Created Date', data: 'contactus_createdOn' },
          { title: 'Modified Date', data: 'contactus_modifyOn' },
          { title: 'Actions' },
        ], 

        initComplete: function () {

          var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));

          this.api().columns().every(function () {

            const column = $(this.header()).text().trim();
            var input;
            switch (column) {
              case 'Sr. No':
                break;
              case 'Full Name':
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                break;
              case 'Email':
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                break;
              case 'Message':
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`); 
                break;
              // case 'Created Date':
              //   break;
              // case 'Modified Date':
              //   break;
              case 'Actions':
                var search = $(`<button class="btn btn-brand kt-btn btn-sm kt-btn--icon" style="display: inline-block !important;
                margin-left: 10px !important; margin-top: 0px !important;">
                      <span>
                        <i class="la la-search"></i>
                        <span>Search</span>
                      </span>
                    </button>`);

                var reset = $(`<button class="btn btn-secondary kt-btn btn-sm kt-btn--icon" style="display: inline-block !important;
                margin-left: 10px !important; margin-top: 0px !important;">
                      <span>
                        <i class="la la-close"></i>
                        <span>Reset</span>
                      </span>
                    </button>`);

                $('<th>').append(search).append(reset).appendTo(rowFilter);

                $(search).on('click', function (e) {
                  e.preventDefault();
                  var params = {};
                  $(rowFilter).find('.kt-input').each(function () {
                    var i = $(this).data('col-index');
                    if (params[i]) {
                      params[i] += '|' + $(this).val();
                    }
                    else {
                      params[i] = $(this).val();
                    }
                  });

                  $.each(params, function (i, val) {
                    // apply search params to datatable
                    table.column(i).search(val ? val : '', false, false);
                  });
                  table.table().draw();
                });

                $(reset).on('click', function (e) {
                  e.preventDefault();
                  $(rowFilter).find('.kt-input').each(function (i) {
                    $(this).val('');
                    table.column($(this).data('col-index')).search('', false, false);
                  });
                  table.table().draw();
                });
                break;
            }

            if (column !== 'Actions') {
              $(input).appendTo($('<th>').appendTo(rowFilter));
            }
          });
        },

        columnDefs: [{
          targets: -1,
          title: 'Actions',
          orderable: !1,
          bSortable: false,
          width: '10%',
          render: function (a, e, t, n) {
            const id = (t._id);
            return '-';

          }
        },
        {
          targets: 0,
          width: '5%',
          orderable: false,
          render: function (a, e, t, n) {
            return ((n.row + 1) + (n.settings._iDisplayStart));
          }
        },
        {
          targets: 1,
          width: '15%',

          render: function (a, e, t, n) {
            if (t.contactus_email) {
              return a
            }
            return "-";
          }
        },
        {
          targets: 2,
          width: '15%',

          render: function (a, e, t, n) {
            return a;
          }
        },
        {
          targets: 3,
          width: '20%',

          render: function (a, e, t, n) {

            console.log("aaaaa", a)
            
            if(a=="" || a.length <= 15) {  return a  } else {
              var shortText= a.substring(0,30);
              var cleanStr= a.replace(/["']/g, "")
              return shortText  +  '<a href="javascript:;" id="btnView" data-content="' + a+ '" onclick="window.my.notimgmt.viewMore(this)" data-toggle="modal" data-target="#m_modal_8"  class="btn btn-hover colorReadmore" title="Read More">\
              <u class="colorReadmore">Read More...</u> \
            </a>';
              }
            },
          
            },
        {
          targets: 4,
          width: '15%'
        },
        {
          targets: 5,
          width: '15%'
        },
        ],
      });

      //table.colReorder.move( 0, 1 );
      table.on('column-reorder', function (e, settings, details) {

        var headerCell = $(table.column(details.to).header());
        headerCell.addClass('reordered');
        setTimeout(function () {
          headerCell.removeClass('reordered');
        }, 2000);
      });
    })
  }

  edit(e) {
    this.message = $(e).data('id');

    if (this.dtr && !(this.dtr as ViewRef).destroyed) {
      this.dtr.detectChanges();
    }
    $('#m_modal_7').modal({
      backdrop: 'static',
      keyboard: false,
      show: true
    });

  }



  exit() {
    this.message = '';
  }

  async viewMore(e) {
    this.id = await $(e).data("content");
    let obj = {
      component: 'contactUs',
      click: 'view',
      content: this.id
    }
    this.localStorageService.setBehaviorClick(obj)

  }
  async delete(e) {
    this.id = await $(e).data("id");
    let obj = {
      component: 'contactUs',
      click: 'delete',
      id: this.id
    }
    this.localStorageService.setBehaviorClick(obj)

  }

  ngOnDestroy() {

    if (this.stateSubscription && this.stateSubscription != undefined) {
      this.stateSubscription.unsubscribe();
    }
  }


}
