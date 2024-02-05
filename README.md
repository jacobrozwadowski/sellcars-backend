# SellCars Customer Module

SellCars Customer module is a Backend server that handles CRUD operations for customers. Made with Node.js, Express and Jsonwebtoken

## Installation

Use the package manager [npm](https://npmjs.org) to install all required dependencies.

```bash
cd sellcars-backend
npm install
```

## Usage

To start the typescript project use: 
```bash
npm start
```
To build the project as javascript into the ./dist folder use:
```bash
npm run build
```

The project has the function to insert three test users: To execute that function use:
```bash
node ./testing/insertUsers.js
```

To test the backend we can use tools like [Postman](https://www.postman.com/) or [HTTPie](https://httpie.io/)
available API endpoints are:
```js
http://localhost:3000/auth/login
http://localhost:3000/api/customers (Get all customers)
http://localhost:3000/api/customers/:id (Get customer by Id)
http://localhost:3000/api/customers (Create customer)
http://localhost:3000/api/customers/:id (Update customer)
http://localhost:3000/api/customers/:id (Delete customer)
```

## Environment variables
```env
JWT_SECRET=
JWT_EXPIRES_IN=
MONGODB_URI=
```

## Info
The project will be updated in the near future as a "side project". Developed by Jacob R.