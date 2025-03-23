// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
  //   serverEndpoint:'http://107.21.74.202:5000/api/',
  //   serverEndpoint:'http://13.48.43.222:5000/api/',
  // serverEndpoint:'https://tsrg-server.vercel.app/api/',
  serverEndpoint:'http://localhost:3000/api/',
  api:'http://localhost:3000',
    razorpayKey:'rzp_test_7uz0fpp603h0XN',
    googleClientId:'737202747252-88hienbaqmlmkn1k7qdmeee4mvn9a3j7.apps.googleusercontent.com',
    firebaseConfig: {
      apiKey: "AIzaSyAbmSnG3jAQTV56p9J3G7WZum2RwcP_Pu4",
      authDomain: "the-shree-ram-group.firebaseapp.com",
      projectId: "the-shree-ram-group",
      storageBucket: "the-shree-ram-group.firebasestorage.app",
      messagingSenderId: "744843267880",
      appId: "1:744843267880:web:c55e7a82c7371b54d8ca1d",
      measurementId: "G-5255PKSJ0Q"
    }
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.