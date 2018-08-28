// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBvCFKEGgNH4wFtGGtPNVhHyvc2vgnWHY4",
    authDomain: "stadtfest-dietikon.firebaseapp.com",
    databaseURL: "https://stadtfest-dietikon.firebaseio.com",
    projectId: "stadtfest-dietikon",
    storageBucket: "stadtfest-dietikon.appspot.com",
    messagingSenderId: "827152846394"
  }
};
