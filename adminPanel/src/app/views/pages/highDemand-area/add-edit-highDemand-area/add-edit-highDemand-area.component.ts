import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import { SubheaderService } from "../../../../core/_base/layout/services/subheader.service";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Title } from "@angular/platform-browser";
import { APPNAME } from "../../../../helper/page.title";
import { LocalstorageService } from "../../../../services/localstorage.service";
import { Store, select } from "@ngrx/store";
import { Helpers } from "../../../../helper/helper";

import * as highDemandAreaActions from "../state/highDemand-area.actions";
import * as fromHighDemandArea from "../state/highDemand-area.reducer";

import { TranslateService } from "@ngx-translate/core";
import { CityService } from "../../city/city.service";
import { ServiceOperatorService } from "../../service-operator/service-operator.service";
import { environment } from '../../../../../environments/environment';
declare var google: any;
@Component({
    selector: "kt-add-highDemand-area",
    templateUrl: "./add-edit-highDemand-area.component.html",
    styleUrls: ["./add-edit-highDemand-area.component.scss"],
    styles: [`
    agm-map {
      height: 300px;
    }
  `],
})

export class AddHighDemandAreaComponent implements OnInit {
    isAdd: boolean = true;
    HIGHDEMAND_AREA_CONST: any;
    addEditHighDemandAreaForm: FormGroup;
    countries: any = [];
    cities: any = [];
    operators: any = [];
    submitted = false
    stateSubscription: any;
    zoom: number = 8;
    // initial center position for the map
    lat: any;
    lng: any;
    markers: marker[] = []
    markings: marker[] = []
    geocoder: any;
    autoComplete = []
    drawingManager: any;
    selectedShape: any;
    selectedArea = 0;
    highDemandArea_polygonArray = []

    pointList: { lat: number; lng: number }[] = [];
    map: any;

    finalPointArray = []
    constructor(
        private subheaderService: SubheaderService,
        private _formBuilder: FormBuilder,
        private router: Router,
        public localStorageService: LocalstorageService,
        private toastr: ToastrService,
        private dtr: ChangeDetectorRef,
        private store: Store<{ school: any }>,
        titleService: Title,
        private translate: TranslateService,
        private cityService: CityService,
        private ServiceOperatorService: ServiceOperatorService
    ) {
        this.HIGHDEMAND_AREA_CONST = this.translate.instant("HIGHDEMANDAREA");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(
            this.translate.instant("MENU.HIGHDEMAND_AREA")
        );
        titleService.setTitle(
            APPNAME + " | " + this.HIGHDEMAND_AREA_CONST.MODULE_NAME
        );
    }

    async ngOnInit() {
        let self = this
        self.changeCountry(environment.webDefaultCountry);
        self.buildAddEditHighDemandAreaForm();
        navigator.geolocation.getCurrentPosition(
            function (position) { // success cb
                if (position.coords.latitude != null) {
                    self.lat = position.coords.latitude
                    self.lng = position.coords.longitude
                    self.markers.push({ lat: position.coords.latitude, lng: position.coords.longitude, draggable: false, rad: 0 })
                }
            }
        );
        // this.getAllCountries()
    }

