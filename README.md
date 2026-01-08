# Awesome Express Starter

A simple and clean Express.js starter template with essential middleware and best practices.

## Features

- **Express 4.x** - Fast, unopinionated web framework
- **Security** - Helmet for security headers
- **CORS** - Cross-origin resource sharing enabled
- **Logging** - Morgan for HTTP request logging
- **Hot Reload** - Nodemon for development
- **Environment Config** - dotenv for environment variables

## Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd awesome-express-starter

# Run verify script
npm run verify

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev

# Or start production server
npm start
```

## Project Structure

```
src/
├── index.js              # App entry point
├── routes/
│   └── index.js          # API routes
└── middleware/
    └── errorHandler.js   # Error handling middleware
```

## API Endpoints

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| GET    | /health        | Health check        |
| GET    | /api           | API welcome message |
| GET    | /api/users     | List all users      |
| GET    | /api/users/:id | Get user by ID      |
| POST   | /api/users     | Create new user     |

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload

## License

MIT
