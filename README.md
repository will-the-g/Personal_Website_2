# Portfolio Website

A modern, minimalistic portfolio website showcasing professional experience, skills, and projects. Built with React, FastAPI, and Docker.

## 🎨 Features

- **Modern Dark Theme**: Sleek black background with neon cyan accents
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Engaging transitions and hover effects
- **Four Main Sections**:
  - Home: Introduction and quick stats
  - Skills: Visual representation of technical skills with progress bars
  - Experience: Detailed timeline of professional experience
  - Projects: Showcase of personal projects with descriptions

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Lucide React (icons)
- Axios

### Backend
- FastAPI
- Python 3.11
- Uvicorn

### Deployment
- Docker
- Docker Compose
- Nginx

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd portfolio-website
```

### 2. Environment Configuration

The application uses environment variables. Update the backend URL in `docker-compose.yml` if deploying to a custom domain:

```yaml
frontend:
  build:
    args:
      - REACT_APP_BACKEND_URL=http://your-domain.com:8001  # Change this
```

### 3. Build and Run with Docker Compose

```bash
# Build the images
docker compose build

# Start the services
docker compose up -d

# View logs
docker compose logs -f
```

The application will be available at:
- Frontend: http://localhost (port 80)
- Backend API: http://localhost:8001
- API Health Check: http://localhost:8001/api/health

### 4. Stop the Application

```bash
docker compose down
```

## 🌐 Deployment on AWS EC2

### Step 1: Launch EC2 Instance

1. Launch an EC2 instance (recommended: t2.medium or larger)
2. Choose Ubuntu 22.04 LTS AMI
3. Configure security group:
   - Allow HTTP (port 80) from 0.0.0.0/0
   - Allow HTTPS (port 443) from 0.0.0.0/0 (if using SSL)
   - Allow SSH (port 22) from your IP
   - Allow port 8001 if you want external API access

### Step 2: Connect to EC2 and Install Docker

```bash
# Connect to your EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose (v2 - recommended)
# If you're using Docker Desktop, the `docker compose` command is included.
# On Ubuntu/Debian, you can install the Compose plugin:
sudo apt update
sudo apt install docker-compose-plugin -y
# Then use the command: `docker compose ...` (no hyphen) to run Compose.

# Add user to docker group
sudo usermod -aG docker $USER

# Log out and back in for group changes to take effect
exit
```

### Step 3: Deploy Application

```bash
# Clone your repository
git clone <your-repo-url>
cd portfolio-website

# Update backend URL in docker-compose.yml
# Replace localhost with your EC2 public IP or domain
sed -i 's|http://localhost:8001|http://YOUR_EC2_IP:8001|g' docker-compose.yml

# Build and start
docker compose up -d --build

# Check status
docker compose ps
docker compose logs
```

### Step 4: Configure Domain (Optional)

If you have a domain name:

1. Point your domain's A record to your EC2 IP
2. Update `docker-compose.yml` with your domain
3. Consider setting up SSL with Let's Encrypt (see SSL section below)

## 🔒 SSL/HTTPS Setup (Optional but Recommended)

### Using Let's Encrypt with Certbot

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Stop nginx temporarily
docker compose stop frontend

# Obtain SSL certificate
sudo certbot certonly --standalone -d your-domain.com

# Update nginx.conf to use SSL
# Add SSL configuration to nginx.conf (see SSL nginx config below)

# Rebuild and restart
docker compose up -d --build

# Auto-renewal
sudo certbot renew --dry-run
```

**SSL Nginx Config Example:**

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    
    # Rest of your nginx config...
}

server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}
```

## 📝 Customization

### Update Personal Information

Edit `/app/frontend/src/data/mock.js` to customize:
- Personal details (name, title, bio, email)
- Skills and proficiency levels
- Work experience
- Projects
- Social media links

### Change Colors

The design uses cyan (#00d9ff) as the primary accent color. To change:

1. Update `tailwind.config.js`:
```javascript
colors: {
  'neon-cyan': '#YOUR_COLOR',
  // ...
}
```

2. Update hex values in component files where cyan is used

### Add New Pages

1. Create a new component in `frontend/src/pages/`
2. Add route in `frontend/src/App.js`
3. Add navigation link in `frontend/src/components/Navbar.jsx`

## 🧪 Development Mode

For local development without Docker:

### Frontend

```bash
cd frontend
yarn install
yarn start
```

Runs on http://localhost:3000

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```

Runs on http://localhost:8001

## 📊 Monitoring & Maintenance

### View Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f frontend
docker compose logs -f backend
```

### Restart Services

```bash
# Restart all
docker compose restart

# Restart specific service
docker compose restart frontend
```

### Update Application

```bash
# Pull latest changes
git pull

# Rebuild and restart
docker compose down
docker compose up -d --build
```

### Health Checks

```bash
# Backend health
curl http://localhost:8001/api/health

# Frontend
curl http://localhost
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find process using port 80
sudo lsof -i :80

# Kill process
sudo kill -9 <PID>
```

### Container Won't Start

```bash
# Check logs
docker compose logs

# Remove old containers and rebuild
docker compose down -v
docker compose up -d --build
```

### Frontend Can't Connect to Backend

1. Check if backend is running: `docker compose ps`
2. Verify backend URL in frontend build
3. Check network connectivity between containers
4. Verify CORS settings in backend

## 📦 Project Structure

```
portfolio-website/
├── frontend/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── data/            # Mock data
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/                  # FastAPI backend
│   ├── server.py            # Main server file
│   ├── requirements.txt
│   └── .env
├── Dockerfile.frontend       # Frontend Docker image
├── Dockerfile.backend        # Backend Docker image
├── docker-compose.yml        # Docker Compose config
├── nginx.conf                # Nginx configuration
└── README.md                 # This file
```

## 🔐 Security Considerations

- Never commit sensitive data (API keys, passwords) to the repository
- Use environment variables for configuration
- Keep Docker images updated
- Enable SSL/HTTPS in production
- Configure firewall rules properly
- Regular security updates: `sudo apt update && sudo apt upgrade`

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

MIT License - feel free to use this project for your portfolio!

## 📧 Contact

For questions or support, please reach out via the contact information in the portfolio.

---

**Built with ❤️ using React, FastAPI, and Docker**