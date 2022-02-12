// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


 export const apiUrl = "http://localhost:15001";
// webcluesStaging 
// export const apiUrl = "http://13.233.92.186:15001";

// India Dev Server
// export const apiUrl = "http://15.207.215.121:15001";

  
// Client USA server
// export const apiUrl = "http://34.199.74.249:15001";


export const environment = {
    production: false,
    isMockEnabled: true, // You have to switch this, when your real back-end is done
    authTokenKey: 'authce9d77b308c149d5992a80073637e4d5',
    placeHolderImage: 'http://res.cloudinary.com/dlhkpit1h/image/upload/v1569584744/ukbck5dsrgmedia7ggkz.png',
    webDefaultLang: "EN",
    webDefaultCountry: "5f1ee155840015314c093917",
    profileDefaultImage: "https://ridealott-storage.s3.ap-south-1.amazonaws.com/logos/profile_default%402x.png",
    light_logo: "https://ridealott-storage.s3.ap-south-1.amazonaws.com/logos/logo_white%403x.png",
    site_logo: "https://ridealott-storage.s3.ap-south-1.amazonaws.com/logos/logo_dark%403x.png",
    //live

    apiEndpointMS1: `${apiUrl}/api/admin`,
    apiEndpointMS1Common: `${apiUrl}/api`,
    apiEndpointMS1User: `${apiUrl}/api/user`,
    apiEndpointMS2: `${apiUrl}/api/admin`,
    // mapAPIKey: `AIzaSyDXo5dzSxNmZtDLhUwDPYuvT5A9Ot3q7Y0`
    mapAPIKey: `AIzaSyD2N_Qt-urbFbg0qN1z7V-Mt2JYz6Y4VgE`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
