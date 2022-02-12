import * as Helper from "../../helper/page.title"


export class MenuConfig {
  public defaults: any = {
    // header: {
    //   self: {},
    //   items: [
    //     {
    //       title: 'Dashboard',
    //       root: true,
    //       alignment: 'left',
    //       page: '/dashboard',

    //     },
    //     {
    //       title: 'Master',
    //       root: true,
    //       alignment: 'left',
    //       toggle: 'click',

    //       submenu: [

    //       ]
    //     },

    //   ]
    // },
    aside: {
      self: {},
      items: [
        {
          title: 'Dashboard',
          root: true,
          icon: 'flaticon2-architecture-and-city',
          page: '/dashboard',
          bullet: 'dot',
        },
        {
          title: 'Master',
          root: true,
          bullet: 'dot',
          icon: 'flaticon-layer',
          permission: Helper.PERMISSIONS.MAIN_MENU.MASTER,
          submenu: [
            {
              title: 'Help Management',
              root: true,
              bullet: 'dot',
              // icon: 'flaticon-layer',
              permission: Helper.PERMISSIONS.MAIN_MENU.MASTER,
              submenu: [
                {
                  title: 'Help Topic',
                  bullet: 'dot',
                  page: '/help-topic',
                  permission: Helper.PERMISSIONS.HELP_TOPIC.READ,

                },
                {
                  title: 'Help Content',
                  bullet: 'dot',
                  page: '/help',
                  permission: Helper.PERMISSIONS.HELP.READ,

                },
              ]
            },
            {
              title: 'Fees Management',
              root: true,
              bullet: 'dot',
              // icon: 'flaticon-layer',
              permission: Helper.PERMISSIONS.MAIN_MENU.MASTER,
              submenu: [
                {
                  title: "Reason",
                  bullet: "dot",
                  page: "/reason",
                  permission: Helper.PERMISSIONS.REASON.READ,
                },
              ]
            },
            {
              title: 'Area Management',
              root: true,
              bullet: 'dot',
              // icon: 'flaticon-layer',
              permission: Helper.PERMISSIONS.MAIN_MENU.MASTER,
              submenu: [
                {
                  title: 'Country Master',
                  bullet: 'dot',
                  page: '/country',
                  permission: Helper.PERMISSIONS.COUNTRY.READ,
                },
                {
                  title: 'City Master',
                  bullet: 'dot',
                  page: '/city',
                  permission: Helper.PERMISSIONS.CITY.READ,
                },
                {
                  title: "State Master",
                  bullet: "dot",
                  page: "/state",
                  permission: Helper.PERMISSIONS.STATE.READ,
                },
              ]
            },
            {
              title: 'Service Management',
              root: true,
              bullet: 'dot',
              // icon: 'flaticon-layer',
              permission: Helper.PERMISSIONS.MAIN_MENU.MASTER,
              submenu: [
                {
                  title: 'Service Type Master',
                  bullet: 'dot',
                  page: '/service-type',
                  permission: Helper.PERMISSIONS.SERVICE_TYPE.READ,

                },
                {
                  title: 'Service Operator Master',
                  bullet: 'dot',
                  page: '/service-operator',
                  permission: Helper.PERMISSIONS.SERVICE_OPERATOR.READ,

                },
              ]
            },
            {
              title: 'Car Management',
              root: true,
              bullet: 'dot',
              // icon: 'flaticon-layer',
              permission: Helper.PERMISSIONS.MAIN_MENU.MASTER,
              submenu: [
                {
                  title: 'Brand Master',
                  bullet: 'dot',
                  page: '/brand',
                  permission: Helper.PERMISSIONS.BRAND.READ,
                },
                {
                  title: "Model Master",
                  bullet: "dot",
                  page: "/model",
                  permission: Helper.PERMISSIONS.MODELS.READ,
                },
                {
                  title: "Amenities Management",
                  bullet: "dot",
                  page: "/ammenities",
                  permission: Helper.PERMISSIONS.AMMENITIES.READ,
                },
                {
                  title: "Trim Management",
                  bullet: "dot",
                  page: "/trim",
                  permission: Helper.PERMISSIONS.TRIM.READ,
                },
              ]
            },
            {
              title: 'Time Frame Management',
              bullet: 'dot',
              page: '/time-frame',
              permission: Helper.PERMISSIONS.TIME_FRAME.READ,

            },
            {
              title: 'Fare Calculation Management',
              bullet: 'dot',
              page: '/fare-calculation',
              permission: Helper.PERMISSIONS.FARE_CALCULATION.READ,

            },
            {
              title: 'High Demand Area Management',
              bullet: 'dot',
              page: '/highDemand-area',
              permission: Helper.PERMISSIONS.HIGHDEMAND_AREA.READ,

            },
            // {
            //   title: 'Promocode Management',
            //   bullet: 'dot',
            //   page: '/promocode',
            //   permission: Helper.PERMISSIONS.PROMOCODE.READ,

            // },
            {
              title: "Badge Management",
              bullet: "dot",
              page: "/badge",
              permission: Helper.PERMISSIONS.BADGE.READ,
            },
            {
              title: "Account Type Management",
              bullet: "dot",
              page: "/account-type",
              permission: Helper.PERMISSIONS.ACCOUNT_TYPE.READ,
            },
          ]
        },
        {
          title: 'Content',
          root: true,
          bullet: 'dot',
          icon: 'la la-support',
          permission: Helper.PERMISSIONS.MAIN_MENU.CONTENT,
          submenu: [
            {
              title: 'CMS Management',
              bullet: 'dot',
              page: '/cms-management',
              // permission:Helper.PERMISSIONS.CMS.READ,
            },
            {
              title: 'Contact Management',
              bullet: 'dot',
              page: '/contact-us-management',
              permission: Helper.PERMISSIONS.CONTACT.READ,
            },
            {
              title: 'Automatic Driver Assign',
              bullet: 'dot',
              page: '/automatic-driver-assign',
              // permission: Helper.PERMISSIONS.AUTOMATIC_DRIVER_ASSIGN.READ,
            },
            {
              title: 'Complaint Management',
              bullet: 'dot',
              page: '/complaint',
              permission: Helper.PERMISSIONS.COMPLAINT.READ,
            },
            {
              title: 'Ride Rating Management',
              bullet: 'dot',
              page: '/ride-rating-management',
              // permission: Helper.PERMISSIONS.RIDE_RATING.READ,
            },
            {
              title: "Ride Request Management",
              bullet: "dot",
              page: "/ride-request",
              permission: Helper.PERMISSIONS.RIDE_REQUEST.READ,
            },
          ]
        },

        {
          title: 'Site User',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-user-outline-symbol',
          permission: Helper.PERMISSIONS.MAIN_MENU.SITE_USER,
          submenu: [
            {
              title: 'Admin Management',
              bullet: 'dot',
              page: '/admin-management',
              permission: Helper.PERMISSIONS.ADMIN.READ,

            },
            {
              title: 'Operator Management',
              bullet: 'dot',
              page: '/operator-management',
              permission: Helper.PERMISSIONS.OPERATOR.READ,

            },
            {
              title: 'Rider Management',
              bullet: 'dot',
              page: '/rider-management',
              permission: Helper.PERMISSIONS.RIDER.READ,

            },
            {
              title: 'Driver Management',
              bullet: 'dot',
              page: '/driver-management',
              permission: Helper.PERMISSIONS.DRIVER.READ,

            },
            {
              title: 'Business Owner Management',
              bullet: 'dot',
              page: '/business-owner-management',
              permission: Helper.PERMISSIONS.BUSINESS_OWNER.READ,

            },
          ]
        },
        {
          title: 'Settings',
          root: true,
          bullet: 'dot',
          icon: ' flaticon-cogwheel-1',
          permission: Helper.PERMISSIONS.MAIN_MENU.SETTINGS,
          submenu: [
            {
              title: 'Roles Management',
              bullet: 'dot',
              page: '/roles',
              permission: Helper.PERMISSIONS.ROLE.READ,

            },
            {
              title: 'Permission Management',
              bullet: 'dot',
              page: '/permission',
              permission: Helper.PERMISSIONS.PERMISSION.READ,

            },
            // {
            //   title: 'Template Management',
            //   bullet: 'dot',
            //   page: '/template',
            //   permission: Helper.PERMISSIONS.TEMPLATE.READ,

            // }
            {
              title: 'Templates',
              root: true,
              bullet: 'dot',
              permission: Helper.PERMISSIONS.MAIN_MENU.SETTINGS,
              submenu: [{
                title: 'Email Template',
                bullet: 'dot',
                page: '/email-template',
                permission: Helper.PERMISSIONS.EMAIL_TEMPLATE.READ,

              }, {
                title: 'Notification Template',
                bullet: 'dot',
                page: '/notification-template',
                permission: Helper.PERMISSIONS.NOTIFICATION_TEMPLATE.READ,

              }, {
                title: 'SMS Template',
                bullet: 'dot',
                page: '/sms-template',
                permission: Helper.PERMISSIONS.SMS_TEMPLATE.READ,

              }]
            }
          ]
        },

      ]
    },
  };

  public get configs(): any {
    return this.defaults;
  }
}
