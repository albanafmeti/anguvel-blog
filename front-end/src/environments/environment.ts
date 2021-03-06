// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  domainUrl: 'http://localhost:4200/',
  appUrl: 'http://localhost:8000/',
  apiUrl: 'http://localhost:8000/v1/',
  client_id: '3',
  client_secret: 'your-passport-app-secret',
  fb_app_id: 'your-app-id'
};
