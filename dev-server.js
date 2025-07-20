#!/usr/bin/env node

/**
 * Development server for SchoolWaze
 * This script handles Node.js version compatibility
 */

const { spawn } = require('child_process');
const path = require('path');

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
const minorVersion = parseInt(nodeVersion.slice(1).split('.')[1]);

console.log(`🚀 Starting SchoolWaze Development Server`);
console.log(`📋 Node.js Version: ${nodeVersion}`);

// Next.js prefers Node 18.18.0+ but can work with 18.17.0 in dev mode
if (majorVersion >= 20 || (majorVersion === 19 && minorVersion >= 8) || (majorVersion === 18 && minorVersion >= 18)) {
  console.log(`✅ Node.js version is supported`);
} else if (majorVersion === 18 && minorVersion >= 17) {
  console.log(`⚠️  Node.js ${nodeVersion} may have compatibility issues with Next.js`);
  console.log(`💡 Recommended: Node.js 18.18.0+ or 20.0.0+`);
  console.log(`🔄 Attempting to start development server anyway...`);
} else {
  console.log(`❌ Node.js ${nodeVersion} is not supported`);
  console.log(`💡 Please upgrade to Node.js 18.18.0+ or 20.0.0+`);
  process.exit(1);
}

// Start Next.js development server
const nextDev = spawn('npx', ['next', 'dev'], {
  stdio: 'inherit',
  shell: true,
  cwd: process.cwd()
});

nextDev.on('close', (code) => {
  console.log(`\n🔄 Development server exited with code ${code}`);
});

nextDev.on('error', (error) => {
  console.error(`❌ Error starting development server:`, error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log(`\n🛑 Shutting down development server...`);
  nextDev.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log(`\n🛑 Shutting down development server...`);
  nextDev.kill('SIGTERM');
});
