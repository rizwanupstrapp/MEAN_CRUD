import { environment } from './environments/environment';

export class ApiURIs {
    public static readonly apiURLMS1: any = environment.apiEndpointMS1;
    public static readonly apiEndpointMS1User: any = environment.apiEndpointMS1User;
    public static readonly apiEndpointMS1Common: any = environment.apiEndpointMS1Common;

    // login & Password reset
    public static readonly login: string = ApiURIs.apiURLMS1 + '/login';
    public static readonly sqAdmin: string = `${ApiURIs.apiURLMS1}/isAdmin`;
    public static readonly forgotPassword: string = ApiURIs.apiURLMS1 + '/forgotPassword';
    public static readonly resetPassword: string = ApiURIs.apiURLMS1 + '/resetPassword';
    public static readonly authToken: string = ApiURIs.apiURLMS1 + '/authToken';

    // Admin
    public static readonly addAdmin: string = ApiURIs.apiURLMS1 + '/add';
    public static readonly getAdminById: string = ApiURIs.apiURLMS1 + '/get';
    public static readonly updateAdmin: string = ApiURIs.apiURLMS1 + '/update';
    public static readonly listAdmin: string = ApiURIs.apiURLMS1 + '/list';
    public static readonly deleteUserById: string = ApiURIs.apiURLMS1 + '/delete';
    public static readonly updateStatus: string = ApiURIs.apiURLMS1 + '/changeStatus';

    // Role 
    public static readonly addRole: string = ApiURIs.apiURLMS1 + '/roles/addDetails';
    public static readonly getRoleById: string = ApiURIs.apiURLMS1 + '/roles/fetchDetails';
    public static readonly updateRole: string = ApiURIs.apiURLMS1 + '/roles/updateDetails';
    public static readonly listRole: string = ApiURIs.apiURLMS1 + '/roles/getList';
    public static readonly getRolesListArray: string = ApiURIs.apiURLMS1 + '/roles/getRolesList';
    public static readonly appUserRoleListArray: string = ApiURIs.apiURLMS1 + '/roles/appUserRoleList';
    public static readonly getAllRolesList: string = ApiURIs.apiURLMS1 + '/roles/getAllRolesList';
    public static readonly deleteRoleById: string = ApiURIs.apiURLMS1 + '/roles/deleteDetails';
    public static readonly updateRoleStatus: string = ApiURIs.apiURLMS1 + '/roles/changeStatus';

    // Permission
    public static readonly getRoleWisePermissions = ApiURIs.apiURLMS1 + '/roles/getRoleWisePermissions';
    public static readonly getRoleWisePermissionMatrix = ApiURIs.apiURLMS1 + '/permission/getPermissionMatrix';
    public static readonly updatePermissionMatrix = ApiURIs.apiURLMS1 + '/permission/updatePermissionMatrix';
    public static readonly getPermissions: string = ApiURIs.apiURLMS1 + '/permission/getPermissions';


    public static readonly uploadData: string = ApiURIs.apiEndpointMS1User + '/uploadMedia';
    // Contact Us   
    public static readonly getContactUsById: string = ApiURIs.apiURLMS1 + '/contactUs/fetchDetails';
    public static readonly listContacts: string = ApiURIs.apiURLMS1 + '/contactUs/getList';
    public static readonly sendInquiry: string = ApiURIs.apiURLMS1 + '/contactUs/sendInquiry';

    // City
    public static readonly listCMS: string = ApiURIs.apiURLMS1 + '/cms/getList';
    public static readonly addCMS: string = ApiURIs.apiURLMS1 + '/cms/addDetails';
    public static readonly getCMSById: string = ApiURIs.apiURLMS1 + '/cms/fetchDetails';
    public static readonly updateCMS: string = ApiURIs.apiURLMS1 + '/cms/updateDetails';
    public static readonly deleteCMSById: string = ApiURIs.apiURLMS1 + '/cms/deleteDetails';
    public static readonly updateCMSStatus: string = ApiURIs.apiURLMS1 + '/cms/changeStatus';

