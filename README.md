# 🎭 Cultural Board Portal

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.13-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![AdminJS](https://img.shields.io/badge/AdminJS-7.8.15-4B32C3?style=for-the-badge)
![Express](https://img.shields.io/badge/Express-Latest-000000?style=for-the-badge&logo=express&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A full-stack web portal for managing cultural activities, clubs, and events at IIT Guwahati**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Setup](#-getting-started) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Docker Setup](#docker-setup)
- [API Documentation](#-api-documentation)
- [Admin Panel](#-admin-panel)
- [Contributing](#-contributing)
- [License](#-license)
- [Maintainers](#-maintainers)

---

## 🎯 Overview

The **Cultural Board Portal** is a comprehensive full-stack web application designed to serve as the central hub for all cultural activities at IIT Guwahati. It provides an intuitive interface for students to explore clubs, discover events, and stay connected with the vibrant cultural scene on campus.

### Key Highlights:
- 🎨 **Modern UI/UX** - Built with React and TailwindCSS for a responsive, beautiful experience
- 🔐 **Secure Admin Panel** - Powered by AdminJS for easy content management
- 📱 **Mobile-First Design** - Fully responsive across all devices
- 🚀 **Performance Optimized** - Fast load times and smooth interactions
- 🐳 **Docker Support** - Easy deployment with containerization

---

## ✨ Features

### User-Facing Features
- 🏠 **Dynamic Homepage** - Showcasing latest events and announcements
- 🎭 **Club Directory** - Browse all cultural clubs with detailed information
- 📅 **Event Calendar** - Stay updated with upcoming cultural events
- 📞 **Contact Directory** - Easy access to club and event coordinators
- 🖼️ **Media Gallery** - View photos and videos from past events
- 📄 **PDF Resources** - Access important documents and guidelines

### Admin Features
- 📊 **Content Management** - CRUD operations for clubs, events, and contacts
- 🖼️ **Image Upload** - Manage event and club images
- 👥 **Team Management** - Update team member information
- 📝 **Homepage Control** - Customize homepage content dynamically
- 🔒 **Secure Authentication** - Protected admin routes with session management

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| React Router | 6.27.0 | Client-side routing |
| TailwindCSS | 3.4.14 | Styling |
| Axios | 1.7.7 | HTTP Client |
| React Icons | 5.3.0 | Icon library |
| Animate.css | 4.1.1 | Animations |
| React Carousel | 3.2.23 | Image carousels |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20+ | Runtime environment |
| Express.js | Latest | Web framework |
| MongoDB | 8.13.1 | Database |
| Mongoose | 8.13.1 | ODM |
| AdminJS | 7.8.15 | Admin panel |
| Multer | 1.4.5 | File uploads |
| Bcrypt | 5.1.1 | Password hashing |
| Express Session | 1.18.1 | Session management |
| CORS | 2.8.5 | Cross-origin support |

### DevOps
- 🐳 **Docker** - Containerization
- 🔄 **Nodemon** - Development auto-reload
- 📦 **npm** - Package management

---

## 📁 Project Structure

```
Cultural_Board_Portal/
├── backend/                        # Backend Node.js application
│   ├── admin_panel/
│   │   └── admin-config.js        # AdminJS configuration
│   ├── controllers/               # Business logic
│   │   ├── auth.controller.js     # Authentication logic
│   │   ├── club.controller.js     # Club management
│   │   ├── contact.controller.js  # Contact management
│   │   ├── event.controller.js    # Event management
│   │   ├── homePage.controller.js # Homepage data
│   │   └── upload.controller.js   # File upload logic
│   ├── models/                    # MongoDB schemas
│   │   ├── aboutUs.js
│   │   ├── clubMain.js
│   │   ├── contact.js
│   │   ├── event.js
│   │   ├── facilities.js
│   │   ├── general.js
│   │   └── teamMember.js
│   ├── routes/                    # API routes
│   │   ├── auth.routes.js
│   │   ├── upload.route.js
│   │   └── user.routes.js
│   ├── views/                     # EJS templates
│   │   ├── index.ejs
│   │   └── login.ejs
│   ├── uploads/                   # Uploaded files (gitignored)
│   ├── .env                       # Environment variables (create this)
│   ├── Dockerfile                 # Backend Docker config
│   ├── docker-compose.yml         # Backend services
│   ├── index.js                   # Entry point
│   └── package.json               # Dependencies
│
├── frontend/                      # Frontend React application
│   ├── public/
│   │   ├── images/
│   │   │   ├── clubs/
│   │   │   ├── events/
│   │   │   └── homepage/
│   │   ├── pdfs/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── assets/                # Static assets
│   │   │   ├── images/
│   │   │   └── pdfs/
│   │   ├── components/            # React components
│   │   │   ├── AllClubsHeroSection.js
│   │   │   ├── ClubCard.js
│   │   │   ├── Event.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── HeroSection.js
│   │   │   ├── RoundedDiv.js
│   │   │   └── ZigZagLine.js
│   │   ├── hooks/                 # Custom React hooks
│   │   │   ├── useEventPageData.js
│   │   │   ├── useHomePageData.js
│   │   │   ├── useRoundedStyle.js
│   │   │   └── useScrollDirection.js
│   │   ├── pages/                 # Page components
│   │   │   ├── AllClubsPage.js
│   │   │   ├── ClubPage.js
│   │   │   ├── ContactsPage.js
│   │   │   ├── EventPage.js
│   │   │   └── HomePage.js
│   │   ├── App.js                 # Main App component
│   │   ├── index.js               # Entry point
│   │   └── index.css              # Global styles
│   ├── Dockerfile                 # Frontend Docker config
│   ├── docker-compose.yml         # Frontend services
│   ├── package.json               # Dependencies
│   ├── tailwind.config.js         # TailwindCSS config
│   └── postcss.config.js          # PostCSS config
│
├── README.md                      # This file
└── LICENSE                        # MIT License
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (v6.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
  - Or use MongoDB Atlas (cloud database)
- **Git** - [Download](https://git-scm.com/)
- **Docker** (optional, for containerized deployment) - [Download](https://www.docker.com/)

### Environment Variables

#### Backend Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/cultural_board
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/cultural_board?retryWrites=true&w=majority

# Admin Panel Credentials
ADMIN_EMAIL=admin@culturalboard.com
ADMIN_PASSWORD=your_secure_password_here

# Session & Cookie Configuration
COOKIE_NAME=adminjs
COOKIE_PASSWORD=some-secret-password-that-is-at-least-32-characters-long
SESSION_SECRET=supersecretkey-change-this-in-production

```

#### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:3001

```

> ⚠️ **Security Note**: Never commit `.env` files to version control. Add them to `.gitignore`.

---

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/swciitg/Cultural_Board_Portal.git
cd Cultural_Board_Portal
```

#### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

#### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

### Running Locally

#### Method 1: Run Both Services Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```
The backend server will start at `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
The frontend will start at `http://localhost:3000`

#### Method 2: Using Concurrently (Optional)

You can install `concurrently` to run both servers with one command:

```bash
# In the root directory
npm install -g concurrently

# Create a script to run both
concurrently "cd backend && npm start" "cd frontend && npm start"
```

---

### Docker Setup

#### Using Docker Compose (Recommended)

**Backend:**
```bash
cd backend
docker-compose up --build
```

**Frontend:**
```bash
cd frontend
docker-compose up --build
```

#### Manual Docker Build

**Backend:**
```bash
cd backend
docker build -t cultural-board-backend .
docker run -p 3001:3001 --env-file .env cultural-board-backend
```

**Frontend:**
```bash
cd frontend
docker build -t cultural-board-frontend .
docker run -p 3000:3000 cultural-board-frontend
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:3001
```

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/clubs` | Get all clubs |
| GET | `/api/clubs/:id` | Get club by ID |
| GET | `/api/events` | Get all events |
| GET | `/api/events/:id` | Get event by ID |
| GET | `/api/contacts` | Get all contacts |
| GET | `/api/homepage` | Get homepage data |
| GET | `/api/about` | Get about us information |
| GET | `/api/facilities` | Get facilities information |
| GET | `/api/team` | Get team members |

### File Upload Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/upload/image` | Upload image | Yes |
| POST | `/upload/pdf` | Upload PDF | Yes |

### Example API Request

```javascript
// Fetch all clubs
fetch('http://localhost:3001/api/clubs')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---

## 🔐 Admin Panel

### Accessing the Admin Panel

1. Start the backend server
2. Navigate to: `http://localhost:3001/cultural-board/api/admin`
3. Login with credentials from `.env`:
   - **Email**: Value of `ADMIN_EMAIL`
   - **Password**: Value of `ADMIN_PASSWORD`

### Admin Panel Features

- **Dashboard**: Overview of all resources
- **Clubs Management**: Create, edit, delete clubs
- **Events Management**: Manage event listings
- **Contacts**: Update contact information
- **Team Members**: Manage team member profiles
- **Homepage**: Control homepage content
- **Facilities**: Update facility information
- **About Us**: Edit about section

### Admin Panel Models

The admin panel manages the following MongoDB collections:

1. **AboutUs** - About section content
2. **Contacts** - Contact directory
3. **Events** - Cultural events
4. **Facilities** - Available facilities
5. **TeamMembers** - Team member profiles
6. **ClubMain** - Club information
7. **Homepage** - Homepage dynamic content

---

## 🤝 Contributing

We ❤️ contributions! Whether you're fixing bugs, adding features, or improving documentation, your help makes this project better.

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Click the 'Fork' button at the top right of this repository
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Cultural_Board_Portal.git
   cd Cultural_Board_Portal
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # OR
   git checkout -b fix/bug-fix
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary
   - Test your changes thoroughly

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Amazing new feature"
   ```

   **Commit Message Guidelines:**
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for updates to existing features
   - `Docs:` for documentation changes
   - `Refactor:` for code refactoring

6. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes clearly
   - Wait for review!

### Contribution Guidelines

- 📖 Read our [CONTRIBUTING.md](CONTRIBUTION.md) for detailed guidelines
- 🐛 Report bugs via [GitHub Issues](https://github.com/swciitg/Cultural_Board_Portal/issues)
- 💡 Suggest features via [GitHub Discussions](https://github.com/swciitg/Cultural_Board_Portal/discussions)
- ✅ Ensure all tests pass before submitting PR
- 📝 Update documentation for new features

### Good First Issues

Look for issues tagged with `good first issue` or `hacktoberfest` to get started!

### Code of Conduct

Please be respectful and constructive. We're all here to learn and build together! 🌟

---

## 🎃 Hacktoberfest

This project participates in **Hacktoberfest**! 

- Look for issues tagged with `hacktoberfest`
- PRs must follow contribution guidelines
- Quality over quantity - make meaningful contributions
- Have fun and learn! 🚀

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Student Web Committee, IIT Guwahati

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👥 Maintainers

This project is maintained by the **Student Web Committee, IIT Guwahati**.

### Current Maintainers

- **Student Web Committee Team** - [SWC IITG](https://github.com/swciitg)

### Contact

- 🌐 Website: [swc.iitg.ac.in](https://swc.iitg.ac.in)
- 📧 Email: swc@iitg.ac.in
- 💬 GitHub Discussions: [Join the conversation](https://github.com/swciitg/Cultural_Board_Portal/discussions)

---

## 🙏 Acknowledgments

- Built with ❤️ by the Student Web Committee team
- Designed for the IIT Guwahati community
- Special thanks to all our contributors!
- Powered by open-source technologies

---

## 🗺️ Roadmap

### Current Features (v1.0)
- ✅ Club directory and profiles
- ✅ Event listings and details
- ✅ Contact management
- ✅ Admin panel with AdminJS
- ✅ Image and file uploads
- ✅ Responsive design

### Planned Features (v2.0)
- 🔄 User authentication and profiles
- 📧 Email notifications for events
- 🔍 Advanced search and filtering
- 📊 Analytics dashboard for admins
- 🎫 Event registration system
- 💬 Comments and feedback system
- 🌐 Multi-language support
- 🔔 Push notifications
- 📱 Mobile app (React Native)

---

## 🐛 Known Issues

Track known issues on our [GitHub Issues](https://github.com/swciitg/Cultural_Board_Portal/issues) page.

---

## 📞 Support

Need help? Here's how to get support:

1. 📖 Check the [documentation](#-api-documentation)
2. 🔍 Search [existing issues](https://github.com/swciitg/Cultural_Board_Portal/issues)
3. 💬 Start a [discussion](https://github.com/swciitg/Cultural_Board_Portal/discussions)
4. 🆕 Open a [new issue](https://github.com/swciitg/Cultural_Board_Portal/issues/new)

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/swciitg/Cultural_Board_Portal?style=social)
![GitHub forks](https://img.shields.io/github/forks/swciitg/Cultural_Board_Portal?style=social)
![GitHub issues](https://img.shields.io/github/issues/swciitg/Cultural_Board_Portal)
![GitHub pull requests](https://img.shields.io/github/issues-pr/swciitg/Cultural_Board_Portal)
![GitHub last commit](https://img.shields.io/github/last-commit/swciitg/Cultural_Board_Portal)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [Student Web Committee, IIT Guwahati](https://github.com/swciitg)

[Report Bug](https://github.com/swciitg/Cultural_Board_Portal/issues) • [Request Feature](https://github.com/swciitg/Cultural_Board_Portal/issues) • [Contribute](CONTRIBUTION.md)

</div>
