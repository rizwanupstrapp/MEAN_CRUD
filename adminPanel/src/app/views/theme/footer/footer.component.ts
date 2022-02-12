// Angular
import { Component, OnInit } from "@angular/core";
// Layout
import { LayoutConfigService } from "../../../core/_base/layout";
// Object-Path
import * as objectPath from "object-path";
import { LocalstorageService } from "../../../services/localstorage.service";
import { AdminManagementService } from "../../pages/admin-management/admin-management.service";
import { CmsManagementService } from "../../pages/cms-management/cms-management.service";
import { RolesService } from "../../pages/roles/roles.service";
import { ToastrService } from "ngx-toastr";
import { Helpers } from "../../../helper/helper";
import { CityService } from "../../pages/city/city.service";
import { CountryService } from "../../pages/country/country.service";
import { DriverManagementService } from "../../pages/driver-management/driver-management.service";
import { FareCalculationService } from "../../pages/fare-calculation/fare-calculation.service";
import { HelpService } from "../../pages/help/help.service";
import { HelpTopicService } from "../../pages/help-topic/help-topic.service";
import { ContactUsManagementService } from "../../pages/contact-us-management/contact-us-management.service";
import { OperatorService } from "../../pages/operator/operator.service";
import { RiderManagementService } from "../../pages/rider-management/rider-management.service";
import { ServiceTypeService } from "../../pages/service-type/service-type.service";
import { ServiceOperatorService } from "../../pages/service-operator/service-operator.service";
import { TemplateService } from "../../pages/template/template.service";
import { TimeFrameService } from "../../pages/time-frame/time-frame.service";
import { BrandService } from "../../pages/brand/brand.service";
import { PromocodeService } from "../../pages/promocode/promocode.service";
import { PermissionService } from "../../pages/permission/permission.service";
import { AutomaticDriverAssignService } from "../../pages/automatic-driver-assign/automatic-driver-assign.service";
import { ComplaintService } from "../../pages/complaint/complaint.service";
import { BusinessOwnerService } from "../../pages/business-owner/business-owner.service";
import { ModelService } from '../../pages/model/model.service';
import { ReasonService } from '../../pages/reason/reason.service';
import { HighDemandAreaService } from '../../pages/highDemand-area/highDemand-area.service';
import { BadgeService } from '../../pages/badge/badge.service';
import { StateService } from '../../pages/state/state.service';
import { AmmenitiesService } from '../../pages/ammenities/ammenities.service';
import { TrimService } from '../../pages/trim/trim.service';
import { AccountTypeService } from '../../pages/account-type/account-type.service';
import { EmailTemplateService } from '../../pages/email-template/email-template.service';
import { NotificationTemplateService } from '../../pages/notification-template/notification-template.service';
import { SmsTemplateService } from '../../pages/sms-template/sms-template.service';

