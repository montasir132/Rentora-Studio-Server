# Rentora Studio — Backend

### REST API for Creative Studio Rental Platform

Rentora Studio Backend is the server-side application of **Rentora Studio**, a peer-to-peer creative studio rental marketplace.

It provides RESTful APIs to manage studio listings, user bookings, and related application data. The backend connects the Next.js frontend with MongoDB and handles data operations through Express.js.

The platform allows studio owners to publish and manage their creative spaces while creators can explore studios and make reservations.

**Frontend:** https://rentorastudio.vercel.app  
**Backend API:** https://rentora-studio-server.vercel.app

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [Installation and Setup](#installation-and-setup)
- [Environment Variables](#environment-variables)
- [CORS Configuration](#cors-configuration)
- [Deployment](#deployment)
- [Frontend Integration](#frontend-integration)
- [Author](#author)

---

## Overview

The Rentora Studio backend is responsible for handling application data and business operations.

It communicates with the frontend through HTTP requests and performs database operations using MongoDB.

The backend manages:

- Studio listing creation and management.
- Retrieving studio information.
- Updating and deleting studio listings.
- Booking creation and management.
- Retrieving user-specific booking information.
- Cancelling bookings.
- Cross-Origin Resource Sharing (CORS) configuration.

---

## Features

### 1. Studio Management

- Create new studio listings.
- Retrieve studio information.
- Retrieve individual studio details.
- Update existing studio information.
- Delete studio listings.
- Manage studio-related information such as title, category, pricing, location, image, and amenities.

### 2. Booking Management

- Create studio bookings.
- Store booking information in MongoDB.
- Retrieve booking records.
- Retrieve bookings associated with a specific user.
- Update booking information.
- Cancel existing bookings.
- Maintain booking statuses such as Pending, Confirmed, Completed, and Cancelled.

### 3. Database Integration

- MongoDB database integration.
- MongoDB collections for studio listings and bookings.
- ObjectId-based document identification.
- Database queries and update operations.

### 4. API and Server Management

- RESTful API architecture.
- Express.js routing and middleware.
- JSON request and response handling.
- CORS configuration for frontend communication.
- Environment-based configuration.
- Asynchronous database operations.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | NoSQL database |
| MongoDB Node.js Driver | Database operations |
| JavaScript | Server-side programming |
| CORS | Cross-origin request handling |
| dotenv | Environment variable management |
| Vercel | Backend deployment |

---

## Project Architecture

```text
             Rentora Studio
                    |
             Next.js Frontend
                    |
                HTTP Requests
                    |
             Express.js Server
                    |
              REST API Routes
                    |
             MongoDB Database
                    |
          +---------+---------+
          |                   |
     Studios Collection   Bookings Collection
```

The frontend sends HTTP requests to the Express.js backend. The server processes these requests, interacts with MongoDB, and returns the appropriate responses.

---

## API Endpoints

The following endpoints represent the main API operations.

### Studio APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/StudioData` | Create a studio listing |
| GET | `/StudioData` | Retrieve studio listings |
| GET | `/StudioData/:id` | Retrieve a studio by ID |
| PATCH | `/StudioDataEdit/:id` | Update a studio listing |
| DELETE | `/StudioDataDelete/:id` | Delete a studio listing |

### Booking APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/booking` | Create a booking |
| GET | `/booking` | Retrieve booking records |
| GET | `/booking/:email` | Retrieve bookings associated with an email |
| DELETE | `/my-booking-remove/:id` | Remove or cancel a booking |

**Note:** These are the known project routes. Verify the actual Express route definitions before publishing this table. Add any additional routes implemented in the server.

---

## Database Structure

The application uses MongoDB to store and manage its data.

### Studios Collection

The studios collection stores information about creative studio listings.

Typical data includes:

- Studio title.
- Studio category.
- Hourly rate.
- Security deposit.
- Maximum capacity.
- Location.
- Studio image.
- Amenities.
- Overview.
- Owner information.

### Bookings Collection

The bookings collection stores reservation information.

Typical data includes:

- Studio ID.
- Studio name.
- Renter ID.
- Renter name.
- Email.
- Booking date.
- Start time.
- End time.
- Number of guests.
- Total hours.
- Hourly rate.
- Security deposit.
- Booking amount.
- Booking status.
- Creation timestamp.

---

## Installation and Setup

Follow these instructions to run the backend locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- MongoDB or MongoDB Atlas

### 1. Clone the Repository

```bash
git clone YOUR_SERVER_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd rentora-studio-server
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root and configure the required variables.

See the [Environment Variables](#environment-variables) section.

### 5. Start the Server

Use the development script configured in your `package.json`.

For example:

```bash
npm run dev
```

Or, if your project uses a different script:

```bash
npm start
```

The server should now be available at your configured local port.

---

## Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Use the exact variable names referenced in your server source code. Additional environment variables may be required depending on your implementation.

**Security Notice:**

- Never commit your `.env` file.
- Never expose MongoDB credentials publicly.
- Keep API secrets and private configuration in environment variables.
- Configure production environment variables through your deployment provider.

---

## CORS Configuration

The backend allows the deployed Rentora Studio frontend to communicate with its APIs.

Production frontend origin:

```text
https://rentorastudio.vercel.app
```

Example Express CORS configuration:

```js
const cors = require("cors");

app.use(
  cors({
    origin: "https://rentorastudio.vercel.app",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
```

Make sure the configured origin matches the frontend URL exactly, without an unnecessary trailing slash.

---

## Deployment

The backend is deployed on Vercel.

**Production API URL:**

https://rentora-studio-server.vercel.app

For deployment:

1. Push the server code to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Verify the MongoDB connection.
5. Deploy the application.
6. Test the API endpoints.
7. Verify frontend-to-backend communication and CORS settings.

---

## Frontend Integration

The backend provides APIs consumed by the Rentora Studio frontend.

**Frontend Repository:** Add your client repository URL here.

The frontend uses these APIs to:

- Display studio listings.
- Retrieve individual studio information.
- Create and manage studio listings.
- Submit booking requests.
- Retrieve user bookings.
- Cancel bookings.

---

## Author

**Rentora Studio Backend**

Server-side application for the Rentora Studio creative workspace rental marketplace.

**Frontend:** https://rentorastudio.vercel.app

**Backend:** https://rentora-studio-server.vercel.app

---

*Built to connect creative spaces with creative minds.*