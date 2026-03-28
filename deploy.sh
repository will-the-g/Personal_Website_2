#!/bin/bash

# Portfolio Website Deployment Script
# This script helps deploy the portfolio website with Docker Compose

set -e  # Exit on error

echo "================================"
echo "Portfolio Website Deployment"
echo "================================"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose v2 ('docker compose') is available
if docker compose version &> /dev/null 2>&1; then
    DOCKER_COMPOSE_CMD="docker compose"
else
    echo "Error: 'docker compose' is not available. Please enable Docker Desktop WSL integration or install the Docker Compose plugin (e.g., 'sudo apt install docker-compose-plugin' on Ubuntu)."
    exit 1
fi

# Get backend URL from user or use default
read -p "Enter your backend URL (default: http://localhost:8001): " BACKEND_URL
BACKEND_URL=${BACKEND_URL:-http://localhost:8001}

echo ""
echo "Configuration:"
echo "  Backend URL: $BACKEND_URL"
echo ""

# Update docker-compose.yml with the backend URL
sed -i "s|REACT_APP_BACKEND_URL=.*|REACT_APP_BACKEND_URL=$BACKEND_URL|g" docker-compose.yml

echo "Building Docker images..."
$DOCKER_COMPOSE_CMD build

echo ""
echo "Starting services..."
$DOCKER_COMPOSE_CMD up -d

echo ""
echo "Waiting for services to start..."
sleep 10

echo ""
echo "Checking service health..."
$DOCKER_COMPOSE_CMD ps

echo ""
echo "================================"
echo "Deployment Complete!"
echo "================================"
echo ""
echo "Your portfolio is now running at:"
echo "  Frontend: http://localhost (or http://your-server-ip)"
echo "  Backend:  $BACKEND_URL"
echo ""
echo "Useful commands:"
echo "  View logs:        $DOCKER_COMPOSE_CMD logs -f"
echo "  Stop services:    $DOCKER_COMPOSE_CMD down"
echo "  Restart services: $DOCKER_COMPOSE_CMD restart"
echo ""
