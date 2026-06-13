# 🎵 Spotify Backend API

A production-style backend API for a Spotify-like music streaming platform built with **Node.js**, **Express.js**, and **MongoDB**.

This project implements **Role-Based Authentication & Authorization** where: 

- 👤 **Normal Users** can browse and listen to music.
- 🎤 **Artists** can upload and manage their own music and albums.

Music files are uploaded to a **Cloud Storage Provider**, and only the generated file URLs are stored in MongoDB.

---

# 🚀 Features

## 🔐 Authentication & Authorization
- JWT-based Authentication
- Secure Protected Routes
- Role-Based Access Control
- Artist-only APIs
- Token Verification Middleware

---

## 🎵 Music Features
- Upload Music
- Stream Music Metadata
- Fetch All Songs
- Populate Artist Information
- Limit Songs for Optimized Performance
- Artist-specific Music Management

---

## 💿 Album Features
- Create Albums
- Fetch All Albums
- Get Album by ID
- Populate Album Songs & Artist Details

---

## ☁️ Cloud Storage Integration
- Upload audio files to cloud storage
- Store only file URLs in database
- Optimized backend storage handling

---

## 🧠 Production-Level Backend Structure
- MVC Architecture
- Separate Routes, Controllers, Models & Services
- Middleware-based Authorization
- Clean and Scalable Folder Structure

---

# 🛠️ Tech Stack

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- JWT (jsonwebtoken)

## File Upload
- Multer

## Cloud Storage
- ImageKit / Cloud Storage Service

## Environment Management
- dotenv

---

# 📁 Folder Structure

```bash
src
│
├── controllers
│   ├── auth.controller.js
│   └── music.controller.js
│
├── db
│   └── db.js
│
├── middlewares
│   └── auth.middleware.js
│
├── models
│   ├── album.model.js
│   ├── music.model.js
│   └── user.model.js
│
├── routes
│   ├── auth.routes.js
│   └── music.routes.js
│
├── services
│   └── storage.service.js
│
├── app.js
└── server.js