declare const $: any;
@Component({
  selector: "kt-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent implements OnInit {
  // Public properties
  today: number = Date.now();
  fluid: boolean;
  id: any;
  status: any;
  component: any;
  content:any

  /**
   * Component constructor
   *
   * @param layoutConfigService: LayouConfigService
   */
  constructor(
    private layoutConfigService: LayoutConfigService,
    public localStorageService: LocalstorageService,
    public adminService: AdminManagementService,
    public cityService: CityService,
    public countryService: CountryService,
    public contactUsService: ContactUsManagementService,
    public driverService: DriverManagementService,
    public fareCalculationService: FareCalculationService,
    public highDemandAreaService: HighDemandAreaService,
    public helpService: HelpService,
    public helpTopicService: HelpTopicService,
    public cmsService: CmsManagementService,
    public rolesService: RolesService,
    public operatorService: OperatorService,
    public riderService: RiderManagementService,
    public serviceTypeService: ServiceTypeService,
    public serviceOperatorService: ServiceOperatorService,
    public templateService: TemplateService,
    public promoCodeService: PromocodeService,
    public timeFrameService: TimeFrameService,
    private brandService: BrandService,
    private permissionService: PermissionService,
    private autoMaticDriverAssignService: AutomaticDriverAssignService,
    private businessOwnerService: BusinessOwnerService,
    private toastr: ToastrService,
    private modelService: ModelService,
    private complaintService: ComplaintService,
    private reasonService: ReasonService,
    private badgeService: BadgeService,
    private stateService: StateService,
    private ammenitiesService: AmmenitiesService,
    private trimService: TrimService,
    private accountTypeService: AccountTypeService,
    private emailTemplateService: EmailTemplateService,
    private notificationTemplateService: NotificationTemplateService,
    private smsTemplateService: SmsTemplateService
  ) { }
  /**
   * On init
   */
  ngOnInit(): void {
    const config = this.layoutConfigService.getConfig();

    // footer width fluid
    this.fluid = objectPath.get(config, "footer.self.width") === "fluid";
    this.localStorageService.getBehaviorClick().subscribe((data) => {
      if (data && data != undefined) {
        if (data["click"] && data["click"] == "update") {
          this.id = data["id"];
          this.status = data["status"];
          this.component = data["component"];
        }
        if (data["click"] && data["click"] == "delete") {
          this.id = data["id"];
          this.component = data["component"];
        }
        if (data["click"] && data["click"] == "view") {
          this.content= data["content"];
          this.component = data["component"];
        }
      }
    });
  }

  // For update status
  updateStatus() {
    if (this.component == "adminUser") {
      this.updateStatusService("user_status", this.adminService);
    }

    if (this.component == "cms") {
      this.updateStatusService("cms_status", this.cmsService);
    }
    if (this.component == "roles") {
      this.updateStatusService("role_status", this.rolesService);
    }
    // if (this.component == 'contactUs') {
    // 	this.updateStatusService('contactUs_status', this.contactUsService);
    // }
    if (this.component == "city") {
      this.updateStatusService("city_status", this.cityService);
    }
    if (this.component == "country") {
      this.updateStatusService("country_status", this.countryService);
    }
    if (this.component == "driver") {
      this.updateStatusService("user_status", this.driverService);
    }
    if (this.component == "fareCalculation") {
      this.updateStatusService(
        "fareCalculation_status",
        this.fareCalculationService
      );
    }
    if (this.component == "help") {
      this.updateStatusService("help_status", this.helpService);
    }
    if (this.component == "helpTopic") {
      this.updateStatusService("helpTopic_status", this.helpTopicService);
    }
    if (this.component == "operator") {
      this.updateStatusService("user_status", this.operatorService);
    }
    if (this.component == "rider") {
      this.updateStatusService("user_status", this.riderService);
    }
    if (this.component == "serviceType") {
      this.updateStatusService("serviceType_status", this.serviceTypeService);
    }
    if (this.component == "serviceOperator") {
      this.updateStatusService(
        "serviceOperator_status",
        this.serviceOperatorService
      );
    }
    if (this.component == "template") {
      this.updateStatusService("template_status", this.templateService);
    }
    if (this.component == "timeFrame") {
      this.updateStatusService("timeFrame_status", this.timeFrameService);
    }
    if (this.component == "brand") {
      this.updateStatusService("brand_status", this.brandService);
    }
    if (this.component == "promocode") {
      this.updateStatusService("promocode_status", this.promoCodeService);
    }
    if (this.component == "permission") {
      this.updateStatusService("permission_status", this.permissionService);
    }
    if (this.component == "automaticDriverAssign") {
      this.updateStatusService(
        "automaticDriverAssign_status",
        this.autoMaticDriverAssignService
      );
    }
    if (this.component == "businessOwner") {
      this.updateStatusService("user_status", this.businessOwnerService);
    }
    if (this.component == "model") {
      this.updateStatusService("model_status", this.modelService);
    }
    if (this.component == "complaint") {
      this.updateStatusService("complaint_status", this.complaintService);
    }
    if (this.component == "reason") {
      this.updateStatusService("reason_status", this.reasonService);
    }
    if (this.component == "badge") {
      this.updateStatusService("badge_status", this.badgeService);
    }
    if (this.component == "state") {
      this.updateStatusService("state_status", this.stateService);
    }
    if (this.component == "ammenities") {
      this.updateStatusService("ammenities_status", this.ammenitiesService);
    }
    if (this.component == "highDemandArea") {
      this.updateStatusService("highDemandArea_status", this.highDemandAreaService);
    }
    if (this.component == "trim") {
      this.updateStatusService("trim_status", this.trimService);
    }
    if (this.component == "account-type") {
      this.updateStatusService("account_type_status", this.accountTypeService);
    }
    if (this.component == "emailTemplate") {
      this.updateStatusService("emailTemplate_status", this.emailTemplateService);
    }
    if (this.component == "notificationTemplate") {
      this.updateStatusService("notificationTemplate_status", this.notificationTemplateService);
    }
    if (this.component == "smsTemplate") {
      this.updateStatusService("smsTemplate_status", this.smsTemplateService);
    }
    if (this.component == "driverAssignment") {
      this.updateStatusService(
        "automaticDriverAssign_status",
        this.autoMaticDriverAssignService
      );
    }
  }

  // For delete
  deleteSure() {
    if (this.component == "adminUser") {
      this.deleteById(this.adminService);
    }
    if (this.component == "cms") {
      this.deleteById(this.cmsService);
    }
    if (this.component == "roles") {
      this.deleteById(this.rolesService);
    }
    // if (this.component == 'contactUs') {
    // 	this.deleteById(this.contactUsService);
    // }
    if (this.component == "driverAssignment") {
      this.deleteById(this.autoMaticDriverAssignService);
    }
    if (this.component == "city") {
      this.deleteById(this.cityService);
    }
    if (this.component == "country") {
      this.deleteById(this.countryService);
    }
    if (this.component == "driver") {
      this.deleteById(this.driverService);
    }
    if (this.component == "fareCalculation") {
      this.deleteById(this.fareCalculationService);
    }
    if (this.component == "highDemandArea") {
      this.deleteById(this.highDemandAreaService);
    }
    if (this.component == "help") {
      this.deleteById(this.helpService);
    }
    if (this.component == "helpTopic") {
      this.deleteById(this.helpTopicService);
    }
    if (this.component == "operator") {
      this.deleteById(this.operatorService);
    }
    if (this.component == "rider") {
      this.deleteById(this.riderService);
    }
    if (this.component == "serviceType") {
      this.deleteById(this.serviceTypeService);
    }
    if (this.component == "serviceOperator") {
      this.deleteById(this.serviceOperatorService);
    }
    if (this.component == "template") {
      this.deleteById(this.templateService);
    }
    if (this.component == "timeFrame") {
      this.deleteById(this.timeFrameService);
    }
    if (this.component == "brand") {
      this.deleteById(this.brandService);
    }
    if (this.component == "promocode") {
      this.deleteById(this.promoCodeService);
    }
    if (this.component == "permission") {
      this.deleteById(this.permissionService);
    }
    if (this.component == "automaticDriverAssign") {
      this.deleteById(this.autoMaticDriverAssignService);
    }
    if (this.component == "businessOwner") {
      this.deleteById(this.businessOwnerService);
    }
    if (this.component == "complaint") {
      this.deleteById(this.complaintService);
    }
    if (this.component == "model") {
      this.deleteById(this.modelService);
    }
    if (this.component == "reason") {
      this.deleteById(this.reasonService);
    }
    if (this.component == "badge") {
      this.deleteById(this.badgeService);
    }
    if (this.component == "state") {
      this.deleteById(this.stateService);
    }
    if (this.component == "ammenities") {
      this.deleteById(this.ammenitiesService);
    }
    if (this.component == "trim") {
      this.deleteById(this.trimService);
    }
    if (this.component == "account-type") {
      this.deleteById(this.accountTypeService);
    }
    if (this.component == "emailTemplate") {
      this.deleteById(this.emailTemplateService);
    }
    if (this.component == "notificationTemplate") {
      this.deleteById(this.notificationTemplateService);
    }
    if (this.component == "smsTemplate") {
      this.deleteById(this.smsTemplateService);
    }
  }

  //For datatable reload
  refreshTable() {
    const tableId: any = $("#kt_datatable");
    const table = tableId.DataTable();
    table.ajax.reload();
  }

  //For update status service
  updateStatusService(status, serviceName) {
    let data = {
      [status]:
        this.status && this.status != undefined && this.status == "ACTIVE"
          ? "INACTIVE"
          : "ACTIVE",
    };
    Helpers.setLoading(true);
    serviceName.updateStatus(this.id, data).subscribe((data) => {
      if (data["code"] == 200) {
        Helpers.setLoading(false);
        this.refreshTable();
        this.toastr.success(data["message"]);
        this.localStorageService.setBehaviorClick({});
      } else {
        Helpers.setLoading(false);
      }
    });
  }

  //For delete by id
  deleteById(serviceName) {
    Helpers.setLoading(true);
    serviceName.deleteById(this.id).subscribe((data) => {
      if (data["code"] == 200) {
        Helpers.setLoading(false);
        this.refreshTable();
        this.toastr.success(data["message"]);
        this.localStorageService.setBehaviorClick({});
      } else {
        Helpers.setLoading(false);
        this.toastr.success(data["message"]);
      }
    });
  }
}