    async onMapReady(map, callFrom) {
        if (callFrom != 'changeCountry') {
          this.map = map
          this.initDrawingManager(map);
        }
        let city = await this.cities.find(element => element._id == this.addEditHighDemandAreaForm.value.highDemandArea_cityId);
        if (city) {
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            'address': city.city_name
          }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
              });
              var bounds = new google.maps.LatLngBounds();
              marker.setMap(map);
              bounds.extend(results[0].geometry.location);
              map.fitBounds(bounds);
              // map.setBounds(bounds);
              map.setZoom(14);
            } else {
              alert('Internal error: ' + status);
            }
          });
        }
        // const self = this
        // self.highDemandArea_polygonArray.map((polygon) => {
        //   let polygonDetail = []
        //   polygon.loc.coordinates[0].map((detail) => {
        //     polygonDetail.push({ lat: detail[1], lng: detail[0] })
        //   })
        //   const drawPolygon = new google.maps.Polygon({
        //     paths: polygonDetail,
        //     strokeColor: "#FF0000",
        //     strokeOpacity: 0.8,
        //     strokeWeight: 2,
        //     fillColor: "#FF0000",
        //     fillOpacity: 0.35
        //   });
        //   drawPolygon.setMap(this.map);
        //   drawPolygon.addListener("click", showArrays);
        //   function showArrays(event) {
        //     const shape = this;
        //     shape.name = polygon.name
        //     self.setSelection(shape)
        //   }
        // })
      }
    

    onAddressChange(i) {
        if (document.getElementById("autoCompleteInput" + i)) {
            // var options = {
            //     types: ['(regions)'],
            //     componentRestrictions: { country: "in" }
            // };
            const input = document.getElementById("autoCompleteInput" + i);
            // const autocomplete = new google.maps.places.Autocomplete(input, options);
            const autocomplete = new google.maps.places.Autocomplete(input);
            this.autoComplete[i] = autocomplete
        }
    }
  //set selection to a shape
  setSelection(shape) {
    this.clearSelection();
    this.selectedShape = shape;
    shape.setEditable(true);
  }
  clearSelection() {
    if (this.selectedShape) {
      this.selectedShape.setEditable(false);
      this.selectedShape = null;
    }
  }
  deleteSelected() {
    if (this.selectedShape) {
      this.updatePointList(this.selectedShape.getPath(), 'delete_selected', this.selectedShape.zIndex);
      this.selectedShape.setMap(null)
    }
  }
  initDrawingManager = (map: any) => {
    const self = this;
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ['polygon'],
      },
      polygonOptions: {
        draggable: true,
        editable: true,
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
    };
    this.drawingManager = new google.maps.drawing.DrawingManager(options);
    this.drawingManager.setMap(map);
    google.maps.event.addListener(
      this.drawingManager,
      'overlaycomplete',
      (event) => {
        if (event.type === google.maps.drawing.OverlayType.POLYGON) {
          const paths = event.overlay.getPaths();
          for (let p = 0; p < paths.getLength(); p++) {
            google.maps.event.addListener(
              paths.getAt(p),
              'set_at',
              () => {
                this.setSelection(event.overlay);
                if (!event.overlay.drag) {
                  self.updatePointList(event.overlay.getPath(), 'set_at', event.overlay.zIndex);
                }
              }
            );
            google.maps.event.addListener(
              paths.getAt(p),
              'insert_at',
              () => {
                self.updatePointList(event.overlay.getPath(), 'insert_at', event.overlay.zIndex);
              }
            );
            google.maps.event.addListener(
              paths.getAt(p),
              'remove_at',
              () => {
                self.updatePointList(event.overlay.getPath(), 'remove_at', event.overlay.zIndex);
              }
            );
            google.maps.event.addListener(
              event.overlay,
              'click',
              () => {
                console.log('click call')
                this.setSelection(event.overlay);
              }
            );
          }
          self.updatePointList(event.overlay.getPath(), 'add_at', event.overlay.zIndex);
          this.selectedShape = event.overlay;
          this.selectedShape.type = event.type;
        }
        if (event.type !== google.maps.drawing.OverlayType.MARKER) {
          // Switch back to non-drawing mode after drawing a shape.
          self.drawingManager.setDrawingMode(null);
          // To hide:
          self.drawingManager.setOptions({
            drawingControl: true,
            clickable: true
          });

          this.setSelection(this.selectedShape);
        }
      }
    );
  }

  updatePointList(path, type, index) {
    let pointList = []
    const len = path.getLength();
    for (let i = 0; i < len; i++) {
      pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat])
    }
    if (type == 'add_at') {
      this.highDemandArea_polygonArray.push({ loc: { type: "Polygon", coordinates: [pointList] }, name: "Polygon" + [index] })
    } else if ('delete_selected') {
      let deleteIndex = this.highDemandArea_polygonArray.findIndex(function (obj) {
        return obj.name == 'Polygon' + index;
      });
      this.highDemandArea_polygonArray.splice(deleteIndex, 1);
    } else {
      this.highDemandArea_polygonArray[index].loc.coordinates[0] = pointList
    }
    this.selectedArea = google.maps.geometry.spherical.computeArea(
      path
    );
  }
   


    async onRadiusChange(i, value) {
        let place = this.autoComplete[i].getPlace();
        let address = this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i].address
        if (address) {
            if (!this.geocoder) {
                this.geocoder = new google.maps.Geocoder();
            }
            await this.geocoder.geocode({
                'address': address
            }, async (result, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (result[0]) {
                        let res = result[0];
                        if (result[0].geometry.location) {
                            if (this.markers.length > 0 && this.markers.length == (i + 1)) {
                                this.markers.push({ lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: Number(value) })
                                this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['coordinates'] = [res.geometry.location.lat(), res.geometry.location.lng()]
                                this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['address'] = place.formatted_address
                            } else {
                                this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['coordinates'] = [res.geometry.location.lat(), res.geometry.location.lng()]
                                this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['address'] = place.formatted_address

                                this.markers[i + 1] = { lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: Number(value) }
                            }
                            this.addEditHighDemandAreaForm.patchValue({
                                highDemandArea_addresses: this.addEditHighDemandAreaForm.value.highDemandArea_addresses
                            })
                        }
                    } else {
                        this.lat = 0;
                        this.lng = 0;
                    }
                }

            });
        }
    }


    // async setLocation(country, city) {
    //     if (!this.geocoder) {
    //         this.geocoder = new google.maps.Geocoder();
    //     }
    //     await this.geocoder.geocode({
    //         'address': country + ',' + city
    //     }, async (result, status) => {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             if (result[0]) {
    //                 let res = result[0];
    //                 if (result[0].geometry.location) {
    //                     this.lat = res.geometry.location.lat();
    //                     this.lng = res.geometry.location.lng();
    //                     this.markers.push({ lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: 0 })
    //                 }
    //             } else {
    //                 this.lat = 0;
    //                 this.lng = 0;
    //             }
    //         }

    //     });
    // }

    buildAddEditHighDemandAreaForm() {
        this.addEditHighDemandAreaForm = this._formBuilder.group({
            // highDemandArea_countryId: ["", [Validators.required,]],
            highDemandArea_cityId: ["", [Validators.required,]],
            highDemandArea_franchiseId: ["", [Validators.required,]],
            highDemandArea_status: ["ACTIVE", [Validators.required,]],
            highDemandArea_price_per_x1: ["0", [Validators.required,]],
            highDemandArea_ride_request_x1: ["", [Validators.required,]],
            highDemandArea_coolDown_rideReq_x1: ["", [Validators.required,]],
            highDemandArea_driver_search_radius_x1: ["", [Validators.required,]],
            highDemandArea_price_per_x2: ["0", [Validators.required,]],
            highDemandArea_ride_request_x2: ["", [Validators.required,]],
            highDemandArea_coolDown_rideReq_x2: ["", [Validators.required,]],
            highDemandArea_driver_search_radius_x2: ["", [Validators.required,]],
            highDemandArea_addresses: this._formBuilder.array([this.createFields()]),
        });
    }

    // getAllCountries() {
    //     Helpers.setLoading(true);
    //     this.countryService.getAllCountries().subscribe(async (data) => {
    //         if (data && data != undefined) {
    //             if (data["code"] == 200) {
    //                 this.countries = data["data"];
    //                 if (this.dtr && !(this.dtr as ViewRef).destroyed) {
    //                     this.dtr.detectChanges();
    //                 }
    //                 Helpers.setLoading(false);
    //             } else {
    //                 Helpers.setLoading(false);
    //                 this.toastr.error(data["message"]);
    //             }
    //         }
    //     });
    // }

    async changeCountry(country) {
        // #agmMap
        // var map = new google.maps.Map(document.getElementById('agmMap'), {
        //     zoom: 4,
        //     center: { lat: -25.363882, lng: 131.044922 }
        // });
        // this.initDrawingManager(map);
        Helpers.setLoading(true);
        if (country) {
            let countryId = { city_countryId: country };
            await this.cityService
                .getCountryCities(countryId)
                .subscribe(async (data) => {
                    if (data["code"] == 200) {
                        this.cities = await data["data"];
                        Helpers.setLoading(false);
                        this.dtr.detectChanges();
                    }
                });
        }
    }
    async changeCity(cityId) {
      
      Helpers.setLoading(true);
      if (cityId) {
        await this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(
          async (data) => {
            if (data["code"] == 200) {
              this.operators = await data["data"];
              this.onMapReady(this.map, 'changeCountry')
                        Helpers.setLoading(false);
                        this.dtr.detectChanges();
                    }
                }
            );
        }
    }
    createFields(): FormGroup {
        return this._formBuilder.group({
            address: ["", [Validators.required,]],
            coordinates: [[]],
            radius: ["", [Validators.required,]]
        })
    }


    get highDemandArea_addresses(): FormArray {
        let form = this.addEditHighDemandAreaForm;
        if (form) {
            return this.addEditHighDemandAreaForm.get('highDemandArea_addresses') as FormArray;
        }
    }

    onAddAddress() {
        this.highDemandArea_addresses.push(this.createFields())
    }


    removeAddress(i: number) {
        this.highDemandArea_addresses.removeAt(i);
        this.markers.splice(i + 1, 1);
        this.autoComplete.splice(i + 1, 1);
    }

    async onSubmit() {
        this.submitted = true;
        if (this.addEditHighDemandAreaForm.valid) {
            Helpers.setLoading(true);
            const form = this.addEditHighDemandAreaForm.value;
            let obj = {
                highDemandArea_country: environment.webDefaultCountry,
                highDemandArea_city: form.highDemandArea_cityId,
                highDemandArea_operator: form.highDemandArea_franchiseId,
                highDemandArea_status: form.highDemandArea_status,
                highDemandArea: [],
                highDemandArea_address: form.highDemandArea_addresses,
                highDemandArea_polygonArray: JSON.stringify(this.highDemandArea_polygonArray)
            };
            obj.highDemandArea.push({
                thresholdName: '1X', 
                pricePercentage: form.highDemandArea_price_per_x1, 
                rideRequest: form.highDemandArea_ride_request_x1, 
                coolDownRideReq: form.highDemandArea_coolDown_rideReq_x1,
                driverSearchRadius: form.highDemandArea_driver_search_radius_x1
            }, {
                    thresholdName: '2X', 
                    pricePercentage: form.highDemandArea_price_per_x2, 
                    rideRequest: form.highDemandArea_ride_request_x2, 
                    coolDownRideReq: form.highDemandArea_coolDown_rideReq_x2,
                    driverSearchRadius: form.highDemandArea_driver_search_radius_x2
                })

            this.stateSubscription = this.store.dispatch(
                new highDemandAreaActions.AddHighDemandArea(obj)
            );
            this.stateSubscription = this.store
                .pipe(select(fromHighDemandArea.selectPageState))
                .subscribe((data) => {
                    if (data && data != undefined) {
                        Helpers.setLoading(false);
                        if (data["code"] == 200) {
                            this.toastr.success(data["message"]);
                            this.stateSubscription.unsubscribe();
                            this.router.navigate(["/highDemand-area/list"]);
                        } else {
                            this.toastr.error(data["message"]);
                            this.stateSubscription.unsubscribe();
                        }
                    }
                })
        } else if (!this.addEditHighDemandAreaForm.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    }

    onCancel() {
        this.router.navigate(["/highDemand-area/list"]);
    }
}
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
    rad: number
}

