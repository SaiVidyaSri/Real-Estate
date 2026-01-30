# Real Estate Landing Page - Full Stack Application

A comprehensive full-stack real estate website featuring a dynamic landing page and an integrated admin panel for content management. Built with modern web technologies and connected to MongoDB Atlas for persistent data storage.

## Features

- Public Website: Responsive landing page with dynamic content
- Admin Panel: Integrated content management system accessible via /admin route
- Image Cropping: Automatic image cropping to 450x350 pixels for consistent display
- Form Management: Contact forms, newsletter subscriptions, and testimonials
- RESTful API: Backend API for all CRUD operations

## Project Approach

### Development Strategy

This project follows a modern full-stack architecture with integrated frontend and admin panel:

1. Backend (API Layer)
   - RESTful API built with Node.js and Express.js
   - MongoDB Atlas for cloud-based data persistence
   - Multer for handling file uploads with image cropping
   - Separate controllers and models for clean code organization
   - CORS enabled for development and production

2. Frontend (Single Application)
   - React-based landing page for public users
   - Integrated admin panel using React Router
   - Single deployment with routing: / for public, /admin for admin
   - React Image Crop for automatic image resizing
   - Responsive design for all devices
   - Real-time form submissions with backend API

3. Data Flow
   - Admin uploads and crops images stored in /uploads folder
   - Images and content saved to MongoDB Atlas
   - Public website fetches dynamic content from API
   - Forms submit data directly to database

### Key Features Implemented

Landing Page:
- Hero section with contact form submission
- Why Choose Us section with service features
- About Us section with company information
- Our Projects section (dynamic - fetched from database)
- Happy Clients testimonials (dynamic - fetched from database)
- Newsletter subscription functionality
- Footer with quick links and contact information

Admin Panel (Integrated at /admin):
- Dashboard with statistics
- Manage Projects (Add/Delete with image cropping)
- Manage Clients/Testimonials (Add/Delete with image cropping)
- View Contact Form Submissions
- View Newsletter Subscriptions
- Image upload with automatic 450x350 pixel cropping

Backend API:
- POST /api/projects - Create project with image upload
- GET /api/projects - Fetch all projects
- DELETE /api/projects/:id - Delete project
- POST /api/clients - Create client testimonial with image
- GET /api/clients - Fetch all clients
- DELETE /api/clients/:id - Delete client
- POST /api/contacts - Submit contact form
- GET /api/contacts - Fetch all contact submissions
- POST /api/newsletter - Subscribe to newsletter
- GET /api/newsletter - Fetch all subscribers

## Technologies Used

### Frontend
- React.js 18.2 - UI library for building component-based interfaces
- React Router DOM 6.9 - Client-side routing for SPA navigation
- React Image Crop - Image cropping functionality
- CSS3 - Custom styling with responsive design
- Axios - HTTP client for API requests

### Backend
- Node.js - JavaScript runtime environment
- Express.js 4.18 - Web application framework
- MongoDB - NoSQL database for data storage
- Mongoose 8.x - ODM library for MongoDB
- Multer - Middleware for handling multipart/form-data (file uploads)
- CORS - Cross-origin resource sharing middleware
- Body-Parser - Parse incoming request bodies
- Dotenv - Environment variable management

### Database
- MongoDB Atlas - Cloud-hosted MongoDB database

### Development Tools
- npm - Package manager
- nodemon - Auto-restart server on file changes
- VS Code - Code editor

## Project Structure

```
Dashboard/
├── backend/                     # Node.js/Express API server
│   ├── controllers/            # Request handlers
│   │   ├── projectController.js
│   │   ├── clientController.js
│   │   ├── contactController.js
│   │   └── newsletterController.js
│   ├── models/                 # MongoDB schemas
│   │   ├── Project.js
│   │   ├── Client.js
│   │   ├── Contact.js
│   │   └── Newsletter.js
│   ├── routes/                 # API routes
│   │   ├── projects.js
│   │   ├── clients.js
│   │   ├── contacts.js
│   │   └── newsletter.js
│   ├── uploads/                # Uploaded images storage
│   │   ├── projects/
│   │   └── clients/
│   ├── .env                    # Environment variables (not in repo)
│   ├── server.js              # Entry point
│   └── package.json
│
├── frontend/                   # React application (public + admin)
│   ├── public/
│   │   └── assets/            # Static images, icons, shapes
│   ├── src/
│   │   ├── components/        # Shared React components
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── NotYourAverage.js
│   │   │   ├── WhyChooseUs.js
│   │   │   ├── AboutUs.js
│   │   │   ├── Projects.js
│   │   │   ├── Clients.js
│   │   │   ├── Newsletter.js
│   │   │   ├── Footer.js
│   │   │   └── ImageCropper.js  # Image cropping component
│   │   ├── pages/
│   │   │   └── admin/         # Admin panel pages
│   │   │       ├── Dashboard.js
│   │   │       ├── ManageProjects.js
│   │   │       ├── ManageClients.js
│   │   │       ├── ViewContacts.js
│   │   │       └── ViewSubscriptions.js
│   │   ├── App.js             # Main app with routing
│   │   ├── HomePage.js        # Public landing page
│   │   ├── AdminLayout.js     # Admin panel layout
│   │   └── index.js
│   └── package.json
│
└── README.md                   # This file
```