    // Country
    public static readonly listCountry: string = ApiURIs.apiURLMS1 + '/country/getList';
    public static readonly getCountriesArray: string = ApiURIs.apiURLMS1 + '/country/getCountryList';
    public static readonly addCountry: string = ApiURIs.apiURLMS1 + '/country/addDetails';
    public static readonly getCountryById: string = ApiURIs.apiURLMS1 + '/country/fetchDetails';
    public static readonly updateCountry: string = ApiURIs.apiURLMS1 + '/country/updateDetails';
    public static readonly deleteCountryById: string = ApiURIs.apiURLMS1 + '/country/deleteDetails';
    public static readonly updateCountryStatus: string = ApiURIs.apiURLMS1 + '/country/changeStatus';
    //API for get country list with string Isd code
    public static readonly getCountryList: string = ApiURIs.apiURLMS1 + '/country/countryList';

    // 
    // Service Type
    public static readonly listServiceType: string = ApiURIs.apiURLMS1 + '/serviceType/getList';
    public static readonly addServiceType: string = ApiURIs.apiURLMS1 + '/serviceType/addDetails';
    public static readonly getServiceTypeById: string = ApiURIs.apiURLMS1 + '/serviceType/fetchDetails';
    public static readonly updateServiceType: string = ApiURIs.apiURLMS1 + '/serviceType/updateDetails';
    public static readonly deleteServiceTypeById: string = ApiURIs.apiURLMS1 + '/serviceType/deleteDetails';
    public static readonly updateServiceTypeStatus: string = ApiURIs.apiURLMS1 + '/serviceType/changeStatus';

    // Service Operator
    public static readonly listServiceOperator: string = ApiURIs.apiURLMS1 + '/serviceOperator/getList';
    public static readonly addServiceOperator: string = ApiURIs.apiURLMS1 + '/serviceOperator/addDetails';
    public static readonly getServiceOperatorById: string = ApiURIs.apiURLMS1 + '/serviceOperator/fetchDetails';
    public static readonly updateServiceOperator: string = ApiURIs.apiURLMS1 + '/serviceOperator/updateDetails';
    public static readonly deleteServiceOperatorById: string = ApiURIs.apiURLMS1 + '/serviceOperator/deleteDetails';
    public static readonly updateServiceOperatorStatus: string = ApiURIs.apiURLMS1 + '/serviceOperator/changeStatus';
    public static readonly getOperatorServiceTypes: string = ApiURIs.apiURLMS1 + '/serviceOperator/getServiceTypeList';

    // City
    public static readonly listCity: string = ApiURIs.apiURLMS1 + '/city/getList';
    public static readonly addCity: string = ApiURIs.apiURLMS1 + '/city/addDetails';
    public static readonly getCityById: string = ApiURIs.apiURLMS1 + '/city/fetchDetails';
    public static readonly updateCity: string = ApiURIs.apiURLMS1 + '/city/updateDetails';
    public static readonly deleteCityById: string = ApiURIs.apiURLMS1 + '/city/deleteDetails';
    public static readonly updateCityStatus: string = ApiURIs.apiURLMS1 + '/city/changeStatus';
    public static readonly getCitiesArray: string = ApiURIs.apiURLMS1 + '/city/getCityList';
    public static readonly getCountryCitiesArray: string = ApiURIs.apiURLMS1 + '/city/getCountryCityList';
    public static readonly getCityListOperetor: string = ApiURIs.apiURLMS1 + '/city/getCityListOperetor';
    public static readonly getCityListServiceOperator: string = ApiURIs.apiURLMS1 + '/city/getCityListServiceOperator';
    public static readonly getCityListFareCalculation: string = ApiURIs.apiURLMS1 + '/city/getCityListFareCalculation';
    public static readonly getCityListAutomaticDriverAssign: string = ApiURIs.apiURLMS1 + '/city/getCityListAutomaticDriverAssign';
    public static readonly getStateCityList: string = ApiURIs.apiURLMS1 + '/city/getStateCityList';
    //API for get all timezone
    public static readonly getAllTimezone: string = ApiURIs.apiURLMS1 + '/timezone/getAllTimezone';


    // Template 
    public static readonly listTemplate: string = ApiURIs.apiURLMS1 + '/template/getList';
    public static readonly addTemplate: string = ApiURIs.apiURLMS1 + '/template/addDetails';
    public static readonly getTemplateById: string = ApiURIs.apiURLMS1 + '/template/fetchDetails';
    public static readonly updateTemplate: string = ApiURIs.apiURLMS1 + '/template/updateDetails';
    public static readonly deleteTemplateById: string = ApiURIs.apiURLMS1 + '/template/deleteDetails';
    public static readonly updateTemplateStatus: string = ApiURIs.apiURLMS1 + '/template/changeStatus';

