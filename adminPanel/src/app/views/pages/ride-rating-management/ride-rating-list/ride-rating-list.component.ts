import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service';
import { ScriptLoaderService } from '../../../../services/script-loader.service';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { APPNAME, PERMISSIONS } from '../../../../helper/page.title';
import { ApiURIs } from "../../../../../api-constants";
import { TranslateService } from "@ngx-translate/core";
import { Helpers } from '../../../../helper/helper';

function _window(): any {
    //return the global native browser object
    return window;
}

declare const $: any;
@Component({
    selector: 'kt-ride-rating-list',
    templateUrl: './ride-rating-list.component.html',
    styleUrls: ['./ride-rating-list.component.scss']
})
export class RideRatingListComponent implements OnInit {

    stateSubscription: any = '';
    id: any;
    status: any = '';
    APPNAME: String = APPNAME;
    RIDE_RATING_CONST: any = [];
    // searchObj = { field: 'rideRating_ride_Id', rideRating_status: '', search: '' };
    searchObj = {
        field: "user_displayName",
        search: "",
      };
    createPermission: boolean = false;
    readPermission: boolean = false;
    deletePermission: boolean = false;
    editPermission: boolean = true;

    constructor(
        private subheaderService: SubheaderService,
        public localStorageService: LocalstorageService,
        private _script: ScriptLoaderService,
        private router: Router,
        titleService: Title,
        public translate: TranslateService
    ) {
        this.getPermission();

        this.RIDE_RATING_CONST = this.translate.instant("RIDE_RATING");
        //SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.RIDE_RATING"));
        titleService.setTitle(APPNAME + " | " + this.RIDE_RATING_CONST.MODULE_NAME);
    }

    getPermission() {
        this.localStorageService.getBehaviorView().subscribe((data: any) => {
            if (data && data.length) {
                if (this.checkHasPermission(data, PERMISSIONS.RIDE_RATING.CREATE)) {
                    this.createPermission = true;
                }
                if (this.checkHasPermission(data, PERMISSIONS.RIDE_RATING.EDIT)) {
                    this.editPermission = true;
                }
                if (this.checkHasPermission(data, PERMISSIONS.RIDE_RATING.DELETE)) {
                    this.deletePermission = true;
                }
                if (this.checkHasPermission(data, PERMISSIONS.RIDE_RATING.READ)) {
                    this.readPermission = true;
                }
            }
        });
    }

    checkHasPermission(data, permissionName) {
        return data.find(function (element) {
            // console.log("Element", element);
            // console.log("permission", permissionName);
            return element == permissionName;
        })
    }
    toTitleCase(str) {
        return str.replace(/\S+/g, str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());
      }
    ngOnInit() {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);

        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
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

