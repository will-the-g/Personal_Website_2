# Quick Start Guide

Get your portfolio website running in minutes!

## Option 1: Docker Deployment (Recommended)

### Prerequisites
- Docker installed
- Docker Compose installed

### Steps

```bash
# 1. Clone or navigate to the project
cd portfolio-website

# 2. Run the deployment script
chmod +x deploy.sh
./deploy.sh
# or if on windows
bash deploy.sh

# 3. Access your website
# Open http://localhost in your browser
```

That's it! Your portfolio is now running.

---

## Option 2: Manual Docker Deployment

```bash
# Build and start services
docker compose up -d --build

# View logs
docker compose logs -f

# Stop services
docker compose down
```

---

## Option 3: Development Mode (Local)

### Frontend
```bash
cd frontend
yarn install
yarn start
# Opens at http://localhost:3000
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
# Runs at http://localhost:8001
```

---

## Customizing Your Portfolio

Edit `/app/frontend/src/data/mock.js` to update:
- Personal information (name, title, bio)
- Skills and expertise levels
- Work experience
- Projects
- Social media links

After making changes:
- **Development mode**: Changes auto-reload
- **Docker mode**: Run `docker compose restart frontend`

---

## Common Commands

```bash
# View all containers
docker compose ps

# View logs
docker compose logs -f

# Restart a service
docker compose restart frontend
docker compose restart backend

# Stop all services
docker compose down

# Rebuild and restart
docker compose up -d --build
```

---

## Troubleshooting

**Issue: Port 80 is already in use**
```bash
# Check what's using port 80
sudo lsof -i :80

# Stop the conflicting service or change port in docker-compose.yml
```

**Issue: Can't access the website**
- Make sure Docker services are running: `docker compose ps`
- Check firewall settings
- Try accessing via IP instead of localhost

**Issue: Changes not showing**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Rebuild containers: `docker compose up -d --build`

---

## Next Steps

1. **Customize the content** in `frontend/src/data/mock.js`
2. **Change colors** in `tailwind.config.js` if desired
3. **Deploy to production** (see README.md for EC2 deployment)
4. **Add SSL certificate** for HTTPS (see README.md)

For detailed deployment instructions, see [README.md](./README.md)
