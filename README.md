# DenhelloworldNgJwtAuth

- Is a full-stack web application built with Angular 18 for the frontend and Express.js for the backend.
- It provides user authentication using JSON Web Tokens (JWT) for secure login and session management.
- The backend handles user registration, login, and token-based authentication, while the frontend allows users to access protected routes after logging in.
- MongoDB is used to store user information.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Backend
The backend is built using [Express](https://expressjs.com), located in the `api` directory as the base framework.

## Environment Variables

The following environment variables should be defined in a `.env` file at the root of the api directory:
```bash
PORT=4402
PRODUCTION=false
```

## Install MongoDB

[MongoDB](https://www.mongodb.com/try/download/community)

## MongoDB Compass

For convenient management and visualization of MongoDB data, you can use [MongoDB Compass](https://www.mongodb.com/products/compass). This graphical interface allows you to monitor collections, documents, and perform database queries easily.

### Connecting to the MongoDB

To connect to the database, use the connection string from your `.env` file, for example:

```bash
MONGO_URL=mongodb://localhost:27017/ng-17-jwt-auth
JWT_SECRET=fwrt43v63458m6356t8957438vn573480
```

## Running app

Before first start run `npm i` in `/` and `/api` directories.

To start the server, run the `dev` script in `/api/package.json` and `start` in `/package.json`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
