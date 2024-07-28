# Farm Product Platform

This project is a platform where consumers can directly buy organic vegetables and fruits from nearby farmers online. It follows a microservices architecture and is deployed on the cloud using various technologies like Kubernetes (K8s), Docker, Next.js, Node.js, and AWS.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [CI/CD Pipeline](#cicd-pipeline)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- Direct purchase of organic products from local farmers.
- Microservices architecture for better scalability and maintainability.
- Responsive frontend using Next.js.
- Backend services built with Express.js.
- Secure and reliable SQL database using PostgreSQL.
- Continuous Integration and Continuous Deployment (CI/CD) with GitHub Actions.
- Deployment on cloud using Kubernetes and Docker.
- Frontend deployment on Vercel.

## Technologies Used
- **Frontend:** Next.js
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Containerization:** Docker
- **Orchestration:** Kubernetes
- **Cloud Platform:** AWS
- **CI/CD:** GitHub Actions
- **Frontend Deployment:** Vercel

## Architecture
The platform follows a microservices architecture. The main components include:
- **Frontend Service:** Built with Next.js, deployed on Vercel, and also in Kubernetes pods.
- **Backend Services:** Multiple services built with Express.js handling different functionalities.
- **Database Service:** PostgreSQL database hosted on AWS RDS.
- **CI/CD Pipeline:** GitHub Actions for automating the build, test, and deployment process.

## Getting Started
### Prerequisites
- Docker
- Kubernetes
- Node.js
- PostgreSQL
- AWS account
- Vercel account

## CI/CD Pipeline
The CI/CD pipeline is set up using GitHub Actions. It automates the following processes:
- **Build:** Build the Docker images for frontend and backend services.
- **Test:** Run the test suites.
- **Deploy:** Deploy the frontend to Vercel and all services to Kubernetes.

## Deployment
### Frontend
The frontend is deployed on Vercel.

### Backend and Database
The backend services and PostgreSQL database are deployed on Kubernetes.

## Contributing
Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