@Component({
    selector: "kt-edit-highDemand-area",
    templateUrl: "./add-edit-highDemand-area.component.html",
    styleUrls: ["./add-edit-highDemand-area.component.scss"],
    styles: [`
    agm-map {
      height: 300px;
    }
  `],
})
export class EditHighDemandAreaComponent implements OnInit {
    HIGHDEMAND_AREA_CONST: any;
    addEditHighDemandAreaForm: FormGroup;
    countries: any = [];
    cities: any = [];
    operators: any = [];
    id: any;
    isAdd: boolean = false;
    stateSubscription: any;
    submitted: Boolean = false;
    zoom: number = 8;
    // initial center position for the map
    lat: number = 0;
    lng: number = 0;
    markers: marker[] = []
    markings: marker[] = []
    geocoder: any;
    highDemandAreaData: any
    autoComplete = []
    drawingManager: any;
    selectedShape: any;
    selectedArea = 0;

    pointList: { lat: number; lng: number }[] = [];
    finalPointArray: any = []
    highDemandArea_polygonArray: any = []
    map: any
    constructor(
        private subheaderService: SubheaderService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private _route: ActivatedRoute,
        public localStorageService: LocalstorageService,
        private toastr: ToastrService,
        private dtr: ChangeDetectorRef,
        private store: Store<{ school: any }>,
        titleService: Title,
        private translate: TranslateService,
        private cityService: CityService,
        private ServiceOperatorService: ServiceOperatorService
    ) {
        this.HIGHDEMAND_AREA_CONST = this.translate.instant("HIGHDEMANDAREA");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(
            this.translate.instant("MENU.HIGHDEMAND_AREA")
        );
        titleService.setTitle(
            APPNAME + " | " + this.HIGHDEMAND_AREA_CONST.MODULE_NAME
        );
    }