    // Operator
    public static readonly userList: string = ApiURIs.apiURLMS1 + '/getUsersList';
    public static readonly createOperatorProfile: string = ApiURIs.apiURLMS1 + '/operator/createOperatorProfile';
    public static readonly updateOperatorProfile: string = ApiURIs.apiURLMS1 + '/operator/updateOperatorProfile';

    public static readonly getOperator: string = ApiURIs.apiURLMS1 + '/operator/getOperator';
    public static readonly updateOperator: string = ApiURIs.apiURLMS1 + '/editProfile';
    public static readonly updateBankDetail: string = ApiURIs.apiURLMS1 + '/operator/updateOperatorBankDetail';
    public static readonly getPreferenceLocList: string = ApiURIs.apiURLMS1 + '/operator/getPreferenceLocList';
    public static readonly addPreferenceLoc: string = ApiURIs.apiURLMS1 + '/operator/addPreferenceLoc';
    public static readonly updatePreferenceLoc: string = ApiURIs.apiURLMS1 + '/operator/updatePreferenceLoc';
    public static readonly removePreferenceLoc: string = ApiURIs.apiURLMS1 + '/operator/removePreferenceLoc';
    public static readonly getPreferenceLocById: string = ApiURIs.apiURLMS1 + '/operator/getPreferenceLocById';

    public static readonly updateCommissionDetail: string = ApiURIs.apiURLMS1 + '/operator/updateOperatorCommission';
    public static readonly updateInvoiceDetail: string = ApiURIs.apiURLMS1 + '/operator/updateOperatorInvoiceDetail';

    // Driver
    public static readonly createProfile: string = ApiURIs.apiURLMS1 + '/driver/createProfile';
    public static readonly updateProfile: string = ApiURIs.apiURLMS1 + '/driver/updateProfile';
    public static readonly getDriver: string = ApiURIs.apiURLMS1 + '/driver/getDriver';
    public static readonly getVehicleInfoById: string = ApiURIs.apiURLMS1 + '/driver/getVehicleInfoById';
    public static readonly updateDriverBankDetail: string = ApiURIs.apiURLMS1 + '/driver/updateBankDetail';
    public static readonly updateAddress: string = ApiURIs.apiURLMS1 + '/driver/updateAddress';
    public static readonly updateDriver: string = ApiURIs.apiURLMS1 + '/editProfile';
    public static readonly updateVehicleInfo: string = ApiURIs.apiURLMS1 + '/driver/updateVehicleInfo';
    public static readonly updateLicenceDetails: string = ApiURIs.apiURLMS1 + '/driver/updateLicense';
    public static readonly updateUserOtherDetails: string = ApiURIs.apiURLMS1 + '/driver/updateOtherDocument';
    public static readonly updateUserCitizenShip: string = ApiURIs.apiURLMS1 + '/driver/updateCitizenShip';
    public static readonly deleteVehicleInfo: string = ApiURIs.apiURLMS1 + '/driver/removeVehicleInfo';
    public static readonly getAllVehicleList: string = ApiURIs.apiURLMS1 + '/driver/getVehicleInfoList';

    // Rider
    public static readonly getRider: string = ApiURIs.apiURLMS1 + '/rider/getDetails';
    public static readonly updateRiderProfile: string = ApiURIs.apiURLMS1 + '/editProfile';
    public static readonly regeneratedAndSendPassword: string = ApiURIs.apiURLMS1 + '/regeneratedAndSendPassword';

    // Help Topic
    public static readonly listHelpTopic: string = ApiURIs.apiURLMS1 + '/helpTopic/getList';
    public static readonly addHelpTopic: string = ApiURIs.apiURLMS1 + '/helpTopic/addDetails';
    public static readonly getHelpTopicById: string = ApiURIs.apiURLMS1 + '/helpTopic/fetchDetails';
    public static readonly updateHelpTopic: string = ApiURIs.apiURLMS1 + '/helpTopic/updateDetails';
    public static readonly deleteHelpTopicById: string = ApiURIs.apiURLMS1 + '/helpTopic/deleteDetails';
    public static readonly updateHelpTopicStatus: string = ApiURIs.apiURLMS1 + '/helpTopic/changeStatus';
    public static readonly getHelpTopicsArray: string = ApiURIs.apiURLMS1 + '/helpTopic/getHelpTopicList';

