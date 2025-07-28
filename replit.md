# FrienchTech IT Solutions Website

## Overview

This is a modern full-stack web application for FrienchTech IT Solution Pvt Ltd, built with React frontend and Express.js backend. The application serves as a corporate website showcasing IT services, projects, pricing, and includes a contact management system. Enhanced with advanced 3D animations, GSAP scroll-triggered effects, and Three.js particle systems for an immersive user experience.

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
- **Hero Section**: Interactive 3D background with Three.js particles and video background
- **Enhanced Home Page**: Rich content sections with GSAP scroll-triggered animations
- **3D Elements**: Custom particle systems, glassmorphism effects, and 3D transforms
- **Pages**: Home, About, Services, Projects, Pricing, Contact
- **UI Components**: Comprehensive shadcn/ui component library with advanced animations
- **Forms**: React Hook Form with Zod validation
- **Animations**: GSAP-powered scroll animations, floating elements, and 3D card effects

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
- **3D Graphics**: Three.js for interactive particle systems and backgrounds
- **Animations**: GSAP with ScrollTrigger for advanced scroll-based animations
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

## Recent Changes (July 28, 2025)

### Major Animation and 3D Enhancement Update
- **Enhanced All Pages**: Services, Projects, Pricing, and Contact pages now feature advanced GSAP scroll-triggered animations
- **3D Visual Effects**: Integrated Three.js particle systems across all pages for immersive backgrounds
- **Advanced CSS Animations**: Added comprehensive 3D transforms, glassmorphism effects, floating elements, and gradient animations
- **Interactive Elements**: Implemented 3D hover effects, scroll-triggered animations, and dynamic particle systems
- **Modern Design**: Dark theme with gradient backgrounds, glassmorphism cards, and neon glow effects
- **Performance Optimized**: Efficient animation cleanup and optimized particle rendering

### Animation Features Added
- GSAP ScrollTrigger animations with 3D transforms (rotationX, rotationY, scale)
- Three.js particle systems with floating animations
- Advanced hover effects with perspective and 3D rotations  
- Glassmorphism design patterns with backdrop blur
- Gradient text effects and animated buttons
- Scroll-based parallax effects
- Form field focus animations
- Staggered card entrance animations

The application now provides a cutting-edge, immersive user experience with modern web standards, TypeScript throughout, responsive design, advanced 3D animations, and scalable architecture suitable for a growing IT services business.