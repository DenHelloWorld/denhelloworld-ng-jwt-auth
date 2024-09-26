# DenhelloworldNgJwtAuth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Environment Variables

The following environment variables should be defined in a `.env` file at the root of the api directory:

- **PORT**: The port number on which the server will run (e.g., `4402`).
- **MONGO_URL**: The MongoDB connection string (e.g., `mongodb://localhost:27017/ng-17-jwt-auth`).
- **JWT_SECRET**: A secret key used to sign JWT tokens (e.g., `fwrt43v63458m6356t8957438vn573480`).
- **PRODUCTION**: A flag indicating whether the app is running in production mode (e.g., `false`).

## MongoDB Compass

For convenient management and visualization of MongoDB data, you can use [MongoDB Compass](https://www.mongodb.com/products/compass). This graphical interface allows you to monitor collections, documents, and perform database queries easily.

### Connecting to the Database

To connect to the database using MongoDB Compass, use the connection string from your `.env` file, for example:

```bash
PORT=4402
MONGO_URL=mongodb://localhost:27017/ng-17-jwt-auth
JWT_SECRET=fwrt43v63458m6356t8957438vn573480
PRODUCTION=false
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
```
