import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { validataion } from '../../../../helper/regular.expression';
import { Router, ActivatedRoute } from '@angular/router';
import { appConstants } from '../../../../../app-contants';
import { Helpers } from '../../../../helper/helper';
import { Store, select } from '@ngrx/store';
import * as driverActions from "../state/driver.actions";
import * as fromDriver from "../state/driver.reducer";
import { NgxImgZoomService } from 'ngx-img-zoom';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from '../../brand/brand.service';
import { ModelService } from '../../model/model.service';
import { APPNAME } from '../../../../helper/page.title';
import { TranslateService } from '@ngx-translate/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service';
import { Title } from '@angular/platform-browser';
import { DriverManagementService } from '../driver-management.service';
import { TrimService } from '../../trim/trim.service';
import { ServiceOperatorService } from '../../service-operator/service-operator.service';


@Component({
    selector: 'kt-add-vehicle',
    templateUrl: './add-edit-vehicle.component.html',
    styleUrls: ['./add-edit-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

    isAdd: Boolean = true;
    addDriverForm2: FormGroup;
    // insurance
    url: any = '../../../../../assets/media/newMedia/add.png';
    // car icon
    url1: any = '../../../../../assets/media/newMedia/add.png';
    // number plate  
    url2: any = '../../../../../assets/media/newMedia/add.png';
    // inspection
    url3: any = '../../../../../assets/media/newMedia/add.png';

    imageFile: any;
    imageFile1: any;
    imageFile2: any;
    imageFile3: any;

    previewImageSrc: any;
    zoomImageSrc: any;

    id: any;
    DRIVER_CONST: any = [];
    stateSubscription: any;

    brands: any = [];
    models: any = [];
    trims: any = [];
    colors: any = [];
    years: any = []
    allAmmenities: any = []
    selectedItemsAmmenities: any = []
    dropdownSettingsAmmenities: any = {}
    driverDocumentVerifiedStatus: any = appConstants.DRIVER_VERIFIED_STATUS;

    VEHICLE_CONST: any;
    serviceTypes: any = [];
    selectedItemsServices: any = [];
    dropdownSettingsServices = {};
    // for show hid text field for test field
    isVerifiedSelected: boolean;

    selectVerifiedValue(event) {
        let selected = event.target.value;
        if (selected == 2) {
            const rejectedReasonControl = this.addDriverForm2.get('rejectedReason');
            rejectedReasonControl.setValidators([Validators.required])
            rejectedReasonControl.updateValueAndValidity();
            this.isVerifiedSelected = false;
        } else {
            const rejectedReasonControl = this.addDriverForm2.get('rejectedReason');
            rejectedReasonControl.clearValidators();
            rejectedReasonControl.updateValueAndValidity();
            this.isVerifiedSelected = true;
        }
    }
    constructor(
        private _formBuilder: FormBuilder,
        private store: Store<{ admin: any }>,
        private toastr: ToastrService,
        private brandService: BrandService,
        private dtr: ChangeDetectorRef,
        private modelService: ModelService,
        public translate: TranslateService,
        private router: Router,
        private subheaderService: SubheaderService,
        titleService: Title,
        private driverService: DriverManagementService,
        private trimService: TrimService,
        private _route: ActivatedRoute,
        private ServiceOperatorService: ServiceOperatorService
    ) {
        this.VEHICLE_CONST = this.translate.instant('VEHICLE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.VEHICLE'));
        titleService.setTitle(APPNAME + " | " + this.VEHICLE_CONST.MODULE_NAME);
    }

    async ngOnInit() {
        this.id = this._route.snapshot.params['id'];
        this.dropdownSettingsAmmenities = {
            singleSelection: false,
            text: "Select Amenities",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
        this.dropdownSettingsServices = {
            singleSelection: false,
            text: "Select Services",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
          };
        await this.buildAddDriverForm2();
        this.getAllBrands();
        this.getAllColors();
        this.getAllAmmenities();
        this.getYear();
    }
    onItemServicesSelect(item: any) {
        this.selectedItemsServices[item];
      }
      onItemServicesDeSelect(item: any) {
        this.selectedItemsServices.filter(function (el) {
          if (el.id == item.id) {
            delete this.selectedItemsServices[el];
          }
        });
      }
      onServicesSelectAll(items: any) {
    
      }
      onServicesDeSelectAll(items: any) {
    
      }
    buildAddDriverForm2() {
        this.addDriverForm2 = this._formBuilder.group({
            brandName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            carType:[""],
            vehicleModelName: ["", [Validators.required]],
            // numberPlate: ["", [Validators.required]],
            year: ["", [Validators.required]],
            color: ["", [Validators.required]],
            ammenities: ["", [Validators.required]],
            vehicleTrimName: ["", [Validators.required]],
            rejectedReason: ["", [Validators.required]],
            isDefault: [],
            verifiedStatus: [appConstants.DRIVER_VERIFIED_STATUS['Pending'], []]
        });
    }
    getAllBrands() {
        Helpers.setLoading(true);
        this.brandService.getAllBrands().subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    this.brands = data['data'];

                    if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        this.dtr.detectChanges();
                    }
                    Helpers.setLoading(false);
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            }
        });
    }
    getAllServiceTypes() {
        Helpers.setLoading(true);
        this.ServiceOperatorService.getAllServiceTypes().subscribe(async (data) => {
          if (data && data != undefined) {
            if (data['code'] == 200) {
    
            this.serviceTypes = data['data'];
              if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                this.dtr.detectChanges();
              }
              Helpers.setLoading(false);
            } else {
              Helpers.setLoading(false);
              this.toastr.error(data['message']);
            }
          }
        });
      }
    

    async changeBrand(brand) {
        Helpers.setLoading(true);
        if (brand) {
            await this.modelService
                .getBrandModel(brand)
                .subscribe(async (data) => {
                    if (data["code"] == 200) {
                        this.models = await data["data"];
                        Helpers.setLoading(false);
                        this.dtr.detectChanges();
                    } else {
                        Helpers.setLoading(false);
                        this.toastr.error(data['message']);
                    }
                });
        }
    }
    async changeModel(model) {
        Helpers.setLoading(true);
        if (model) {
            await this.trimService
                .getModelTrim(model)
                .subscribe(async (data) => {
                    if (data["code"] == 200) {
                        this.trims = await data["data"];
                        Helpers.setLoading(false);
                        this.dtr.detectChanges();
                    } else {
                        Helpers.setLoading(false);
                        this.toastr.error(data['message']);
                    }
                });
        }
    }
    async getAllColors() {
        Helpers.setLoading(true);
        await this.modelService
            .getAllColors()
            .subscribe(async (data) => {
                if (data["code"] == 200) {
                    this.colors = await data["data"];
                    Helpers.setLoading(false);
                    this.dtr.detectChanges();
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            });
    }

    getAllAmmenities() {
        Helpers.setLoading(true);
        this.driverService.getAllAmmenities().subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    data['data'].forEach(element => {
                        this.allAmmenities.push({
                            id: element._id,
                            itemName: element.ammenities_name
                        })
                    });
                    if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        this.dtr.detectChanges();
                    }
                    Helpers.setLoading(false);
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            }
        });
    }

    onItemAmmenitiesSelect(e, item: any) {
        this.selectedItemsAmmenities[item];
    }

    onItemAmmenitiesDeSelect(e, item: any) {

        this.selectedItemsAmmenities.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsAmmenities[el];
            }
        });

    }

    onAmmenitiesSelectAll(items: any) { }

    onAmmenitiesDeSelectAll(items: any) { }


    // insuranceDocumentImage
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                Helpers.setLoading(true);
                this.imageFile = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    Helpers.setLoading(false);
                    this.url = reader.result;
                    this.dtr.detectChanges();
                };
            } else {
                //   this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    }
    imageRemove() {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    }

    //for car Icon
    onSelectFileIcon(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                Helpers.setLoading(true);
                this.imageFile1 = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    Helpers.setLoading(false);
                    this.url1 = reader.result;
                    // this.previewImageSrc = reader.result;
                    // this.zoomImageSrc = reader.result;
                    this.dtr.detectChanges();
                };
            } else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    }
    imageRemoveIcon() {
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile1 = '';
    }

    // for registration Document Image
    onSelectFileRegistrationDocImage(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                Helpers.setLoading(true);
                this.imageFile2 = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    Helpers.setLoading(false);
                    this.url2 = reader.result;
                    this.dtr.detectChanges();
                };
            } else {
                //  this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    }
    imageRemoveRegistrationDoc() {
        this.url2 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile2 = '';
    }

    // Inspection image
    onSelectInspectionFile(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                Helpers.setLoading(true);
                this.imageFile3 = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    Helpers.setLoading(false);
                    this.url3 = reader.result;
                    this.dtr.detectChanges();
                };
            } else {
                //  this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    }
    imageInspectionRemove() {
        this.url3 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile3 = '';
    }

    getYear() {
        Helpers.setLoading(true);
        let startYear = 1970;
        let currentYear = new Date().getFullYear();

        for (let i = startYear; i <= currentYear; i++) {
            this.years.push(i)
        }
    }

    saveVehicleDetail() {
        Helpers.setLoading(true);
        const form = this.addDriverForm2.value;

        let fd = new FormData();
        fd.append('brandName', form.brandName);
        fd.append('carType', form.carType);
        fd.append('vehicleModelName', form.vehicleModelName);
        // fd.append('numberPlate', form.numberPlate);
        fd.append('year', form.year);
        fd.append('color', form.color);
        fd.append('vehicleTrimName', form.vehicleTrimName);
        fd.append('verifiedStatus', form.verifiedStatus);
        if (form.isDefault == true) {
            form.isDefault = 1;
        } else {
            form.isDefault = 0;
        }
        fd.append('isDefault', form.isDefault);
        let ammenitiesArray: any = [];
        form.ammenities.forEach(element => {
            ammenitiesArray.push(element.id)
        });
        fd.append('rejectedReason', form.rejectedReason);
        fd.append('ammenities', ammenitiesArray);
        if (this.imageFile) {
            fd.append('insuranceDocumentImage', this.imageFile);
        }
        if (this.imageFile1) {
            fd.append('carIconImage', this.imageFile1);
        }
        if (this.imageFile2) {
            fd.append('registrationDocumentImage', this.imageFile2);
        }
        if (this.imageFile3) {
            fd.append('inspectionCertificateImage', this.imageFile3);
        }

        let obj = {
            id: this.id,
            data: fd
        }

        this.stateSubscription = this.store.dispatch(new driverActions.UpdateVehicleInfo(obj))

        this.stateSubscription = this.store.pipe(select(fromDriver.selectPageState)).subscribe((data) => {
            if (data && data != undefined) {

                if (data['code'] == 200) {
                    Helpers.setLoading(false);
                    const result = data['data'];
                    this.id = result._id;
                    this.toastr.error(this.DRIVER_CONST.MESSAGES.VEHICLEADD);
                    this.stateSubscription.unsubscribe();
                    this.router.navigate(["/driver-management/list"]);
                } else {
                    Helpers.setLoading(false);
                    this.stateSubscription.unsubscribe();
                    this.toastr.error(data['message']);
                }
            }
        });
    }

}