    // Help 
    public static readonly listHelp: string = ApiURIs.apiURLMS1 + '/helpManagement/getList';
    public static readonly addHelp: string = ApiURIs.apiURLMS1 + '/helpManagement/addDetails';
    public static readonly getHelpById: string = ApiURIs.apiURLMS1 + '/helpManagement/fetchDetails';
    public static readonly updateHelp: string = ApiURIs.apiURLMS1 + '/helpManagement/updateDetails';
    public static readonly deleteHelpById: string = ApiURIs.apiURLMS1 + '/helpManagement/deleteDetails';
    public static readonly updateHelpStatus: string = ApiURIs.apiURLMS1 + '/helpManagement/changeStatus';

    // Time Frame
    public static readonly listTimeFrame: string = ApiURIs.apiURLMS1 + '/timeFrame/getList';
    public static readonly addTimeFrame: string = ApiURIs.apiURLMS1 + '/timeFrame/addDetails';
    public static readonly getTimeFrameById: string = ApiURIs.apiURLMS1 + '/timeFrame/fetchDetails';
    public static readonly updateTimeFrame: string = ApiURIs.apiURLMS1 + '/timeFrame/updateDetails';
    public static readonly deleteTimeFrameById: string = ApiURIs.apiURLMS1 + '/timeFrame/deleteDetails';
    public static readonly updateTimeFrameStatus: string = ApiURIs.apiURLMS1 + '/timeFrame/changeStatus';

    //  Fare Calculation
    public static readonly listFareCalculation: string = ApiURIs.apiURLMS1 + '/fareCalculation/getList';
    public static readonly addFareCalculation: string = ApiURIs.apiURLMS1 + '/fareCalculation/addDetails';
    public static readonly getFareCalculationById: string = ApiURIs.apiURLMS1 + '/fareCalculation/fetchDetails';
    public static readonly updateFareCalculation: string = ApiURIs.apiURLMS1 + '/fareCalculation/updateDetails';
    public static readonly deleteFareCalculationById: string = ApiURIs.apiURLMS1 + '/fareCalculation/deleteDetails';
    public static readonly updateFareCalculationStatus: string = ApiURIs.apiURLMS1 + '/fareCalculation/changeStatus';

    // Promocode
    public static readonly listPromocode: string = ApiURIs.apiURLMS1 + '/promocode/getList';
    public static readonly addPromocode: string = ApiURIs.apiURLMS1 + '/promocode/addDetails';
    public static readonly getPromocodeById: string = ApiURIs.apiURLMS1 + '/promocode/fetchDetails';
    public static readonly updatePromocode: string = ApiURIs.apiURLMS1 + '/promocode/updateDetails';
    public static readonly deletePromocodeById: string = ApiURIs.apiURLMS1 + '/promocode/deleteDetails';
    public static readonly updatePromocodeStatus: string = ApiURIs.apiURLMS1 + '/promocode/changeStatus';

    public static readonly getAllOperators: string = ApiURIs.apiURLMS1 + '/operator/getOperatorList';
    public static readonly getOperatorCityWise: string = ApiURIs.apiURLMS1 + '/operator/getOperatorCityWise';
    public static readonly getAllServiceTypes: string = ApiURIs.apiURLMS1 + '/serviceType/getServiceTypeList';
    
    public static readonly getAllBrands: string = ApiURIs.apiURLMS1 + '/brand/getAllBrands';


    // Common API
    public static readonly getFranchiseArray: string = ApiURIs.apiURLMS1 + '/operator/getOperatorList';
    public static readonly getTimeFramesArray: string = ApiURIs.apiURLMS1 + '/timeFrame/getTimeFrameList';

