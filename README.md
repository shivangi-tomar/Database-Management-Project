# Student Records Management Application

This is a Node.js application for managing student records using MongoDB. It provides a RESTful API for performing basic CRUD operations on student data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd student-records-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

- **Create a Student**
  - `POST /api/students`
  
- **Get All Students**
  - `GET /api/students`
  
- **Get a Student by ID**
  - `GET /api/students/:id`
  
- **Update a Student**
  - `PUT /api/students/:id`
  
- **Delete a Student**
  - `DELETE /api/students/:id`

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

This application provides a simple interface for managing student records and can be extended with additional features as needed.