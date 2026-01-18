# 🚗 Car Rental – Full Stack MERN Application

🔗 **Live Link:** https://car-rental-9358d.web.app   

Car Rental is a **modern, responsive, and feature-rich car rental platform** built with the MERN stack.  
It allows users to **browse, search, filter, sort, and book cars**, while authenticated users can manage cars and bookings through a **dedicated dashboard**.

---

## ✨ Features

### 🚘 Car Browsing & Booking
- Browse cars with detailed information
- Search cars by name
- Filter cars by brand
- Sort cars by:
  - Price (Low → High)
  - Price (High → Low)
  - Newest → Oldest
- Car booking system with authentication
- Add, update, and delete cars (protected routes)

### 🧭 Modern UI & UX
- Dark / Light theme toggle
- Fully responsive design
- Smooth scrolling
- Framer Motion animations
- Slider / carousel for car showcase

### 📊 Dashboard
- Separate dashboard layout
- Overview with charts & statistics
- Profile update functionality
- Dashboard navigation:
  - Overview
  - My Bookings
  - Car Listings
  - Add New Car

### 🔐 Authentication & Security
- Firebase Authentication (Email & Password)
- Protected routes for bookings and dashboard access

### 📬 Communication
- Newsletter subscription system
- Contact form (messages delivered to email)
- Toast notifications & alert feedback

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- DaisyUI
- Framer Motion
- Swiper
- Axios
- React Icons
- React Tooltip
- React Toastify
- SweetAlert2 

### Backend
- Node.js
- Express.js
- MongoDB
- CORS
- Dotenv

### Authentication
- Firebase

### Hosting
- Client: Firebase
- Server: Vercel 

---

## 📦 Dependencies

### Client

```
react
react-dom
react-router-dom
axios
tailwindcss
daisyui
lenis
framer-motion
react-tooltip
react-icons
react-toastify
sweetalert2
swiper
```

### Server

```
express
cors
dotenv
mongodb
nodemon
```

---

## 🧑‍💻 Run Project Locally

### 1️⃣ Clone the Repository

```
git clone https://github.com/kamrulhasanPro/Car-Rental-Client.git
git clone https://github.com/kamrulhasanPro/Car-Rental-Server.git
```

### 2️⃣ Client Setup

```
cd Car-Rental-Client
npm install
npm run dev
```
Create a `.env` file in the client folder and add Firebase configuration keys.



### 3️⃣ Server Setup

```
cd Car-Rental-Server
npm install
```

Create a `.env` file in the server folder:

```
MONGO_URI=your_mongo_connection_string
```

Start the server:

```
npm start
```
---

## 🚀 Future Improvements
- Payment gateway integration
- Admin role management
- Email confirmation for bookings

---
## 👨‍💻 Author

**Kamrul Hasan Miazi**
Frontend / MERN Stack Developer
---

## 🎉 Thank You

Explore the project and feel free to contribute!