    // Brand
    public static readonly listBrand: string = ApiURIs.apiURLMS1 + '/brand/getList';
    public static readonly addBrand: string = ApiURIs.apiURLMS1 + '/brand/addDetails';
    public static readonly getBrandById: string = ApiURIs.apiURLMS1 + '/brand/fetchDetails';
    public static readonly updateBrand: string = ApiURIs.apiURLMS1 + '/brand/updateDetails';
    public static readonly deleteBrandById: string = ApiURIs.apiURLMS1 + '/brand/deleteDetails';
    public static readonly updateBrandStatus: string = ApiURIs.apiURLMS1 + '/brand/changeStatus';

    // permission
    public static readonly listPermission: string = ApiURIs.apiURLMS1 + '/permission/getList';
    public static readonly addPermission: string = ApiURIs.apiURLMS1 + '/permission/addDetails';
    public static readonly getPermissionById: string = ApiURIs.apiURLMS1 + '/permission/fetchDetails';
    public static readonly updatePermission: string = ApiURIs.apiURLMS1 + '/permission/updateDetails';
    public static readonly deletePermissionById: string = ApiURIs.apiURLMS1 + '/permission/deleteDetails';
    public static readonly updatePermissionStatus: string = ApiURIs.apiURLMS1 + '/permission/changeStatus';

    //AutomaticDriverAssgn
    public static readonly listAutomaticDriverAssign: string = ApiURIs.apiURLMS1 + '/automaticDriverAssign/getList';
    public static readonly addAutomaticDriverAssign: string = ApiURIs.apiURLMS1 + '/automaticDriverAssign/addDetails';
    public static readonly getAutomaticDriverAssignById: string = ApiURIs.apiURLMS1 + '/automaticDriverAssign/fetchDetails';
    public static readonly updateAutomaticDriverAssign: string = ApiURIs.apiURLMS1 + '/automaticDriverAssign/updateDetails';
    public static readonly deleteAutomaticDriverAssign: string = ApiURIs.apiURLMS1 + '/automaticDriverAssign/deleteDetails';
    public static readonly updateAutomaticDriverAssignstatus: string = ApiURIs.apiURLMS1 + '/automaticDriverAssign/changeStatus';

    //Model
    public static readonly listModel: string = ApiURIs.apiURLMS1 + '/model/getList';
    public static readonly addModel: string = ApiURIs.apiURLMS1 + '/model/addDetails';
    public static readonly getModelById: string = ApiURIs.apiURLMS1 + '/model/fetchDetails';
    public static readonly updateModel: string = ApiURIs.apiURLMS1 + '/model/updateDetails';
    public static readonly deleteModel: string = ApiURIs.apiURLMS1 + '/model/deleteDetails';
    public static readonly updateModelStatus: string = ApiURIs.apiURLMS1 + '/model/changeStatus';
    public static readonly getAllBrand: string = ApiURIs.apiURLMS1 + '/model/getAllBrands';
    public static readonly getBrandModel: string = ApiURIs.apiURLMS1 + '/model/getBrandModelList';
    public static readonly getModelColor: string = ApiURIs.apiURLMS1 + '/model/getModelColorList';
    public static readonly getAllModels: string = ApiURIs.apiURLMS1 + '/model/getAllModels';
    // Complaint
    public static readonly listComplaint: string = ApiURIs.apiURLMS1 + '/complaint/getList';
    public static readonly addComplaint: string = ApiURIs.apiURLMS1 + '/complaint/addDetails';
    public static readonly getComplaintById: string = ApiURIs.apiURLMS1 + '/complaint/getDetails';
    public static readonly updateComplaint: string = ApiURIs.apiURLMS1 + '/complaint/updateDetails';
    public static readonly getAllComplaint: string = ApiURIs.apiURLMS1 + '/complaint/getAllComplain';
    public static readonly updateComplaintStatus: string = ApiURIs.apiURLMS1 + '/complaint/changeStatus';

    // Business Owner
    public static readonly getBusinessOwnerById: string = ApiURIs.apiURLMS1 + '/businessOwner/getDetails';
    public static readonly updateBusinessOwnerProfile: string = ApiURIs.apiURLMS1 + '/editProfile';

