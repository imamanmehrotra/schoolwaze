# SchoolWaze Project - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
SchoolWaze is a web application prototype designed to tackle school-related traffic congestion using smart routing, carpool matchmaking, live alerts, and school collaboration features.

## Tech Stack
- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom responsive components
- **State Management**: React hooks and Context API
- **APIs**: Google Maps API integration for traffic data

## Core Features
1. **User Registration & Vehicle-School Linking**: Parent profiles, vehicle registration, school association
2. **Smart Drop-off Slot Recommendation**: Time slot optimization based on traffic data
3. **Carpool Matchmaking Engine**: Location-based parent matching with compatible schedules
4. **Live Traffic & Notification System**: Real-time traffic alerts and suggestions
5. **School Collaboration Dashboard**: Admin interface for schools

## Development Guidelines
- Use TypeScript for all components and utilities
- Implement responsive design patterns with Tailwind CSS
- Create reusable components in the `/src/components` directory
- Use proper error handling and loading states
- Follow Next.js App Router conventions
- Implement proper SEO with metadata
- Use proper TypeScript interfaces and types
- Follow accessibility best practices (ARIA labels, semantic HTML)
- Create modular, testable code architecture

## Code Structure
- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and configurations
- `/src/types` - TypeScript type definitions
- `/src/hooks` - Custom React hooks
- `/src/api` - API route handlers
- `/public` - Static assets