    ngOnInit() {
        let self = this
        this.buildAddEditHighDemandAreaForm();
        this.changeCountry(environment.webDefaultCountry);
        this.getHighDemandAreaDetails();;
        navigator.geolocation.getCurrentPosition(
            function (position) { // success cb
                if (position.coords.latitude != null) {
                    self.lat = position.coords.latitude
                    self.lng = position.coords.longitude
                    self.markers.push({ lat: position.coords.latitude, lng: position.coords.longitude, draggable: false, rad: 0 })
                }
            }
        );
        // this.getAllCountries()
    }

    onMapReady(map,callFrom) {
      if (callFrom != 'changeCountry') {
        this.map = map
        this.initDrawingManager(map);
      }
    
    
        let city = this.cities.find(element => element._id == this.addEditHighDemandAreaForm.value.highDemandArea_cityId);
        if (city) {
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            'address': city.city_name
          }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
              });
              var bounds = new google.maps.LatLngBounds();
              marker.setMap(map);
              bounds.extend(results[0].geometry.location);
              map.fitBounds(bounds);
              // map.setBounds(bounds);
              map.setZoom(14);
            } else {
              alert('Internal error: ' + status);
            }
          });
          const self = this
          if (self.highDemandAreaData) {
            this.highDemandAreaData.highDemandArea_polygonArray.map((polygon) => {
              let polygonDetail = []
              polygon.loc.coordinates[0].map((detail) => {
                polygonDetail.push({ lat: detail[1], lng: detail[0] })
              })
              const drawPolygon = new google.maps.Polygon({
                paths: polygonDetail,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35
              });
              drawPolygon.setMap(this.map);
              drawPolygon.addListener("click", showArrays);
              function showArrays(event) {
                const shape = this;
                shape.name = polygon.name
                self.setSelection(shape)
              }
            })
          }
        }
    
    
      }
    
      //set selection to a shape
      setSelection(shape) {
        this.clearSelection();
        this.selectedShape = shape;
        shape.setEditable(true);
      }
    
      clearSelection() {
        if (this.selectedShape) {
          this.selectedShape.setEditable(false);
          this.selectedShape = null;
        }
      }
      deleteSelected() {
        if (this.selectedShape) {
          this.updatePointList(this.selectedShape.getPath(), 'delete_old_selected', this.selectedShape.name);
          this.selectedShape.setMap(null)
        }
      }
    
      initDrawingManager = (map: any) => {
        const self = this;
        const options = {
          drawingControl: true,
          drawingControlOptions: {
            drawingModes: ['polygon'],
          },
          polygonOptions: {
            draggable: true,
            editable: true,
          },
          drawingMode: google.maps.drawing.OverlayType.POLYGON,
        };
        this.drawingManager = new google.maps.drawing.DrawingManager(options);
        this.drawingManager.setMap(map);
        google.maps.event.addListener(
          this.drawingManager,
          'overlaycomplete',
          (event) => {
            if (event.type === google.maps.drawing.OverlayType.POLYGON) {
              const paths = event.overlay.getPaths();
              for (let p = 0; p < paths.getLength(); p++) {
                google.maps.event.addListener(
                  paths.getAt(p),
                  'set_at',
                  () => {
                    this.setSelection(event.overlay);
                    if (!event.overlay.drag) {
                      self.updatePointList(event.overlay.getPath(), 'set_at', event.overlay.zIndex);
                    }
                  }
                );
                google.maps.event.addListener(
                  paths.getAt(p),
                  'insert_at',
                  () => {
                    self.updatePointList(event.overlay.getPath(), 'insert_at', event.overlay.zIndex);
                  }
                );
                google.maps.event.addListener(
                  paths.getAt(p),
                  'remove_at',
                  () => {
                    self.updatePointList(event.overlay.getPath(), 'remove_at', event.overlay.zIndex);
                  }
                );
                google.maps.event.addListener(
                  event.overlay,
                  'click',
                  () => {
                    this.setSelection(event.overlay);
                  }
                );
              }
              self.updatePointList(event.overlay.getPath(), 'add_at', event.overlay.zIndex);
              this.selectedShape = event.overlay;
              this.selectedShape.type = event.type;
            }
            if (event.type !== google.maps.drawing.OverlayType.MARKER) {
              // Switch back to non-drawing mode after drawing a shape.
              self.drawingManager.setDrawingMode(null);
              // To hide:
              self.drawingManager.setOptions({
                drawingControl: true,
                clickable: true
              });
    
              this.setSelection(this.selectedShape);
            }
          }
        );
      }
      updatePointList(path, type, index) {
        let self = this
        let pointList = []
        
        const len = path.getLength();
        for (let i = 0; i < len; i++) {
          pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat])
        }
        
        if (type == 'add_at') {
          let obj = {}
          obj['loc'] = { type: "Polygon", coordinates: [pointList] }
          obj['name'] = "Polygon" + (Number([index]) + Number(this.highDemandAreaData.highDemandArea_polygonArray.length))
         
          self.highDemandArea_polygonArray = Object.assign([], this.highDemandArea_polygonArray);
          self.highDemandArea_polygonArray.push(obj)
        } else if (type == 'delete_selected') {
          let deleteIndex = self.highDemandArea_polygonArray.findIndex(function (obj) {
            return obj.name == 'Polygon' + index;
          });
          self.highDemandArea_polygonArray.splice(deleteIndex, 1);
        } else if (type == 'delete_old_selected') {
          self.highDemandArea_polygonArray = self.highDemandArea_polygonArray.filter(function (item) {
            return item.name !== index
          })
        } else {
          self.highDemandArea_polygonArray[index].loc.coordinates[0] = pointList
        }
        this.selectedArea = google.maps.geometry.spherical.computeArea(
          path
        );
      }
  

    onAddressChange(i) {
        if (document.getElementById("autoCompleteInput" + i)) {
            var options = {
                types: ['(regions)'],
                componentRestrictions: { country: "in" }
            };
            const input = document.getElementById("autoCompleteInput" + i);
            const autocomplete = new google.maps.places.Autocomplete(input, options);
            this.autoComplete[i] = autocomplete
        }
    }

    async onRadiusChange(i, value) {
        let place = this.autoComplete[i].getPlace();
        let address = this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i].address
        if (address) {
            if (!this.geocoder) {
                this.geocoder = new google.maps.Geocoder();
            }
            await this.geocoder.geocode({
                'address': address
            }, async (result, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (result[0]) {
                        let res = result[0];
                        if (result[0].geometry.location) {
                            if (this.markers.length > 0 && this.markers.length == (i + 1)) {
                                this.markers.push({ lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: Number(value) })
                                this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['coordinates'] = [res.geometry.location.lat(), res.geometry.location.lng()]
                                this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['address'] = place.formatted_address
                            } else {
                                this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['coordinates'] = [res.geometry.location.lat(), res.geometry.location.lng()]
                                this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['address'] = place.formatted_address
                                this.markers[i + 1] = { lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: Number(value) }
                            }
                            this.addEditHighDemandAreaForm.patchValue({
                                highDemandArea_addresses: this.addEditHighDemandAreaForm.value.highDemandArea_addresses
                            })
                        }
                    } else {
                        this.lat = 0;
                        this.lng = 0;
                    }
                }

            });
        }
    }

    async setLocation() {
        this.highDemandAreaData.highDemandArea_address.map((data) => {
            this.markers.push({ lat: data.coordinates[0], lng: data.coordinates[1], draggable: false, rad: data.radius })
        })
        // if (!this.geocoder) {
        //     this.geocoder = new google.maps.Geocoder();
        // }
        // await this.geocoder.geocode({
        //     'address': country + ',' + city
        // }, async (result, status) => {
        //     if (status == google.maps.GeocoderStatus.OK) {
        //         if (result[0]) {
        //             let res = result[0];
        //             if (result[0].geometry.location) {
        //                 this.lat = res.geometry.location.lat();
        //                 this.lng = res.geometry.location.lng();
        //                 this.markers.push({ lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: 0 })
        //                 this.highDemandAreaData.highDemandArea_address.map((data) => {
        //                     this.markers.push({ lat: data.coordinates[0], lng: data.coordinates[1], draggable: false, rad: data.radius })
        //                 })
        //             }
        //         } else {
        //             this.lat = 0;
        //             this.lng = 0;
        //         }
        //     }

        // });
    }

    buildAddEditHighDemandAreaForm() {
        this.addEditHighDemandAreaForm = this._formBuilder.group({
            // highDemandArea_countryId: ["", [Validators.required,]],
            highDemandArea_cityId: ["", [Validators.required,]],
            highDemandArea_franchiseId: ["", [Validators.required,]],
            highDemandArea_status: ["ACTIVE", [Validators.required,]],
            highDemandArea_price_per_x1: [0, [Validators.required,]],
            highDemandArea_ride_request_x1: ["", [Validators.required,]],
            highDemandArea_coolDown_rideReq_x1: ["", [Validators.required,]],
            highDemandArea_driver_search_radius_x1: ["", [Validators.required,]],
            highDemandArea_price_per_x2: [0, [Validators.required,]],
            highDemandArea_ride_request_x2: ["", [Validators.required,]],
            highDemandArea_coolDown_rideReq_x2: ["", [Validators.required,]],
            highDemandArea_driver_search_radius_x2: ["", [Validators.required,]],
            highDemandArea_addresses: this._formBuilder.array([]),
        });
    }

    getHighDemandAreaDetails() {
        this.id = this._route.snapshot.params["id"];
        Helpers.setLoading(true);

        this.stateSubscription = this.store.dispatch(
            new highDemandAreaActions.LoadHighDemandArea(this.id)
        );

        this.stateSubscription = this.store
            .pipe(select(fromHighDemandArea.selectPageState))
            .subscribe(async (data) => {
                if (data && data != undefined) {
                    if (data["code"] == 200) {
                        Helpers.setLoading(false);
                        let result = data["data"];
                        this.highDemandAreaData = result
                        this.highDemandArea_polygonArray = this.highDemandAreaData.highDemandArea_polygonArray
                        let fd = {
                            highDemandArea_countryId: result.highDemandArea_country,
                            highDemandArea_cityId: result.highDemandArea_city,
                            highDemandArea_franchiseId: result.highDemandArea_operator,
                            highDemandArea_status: result.highDemandArea_status,
                            highDemandArea_price_per_x1: result.highDemandArea[0].pricePercentage,
                            highDemandArea_ride_request_x1: result.highDemandArea[0].rideRequest,
                            highDemandArea_coolDown_rideReq_x1: result.highDemandArea[0].coolDownRideReq,
                            highDemandArea_driver_search_radius_x1: result.highDemandArea[0].driverSearchRadius,
                            highDemandArea_price_per_x2: result.highDemandArea[1].pricePercentage,
                            highDemandArea_ride_request_x2: result.highDemandArea[1].rideRequest,
                            highDemandArea_coolDown_rideReq_x2: result.highDemandArea[1].coolDownRideReq,
                            highDemandArea_driver_search_radius_x2: result.highDemandArea[1].driverSearchRadius,

                            highDemandArea_addresses: result.highDemandArea_address
                        };
                        this.changeCountry(result.highDemandArea_country)
                        this.changeCity(result.highDemandArea_city)

                        result.highDemandArea_address.map(() => {
                            this.highDemandArea_addresses.push(this.createFields())
                        })

                        // let polygonArray = []

                        // this.highDemandAreaData.highDemandArea_polygonArray.map((polygon) => {
                        //     polygonArray.push(polygon.data)
                        // })
                        // const polygon = new google.maps.Polygon({
                        //     paths: polygonArray,
                        //     strokeColor: "#FF0000",
                        //     strokeOpacity: 0.8,
                        //     strokeWeight: 2,
                        //     fillColor: "#FF0000",
                        //     fillOpacity: 0.35
                        // });
                        // polygon.setMap(this.map);

                        await this.addEditHighDemandAreaForm.patchValue(fd);

                        this.stateSubscription.unsubscribe();

                    }
                }
            })
    }
    // getAllCountries() {
    //     Helpers.setLoading(true);
    //     this.countryService.getAllCountries().subscribe(async (data) => {
    //         if (data && data != undefined) {
    //             if (data["code"] == 200) {
    //                 this.countries = data["data"];
    //                 if (this.dtr && !(this.dtr as ViewRef).destroyed) {
    //                     this.dtr.detectChanges();
    //                 }
    //                 Helpers.setLoading(false);
    //             } else {
    //                 Helpers.setLoading(false);
    //                 this.toastr.error(data["message"]);
    //             }
    //         }
    //     });
    // }
    async changeCountry(country) {
      this.onMapReady(this.map, 'changeCountry')
        Helpers.setLoading(true);
        if (country) {
            let countryId = { city_countryId: country };
            await this.cityService
                .getCountryCities(countryId)
                .subscribe(async (data) => {
                    if (data["code"] == 200) {
                        this.cities = await data["data"];
                        Helpers.setLoading(false);
                        this.dtr.detectChanges();
                    }
                });
        }
    }
    async changeCity(cityId) {
        Helpers.setLoading(true);
        if (cityId) {
            await this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(
                async (data) => {
                    if (data["code"] == 200) {
                        this.operators = await data["data"];
                        Helpers.setLoading(false);
                        this.dtr.detectChanges();
                        // let country = this.countries.find(element => element._id == this.addEditHighDemandAreaForm.value.highDemandArea_countryId);
                        // if (this.cities.length > 0) {
                        //     let city = this.cities.find(element => element._id == cityId);
                        // this.setLocation(country.country_name, city.city_name);
                        this.setLocation();
                        // }
                    }
                }
            );
        }
    }
    createFields(): FormGroup {
        return this._formBuilder.group({
            address: ["", [Validators.required,]],
            coordinates: [[]],
            radius: ["", [Validators.required,]]
        })
    }
    get highDemandArea_addresses(): FormArray {
        let form = this.addEditHighDemandAreaForm;
        if (form) {
            return this.addEditHighDemandAreaForm.get('highDemandArea_addresses') as FormArray;
        }
    }

    onAddAddress() {
        this.highDemandArea_addresses.push(this.createFields())
    }
    removeAddress(i: number) {
        this.highDemandArea_addresses.removeAt(i);
        this.markers.splice(i + 1, 1);
        this.autoComplete.splice(i + 1, 1);
    }
    async onSubmit() {
        this.submitted = true;
        // this.finalPointArray.concat(this.highDemandAreaData.highDemandArea_polygonArray)
        // const mergedArray = [...this.highDemandArea_polygonArray, ...this.highDemandAreaData.highDemandArea_polygonArray]
        if (this.addEditHighDemandAreaForm.valid) {
            const form = this.addEditHighDemandAreaForm.value;
            Helpers.setLoading(true);
            let obj = {
                id: this.id,
                data: {
                    highDemandArea_status: form.highDemandArea_status,
                    highDemandArea: [],
                    highDemandArea_address: form.highDemandArea_addresses,
                    highDemandArea_polygonArray: JSON.stringify(this.highDemandArea_polygonArray)
                },
            };
            obj.data.highDemandArea.push({
                thresholdName: '1X', pricePercentage: form.highDemandArea_price_per_x1, rideRequest: form.highDemandArea_ride_request_x1, coolDownRideReq: form.highDemandArea_coolDown_rideReq_x1,
                driverSearchRadius: form.highDemandArea_driver_search_radius_x1
            }, {
                    thresholdName: '2X', pricePercentage: form.highDemandArea_price_per_x2, rideRequest: form.highDemandArea_ride_request_x2, coolDownRideReq: form.highDemandArea_coolDown_rideReq_x2,
                    driverSearchRadius: form.highDemandArea_driver_search_radius_x2
                })

            this.stateSubscription = this.store.dispatch(
                new highDemandAreaActions.UpdateHighDemandArea(obj)
            );

            this.stateSubscription = this.store
                .pipe(select(fromHighDemandArea.selectPageState))
                .subscribe((data) => {
                    if (data && data != undefined) {
                        if (data["code"] == 200) {
                            Helpers.setLoading(false);
                            this.toastr.success(data["message"]);
                            this.stateSubscription.unsubscribe();
                            this.router.navigate(["/highDemand-area/list"]);
                        } else {
                            Helpers.setLoading(false);
                            this.toastr.error(data["message"]);
                        }
                    }
                });
        } else if (!this.addEditHighDemandAreaForm.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    }
    onCancel() {
        this.router.navigate(["/highDemand-area/list"]);
    }

}