    // Reason
    public static readonly listReason: string = ApiURIs.apiURLMS1 + '/reason/getList';
    public static readonly addReason: string = ApiURIs.apiURLMS1 + '/reason/addDetails';
    public static readonly getReasonById: string = ApiURIs.apiURLMS1 + '/reason/fetchDetails';
    public static readonly updateReason: string = ApiURIs.apiURLMS1 + '/reason/updateDetails';
    public static readonly deleteReasonById: string = ApiURIs.apiURLMS1 + '/reason/deleteDetails';
    public static readonly updateReasonStatus: string = ApiURIs.apiURLMS1 + '/reason/changeStatus';

    //  High Demand Area
    public static readonly listHighDemandArea: string = ApiURIs.apiURLMS1 + '/highDemandArea/getList';
    public static readonly addHighDemandArea: string = ApiURIs.apiURLMS1 + '/highDemandArea/addDetails';
    public static readonly getHighDemandAreaById: string = ApiURIs.apiURLMS1 + '/highDemandArea/fetchDetails';
    public static readonly updateHighDemandArea: string = ApiURIs.apiURLMS1 + '/highDemandArea/updateDetails';
    public static readonly deleteHighDemandAreaById: string = ApiURIs.apiURLMS1 + '/highDemandArea/deleteDetails';
    public static readonly updateHighDemandAreaStatus: string = ApiURIs.apiURLMS1 + '/highDemandArea/changeStatus';

    //Badge
    public static readonly listBadge: string = ApiURIs.apiURLMS1 + '/badge/getList';
    public static readonly addBadge: string = ApiURIs.apiURLMS1 + '/badge/addDetails';
    public static readonly getBadgeById: string = ApiURIs.apiURLMS1 + '/badge/fetchDetails';
    public static readonly updateBadge: string = ApiURIs.apiURLMS1 + '/badge/updateDetails';
    public static readonly deleteBadgeById: string = ApiURIs.apiURLMS1 + '/badge/deleteDetails';
    public static readonly updateBadgeStatus: string = ApiURIs.apiURLMS1 + '/badge/changeStatus';

    //color
    public static readonly getAllColors: string = ApiURIs.apiURLMS1 + '/color/getAllColors';

    //State
    public static readonly listState: string = ApiURIs.apiURLMS1 + '/state/list';
    public static readonly addState: string = ApiURIs.apiURLMS1 + '/state/add';
    public static readonly getStateById: string = ApiURIs.apiURLMS1 + '/state/get';
    public static readonly updateState: string = ApiURIs.apiURLMS1 + '/state/update';
    public static readonly deleteStateById: string = ApiURIs.apiURLMS1 + '/state/delete';
    public static readonly updateStateStatus: string = ApiURIs.apiURLMS1 + '/state/changeStatus';
    public static readonly getAllDocumentType: string = ApiURIs.apiURLMS1 + '/documentType/getAllDocumentType';
    public static readonly getAllStates: string = ApiURIs.apiURLMS1 + '/state/getAllStates';

    // Amenities
    public static readonly listAmmenities: string = ApiURIs.apiURLMS1 + '/ammenities/getList';
    public static readonly addAmmenities: string = ApiURIs.apiURLMS1 + '/ammenities/addDetails';
    public static readonly getAmmenitiesById: string = ApiURIs.apiURLMS1 + '/ammenities/fetchDetails';
    public static readonly updateAmmenities: string = ApiURIs.apiURLMS1 + '/ammenities/updateDetails';
    public static readonly deleteAmmenitiesById: string = ApiURIs.apiURLMS1 + '/ammenities/deleteDetails';
    public static readonly updateAmmenitiesStatus: string = ApiURIs.apiURLMS1 + '/ammenities/changeStatus';
    public static readonly getAllAmmenities: string = ApiURIs.apiURLMS1 + '/ammenities/getAllAmmenitiesList';

