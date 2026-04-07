# SecondSelf

A full-stack web application for managing and organizing your favorite content from YouTube and Twitter. Save, categorize, and access your curated content library in one place.

## Features

- **User Authentication**: Secure signup and signin with JWT-based authentication
- **Content Management**: Save and organize YouTube videos and Twitter posts
- **Tagging System**: Categorize content with custom tags for easy filtering
- **Responsive Dashboard**: Clean, intuitive interface built with React and Tailwind CSS
- **Real-time Updates**: Automatic content refresh every 10 seconds
- **API Documentation**: Interactive Swagger UI for API exploration

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Axios** for API requests
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Zod** for schema validation
- **Swagger** for API documentation

## Project Structure

```
.
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── icons/         # SVG icon components
│   │   └── config.ts      # Configuration file
│   └── package.json
│
└── server/                # Backend Express application
    ├── src/
    │   ├── auth.ts        # Authentication routes
    │   ├── content.ts     # Content management routes
    │   ├── db.ts          # Database models and connection
    │   ├── userMiddleware.ts  # JWT verification middleware
    │   ├── swagger.ts     # API documentation config
    │   └── index.ts       # Server entry point
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB instance (local or cloud)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `server` directory:
   ```env
   MONGO_URL=mongodb://localhost:27017/content-manager
   JWT_SECRET=your-secret-key-here
   ```

4. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:3000`
   
   API Documentation available at `http://localhost:3000/api-docs`

2. **Start the Frontend Development Server**
   ```bash
   cd client
   npm run dev
   ```
   Client will run on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /auth/signup` - Register a new user
- `POST /auth/signin` - Login and receive JWT token

### Content Management
- `POST /v1/content` - Add new content (requires authentication)
- `GET /v1/content` - Retrieve user's content (requires authentication)

### API Documentation
- `GET /api-docs` - Interactive Swagger UI

## Usage

1. **Sign Up**: Create a new account with email, username, and password
2. **Sign In**: Login with your credentials to receive an authentication token
3. **Add Content**: Click the "Add content" button to save YouTube videos or Twitter posts
4. **Organize**: Add tags to categorize your content
5. **Browse**: View all your saved content in the dashboard with embedded previews

## Development

### Build for Production

**Frontend**
```bash
cd client
npm run build
```

**Backend**
```bash
cd server
npm run build
npm start
```

### Linting
```bash
cd client
npm run lint
```

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected API routes with middleware
- Input validation with Zod schemas
- CORS configuration for secure cross-origin requests

## Future Enhancements

- Content search and filtering by tags
- Share content with other users
- Export content collections
- Support for additional content types (articles, podcasts, etc.)
- Dark mode support
- Content notes and annotations