## Features

### Landing Page
- **Hero Section** with consultation form
- Why Choose Us section with features
- About Us section
- Our Projects - Displays projects from database
- Happy Clients - Displays client testimonials
- Newsletter Subscription
- Contact Form

### Admin Panel
- Dashboard with statistics
- Manage Projects (Add/Delete)
- Manage Clients (Add/Delete)
- View Contact Form Submissions
- View Newsletter Subscriptions

## Steps to Run the Project Locally

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)
- Git (optional, for cloning)
- MongoDB Atlas Account (if you want to use your own database)

### Step 1: Clone or Download the Project

```bash
# If using Git
git clone <your-repository-url>
cd Dashboard

# Or download ZIP and extract
```

### Step 2: Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - The .env file should already be configured with MongoDB connection
   - If needed, create/update .env file:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
```

4. Start the backend server:
```bash
npm start
```

Backend should now be running on http://localhost:5000

You should see:
```
Server is running on port 5000
MongoDB connected successfully
```

### Step 3: Frontend Setup

1. Open a NEW terminal window

2. Navigate to frontend folder (from Dashboard directory):
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Start the frontend application:
```bash
npm start
```

Frontend should now be running on http://localhost:3000

Your browser should automatically open to http://localhost:3000

### Step 4: Access the Application

- Public Website: http://localhost:3000/
  - View the landing page with all sections
  - Submit contact forms
  - Subscribe to newsletter
  
- Admin Panel: http://localhost:3000/admin
  - Click the "Admin" button in the navbar
  - Or navigate directly to http://localhost:3000/admin
  - Manage projects, clients, view submissions

### All Set! You Now Have:

1. Backend API: http://localhost:5000
2. Frontend (Public + Admin): http://localhost:3000

## How to Use the Application

### For Public Users:

1. Visit Homepage - http://localhost:3000
2. Browse Projects - Scroll to "Our Projects" section
3. Read Testimonials - See what clients say in "Happy Clients"
4. Submit Contact Form - Fill out the hero section form
5. Subscribe - Enter email in newsletter section

### For Administrators:

1. Access Admin Panel - Click "Admin" button in navbar or visit /admin
2. Dashboard - View statistics of projects, clients, contacts, subscribers
3. Manage Projects:
   - Click "Manage Projects"
   - Upload an image (will be cropped to 450x350px)
   - Enter project name and description
   - Click "Add Project"
   - Delete projects from the table
4. Manage Clients:
   - Click "Manage Clients"
   - Upload client image (cropped to 450x350px)
   - Enter name, testimonial, and designation
   - Click "Add Client"
5. View Contacts - See all contact form submissions
6. View Subscriptions - See all newsletter subscribers

## Image Cropping Feature

The admin panel includes automatic image cropping:

1. Upload an image - Click "Choose File" button
2. Adjust crop area - Drag corners or edges of the crop box
3. Aspect ratio is locked - Maintains 450:350 pixel ratio
4. Preview - See the cropped result before saving
5. Submit - Image is automatically resized to 450x350px and uploaded

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project (with file upload)
- `DELETE /api/projects/:id` - Delete a project

### Clients
- `GET /api/clients` - Get all clients
- `POST /api/clients` - Create new client (with file upload)
- `DELETE /api/clients/:id` - Delete a client

### Contacts
- `GET /api/contacts` - Get all contact submissions
- `POST /api/contacts` - Submit contact form

### Newsletter
- `GET /api/newsletter` - Get all subscribers
- `POST /api/newsletter` - Subscribe to newsletter

