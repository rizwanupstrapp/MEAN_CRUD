import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { APPNAME } from '../../../../helper/page.title';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { validataion } from '../../../../helper/regular.expression';
import { Store, select } from "@ngrx/store";
import { Helpers } from '../../../../helper/helper';
import { environment } from '../../../../../environments/environment';

import * as operatorActions from "../state/operator.actions";
import * as fromOperator from "../state/operator.reducer";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TranslateService } from '@ngx-translate/core';
import { OperatorService } from '../operator.service';
import { CityService } from '../../city/city.service';
declare var google: any;

@Component({
  selector: 'kt-add-preferred-location',
  templateUrl: './add-edit-preferred-location.component.html',
  styleUrls: ['./add-edit-preferred-location.component.scss'],
  styles: [`
  agm-map {
    height: 500px;
  }
`],
})
export class AddPreferredLocationComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditPreferredLocationForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  PREFERRED_LOCATION_CONST: any;
  operatorId: any;
  id: any;
  location: any;
  lat: any;
  long: any;
  zoom: number = 8;
  lng: any;
  markers: marker[] = []
  drawingManager: any;
  pointList: { lat: number; lng: number }[] = [];
  finalPointArray = []
  user_operator_preferred_location_polygon_array: any = []
  selectedArea = 0;
  map: any
  cityId;
  selectedShape
  cities: any = [];
  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private dtr: ChangeDetectorRef,
    private cityService: CityService,
    private translate: TranslateService,
    private operatorService: OperatorService,
    private _route: ActivatedRoute,
  ) {
    this.PREFERRED_LOCATION_CONST = this.translate.instant('PREFERRED_LOCATION');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.PREFERRED_LOCATION'));
    titleService.setTitle(APPNAME + " | " + this.PREFERRED_LOCATION_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditPreferredLocationForm();
    this.operatorId = this._route.snapshot.params['id'];
    this.Editor = ClassicEditor;
    this.getOperatorById()
    this.changeCountry();
    // this.initialize();
  }
  buildAddEditPreferredLocationForm() {
    this.addEditPreferredLocationForm = this._formBuilder.group({
      name:["",[Validators.required,Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // location: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      user_operator_preferred_location_polygon_array:[]
    });
  }
  getOperatorById() {
    this.id = this._route.snapshot.params['id'];
   
    Helpers.setLoading(true);
    this.stateSubscription = this.store.dispatch(new operatorActions.LoadOperator(this.id))
    this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
         
          const result = await data['data'];
          
          
          this.stateSubscription.unsubscribe();

          if (result.user_operatorInfo && result.user_operatorInfo != undefined) {
            
           

            if (result.user_cityId) {
             
              this.cityId = result.user_cityId
            } else {
            }
           
            this.stateSubscription.unsubscribe();
          }
       
          
          this.stateSubscription.unsubscribe();
        } else {

          Helpers.setLoading(false);
          this.stateSubscription.unsubscribe();

          this.toastr.error(data['message']);
        }
      }
    });
  }
  // initialize() {
  //   const self = this
  //   var mapOptions = {
  //     center: new google.maps.LatLng(-33.8688, 151.2195),
  //     zoom: 13,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   var map = new google.maps.Map(document.getElementById('map_canvas'),
  //     mapOptions);

  //   var input = document.getElementById('searchTextField');
  //   var autocomplete = new google.maps.places.Autocomplete(input);

  //   autocomplete.bindTo('bounds', map);

  //   google.maps.event.addListener(autocomplete, 'place_changed', function () {
  //     var place = autocomplete.getPlace();

  //     self.location = place.name
  //     self.lat = place.geometry.location.lat()
  //     self.long = place.geometry.location.lng()
  //     self.addEditPreferredLocationForm.patchValue({
  //       location:self.location,
  //       lat: self.lat,
  //       long: self.long

  //     })
  //   });
  // }


  cancel() {
    this.operatorId = this._route.snapshot.params['id'];
    this.router.navigate(["/operator-management/edit/" + this.operatorId]);
    this.operatorService.updatePrefLoc('updatePrefLoc');
  }
  async changeCountry() {
    this.onMapReady(this.map, 'changeCountry')
    let countryId = { city_countryId: environment.webDefaultCountry };

    await this.cityService
      .getCountryCities(countryId).subscribe(async (data) => {
        console.log(data)
        if (data["code"] == 200) {
          this.cities = await data["data"];
          this.dtr.detectChanges();
        }
      });

  }
  onMapReady(map, callFrom) {
    if (callFrom != 'changeCountry') {
      this.map = map
      this.initDrawingManager(map);
    }
    let city = this.cities.find(element => element._id == this.cityId);
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
    const self = this;
    let pointList = []
    const len = path.getLength();
    for (let i = 0; i < len; i++) {
      pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat])
    }
    if (type == 'add_at') {
      self.user_operator_preferred_location_polygon_array.push({ loc: { type: "Polygon", coordinates: [pointList] }, name:self.addEditPreferredLocationForm.value.name })
    } else if ('delete_selected') {
      let deleteIndex = self.user_operator_preferred_location_polygon_array.findIndex(function (obj) {
        return obj.name == self.addEditPreferredLocationForm.value.name;
      });
      self.user_operator_preferred_location_polygon_array.splice(deleteIndex, 1);
    } else {
      self.user_operator_preferred_location_polygon_array[index].loc.coordinates[0] = pointList
    }
    self.selectedArea = google.maps.geometry.spherical.computeArea(
      path
    );
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
  async onSubmit() {

    this.operatorId = this._route.snapshot.params['id'];
    this.submitted = true;
    if( this.user_operator_preferred_location_polygon_array.length >0){

      this.user_operator_preferred_location_polygon_array[0]['name']  = this.addEditPreferredLocationForm.value.name ? this.addEditPreferredLocationForm.value.name : ""
    }

    // console.log("addEditPreferredLocationForm--> 8", this.addEditPreferredLocationForm)
    if (this.addEditPreferredLocationForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditPreferredLocationForm.value;


      let fd = new FormData();

      // fd.append('location', form.location);
      fd.append('user_operator_preferred_location_polygon_array', JSON.stringify(this.user_operator_preferred_location_polygon_array));

      // fd.append('lat', form.lat);
      // fd.append('long', form.long);

      let obj = {
        id: this.operatorId, // to pass pramas od operator
        data: fd
      }

      this.stateSubscription = this.store.dispatch(new operatorActions.AddPreferredLocation(obj))
      this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(["/operator-management/edit/" + this.operatorId]);
            this.operatorService.updatePrefLoc('updatePrefLoc');
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });
    } else if (!this.addEditPreferredLocationForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}