        this._script.loadScripts('kt-ride-rating-list', scripts).then(function () {
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
                    sProcessing: that.RIDE_RATING_CONST.MESSAGES.PROCESSING,
                },

                //  Pagination settings
                dom: `<'row'<'col-sm-12'tr>>
          <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

                ajax: {
                    url: ApiURIs.listRideRating,
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
                        Helpers.setLoading(false);
                        return JSON.stringify(json);
                    }
                },
                columns: [
                    {
                        title: that.RIDE_RATING_CONST.LABEL.SR_NO, data: null,
                    },
                    {
                        title: that.RIDE_RATING_CONST.LABEL.RIDER_ID, data: 'rideRating_ride_Id',
                    },
                    { title: that.RIDE_RATING_CONST.LABEL.RATING_FROM, data: 'rideRating_fromUser' },
                    { title: that.RIDE_RATING_CONST.LABEL.RATING_TO, data: 'rideRating_toUser' },
                    { title: that.RIDE_RATING_CONST.LABEL.RATING, data: 'rideRating_rating' },
                    { title: that.RIDE_RATING_CONST.LABEL.RATED_BY, data: 'rideRating_roleId' },
                    // {
                    //     title: that.RIDE_RATING_CONST.LABEL.ISPUBLISH, data: 'rideRating_isPublish',
                    // },
                    { title: that.RIDE_RATING_CONST.LABEL.CREATED_ON, data: 'rideRating_createdOn' },
                    // { title: that.RIDE_RATING_CONST.LABEL.MODIFIED_ON, data: 'rideRating_modifyOn' },
                    { title: that.RIDE_RATING_CONST.LABEL.ACTIONS },
                ],

                initComplete: function () {

                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));

                    this.api().columns().every(function () {

                        const column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.RIDE_RATING_CONST.LABEL.SR_NO:
                                break;
                            case that.RIDE_RATING_CONST.LABEL.RIDER_ID:
                                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                                break;
                            case that.RIDE_RATING_CONST.LABEL.RATING_FROM:
                                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                                break;
                            case that.RIDE_RATING_CONST.LABEL.RATING_TO:
                                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                                break;

                            case that.RIDE_RATING_CONST.LABEL.RATING:
                                input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                                break;
                            case that.RIDE_RATING_CONST.LABEL.RATED_BY:
                                    input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                                    break;
                            // case that.RIDE_RATING_CONST.LABEL.ISPUBLISH:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            case that.RIDE_RATING_CONST.LABEL.CREATED_ON:
                                break;
                            // case that.RIDE_RATING_CONST.LABEL.MODIFIED_ON:
                            //     break;
                            case that.RIDE_RATING_CONST.LABEL.ACTIONS:
                                var search = $(`<button class="btn btn-brand kt-btn btn-sm kt-btn--icon" style="display: inline-block !important;
                  margin-left: 10px !important; margin-top: 0px !important;">
                        <span>
                          <i class="la la-search"></i>
                          <span>${that.RIDE_RATING_CONST.BUTTONS.SEARCH}</span>
                        </span>
                      </button>`);
                                var reset = $(`<button class="btn btn-secondary kt-btn btn-sm kt-btn--icon" style="display: inline-block !important;
                  margin-left: 10px !important; margin-top: 0px !important;">
                        <span>
                          <i class="la la-close"></i>
                          <span>${that.RIDE_RATING_CONST.BUTTONS.RESET}</span>
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
                        let editBtn = '<a class="btn btn-hover-brand btn-icon btn-pill" href="javascript:;" id="btnEdit" data-id="' + id + '" onclick="window.my.notimgmt.edit(this)" title="View details">\
              <i class="la la-eye"></i> </a>\
            ';

                        if (that.editPermission) {
                            return editBtn;
                        } else if (that.editPermission) {
                            return editBtn;
                        } else {
                            return '-';
                        }

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
                        if (t.rideRating_fromUser == ' ') {
                            return '-';
                          } else {
                            return that.toTitleCase(a);
                          };
                    }
                },
                {
                    targets: 3,
                    width: '20%',
                    render: function (a, e, t, n) {
                        if (t.rideRating_toUser == ' ') {
                          return '-';
                        } else {
                          return that.toTitleCase(a);
                        }
                      }

                },
                {
                    targets: 4,
                    width: '10%',
                    

                },
                {
                    targets: 5,
                    width: '10%',
                    render: function (a, e, t, n) {
                        return a;
                    }
                },
                // {
                //     targets: 6,
                //     width: '10%',
                //     render: function (a, e, t, n) {
                //         if (t.rideRating_isPublish == 1) {

                //             return 'yes';
                //         } else {
                //             return 'no';

                //         }
                //     }
                // },
                {
                    targets: 6,
                    width: '20%',
                    render: function (a, e, t, n) {
                        return a;
                    }
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
        this.router.navigate(['/ride-rating-management/edit/' + this.id])
    }

    async delete(e) {
        this.id = await $(e).data("id");
        let obj = {
            component: 'ride-rating',
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
            component: 'ride-rating',
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
