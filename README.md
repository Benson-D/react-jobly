# Jobly-frontend

Jobly is full stack web application. The frontend consist of React and Bootstrap. 
The backend utilizes Node, Express, and PostgreSQL. 
  - Mocks a job web application similiar to Indeed.com or [LinkedIn](https://www.linkedin.com)
  - For more details on the backend documentation please click [here](https://github.com/Benson-D/express-jobly)

## Installation
**Frontend Setup**

- `cd` into the project directory 
- `npm install` to install the dependencies needed for the application
- `npm start` to start the server

```console
npm install
npm start
```
**Frontend Test** 
```console
npm test
```

## Current features 
  - A user can login and signup to the application
  - When logged in a user can search for various companies and jobs 
  - A user can view a specific company for job openings 
  - A user can edit their profile
  - Apply for a job with a click of a button
  - Authentication is handled with [JSON Web Tokens](https://jwt.io/)
  - Routes are protected so a user needs to be logged in to access the application

## Features to add 
  - Live Search
  - Pagination
  - Cancel job application 
  - Edit a company
  - User can apply for jobs through the backend 
  - Added testing for a secure application