    // Trim
    public static readonly listTrim: string = ApiURIs.apiURLMS1 + '/trim/getList';
    public static readonly addTrim: string = ApiURIs.apiURLMS1 + '/trim/addDetails';
    public static readonly getTrimById: string = ApiURIs.apiURLMS1 + '/trim/fetchDetails';
    public static readonly updateTrim: string = ApiURIs.apiURLMS1 + '/trim/updateDetails';
    public static readonly deleteTrimById: string = ApiURIs.apiURLMS1 + '/trim/deleteDetails';
    public static readonly updateTrimStatus: string = ApiURIs.apiURLMS1 + '/trim/changeStatus';
    public static readonly getModelTrim: string = ApiURIs.apiURLMS1 + '/trim/getTrimModelWise';
    // Account Type
    public static readonly listAccountType: string = ApiURIs.apiURLMS1 + '/accountType/getList';
    public static readonly addAccountType: string = ApiURIs.apiURLMS1 + '/accountType/addDetails';
    public static readonly getAccountTypeById: string = ApiURIs.apiURLMS1 + '/accountType/fetchDetails';
    public static readonly updateAccountType: string = ApiURIs.apiURLMS1 + '/accountType/updateDetails';
    public static readonly deleteAccountTypeById: string = ApiURIs.apiURLMS1 + '/accountType/deleteDetail';
    public static readonly updateAccountTypeStatus: string = ApiURIs.apiURLMS1 + '/accountType/changeStatus';
    public static readonly getAllAccountType: string = ApiURIs.apiURLMS1 + '/accountType/getAllAccounts';

    // email template
    public static readonly listEmailTemplate: string = ApiURIs.apiURLMS1 + '/emailTemplate/getList';
    public static readonly addEmailTemplate: string = ApiURIs.apiURLMS1 + '/emailTemplate/addDetails';
    public static readonly getEmailTemplateById: string = ApiURIs.apiURLMS1 + '/emailTemplate/fetchDetails';
    public static readonly updateEmailTemplate: string = ApiURIs.apiURLMS1 + '/emailTemplate/updateDetails';
    public static readonly deleteEmailTemplateById: string = ApiURIs.apiURLMS1 + '/emailTemplate/deleteDetails';
    public static readonly updateEmailTemplateStatus: string = ApiURIs.apiURLMS1 + '/emailTemplate/changeStatus';

    // notification template
    public static readonly listNotificationTemplate: string = ApiURIs.apiURLMS1 + '/notificationTemplate/getList';
    public static readonly addNotificationTemplate: string = ApiURIs.apiURLMS1 + '/notificationTemplate/addDetails';
    public static readonly getNotificationTemplateById: string = ApiURIs.apiURLMS1 + '/notificationTemplate/fetchDetails';
    public static readonly updateNotificationTemplate: string = ApiURIs.apiURLMS1 + '/notificationTemplate/updateDetails';
    public static readonly deleteNotificationTemplateById: string = ApiURIs.apiURLMS1 + '/notificationTemplate/deleteDetails';
    public static readonly updateNotificationTemplateStatus: string = ApiURIs.apiURLMS1 + '/notificationTemplate/changeStatus';

    // SMS template
    public static readonly listSMSTemplate: string = ApiURIs.apiURLMS1 + '/smsTemplate/getList';
    public static readonly addSMSTemplate: string = ApiURIs.apiURLMS1 + '/smsTemplate/addDetails';
    public static readonly getSMSTemplateById: string = ApiURIs.apiURLMS1 + '/smsTemplate/fetchDetails';
    public static readonly updateSMSTemplate: string = ApiURIs.apiURLMS1 + '/smsTemplate/updateDetails';
    public static readonly deleteSMSTemplateById: string = ApiURIs.apiURLMS1 + '/smsTemplate/deleteDetails';
    public static readonly updateSMSTemplateStatus: string = ApiURIs.apiURLMS1 + '/smsTemplate/changeStatus';
 
    // Ride Rating
    public static readonly listRideRating: string = ApiURIs.apiEndpointMS1Common + '/rideRating/getRatingListAdmin';
    public static readonly addRideRating: string = ApiURIs.apiEndpointMS1Common + '/rideRating/addDetails';
    public static readonly getRideRating: string = ApiURIs.apiEndpointMS1Common + '/rideRating/getRatingList';
    public static readonly getRideRatingById: string = ApiURIs.apiEndpointMS1Common + '/rideRating/getRatingById';

    //ride request
    public static readonly listRideRequest: string = ApiURIs.apiURLMS1 + '/rideRequest/getList';
    public static readonly getRideRequestById: string = ApiURIs.apiURLMS1 + '/rideRequest/fetchDetails';
    public static readonly updateRideRequest: string = ApiURIs.apiURLMS1 + '/rideRequest/updateDetails';
    public static readonly updateRideRequestStatus: string = ApiURIs.apiURLMS1 + '/rideRequest/changeStatus';
}



