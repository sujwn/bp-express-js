GoLang + MongoDB + Redis RESTful Application Starter
----------------------------------------------------

This project is a 'Boilerplate' or 'Starter' to build RESTful Applications and microservices using [ExpressJS](https://www.npmjs.com/package/express)


Table of Contents
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

Features
--------

- [ExpressJS](https://www.npmjs.com/package/express)
- [JWT Authentication](https://www.npmjs.com/package/jsonwebtoken)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- Request Validation with [Express Validator](https://www.npmjs.com/package/express-validator)
- [Prisma ORM](https://www.npmjs.com/package/@prisma/client)

Prerequisites
-------------

- Git
- PostgreSQL
- Node v16.16.0 or above

Getting Started
---------------
Clone the repository and enjoy

```bash
# Clone Project
git clone https://github.com/sujwn/bp-express-js.git

# Change Directory
cd bp-express-js

# Install All Dependencies
npm i
```

#### Using Local Environment

```bash
# Copy Example Env file
cp ./env.example .env

# Change .env variables value

# Install prisma CLI
npm install -g prisma

# Initiate prisma
npx prisma init

# Define data model in prisma/schema.prisma

# Run a migration 
npx prisma migrate dev
```

The application starts at port 5000 by default

Project Structure
-----------------

```
├── _config             # contains all configuration needed
├── controllers         # contains api functions and main business logic
├── helpers             # handler functions
├── middlewares         # request/response middlewares
├── routes              # router initialization
└── services            # other service & third-party integration
```

### Tech Stack
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)