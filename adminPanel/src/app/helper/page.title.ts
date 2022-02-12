export const APPNAME = "RideALott{ery}"
export const titles = {
    login: `${APPNAME} | Login`,
    adminDashboard: `${APPNAME} | Dashboard`,
    adminManagement: `${APPNAME} | Admin Management`,
    contactUs: `${APPNAME} | Contact Management `,
    cmsManagement: `${APPNAME} | CMS Management`,
    countryManagement: `${APPNAME} | Country Management`,
    serviceTypeManagement: `${APPNAME} | Service Type Management`,
    cityManagement: `${APPNAME} | City Management`,
    profileManage: `${APPNAME} | Profile`,
    templateManagement: `${APPNAME} | Template Management`,
    roleManagement: `${APPNAME} | Role Management`,
    operatorManagement: `${APPNAME} | Operator Management`,
    driverManagement: `${APPNAME} | Driver Management`,
    riderManagement: `${APPNAME} | Rider Management`,
    serviceOperatorManagement: `${APPNAME} | Service Operator Management`,
    helpTopicManagement: `${APPNAME} | Help Topic Management`,
    helpManagement: `${APPNAME} | Help Management`,
    timeFrameManagement: `${APPNAME} | Help Management`,
    fareCalculationManagement: `${APPNAME} | Fare Calculation Management`,
    highDemandAreaManagement: `${APPNAME} | High Demand Area Management`,
    promocodeManagement: `${APPNAME} | Promocode Management`,
    brandManagement: `${APPNAME} | Brand Management`,
    permissionManagement: `${APPNAME} | Permission Management`,
    automaticDriverAssign: `${APPNAME} | Automatic Driver Assign Management`,
    modelManagement: `${APPNAME} | Model Management`,
    complaintManagement: `${APPNAME} | Complaint Management`,
    reasonManagement: `${APPNAME} | Reason Management`,
    badgeManagement: `${APPNAME} | Badge Management`,
    stateManagement: `${APPNAME} | State Management`,
    ammenitiesManagement: `${APPNAME} | Ammenities Management`,
    trimManagement: `${APPNAME} | Trim Management`,
    accountTypeManagement: `${APPNAME} | Account Type Management`,
    emailTemplateManagement: `${APPNAME} | Email Template Management`,
    notificationTemplateManagement: `${APPNAME} | Notification Template Management`,
    smsTemplateManagement: `${APPNAME} | SMS Template Management`,
    rideRatingManagement: `${APPNAME} | Ride Rating Management`,
    rideRequestManagement: `${APPNAME} | Ride Request Management`
}

export const subHeader = {
    DASHBOARD: 'Dashboard',
    CMS: 'CMS Management',
    COUNTRY: 'Country Management',
    SERVICETYPE: 'Service Type Management',
    CITY: 'City Management',
    CONTACT: ' Contact Us Management',
    ADMIN: 'Admin Management',
    PROFILE: 'My Profile',
    ROLE: "Role Management",
    TEMPLATE: "Template Management",
    OPERATOR: "Operator Management",
    DRIVER: "Driver Management",
    RIDER: "Rider Management",
    SERVICEOPERATOR: 'Service Type Management',
    HELPTOPIC: 'Help Topic Management',
    HELP: 'Help Management',
    TIMEFRAME: 'Time Frame Management',
    FARECALCULATION: 'Fare Calculation Management',
    HIGHDEMANDAREA: 'High Demand Area Management',
    PROMOCODE: 'Promocode Management',
    BRAND: 'Brand Management',
    PERMISSION: 'Permission Manangement',
    AUTOMATIC_DRIVER_ASSIGN: 'Automatic Driver assign',
    MODEL: 'Model Management',
    COMPLAINT: 'Complaint Management',
    REASON: 'Reason Management',
    BADGE: 'Badge Management',
    STATE: 'State Management',
    AMMENITIES: 'Ammenities Management',
    TRIM: 'Trim Management',
    ACCOUNT_TYPE: 'Account Type Management',
    EMAIL_TEMPLATE: 'Email Template Management',
    NOTIFICATION_TEMPLATE: 'Notification Template Management',
    SMS_TEMPLATE: 'SMS Template Management',
    RIDE_RATING: 'Ride Rating Management',
    RIDE_REQUEST: 'Ride Request Management'
}

export const DEFAULT_IMAGES = {
    ADD_PHOTO: '../../../../../assets/media/newMedia/add.png'
}