@Component({
    selector: 'kt-edit-vehicle',
    templateUrl: './add-edit-vehicle.component.html',
    styleUrls: ['./add-edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {
    addDriverForm2: FormGroup;

    // insurance
    url: any = '../../../../../assets/media/newMedia/add.png';
    // car icon
    url1: any = '../../../../../assets/media/newMedia/add.png';
    // number plate  
    url2: any = '../../../../../assets/media/newMedia/add.png';
    // inspection
    url3: any = '../../../../../assets/media/newMedia/add.png';

    imageFile: any;
    imageFile1: any;
    imageFile2: any;
    imageFile3: any;

    id: any;
    driverId: any;
    vehicleId: any;

    DRIVER_CONST: any = [];
    stateSubscription: any;

    previewImageSrc: any;
    zoomImageSrc: any;

    myThumbnail: any;
    myFullresImage: any;
    
    brands: any = [];
    serviceTypes: any = [];
    models: any = [];
    colors: any = [];
    trims: any = [];
    years: any = []
    allAmmenities: any = []
    selectedItemsAmmenities: any = []
    dropdownSettingsAmmenities: any = {}
    driverDocumentVerifiedStatus: any = appConstants.DRIVER_VERIFIED_STATUS;
    selectedItemsServices: any = [];
    dropdownSettingsServices = {};
    VEHICLE_CONST: any;

    // for show hid text field for test field
    isVerifiedSelected: boolean;

    selectVerifiedValue(event) {
        let selected = event.target.value;
        if (selected == 2) {
            const rejectedReasonControl = this.addDriverForm2.get('rejectedReason');
            rejectedReasonControl.setValidators([Validators.required])
            rejectedReasonControl.updateValueAndValidity();
            this.isVerifiedSelected = false;
        } else {
            const rejectedReasonControl = this.addDriverForm2.get('rejectedReason');
            rejectedReasonControl.clearValidators();
            rejectedReasonControl.updateValueAndValidity();
            this.isVerifiedSelected = true;
        }
    }
    constructor(
        private _formBuilder: FormBuilder,
        private store: Store<{ admin: any }>,
        private toastr: ToastrService,
        private brandService: BrandService,
        private dtr: ChangeDetectorRef,
        private modelService: ModelService,
        private router: Router,
        public translate: TranslateService,
        private subheaderService: SubheaderService,
        titleService: Title,
        private driverService: DriverManagementService,
        private _route: ActivatedRoute,
        private trimService: TrimService,
        private ServiceOperatorService: ServiceOperatorService
    ) {
        this.VEHICLE_CONST = this.translate.instant('VEHICLE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.VEHICLE'));
        titleService.setTitle(APPNAME + " | " + this.VEHICLE_CONST.MODULE_NAME);
        this.getAllAmmenities();

    }

    async ngOnInit() {
        this.id = this._route.snapshot.params['id'];
        this.dropdownSettingsAmmenities = {
            singleSelection: false,
            text: "Select Amenities",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
        this.dropdownSettingsServices = {
            singleSelection: false,
            text: "Select Services",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
          };
        await this.buildAddDriverForm2();
        await this.getAllBrands();
        await this.getAllServiceTypes();
        await this.getAllColors();
        await this.getYear();
        await this.getVehicleById();
    }
    onItemServicesSelect(item: any) {
        this.selectedItemsServices[item];
      }
      onItemServicesDeSelect(item: any) {
        this.selectedItemsServices.filter(function (el) {
          if (el.id == item.id) {
            delete this.selectedItemsServices[el];
          }
        });
      }
      onServicesSelectAll(items: any) {
    
      }
      onServicesDeSelectAll(items: any) {
    
      }
    buildAddDriverForm2() {
        this.addDriverForm2 = this._formBuilder.group({
            brandName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            carType:["",[Validators.required]],
            vehicleModelName: ["", [Validators.required]],
            // numberPlate: ["", [Validators.required]],
            year: ["", [Validators.required]],
            color: ["", [Validators.required]],
            ammenities: ["", [Validators.required]],
            vehicleTrimName: ["", [Validators.required]],
            rejectedReason: ["", [Validators.required]],
            isDefault: [""],
            verifiedStatus: [appConstants.DRIVER_VERIFIED_STATUS['Pending'], []]
        });
    }
    getAllBrands() {
        Helpers.setLoading(true);
        this.brandService.getAllBrands().subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    this.brands = data['data'];

                    if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        this.dtr.detectChanges();
                    }
                    Helpers.setLoading(false);
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            }
        });
    }
    getAllServiceTypes() {
        Helpers.setLoading(true);
        this.ServiceOperatorService.getAllServiceTypes().subscribe(async (data) => {
          if (data && data != undefined) {
            if (data['code'] == 200) {
    
            this.serviceTypes = data['data'];
              if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                this.dtr.detectChanges();
              }
              Helpers.setLoading(false);
            } else {
              Helpers.setLoading(false);
              this.toastr.error(data['message']);
            }
          }
        });
      }
    async changeBrand(brand) {
        Helpers.setLoading(true);
        if (brand) {
            await this.modelService
                .getBrandModel(brand)
                .subscribe(async (data) => {
                    if (data["code"] == 200) {
                        this.models = await data["data"];

                        Helpers.setLoading(false);
                        this.dtr.detectChanges();
                    } else {
                        Helpers.setLoading(false);
                        this.toastr.error(data['message']);
                    }
                });
        }
    }
    

 
    async changeModel(model) {
        Helpers.setLoading(true);
        if (model) {
            await this.trimService
                .getModelTrim(model)
                .subscribe(async (data) => {
                    if (data["code"] == 200) {
                        this.trims = await data["data"];
                        Helpers.setLoading(false);
                        this.dtr.detectChanges();
                    } else {
                        Helpers.setLoading(false);
                        this.toastr.error(data['message']);
                    }
                });
        }
    }

    async getAllColors() {
        Helpers.setLoading(true);
        await this.modelService
            .getAllColors()
            .subscribe(async (data) => {
                if (data["code"] == 200) {
                    this.colors = await data["data"];
                    Helpers.setLoading(false);
                    this.dtr.detectChanges();
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            });

    }

    getAllAmmenities() {
        Helpers.setLoading(true);
        this.driverService.getAllAmmenities().subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    data['data'].forEach(element => {
                        this.allAmmenities.push({
                            id: element._id,
                            itemName: element.ammenities_name
                        })

                    });
                    // if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                    this.dtr.detectChanges();
                    // }
                    Helpers.setLoading(false);
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            }
        });
    }

    onItemAmmenitiesSelect(e, item: any) {
        this.selectedItemsAmmenities[item];
    }

    onItemAmmenitiesDeSelect(e, item: any) {

        this.selectedItemsAmmenities.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsAmmenities[el];
            }
        });

    }

    onAmmenitiesSelectAll(items: any) { }

    onAmmenitiesDeSelectAll(items: any) { }

    // insuranceDocumentImage
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                Helpers.setLoading(true);
                this.imageFile = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    Helpers.setLoading(false);
                    this.url = reader.result;
                    this.dtr.detectChanges();
                };
            } else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    }
    cancle() {
        this.router.navigate(["/driver-management/edit/" + this.driverId]);
        this.driverService.updateVehicle('updateVehicle');
    }
    imageRemove() {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    }

    //for car Icon
    onSelectFileIcon(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                Helpers.setLoading(true);
                this.imageFile1 = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = (event: any) => {
                    Helpers.setLoading(false);
                    this.url1 = reader.result;
                     this.myThumbnail = reader.result;
                     this.myFullresImage = reader.result;
                    this.dtr.detectChanges();
                };
            } else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    }
    imageRemoveIcon() {
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile1 = '';
    }

    // for registration Document Image
    onSelectFileRegistrationDocImage(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                Helpers.setLoading(true);
                this.imageFile2 = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    Helpers.setLoading(false);
                    this.url2 = reader.result;
                    this.dtr.detectChanges();
                };
            } else {
                //  this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    }
    imageRemoveRegistrationDoc() {
        this.url2 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile2 = '';
    }

    // Inspection image
    onSelectInspectionFile(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                Helpers.setLoading(true);
                this.imageFile3 = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    Helpers.setLoading(false);
                    this.url3 = reader.result;
                    this.dtr.detectChanges();
                };
            } else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    }
    imageInspectionRemove() {
        this.url3 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile3 = '';
    }

    getYear() {
        Helpers.setLoading(true);
        let startYear = 1970;
        let currentYear = new Date().getFullYear();

        for (let i = startYear; i <= currentYear; i++) {
            this.years.push(i)
        }
    }

    getVehicleById() {
        this.driverId = this._route.snapshot.params['id'];
        this.vehicleId = this._route.snapshot.params['vehicleId'];
        Helpers.setLoading(true);

        this.driverService.getVehicleById(this.driverId, this.vehicleId).subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    Helpers.setLoading(false);
                    const result = await data['data'];

                    if (result.vhecalInfo && result.vhecalInfo != undefined) {

                        let fd2 = {
                            'brandName': result.vhecalInfo.brandName != null && result.vhecalInfo.brandName != undefined ? result.vhecalInfo.brandName : "",
                            "carType":result.vhecalInfo.carType != null && result.vhecalInfo.carType != undefined ? result.vhecalInfo.carType : "",
                            'vehicleModelName': result.vhecalInfo.vehicleModelName && result.vhecalInfo.vehicleModelName != undefined ? result.vhecalInfo.vehicleModelName : "",
                            // 'numberPlate': result.user_driverInfo.driverVehicleInfo.numberPlate,
                            'year': result.vhecalInfo.year,
                            'color': result.vhecalInfo.color != null && result.vhecalInfo.color != undefined ? result.vhecalInfo.color : "",
                            'vehicleTrimName': result.vhecalInfo.vehicleTrimName,
                            'isDefault': result.vhecalInfo.isDefault,
                            'rejectedReason': result.vhecalInfo.rejectedReason,
                            'verifiedStatus': result.vhecalInfo.verifiedStatus,
                            // 'carType': result.vhecalInfo.carType
                        };
                        // for hidindg input field when data fetched
                        if (typeof (result.vhecalInfo.rejectedReason) == "string" &&
                            typeof (result.vhecalInfo.rejectedReason) != undefined) {
                            this.isVerifiedSelected = false;
                            // this.dtr.detectChanges();
                        } else {
                            this.isVerifiedSelected = true;
                            // this.dtr.detectChanges();
                        }
                        if (result.vhecalInfo.insuranceDocumentImage) {
                            this.url = result.vhecalInfo.insuranceDocumentImage
                        }
                        if (result.vhecalInfo.carIconImage) {
                            this.url1 = result.vhecalInfo.carIconImage;
                        }
                        if (result.vhecalInfo.registrationDocumentImage) {
                            this.url2 = result.vhecalInfo.registrationDocumentImage;
                        }
                        if (result.vhecalInfo.inspectionCertificateImage) {
                            this.url3 = result.vhecalInfo.inspectionCertificateImage;
                        }
                        if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                            this.dtr.detectChanges();
                        }
                        this.addDriverForm2.patchValue(fd2);
                        this.changeBrand(result.vhecalInfo.brandName);
                        this.changeModel(result.vhecalInfo.vehicleModelName)
                        this.allAmmenities.forEach(element => {
                            if (result.vhecalInfo.ammenities.indexOf(element.id) >= 0) {
                                this.selectedItemsAmmenities.push(element);

                                if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                                    this.dtr.detectChanges();
                                }
                            }

                        });

                        Helpers.setLoading(false);
                        // this.stateSubscription.unsubscribe();
                    }
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            }
        });

    }
  
    saveVehicleDetail() {
        this.driverId = this._route.snapshot.params['id'];
        this.vehicleId = this._route.snapshot.params['vehicleId'];

        // if (this.imageFile == "" || this.imageFile == '../../../../../assets/media/newMedia/add.png') {
        //     this.submitted1 = false
        //     this.toastr.error("Vehicle image is required");
        // } else if (this.imageFile1 == "" || this.imageFile1 == '../../../../../assets/media/newMedia/add.png') {
        //     this.submitted1 = false
        //     this.toastr.error("Car icon is required")
        // } else if (this.imageFile2 == "" || this.imageFile2 == '../../../../../assets/media/newMedia/add.png') {
        //     this.submitted1 = false
        //     this.toastr.error("Number plate image is required")
        // } else {

        Helpers.setLoading(true);
        const form = this.addDriverForm2.value;
        let fd = new FormData();
        fd.append('brandName', form.brandName);
        fd.append('carType', form.carType);
        fd.append('vehicleModelName', form.vehicleModelName);
        // fd.append('numberPlate', form.numberPlate);
        fd.append('year', form.year);
        fd.append('color', form.color);
        fd.append('vehicleTrimName', form.vehicleTrimName);
        fd.append('verifiedStatus', form.verifiedStatus);
        fd.append('rejectedReason', form.rejectedReason);
        if (form.isDefault == true) {
            form.isDefault = 1;
        } else {
            form.isDefault = 0;
        }
        fd.append('isDefault', form.isDefault);
        let ammenitiesArray: any = [];
        form.ammenities.forEach(element => {
            ammenitiesArray.push(element.id)
        });
        fd.append('ammenities', ammenitiesArray);
        if (this.imageFile) {
            fd.append('insuranceDocumentImage', this.imageFile);
        }
        if (this.imageFile1) {
            fd.append('carIconImage', this.imageFile1);
        }
        if (this.imageFile2) {
            fd.append('registrationDocumentImage', this.imageFile2);
        }
        if (this.imageFile3) {
            fd.append('inspectionCertificateImage', this.imageFile3);
        }
        fd.append('vehicleId', this.vehicleId);
        let obj = {
            id: this.id,
            data: fd
        }
        this.stateSubscription = this.store.dispatch(new driverActions.UpdateVehicleInfo(obj))

        this.stateSubscription = this.store.pipe(select(fromDriver.selectPageState)).subscribe((data) => {
            if (data && data != undefined) {

                if (data['code'] == 200) {
                    Helpers.setLoading(false);
                    const result = data['data'];
                    this.id = result._id;
                    this.toastr.success(data['message']);
                    this.stateSubscription.unsubscribe();
                    this.router.navigate(["/driver-management/edit/" + this.driverId]);
                    this.driverService.updateVehicle('updateVehicle');
                } else {
                    Helpers.setLoading(false);
                    this.stateSubscription.unsubscribe();
                    this.toastr.error(data['message']);
                }
            }
        });
        // }
    }
}
