import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { ScriptLoaderService } from '../../../../services/script-loader.service';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { APPNAME, PERMISSIONS } from '../../../../helper/page.title';
import { ApiURIs } from '../../../../../api-constants';
import { TranslateService } from '@ngx-translate/core';

function _window(): any {
  // return the global native browser window object
  return window;
}

declare const $: any;

@Component({
  selector: 'kt-ride-request-list',
  templateUrl: './ride-request-list.component.html',
  styleUrls: ['./ride-request-list.component.scss']
})
export class RideRequestListComponent implements OnInit {

  stateSubscription: any;
  id: any;
  status: any = '';
  APPNAME: String = APPNAME;
  RIDE_REQUEST_CONST: any = [];
  // searchObj = { field: 'state_name', state_status: '', search: '' };
  searchObj = {
    field: "user_displayName",
    search: "",
  };
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

    this.RIDE_REQUEST_CONST = this.translate.instant('RIDE_REQUEST');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.RIDE_REQUEST'));
    titleService.setTitle(this.APPNAME + " | " + this.RIDE_REQUEST_CONST.MODULE_NAME);
  }

  ngOnInit() {
    _window().my = _window().my || {};
    _window().my.notimgmt = _window().my.notimgmt || {};
    _window().my.notimgmt.view = this.view.bind(this);

    if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
      _window().isScriptLoadednotimgmt = false;
    }
  }

  getPermission() {
    this.localStorageService.getBehaviorView().subscribe((data: any) => {
      if (data && data.length) {
        if (this.checkHasPermission(data, PERMISSIONS.RIDE_REQUEST.EDIT)) {
          this.editPermission = true;
        }
        if (this.checkHasPermission(data, PERMISSIONS.RIDE_REQUEST.READ)) {
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
  toTitleCase(str) {
    if(str){
      return str.replace(/\S+/g, str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());
    }else{
      return  "-"
    }
    
  }
  ngAfterViewInit() {

    const that = this;
    let scripts = [];
    if (!_window().isScriptLoadednotimgmt) {
      scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
    }

    this._script.loadScripts('kt-ride-request-list', scripts).then(function () {
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
          sProcessing: that.RIDE_REQUEST_CONST.MESSAGES.PROCESSING,
        },

        //  Pagination settings
        dom: `<'row'<'col-sm-12'tr>>
                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

        ajax: {
          url: ApiURIs.listRideRequest,
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
              that.router.navigate(['login']);
            }
            return JSON.stringify(json);
          }
        },
        columns: [
          {
            title: that.RIDE_REQUEST_CONST.LABEL.SR_NO, data: null,
          },
          { title: that.RIDE_REQUEST_CONST.LABEL.RIDER_ID, data: 'rideRequest_ride_id' },
          { title: that.RIDE_REQUEST_CONST.LABEL.USER_NAME, data: 'user_displayName' },
          { title: that.RIDE_REQUEST_CONST.LABEL.DRIVER_NAME, data: 'rideRequest_driverName' },
          { title: that.RIDE_REQUEST_CONST.LABEL.FARE_AMOUNT, data: 'rideRequest_approx_fare_coin' },
          { title: that.RIDE_REQUEST_CONST.LABEL.RIDE_KM, data: 'rideRequest_ride_distance' },
          { title: that.RIDE_REQUEST_CONST.LABEL.STATUS, data: 'rideRequest_ride_status' },
          { title: that.RIDE_REQUEST_CONST.LABEL.CREATED_ON, data: 'rideRequest_createdOn' },
          // { title: that.RIDE_REQUEST_CONST.LABEL.MODIFIED_ON, data: 'rideRequest_modifyOn' },
          { title: that.RIDE_REQUEST_CONST.LABEL.ACTIONS },
        ],

        initComplete: function () {

          var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));

          this.api().columns().every(function () {

            const column = $(this.header()).text().trim();
            var input;
            switch (column) {
              case that.RIDE_REQUEST_CONST.LABEL.SR_NO:
                break;
              case that.RIDE_REQUEST_CONST.LABEL.RIDER_ID:
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                break;
              case that.RIDE_REQUEST_CONST.LABEL.USER_NAME:
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                break;
              case that.RIDE_REQUEST_CONST.LABEL.DRIVER_NAME:
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                break;
              case that.RIDE_REQUEST_CONST.LABEL.FARE_AMOUNT:
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                break;
              case that.RIDE_REQUEST_CONST.LABEL.RIDE_KM:
                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                break;
              case that.RIDE_REQUEST_CONST.LABEL.STATUS:
                input = $(`<select class="form-control form-control-sm form-filter kt-input" title="Select" data-col-index="` + this.index() + `">
                  <option value="">${that.RIDE_REQUEST_CONST.PLACEHOLDERS.STATUS}</option>
                  <option value=1>${that.RIDE_REQUEST_CONST.PLACEHOLDERS.ONTHEWAY}</option>
                  <option value=2>${that.RIDE_REQUEST_CONST.PLACEHOLDERS.PICKUP_POINT}</option>
                  <option value=3>${that.RIDE_REQUEST_CONST.PLACEHOLDERS.ONRIDE}</option>
                  <option value=4>${that.RIDE_REQUEST_CONST.PLACEHOLDERS.COMPLETED}</option>
                  <option value=5>${that.RIDE_REQUEST_CONST.PLACEHOLDERS.CANCELLED}</option>
                  <option value=6>${that.RIDE_REQUEST_CONST.PLACEHOLDERS.AUTO_CANCELLED}</option>
                  <option value=0>${that.RIDE_REQUEST_CONST.PLACEHOLDERS.INPROGRESS}</option>
                  </select>
                  `);
                break;
              // case that.RIDE_REQUEST_CONST.LABEL.CREATED_ON:
              //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
              //     break;
              // case that.RIDE_REQUEST_CONST.LABEL.MODIFIED_ON:
              //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
              //     break;
              case that.RIDE_REQUEST_CONST.LABEL.ACTIONS:
                var search = $(`<button class="btn btn-brand kt-btn btn-sm kt-btn--icon" style="display: inline-block !important;
                      margin-left: 10px !important; margin-top: 0px !important;">
                            <span>
                              <i class="la la-search"></i>
                              <span>${that.RIDE_REQUEST_CONST.BUTTONS.SEARCH}</span>
                            </span>
                          </button>`);
                var reset = $(`<button class="btn btn-secondary kt-btn btn-sm kt-btn--icon" style="display: inline-block !important;
                      margin-left: 10px !important; margin-top: 0px !important;">
                            <span>
                              <i class="la la-close"></i>
                              <span>${that.RIDE_REQUEST_CONST.BUTTONS.RESET}</span>
                            </span>
                          </button>`);

                $('<th>').append(search).append(reset).appendTo(rowFilter);

                $(search).on('click', function (e) {
                  e.preventDefault();
                  var params = {};
                  $(rowFilter)
                    .find('.kt-input')
                    .each(function () {
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
                  $(rowFilter).find('.kt-input')
                    .each(function (i) {
                      $(this).val('');
                      table
                        .column($(this).data('col-index'))
                        .search('', false, false);
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
            let viewBtn = '<a class="btn btn-hover-brand btn-icon btn-pill" href="javascript:;" id="btnView" data-id="' + id + '" onclick="window.my.notimgmt.view(this)" title="View details">\
										<i class="la la-eye"></i> </a>\
									';
            return viewBtn
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
          width: '20%',

          render: function (a, e, t, n) {
            return a;
          }
        },
        {
          targets: 2,
          width: '20%',

          render: function (a, e, t, n) {
            if (t.user_displayName == ' ') {
              return '-';
            } else {
              return that.toTitleCase(t.user_displayName);
            }
          }
        },
        {
          targets: 3,
          width: '20%',

          render: function (a, e, t, n) {
            if (t.rideRequest_driverName == " ") {
              return '-';
            } else {
              return that.toTitleCase(t.rideRequest_driverName);
            }
          }
        }, {
          targets: 4,
          width: '20%',

          render: function (a, e, t, n) {
            return a || '-';
          }
        }, {
          targets: 5,
          width: '20%',

          render: function (a, e, t, n) {
            return a || '-';
          }
        },
        {
          targets: 6,
          width: '10%',
          render: function (value, e, row, n) {

            // return status || '-';
            let id = row._id;
            var status = {
              0: { 'title': 'InProgress', 'class': 'kt-badge--success' },
              1: { 'title': 'On The Way', 'class': 'kt-badge--success' },
              2: { 'title': 'Pick Up Point', 'class': 'kt-badge--success' },
              3: { 'title': 'On Ride', 'class': 'kt-badge--successr' },
              4: { 'title': 'Completed', 'class': 'kt-badge--success' },
              5: { 'title': 'Cancelled', 'class': 'kt-badge--danger' },
              6: { 'title': 'Auto Cancelled', 'class': 'kt-badge--danger' },
            };
            // return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.rideRequest_ride_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.rideRequest_ride_status].title + '</span>';
            return '<span style="cursor:Pointer"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.rideRequest_ride_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.rideRequest_ride_status].title + '</span>';
          }
        },
        {
          targets: 7,
          width: '10%'
        },
        // {
        //   targets: 8,
        //   width: '10%'
        // },
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
  view(e) {
    this.id = $(e).data('id');
    this.router.navigate(['/ride-request/view/' + this.id])
  }

  ngOnDestroy() {
    if (this.stateSubscription && this.stateSubscription != undefined) {
      this.stateSubscription.unsubscribe();
    }
  }

}
