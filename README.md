# SchoolWaze - Smart School Traffic Management Platform

🚀 **A modern web application prototype for tackling school-related traffic congestion using smart routing, carpool matchmaking, live alerts, and school collaboration features.**

## 🌟 Features

### ✅ Completed Features
- **Smart Routing** - AI-powered route optimization with real-time traffic data
- **Carpool Matching** - Connect families for safe, convenient carpooling
- **Dynamic Time Slots** - Book optimal pickup/drop-off times to reduce congestion
- **Live Traffic Alerts** - Real-time notifications about traffic, weather, and emergencies
- **Comprehensive Dashboard** - Centralized view of all activities and insights

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with feature showcase
│   ├── dashboard/         # User dashboard
│   ├── routing/           # Smart routing interface
│   ├── carpool/           # Carpool matching system
│   ├── time-slots/        # Time slot booking
│   └── alerts/            # Alert management
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   └── navigation.tsx    # Main navigation
├── lib/                  # Utility functions
└── types/                # TypeScript definitions
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Components**: Custom component library with class-variance-authority

## 📋 Prerequisites

- Node.js 18.18.0+ or 20.0.0+ (Current: 18.17.0 - needs upgrade)
- npm or yarn package manager

## ⚙️ Installation & Setup

### 1. Clone and Install Dependencies
```bash
git clone <repository-url>
cd demo
npm install
```

### 2. Node.js Version Fix
Your current Node.js version (18.17.0) is below the minimum required (18.18.0+). 

**Option A: Update Node.js (Recommended)**
```bash
# Using nvm (Node Version Manager)
nvm install 20
nvm use 20

# Or download from https://nodejs.org
```

**Option B: Use Development Workaround**
```bash
# If you cannot update Node.js immediately, try:
npm run dev:safe
# This bypasses our version check but may have compatibility issues
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🚀 Available Scripts

- `npm run dev` - Start development server with version checking
- `npm run dev:safe` - Start development server without version check
- `npm run dev:turbo` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Pages & Features

### 🏠 Homepage (`/`)
- Hero section with value proposition
- Feature overview with detailed descriptions
- Interactive registration modal
- Statistics dashboard preview
- Call-to-action sections

### 📊 Dashboard (`/dashboard`)
- Personalized welcome with current time
- Daily statistics (time saved, fuel saved, CO₂ reduced)
- Today's schedule with drop-off/pickup times
- Active carpool information
- Recent alerts and upcoming events
- Quick action buttons
- Traffic insights and recommendations

### 🗺️ Smart Routing (`/routing`)
- Route planning form with destination and departure time
- Multiple route options with traffic conditions
- Turn-by-turn directions
- Traffic alerts sidebar
- Route preferences (avoid tolls, highways, etc.)
- Real-time savings calculations

### 👥 Carpool Matching (`/carpool`)
- Browse available carpool requests
- Create new carpool requests
- Trust circle management
- Active carpool tracking
- Filtering and search capabilities
- Direct messaging integration

### ⏰ Time Slots (`/time-slots`)
- Interactive time slot booking calendar
- Real-time availability and congestion levels
- Drop-off and pickup slot management
- Optimization tips and recommendations
- Current bookings overview
- Traffic insights

### 🚨 Live Alerts (`/alerts`)
- Real-time traffic and emergency alerts
- Customizable notification preferences
- Alert priority levels (critical, medium, low)
- Detailed alert information modals
- Alert history and filtering
- Push notifications, email, and SMS options

## 🎨 Design System

### Color Palette
- **Primary**: Blue (600) - Navigation, CTAs
- **Success**: Green (500) - Confirmations, positive stats
- **Warning**: Orange/Yellow (500) - Moderate alerts
- **Danger**: Red (500) - Critical alerts, emergencies
- **Gray Scale**: Neutral colors for text and backgrounds

### Components
- **Buttons**: Primary, secondary, outline, ghost variants
- **Cards**: Consistent spacing and shadows
- **Modals**: Overlay dialogs for forms and details
- **Forms**: Labeled inputs with validation states
- **Navigation**: Responsive header with mobile menu

## 📊 Mock Data

The application uses comprehensive mock data to demonstrate functionality:
- **Users**: Parent profiles with multiple children
- **Schools**: Lincoln Elementary with schedules and events
- **Traffic**: Real-time conditions and historical patterns
- **Carpools**: Active matches with ratings and preferences
- **Alerts**: Various types with different priorities

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Environment variables can be set in Vercel dashboard
4. Automatic deployments on git push

### Option 2: Netlify
1. Build command: `npm run build`
2. Publish directory: `out` (if using static export) or `.next`
3. Node.js version: 18.18.0 or higher

### Option 3: Traditional Hosting
```bash
npm run build
npm run start
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```bash
# Optional: Add environment-specific configurations
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_MAPS_API_KEY=your_google_maps_key
```

### Tailwind CSS
The project uses Tailwind CSS v4 with simplified configuration. Custom styles are in `src/app/globals.css`.

## 🚀 Next Steps

### Ready for Mobile Development
The modular architecture makes it easy to port features to native iOS/Android:
- **Types**: TypeScript interfaces can be adapted for native apps
- **Components**: UI patterns can be recreated in native frameworks
- **Logic**: Business logic is separated from presentation

### Production Considerations
1. **Real API Integration**: Replace mock data with actual backend APIs
2. **Authentication**: Add user authentication and authorization
3. **Real-time Updates**: Implement WebSocket connections for live data
4. **Maps Integration**: Add Google Maps or MapBox for visual routing
5. **Push Notifications**: Set up Firebase or native push services
6. **Analytics**: Add tracking for user behavior and app performance

## 🤝 Contributing

The codebase is well-documented and follows modern React/Next.js patterns:
- TypeScript for type safety
- Modular component architecture
- Consistent naming conventions
- Responsive design patterns

## 📄 License

This is a prototype application created for demonstration purposes.

---

**Built with ❤️ for safer, smarter school traffic management**