@Component({
  selector: 'kt-edit-preferred-location',
  templateUrl: './add-edit-preferred-location.component.html',
  styleUrls: ['./add-edit-preferred-location.component.scss'],
  styles: [`
  agm-map {
    height: 500px;
  }
`],
})
export class EditPreferredLocationComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditPreferredLocationForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  location: any;
  lat: any;
  long: any;
  PREFERRED_LOCATION_CONST: any;
  id: any;
  operatorId: any;
  preferenceLocationId: any;
  operatorDetail: any = {};
  prefLocDetail: any = [];
  cityList: any = [];
  cityId:any;
  map: any
  drawingManager: any;
  user_operator_preferred_location_polygon_array: any = []
  selectedArea = 0;
  user_operator_polygon_array = []
  selectedShape
  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private dtr: ChangeDetectorRef,
    private cityService: CityService,
    private translate: TranslateService,
    private operatorService: OperatorService
  ) {
    this.PREFERRED_LOCATION_CONST = this.translate.instant('PREFERRED_LOCATION');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.PREFERRED_LOCATION'));
    titleService.setTitle(APPNAME + " | " + this.PREFERRED_LOCATION_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditPreferredLocationForm();
    // this.initialize();
    this.getPreferredLocationDetails();
    this.getOperatorById()
     this.changeCountry();

    this.id = this._route.snapshot.params['id'];
  }
  getOperatorById() {
    this.id = this._route.snapshot.params['id'];
   
    Helpers.setLoading(true);
    this.stateSubscription = this.store.dispatch(new operatorActions.LoadOperator(this.id))
    this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
         
          const result = await data['data'];
          this.operatorDetail = data['data'];
          
          
          // this.stateSubscription.unsubscribe();

          if (result.user_operatorInfo && result.user_operatorInfo != undefined) {
            
           

            if (result.user_cityId) {
             
              this.cityId = result.user_cityId
            } else {
            }
           
            // this.stateSubscription.unsubscribe();
          }
       
          
          // this.stateSubscription.unsubscribe();
        } else {

          Helpers.setLoading(false);
          this.stateSubscription.unsubscribe();

          this.toastr.error(data['message']);
        }
      }
    });
  }
  getPreferredLocationDetails() {
    this.operatorId = this._route.snapshot.params['id'];
    this.preferenceLocationId = this._route.snapshot.params['preferred-locationId']; // put same as module file on 78 

    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new operatorActions.LoadPreferredLocation(this.id));

    this.operatorService.getPreferredLocationById(this.operatorId, this.preferenceLocationId).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
          const result = await data['data'];
          this.prefLocDetail =result;

            let fd = {
              'name': result[0].name != null && result[0].name != undefined ? result[0].name : "",
            };
            this.addEditPreferredLocationForm.patchValue(fd);

          
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    })
  }
   onMapReady(map,callFrom) {
    if (callFrom != 'changeCountry') {
      this.map = map
      this.initDrawingManager(map);
    }
    // this.map = map
    // this.initDrawingManager(map);
    // let polygonArray = []
    let city = this.cityList.find(element => element._id == this.cityId);
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
    const self = this
    if(self.prefLocDetail){
     self.prefLocDetail.map((polygon) => {

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
    self.prefLocDetail[index].loc.coordinates[0] = pointList

    const len = path.getLength();
    for (let i = 0; i < len; i++) {
      pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat])
    }
    
    if (type == 'add_at') {
      let obj = {}
      obj['loc'] = { type: "Polygon", coordinates: [pointList] }
      obj['name'] = "Polygon" + (Number([index]) + Number(this.operatorDetail.user_operator_preferred_location_polygon_array.length))
     
      self.user_operator_preferred_location_polygon_array = Object.assign([], this.user_operator_preferred_location_polygon_array);
      self.user_operator_preferred_location_polygon_array.push(obj)
    } else if (type == 'delete_selected') {
      let deleteIndex = self.user_operator_preferred_location_polygon_array.findIndex(function (obj) {
        return obj.name == 'Polygon' + index;
      });
      self.user_operator_preferred_location_polygon_array.splice(deleteIndex, 1);
    } else if (type == 'delete_old_selected') {
      self.user_operator_preferred_location_polygon_array = self.user_operator_preferred_location_polygon_array.filter(function (item) {
        return item.name !== index
      })
    } else {
      self.prefLocDetail[index].loc.coordinates[0] = pointList
    }
    this.selectedArea = google.maps.geometry.spherical.computeArea(
      path
    );
  }
  async changeCountry() {
    this.onMapReady(this.map, 'changeCountry')
      let countryId = { city_countryId: environment.webDefaultCountry };
      await this.cityService
        .getCountryCities(countryId).subscribe(async (data) => {
          if (data["code"] == 200) {
            this.cityList = await data["data"];
            this.dtr.detectChanges();
          }
        });
  

  }
  buildAddEditPreferredLocationForm() {
    this.addEditPreferredLocationForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      
    });
  }
  // initialize() {
  //   const self = this
  //   var mapOptions = {
  //     center: new google.maps.LatLng(-33.8688, 151.2195),
  //     zoom: 13,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   var map = new google.maps.Map(document.getElementById('map_canvas'),
  //     mapOptions);

  //   var input = document.getElementById('searchTextField');
  //   var autocomplete = new google.maps.places.Autocomplete(input);

  //   autocomplete.bindTo('bounds', map);

  //   google.maps.event.addListener(autocomplete, 'place_changed', function () {
  //     var place = autocomplete.getPlace();

    
  //     self.location = place.name
  //     self.lat = place.geometry.location.lat()
  //     self.long = place.geometry.location.lng()
  //     self.addEditPreferredLocationForm.patchValue({
  //       location:self.location,
  //       lat: self.lat,
  //       long: self.long

  //     })



  //   });


  // }
  
  cancel() {
    this.operatorId = this._route.snapshot.params['id'];
    this.router.navigate(["/operator-management/edit/" + this.operatorId]);
    this.operatorService.updatePrefLoc('updatePrefLoc');
  }
  async onSubmit() {

    this.operatorId = this._route.snapshot.params['id'];
    this.preferenceLocationId = this._route.snapshot.params['preferred-locationId']; // put same as module file on 78 

    this.submitted = true;
    if (this.addEditPreferredLocationForm.valid) {

      Helpers.setLoading(true);

      const form = this.addEditPreferredLocationForm.value;
      let fd = new FormData();
      fd.append('location', form.location);
      fd.append('lat', form.lat);
      fd.append('long', form.long);
      fd.append('id', this.preferenceLocationId)
      let obj = {
        id: this.id, // to pass pramas id operator
        data: fd
      }

      this.operatorService.updatePreferredLocation(this.operatorId, obj.data).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            const result = data['data'];
            this.id = result._id;
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.router.navigate(["/operator-management/edit/" + this.operatorId]);
            // this.stateSubscription.unsubscribe();
          } else {
            Helpers.setLoading(false);
            this.stateSubscription.unsubscribe();
            this.toastr.error(data['message']);
          }
        }
      })

    } else if (!this.addEditPreferredLocationForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  rad: number
}