# MERN Blog Application

A simple, clean MERN (MongoDB, Express, React, Node.js) blog application built with TypeScript.

## Features

- Create, read, update, and delete blog posts
- Category management
- Clean and minimal UI
- Full TypeScript support

## Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Clone the repository and navigate to the project directory.

2. **Backend Setup:**
   ```bash
   cd server
   npm install
   ```

3. **Frontend Setup:**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Configuration:**
   - Copy `.env.example` to `.env` in the `server/` directory
   - Add your MongoDB Atlas connection string:
     ```
     MONGODB_URI=your_mongodb_connection_string_here
     PORT=5000
     ```

## Running the Application

1. **Start the backend server:**
   ```bash
   cd server
   npm run dev
   ```
   The server will run on `http://localhost:5000`

2. **Start the frontend (in a new terminal):**
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:3000`

## Project Structure

```
├── server/
│   ├── server.ts          # Main server entry point
│   ├── models/            # Mongoose models (Post, Category)
│   ├── routes/            # Express routes (posts, categories)
│   ├── controllers/       # Route handlers
│   └── package.json
├── client/
│   ├── src/
│   │   ├── App.tsx        # Main app component with routing
│   │   ├── api.ts         # Axios API instance
│   │   ├── pages/         # PostList, PostView, PostForm
│   │   └── components/    # Navbar
│   └── package.json
└── README.md
```

## API Endpoints

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get post by ID
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create a new category

## Technologies Used

- **Backend:** Node.js, Express, MongoDB (Mongoose), TypeScript
- **Frontend:** React, Vite, TypeScript, React Router, Axios