export const PERMISSIONS = {
    ROLE: {
        READ: 'canReadRoleData',
        CREATE: 'canCreateRoleData',
        DELETE: 'canDeleteRoleData',
        EDIT: 'canEditRoleData'
    },
    USER: {
        READ: 'canReadUserData',
        CREATE: 'canCreateUserData',
        DELETE: 'canDeleteUserData',
        EDIT: 'canEditUserData'
    },
    ADMIN: {
        READ: 'canReadAdminData',
        CREATE: 'canCreateAdminData',
        DELETE: 'canDeleteAdminData',
        EDIT: 'canEditAdminData'
    },
    CMS: {
        READ: 'canReadCmsData',
        CREATE: 'canCreateCmsData',
        DELETE: 'canDeleteCmsData',
        EDIT: 'canEditCmsData'
    },
    CONTACT: {
        READ: 'canReadContactData',
        CREATE: 'canCreateContactData',
        DELETE: 'canDeleteContactData',
        EDIT: 'canEditContactData'
    },
    COUNTRY: {
        READ: 'canReadCountryData',
        CREATE: 'canCreateCountryData',
        DELETE: 'canDeleteCountryData',
        EDIT: 'canEditCountryData'
    },
    CITY: {
        READ: 'canReadCityData',
        CREATE: 'canCreateCityData',
        DELETE: 'canDeleteCityData',
        EDIT: 'canEditCityData'
    },
    SERVICE_TYPE: {
        READ: 'canReadServiceTypeData',
        CREATE: 'canCreateServiceTypeData',
        DELETE: 'canDeleteServiceTypeData',
        EDIT: 'canEditServiceTypeData'
    },
    TEMPLATE: {
        READ: 'canReadTemplateData',
        CREATE: 'canCreateTemplateData',
        DELETE: 'canDeleteTemplateData',
        EDIT: 'canEditTemplateData'
    },
    OPERATOR: {
        READ: 'canReadOperatorData',
        CREATE: 'canCreateOperatorData',
        DELETE: 'canDeleteOperatorData',
        EDIT: 'canEditOperatorData'
    },

    DRIVER: {
        READ: 'canReadDriverData',
        CREATE: 'canCreateDriverData',
        DELETE: 'canDeleteDriverData',
        EDIT: 'canEditDriverData'
    },
    RIDER: {
        READ: 'canReadRiderData',
        CREATE: 'canCreateRiderData',
        DELETE: 'canDeleteRiderData',
        EDIT: 'canEditRiderData'
    },
    MAIN_MENU: {
        MASTER: 'canReadMasterMenuData',
        SITE_USER: "canReadSiteUserMenuData",
        CONTENT: "canReadContentMenuData",
        REPORTS: "canReadReportsMenuData",
        SETTINGS: "canReadSettingsMenuData"
    },
    SERVICE_OPERATOR: {
        READ: 'canReadServiceOperatorData',
        CREATE: 'canCreateServiceOperatorData',
        DELETE: 'canDeleteServiceOperatorData',
        EDIT: 'canEditServiceOperatorData'
    },
    HELP_TOPIC: {
        READ: 'canReadHelpTopicData',
        CREATE: 'canCreateHelpTopicData',
        DELETE: 'canDeleteHelpTopicData',
        EDIT: 'canEditHelpTopicData'
    },
    HELP: {
        READ: 'canReadHelpData',
        CREATE: 'canCreateHelpData',
        DELETE: 'canDeleteHelpData',
        EDIT: 'canEditHelpData'
    },
    TIME_FRAME: {
        READ: 'canReadTimeFrameData',
        CREATE: 'canCreateTimeFrameData',
        DELETE: 'canDeleteTimeFrameData',
        EDIT: 'canEditTimeFrameData'
    },
    FARE_CALCULATION: {
        READ: 'canReadFareCalculationData',
        CREATE: 'canCreateFareCalculationData',
        DELETE: 'canDeleteFareCalculationData',
        EDIT: 'canEditFareCalculationData'
    },
    PROMOCODE: {
        READ: 'canReadPromocodeData',
        CREATE: 'canCreatePromocodeData',
        DELETE: 'canDeletePromocodeData',
        EDIT: 'canEditPromocodeData'
    },
    BRAND: {
        READ: 'canReadBrandData',
        CREATE: 'canCreateBrandData',
        DELETE: 'canDeleteBrandData',
        EDIT: 'canEditBrandData'
    },
    PERMISSION: {
        READ: 'canReadPermissionData',
        CREATE: 'canCreatePermissionData',
        DELETE: 'canDeletePermissionData',
        EDIT: 'canEditPermissionData'
    },
    AUTOMATIC_DRIVER_ASSIGN: {
        READ: 'canReadAutomaticDriverAssignData',
        CREATE: 'canCreateAutomaticDriverAssignData',
        DELETE: 'canDeleteAutomaticDriverAssignData',
        EDIT: 'canEditAutomaticDriverAssignData'
    },
    BUSINESS_OWNER: {
        READ: 'canReadBusinessOwnerData',
        CREATE: 'canCreateBusinessOwnerData',
        DELETE: 'canDeleteBusinessOwnerData',
        EDIT: 'canEditBusinessOwnerData'
    },
    MODELS: {
        READ: 'canReadModelData',
        CREATE: 'canCreateModelData',
        DELETE: 'canDeleteModelData',
        EDIT: 'canEditModelData'
    },
    COMPLAINT: {
        READ: 'canReadComplaintData',
        CREATE: 'canCreateComplaintData',
        DELETE: 'canDeleteComplaintData',
        EDIT: 'canEditComplaintData'
    },
    REASON: {
        READ: 'canReadReasonData',
        CREATE: 'canCreateReasonData',
        DELETE: 'canDeleteReasonData',
        EDIT: 'canEditReasonData'
    },
    PROFILE: {
        READ: 'canReadProfileData',
        CREATE: 'canCreateProfileData',
        DELETE: 'canDeleteProfileData',
        EDIT: 'canEditProfileData'
    },
    HIGHDEMAND_AREA: {
        READ: 'canReadHighDemandAreaData',
        CREATE: 'canCreateHighDemandAreaData',
        DELETE: 'canDeleteHighDemandAreaData',
        EDIT: 'canEditHighDemandAreaData'
    },
    BADGE: {
        READ: 'canReadBadgeData',
        CREATE: 'canCreateBadgeData',
        DELETE: 'canDeleteBadgeData',
        EDIT: 'canEditBadgeData'
    },
    STATE: {
        READ: 'canReadStateData',
        CREATE: 'canCreateStateData',
        DELETE: 'canDeleteStateData',
        EDIT: 'canEditStateData'
    },
    AMMENITIES: {
        READ: 'canReadAmmenitiesData',
        CREATE: 'canCreateAmmenitiesData',
        DELETE: 'canDeleteAmmenitiesData',
        EDIT: 'canEditAmmenitiesData'
    },
    TRIM: {
        READ: 'canReadTrimData',
        CREATE: 'canCreateTrimData',
        DELETE: 'canDeleteTrimData',
        EDIT: 'canEditTrimData'
    },
    ACCOUNT_TYPE: {
        READ: 'canReadAccountTypeData',
        CREATE: 'canCreateAccountTypeData',
        DELETE: 'canDeleteAccountTypeData',
        EDIT: 'canEditAccountTypeData'
    },
    EMAIL_TEMPLATE: {
        READ: 'canReadEmailTemplateData',
        CREATE: 'canCreateEmailTemplateData',
        DELETE: 'canDeleteEmailTemplateData',
        EDIT: 'canEditEmailTemplateData'
    },
    NOTIFICATION_TEMPLATE: {
        READ: 'canReadNotificationTemplateData',
        CREATE: 'canCreateNotificationTemplateData',
        DELETE: 'canDeleteNotificationTemplateData',
        EDIT: 'canEditNotificationTemplateData'
    },
    SMS_TEMPLATE: {
        READ: 'canReadSmsTemplateData',
        CREATE: 'canCreateSmsTemplateData',
        DELETE: 'canDeleteSmsTemplateData',
        EDIT: 'canEditSmsTemplateData'
    },
    RIDE_RATING: {
        READ: 'canRideRatingData',
        CREATE: 'canCreateRideRatingData',
        DELETE: 'canDeleteRideRatingData',
        EDIT: 'canEditRideRatingData'
    },
    RIDE_REQUEST:{
        READ: 'canReadRideRequestData',
        CREATE: 'canCreateRideRequestData',
        DELETE: 'canDeleteRideRequestData',
        EDIT: 'canEditRideRequestData'
    }

}
