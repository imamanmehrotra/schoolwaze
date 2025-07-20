#!/bin/bash
echo "🚀 Railway Deployment Script for SchoolWaze"
echo "📋 Installing dependencies..."
npm install

echo "🔨 Building application..."
npm run build

echo "✅ Build complete! Starting application..."
npm start
