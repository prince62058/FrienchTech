# FrienchTech IT Solutions Website

## Overview

This is a modern full-stack web application for FrienchTech IT Solution Pvt Ltd, built with React frontend and Express.js backend. The application serves as a corporate website showcasing IT services, projects, pricing, and includes a contact management system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **3D Graphics**: Three.js for interactive background elements

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Cloud Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed sessions

## Key Components

### Frontend Components
- **Navigation**: Fixed header with responsive mobile menu
- **Hero Section**: Interactive 3D background with Three.js particles
- **Pages**: Home, About, Services, Projects, Pricing, Contact
- **UI Components**: Comprehensive shadcn/ui component library
- **Forms**: React Hook Form with Zod validation
- **Animations**: Custom animated counters and CSS animations

### Backend Components
- **API Routes**: RESTful endpoints for contact form and data retrieval
- **Database Layer**: Drizzle ORM with type-safe queries
- **Storage Interface**: Abstracted storage layer with memory fallback
- **Development Tools**: Hot reloading with Vite integration

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contacts Table**: Contact form submissions with timestamps
- **Type Safety**: Zod schemas for runtime validation

## Data Flow

1. **Frontend to Backend**: Forms submit data via fetch API to Express endpoints
2. **Validation**: Zod schemas validate data on both client and server
3. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
4. **Response Handling**: TanStack Query manages API responses and caching
5. **Error Handling**: Comprehensive error boundaries and toast notifications

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Styling**: TailwindCSS, Radix UI primitives, shadcn/ui components
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Hookform Resolvers
- **3D Graphics**: Three.js for interactive elements
- **Utilities**: Class Variance Authority, clsx, date-fns

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL, Drizzle ORM
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: TSX for TypeScript execution, ESBuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Strict type checking across the stack
- **Code Quality**: ESLint configuration (implied)
- **Replit Integration**: Cartographer plugin for development environment

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite dev server with HMR
- **Database**: Neon development database
- **Environment Variables**: DATABASE_URL for database connection
- **Replit Integration**: Development banner and runtime error overlay

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory
- **Deployment**: Node.js production server serving static files and API

### Database Management
- **Migrations**: Drizzle Kit handles schema migrations
- **Connection**: Neon serverless PostgreSQL with connection pooling
- **Environment**: Separate DATABASE_URL for production deployment

The application is designed for modern web standards with TypeScript throughout, responsive design, and scalable architecture suitable for a growing IT services business.