import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { ScriptLoaderService } from '../../../../services/script-loader.service';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { APPNAME, PERMISSIONS } from '../../../../helper/page.title';
import { ApiURIs } from '../../../../../api-constants';

import { TranslateService } from '@ngx-translate/core';
import { Helpers } from '../../../../helper/helper';



function _window(): any {
  // return the global native browser window object
  return window;
}

declare const $: any;

@Component({
  selector: 'kt-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  country: any = '';
  stateSubscription: any;
  id: any;
  status: any = '';
  APPNAME: String = APPNAME;
  COUNTRY_CONST: any = [];
  searchObj = { field: 'country_name', country_status: '', search: '' };

  createPermission: boolean = false;
  readPermission: boolean = false;
  deletePermission: boolean = false;
  editPermission: boolean = false;

  constructor(
    private subheaderService: SubheaderService,
    public localStorageService: LocalstorageService,
    private _script: ScriptLoaderService,
    private router: Router,
    titleService: Title,
    public translate: TranslateService
  ) {
    this.getPermission();


    this.COUNTRY_CONST = this.translate.instant('COUNTRY');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.COUNTRY'));
    titleService.setTitle(this.APPNAME + " | " + this.COUNTRY_CONST.MODULE_NAME);
  }

  getPermission() {
    this.localStorageService.getBehaviorView().subscribe((data: any) => {
      if (data && data.length) {
        if (this.checkHasPermission(data, PERMISSIONS.COUNTRY.CREATE)) {
          this.createPermission = true;
        }
        if (this.checkHasPermission(data, PERMISSIONS.COUNTRY.EDIT)) {
          this.editPermission = true;
        }
        if (this.checkHasPermission(data, PERMISSIONS.COUNTRY.DELETE)) {
          this.deletePermission = true;
        }
        if (this.checkHasPermission(data, PERMISSIONS.COUNTRY.READ)) {
          this.readPermission = true;
        }
      }
    });
  }
  checkHasPermission(data, permissionName) {
    return data.find(function (element) {
      return element == permissionName;
    });
  }


  ngOnInit() {
    _window().my = _window().my || {};
    _window().my.notimgmt = _window().my.notimgmt || {};
    _window().my.notimgmt.edit = this.edit.bind(this);
    _window().my.notimgmt.delete = this.delete.bind(this);
    _window().my.notimgmt.update = this.update.bind(this);

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

    this._script.loadScripts('kt-country-list', scripts).then(function () {
      _window().isScriptLoadednotimgmt = true;

      // begin first table
      var table = $(document).find('#kt_datatable').DataTable({
        responsive: false, // for table responsive
        searchDelay: 500,
        processing: true,
        //colReorder: true, // for column reorder
        order: [],
        serverSide: true,
        oLanguage: {
          sProcessing: that.COUNTRY_CONST.MESSAGES.PROCESSING,
        },

        //Pagination settings
        dom: `<'row'<'col-sm-12'tr>>
              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

        ajax: {
          url: ApiURIs.listCountry,
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
            title: that.COUNTRY_CONST.LABEL.SR_NO, data: null
          },
          { title: that.COUNTRY_CONST.LABEL.COUNTRY_NAME, data: 'country_name' },
          { title: that.COUNTRY_CONST.LABEL.COUNTRY_CODE, data: 'country_code' },
          { title: that.COUNTRY_CONST.LABEL.COUNTRY_CURRENCY, data: 'country_currency' },
          { title: that.COUNTRY_CONST.LABEL.STATUS, data: 'country_status' },
          { title: that.COUNTRY_CONST.LABEL.CREATED_ON, data: 'country_createdOn' },
          { title: that.COUNTRY_CONST.LABEL.MODIFIED_ON, data: 'country_modifyOn' },
          { title: that.COUNTRY_CONST.LABEL.ACTIONS },
        ],

        //TODO::uncomment when multiple country functionality required

        initComplete: function () {
          var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
          this.api().columns().every(function () {

            const column = $(this.header()).text().trim();
            var input;
            switch (column) {
              case that.COUNTRY_CONST.LABEL.SR_NO:
                break;
              case that.COUNTRY_CONST.LABEL.COUNTRY_NAME:
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                break;
              case that.COUNTRY_CONST.LABEL.COUNTRY_CODE:
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                break;
              case that.COUNTRY_CONST.LABEL.COUNTRY_CURRENCY:
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                break;
              case that.COUNTRY_CONST.LABEL.STATUS:
                input = $(`<select class="form-control form-control-sm form-filter kt-input" title="Select" data-col-index="` + this.index() + `">
                <option value="">${that.COUNTRY_CONST.PLACEHOLDERS.STATUS}</option>
                <option value="ACTIVE">${that.COUNTRY_CONST.LABEL.ACTIVE}</option>
                <option value="INACTIVE">${that.COUNTRY_CONST.LABEL.INACTIVE}</option></select>
                `);
                break;
              // case that.COUNTRY_CONST.LABEL.CREATED_ON:
              //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
              //   break;
              // case that.COUNTRY_CONST.LABEL.MODIFIED_ON:
              //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
              //   break;
              case that.COUNTRY_CONST.LABEL.ACTIONS:
                var search = $(`<button class="btn btn-brand kt-btn btn-sm kt-btn--icon" style="display: inline-block !important;
                margin-left: 10px !important; margin-top: 0px !important;">
                      <span>
                        <i class="la la-search"></i>
                        <span>${that.COUNTRY_CONST.BUTTONS.SEARCH}</span>
                      </span>
                    </button>`);

                var reset = $(`<button class="btn btn-secondary kt-btn btn-sm kt-btn--icon" style="display: inline-block !important;
                margin-left: 10px !important; margin-top: 0px !important;">
                      <span>
                        <i class="la la-close"></i>
                        <span>${that.COUNTRY_CONST.BUTTONS.RESET}</span>
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

                $(document).on('keyup', '.form-filter', function (e) {
                  const n = $(this).val();
                  if (e.keyCode === 13) {
                    (<any>$('#kt_datatable')).DataTable().column($(this).data('colIndex')).search(n).draw();
                  }
                  // if (n === '') {
                  //   (<any>$('#kt_datatable')).DataTable().column($(this).data('colIndex')).search(n).draw();
                  // }
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
          width: '20%',
          render: function (a, e, t, n) {
            const id = (t._id);
            let editBtn = '<a class="btn btn-hover-brand btn-icon btn-pill" href="javascript:;" id="btnEdit" data-id="' + id + '" onclick="window.my.notimgmt.edit(this)" title="Edit details">\
										<i class="la la-edit"></i> </a>\
									';
            let deleteBtn = '<a href="javascript:;" id="btnDelete" data-id="' + id + '" onclick="window.my.notimgmt.delete(this)" data-toggle="modal" data-target="#m_modal_6"  class="btn btn-hover-danger btn-icon btn-pill" title="Delete">\
											<i class="la la-trash"></i>\
										</a>';
            if (that.editPermission && that.deletePermission) {
              return editBtn + deleteBtn;
            } else if (that.editPermission) {
              return editBtn;
            } else if (that.deletePermission) {
              return deleteBtn;
            } else {
              return '-';
            }


          }
        },
        {
          targets: 0,
          width: '10%',
          orderable: false,
          render: function (a, e, t, n) {
            return ((n.row + 1) + (n.settings._iDisplayStart));
          }
        },
        {
          targets: 1,
          width: '20%',

          render: function (a, e, t, n) {
            let c = a.filter((obj) =>
              (obj.lang == 'EN'))

            return c[0].title;
          }
        },
        {
          targets: 2,
          width: '10%',
          render: function (a, e, t, n) {
            return a;
          }
        },

        {
          targets: 3,
          width: '10%',
          render: function (a, e, t, n) {
            return a;
          }
        },
        {
          targets: 4,
          width: '16%',
          render: function (value, e, row, n) {

            // return status || '-';
            let id = row._id;
            var status = {
              'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
              'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
            };
            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.country_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.country_status].title + '</span>';
          }
        },
        {
          targets: 5,
          width: '10%'
        },
        {
          targets: 6,
          width: '10%'
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
    this.id = $(e).data('id');
    this.router.navigate(['/country/edit/' + this.id])
  }

  async delete(e) {
    this.id = await $(e).data("id");
    let obj = {
      component: 'country',
      click: 'delete',
      id: this.id
    }
    this.localStorageService.setBehaviorClick(obj)

  }
  update(e) {
    this.id = $(e).data("id").toString();
    this.status = $(e).data("status");
    $("#m_modal_7").modal({
      backdrop: "static",
      keyboard: false,
      show: true,
    });
    let obj = {
      component: 'country',
      click: 'update',
      status: this.status,
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
