# 🚀 Team Management Backend - API

## 📌 Project Overview

This repository contains the **backend** for the app, a robust and scalable project management API built with **Node.js**, **Express**, and **MongoDB**.  
It is designed to handle core business logic for a team collaboration SaaS platform, focusing on user authentication, workspace management, project and task handling, and role-based permissions.

---

## 🌟 Key Features  

- 🔐 **Authentication** (Google Sign-In, Email, Password)  
- 🏢 **Create & Manage Multiple Workspaces**  
- 📊 **Projects Management**  
- ✅ **Tasks** (CRUD, Status, Priority, Assignee)  
- 👥 **Roles & Permissions** (Owner, Admin, Member)  
- ✉️ **Invite Members to Workspaces**  
- 🔍 **Filters & Search** (Status, Priority, AssignedTo)  
- 📈 **Analytics Dashboard**  
- 📅 **Pagination & Load More**  
- 🔒 **Cookie Session Management**  
- 🚪 **Logout & Session Termination**  
- 🌱 **Seeding** for Test Data  
- 💾 **Mongoose Transactions** for Robust Data Integrity   

---

## 🛠️ Technologies Used

- **Node.js & Express.js** for building the REST API  
- **MongoDB & Mongoose** for data storage and schema modeling  
- **Google OAuth 2.0** for seamless Google Sign-In integration  
- **TypeScript** for type safety and maintainability  
- **Cookie-based session management** for user sessions  

---

## ⚙️ Getting Started

### 1. Setup Environment Variables

Create a `.env` file inside the `backend` folder with the following configuration:

```env
PORT=8000
NODE_ENV=development
MONGO_URI="your_mongodb_connection_string"

SESSION_SECRET="your_session_secret"

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

FRONTEND_ORIGIN=http://localhost:5173 
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:5173/google/oauth/callback
```

### 2. Run the Application  

Install dependencies and start the development server:  

```bash  
npm install  
npm run dev  
```  

Access the backend at `http://localhost:8000`.  
