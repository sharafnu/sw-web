// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAbAXMYNeOGpOc7BqJRW4AeSWpPeDuWP4c",
    authDomain: "sw-demo-610e2.firebaseapp.com",
    databaseURL: "https://sw-demo-610e2.firebaseio.com",
    projectId: "sw-demo-610e2",
    storageBucket: "sw-demo-610e2.appspot.com",
    messagingSenderId: "620042798559"
  },
  firebaseDocs: {
    user: 'workers/khgobr9uzmHPlQ7Y2kWu'
  }
};
