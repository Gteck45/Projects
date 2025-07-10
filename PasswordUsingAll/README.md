# PassOP - Your Own Password Manager

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Redux-9.2.0-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Express-4.21.2-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.7-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

## 📋 Overview

PassOP is a secure, user-friendly password manager that helps you store and manage your website credentials. With PassOP, you can easily save, edit, and delete your passwords while having quick access to them whenever needed.



## ✨ Features

- **Secure Password Storage**: Store your website URLs, usernames, and passwords securely
- **Password Management**: Add, edit, and delete password entries with ease
- **Copy to Clipboard**: Quickly copy your credentials with a single click
- **Password Visibility Toggle**: Show/hide passwords with a convenient eye icon
- **Alphabetical Sorting**: Passwords are automatically sorted alphabetically by site name
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Toast Notifications**: Get feedback on actions with elegant toast notifications

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern UI library for building interactive user interfaces
- **Redux Toolkit**: State management for React applications
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Toastify**: Toast notifications for user feedback
- **Axios**: Promise-based HTTP client for API requests
- **UUID**: For generating unique identifiers
- **Lord Icon**: Animated icons for enhanced user experience

### Backend
- **Express.js**: Fast, unopinionated web framework for Node.js
- **Node-fetch**: Lightweight module for making HTTP requests
- **CORS**: Cross-Origin Resource Sharing middleware
- **dotenv**: Environment variable management
- **MongoDB**: Database integration (via CrudCrud API)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/passop.git
   cd passop
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. Create a `.env` file in the backend directory:
   ```
   crudcrud_URI=https://crudcrud.com/api/YOUR_CRUDCRUD_API_KEY/data
   ```
   Note: You'll need to get a free API key from [CrudCrud](https://crudcrud.com/)

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   node server.js
   ```

2. In a new terminal, start the frontend development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📝 Usage

### Adding a Password
1. Enter the website URL, username, and password in the input fields
2. Click the "Save" button

### Editing a Password
1. Click the edit icon (pencil) next to the password entry
2. Modify the details in the input fields
3. Click the "Save" button

### Deleting a Password
1. Click the delete icon (trash) next to the password entry
2. Confirm the deletion when prompted

### Copying Credentials
- Click the copy icon next to any credential to copy it to your clipboard

### Refreshing Data
- Click the "refresh" button at the top of the page to fetch the latest data

## 🔒 Security Considerations

- This application uses client-side storage and a simple backend
- For production use, consider implementing:
  - End-to-end encryption
  - Secure authentication
  - HTTPS enforcement
  - Rate limiting
  - Regular security audits

## 🧩 Project Structure

```
passop/
├── backend/               # Backend server code
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│   └── server.js          # Express server
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # React components
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Manager.jsx    # Main password manager component
│   │   └── Navbar.jsx     # Navigation bar component
│   ├── redux/             # Redux state management
│   │   ├── slice/         # Redux slices
│   │   │   └── PassSlice.js # Password slice
│   │   └── store.js       # Redux store configuration
│   ├── App.css            # App-specific styles
│   ├── App.jsx            # Main App component
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── .gitignore             # Git ignore file
├── index.html             # HTML entry point
├── package.json           # Frontend dependencies
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [CrudCrud](https://crudcrud.com/)
- [Lord Icon](https://lordicon.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

---

<div align="center">
  Created with ❤️ by Gteck45
</div>
