# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a water treatment design software (净水处理智慧交互设计软件) built with:
- **Backend**: Electron-egg framework (Node.js)
- **Frontend**: Vue.js 2.x with Ant Design Vue
- **Desktop**: Electron application for Windows, Mac, and Linux

The application is a comprehensive water treatment system design tool with multiple operation modules, data management, and document processing capabilities.

## Development Commands

### Frontend Development (in `frontend/` directory)
```bash
cd frontend
npm run dev         # Start Vue development server on port 3247
npm run build       # Build frontend for production
npm run lint        # Run ESLint
npm run serve       # Alternative to dev command
```

### Electron Development (root directory)
```bash
npm run dev         # Start Electron in development mode
npm run reload      # Start with nodemon auto-reload
npm run start       # Start Electron in production mode
npm run test        # Start with debug logging enabled
```

### Building Applications
```bash
# Frontend build (required before electron build)
npm run rd          # Prepare for build

# Windows builds
npm run build-w-64    # Windows installer (.exe) 64-bit
npm run build-wz-64   # Windows portable (.7z) 64-bit
npm run build-w-32    # Windows installer 32-bit
npm run build-wz-32   # Windows portable 32-bit

# Other platforms
npm run build-m       # macOS build
npm run build-l-64    # Linux .deb package 64-bit
npm run build-lr-64   # Linux .rpm package 64-bit
```

### Utility Commands
```bash
npm run clean       # Clean build artifacts
npm run encrypt     # Encrypt resources
npm run icon        # Process application icons
npm run rebuild     # Rebuild native modules
```

## Architecture Overview

### Project Structure
- `/electron/` - Electron main process code
  - `/controller/` - API controllers (framework.js, hardware.js, etc.)
  - `/service/` - Business logic services
  - `/config/` - Configuration files
  - `/addon/` - Electron addons (tray, updater, etc.)
- `/frontend/` - Vue.js application
  - `/src/pages/` - Vue components organized by feature modules
  - `/src/components/` - Reusable UI components
  - `/src/router/` - Vue Router configuration
  - `/src/store/` - Vuex state management
  - `/src/utils/` - Utility functions and helpers
- `/data/` - Application data files (demo.json, system.json)
- `/public/` - Static assets and HTML templates

### Key Components

#### Backend (Electron-egg)
- **Controllers**: Handle IPC communication between frontend and backend
- **Services**: Business logic for database operations, file processing, etc.
- **Addons**: Electron-specific features (system tray, auto-updater, security)
- **Database Support**: JSON-based and SQLite database operations

#### Frontend (Vue + Ant Design)
- **Operation Modules**: Organized in numbered folders (1000-9000 series)
- **Data Processing**: Handles various operation data types and calculations
- **Document Management**: DOCX file processing and template generation
- **Internationalization**: Support for multiple languages (Chinese/English)

### Communication Pattern
- Frontend communicates with Electron backend via IPC (Inter-Process Communication)
- Controllers handle IPC messages and return responses
- Services contain the actual business logic
- Database operations support both JSON and SQLite storage

### Module Organization
The application uses a numerical module system:
- **1000 series**: Basic water treatment operations
- **2000 series**: Advanced processing modules  
- **3000 series**: System analysis components
- **4000-6000 series**: Specialized treatment methods
- **8000-9000 series**: Reporting and export functions

Each module contains Vue components and corresponding i18n translation files.

## Development Notes

- The application runs Vue development server on port 3247
- Electron window configuration is in `electron/config/config.default.js`
- Frontend builds to `frontend/dist/` which Electron serves in production
- Document templates are stored in `frontend/public/` with .docx files
- The app supports both development mode (hot reload) and production builds
- All builds require running `npm run rd` first to prepare the frontend build