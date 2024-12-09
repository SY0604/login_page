import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import FetchUsersPage from "./components/FetchUsersPage";
import FetchPostsPage from "./components/FetchPostsPage";
import FetchWithErrorPage from "./components/FetchWithErrorPage";

function App() {
  return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              React Tasks
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/fetch-users">
                    Fetch Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/fetch-posts">
                    Fetch Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/fetch-error">
                    Fetch with Error
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <Routes>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/logout" element={<LogoutPage/>}/>
          <Route path="/fetch-users" element={<FetchUsersPage/>}/>
          <Route path="/fetch-posts" element={<FetchPostsPage/>}/>
          <Route path="/fetch-error" element={<FetchWithErrorPage/>}/>
          <Route
              path="/"
              element={<div className="container mt-5">Welcome to the React Task App!</div>}
          />
        </Routes>
      </Router>
  );
}

export default App;
