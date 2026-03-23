# MagicBricks Clone (AntiGravity Generated Project)

This project is a simplified **MagicBricks-style property search web application** generated using **AntiGravity**.  
Users can search properties available in **Bangalore** and **Mumbai** with filters such as **Rent/Buy** and **Budget**.

---

# Tech Stack

- **Frontend:** React (Vite)
- **Backend:** FastAPI
- **Database:** SQLite
- **API Server:** Uvicorn
- **Package Manager:** npm

---
# Project Structure

antigravity/
│
├── backend/
│ ├── main.py
│ ├── database.db
│ └── venv/
│
├── frontend/
│ ├── src/
│ ├── package.json
│ └── vite.config.js
│
└── README.md

# Installation Guide

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/antigravity-magicbricks-clone.git
cd antigravity-magicbricks-clone
Backend Setup
2️⃣ Navigate to Backend
cd backend
3️⃣ Create Virtual Environment
python -m venv venv
4️⃣ Activate Virtual Environment
Windows
venv\Scripts\activate
Linux / Mac
source venv/bin/activate
5️⃣ Install Backend Dependencies
pip install fastapi uvicorn
6️⃣ Run Backend Server
uvicorn main:app --reload

Backend will run on:

http://127.0.0.1:8000

API Docs:
http://127.0.0.1:8000/docs
Frontend Setup
7️⃣ Navigate to Frontend
cd ../frontend
8️⃣ Install Dependencies
npm install
9️⃣ Start Development Server
npm run dev

Frontend will run on:

http://localhost:5173
