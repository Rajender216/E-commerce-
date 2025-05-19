# 🛒 MERN E-Commerce Website

A modern, full-stack E-Commerce web application built using the **MERN stack** with secure user authentication and integrated payment gateways (Stripe & Razorpay). The frontend is built with **Vite + React** (no Redux), and the UI is styled using **Tailwind CSS**.

---

## 🚀 Features

### 🧑 User
- User registration & login (JWT-based authentication)
- Browse and search products
- Add/remove items to/from cart
- Checkout with secure payment gateways (Stripe and Razorpay)
- View order history
- Product filtering & responsive UI

### 🔧 Admin
- Add/edit/delete products
- Manage users
- View/manage orders
- Dashboard overview

---

## 🛠️ Tech Stack

### Frontend
- **React 19 (via Vite)**
- **Tailwind CSS**
- **React Router v7**
- **Axios** (for API communication)
- **React Toastify** (for notifications)
- **Heroicons + Slick Carousel** (for UI/UX)

### Backend
- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **JWT for authentication**
- **bcrypt for password hashing**
- **Stripe & Razorpay** (payment integration)
- **Cloudinary** (optional for product image storage)

---

## 🔧 Setup Instructions

### Prerequisites
- Node.js
- MongoDB
- Stripe & Razorpay account keys

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mern-ecommerce.git
cd mern-ecommerce

cd backend
npm install

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

npm run server

cd ../frontend
npm install
npm run dev

💳 Payment Gateway Integration
Stripe Checkout API: Secure card payments

Razorpay: UPI, Netbanking, Wallets, and more

Users can choose from multiple payment methods at checkout.

🧪 Testing
Use Postman to test backend APIs

Frontend can be tested manually using browser

Payment gateway test keys allow sandbox payments

📦 Deployment
You can deploy:

Frontend on Vercel / Netlify

Backend on Render, Railway or VPS

MongoDB on MongoDB Atlas

