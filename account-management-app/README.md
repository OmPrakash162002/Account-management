Account Management System

Project Overview

The Account Management System is a modern, responsive web application designed to demonstrate a basic user registration and login workflow. Built with React and styled entirely using Tailwind CSS, this project provides a clean, fast, and adaptive user interface.

The application leverages local browser storage (localStorage) for simple data persistence, simulating a database environment for demonstration purposes.

🚀 Features

User Registration: Allows new users to create an account with a name, email, and password.

User Login: Authenticates registered users based on stored credentials.

Session Persistence: Maintains the logged-in user state using localStorage.

Profile View: Displays user information upon successful login.

Responsive Design: Optimized for seamless use across desktop, tablet, and mobile devices, thanks to Tailwind CSS.

Modern UI: Features a clean card layout, shadows, and subtle hover animations for a premium look and feel.

🛠️ Technologies Used

The system is built upon a minimal and robust modern stack:

Frontend Framework: React (Functional Components & Hooks)

Styling: Tailwind CSS (Utility-First CSS Framework)

State Management: React's built-in useState.

Data Persistence: Browser localStorage (for non-production state management).

💾 Data Persistence (Important Note)

This application uses the browser's localStorage API for storing registered user data (emails, encrypted passwords, and user profiles).

How it works:

Registration: User details are converted to JSON and stored under a specific key (e.g., registeredUsers) in localStorage.

Login: The application retrieves the stored data, parses the JSON string back into a JavaScript object, and checks if the provided credentials match a registered user.

💻 Setup and Installation

Follow these steps to get the project running locally:

Prerequisites

Node.js (LTS recommended)

npm 

Steps

Clone the Repository:

git clone [Your Repository URL]
cd account-management-system


Install Dependencies:

npm install 

Start the Development Server:

npm start

