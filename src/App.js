import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import FetchUsersPage from "./components/FetchUsersPage";
import FetchPostsPage from "./components/FetchPostsPage";
import FetchWithErrorPage from "./components/FetchWithErrorPage";
import DynamicPostsPage from "./components/DynamicPostsPage";
import PaginatedUsersPage from "./components/PaginatedUsersPage";
import SearchablePostsPage from "./components/SearchablePostsPage";
import CachedUsersPage from "./components/CachedUsersPage";
import MasterDetailPage from "./components/MasterDetailPage";
import DebouncedSearchPage from "./components/DebouncedSearchPage";
import InfiniteScrollPage from "./components/InfiniteScrollPage";

function App() {
  return (
      <Router>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              React Task App
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
                {/* Links for the old tasks */}
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

                {/* Links for the new tasks */}
                <li className="nav-item">
                  <Link className="nav-link" to="/dynamic-posts">
                    Dynamic Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/paginated-users">
                    Paginated Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/searchable-posts">
                    Searchable Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cached-users">
                    Cached Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/master-detail">
                    Master-Detail View
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/debounced-search">
                    Debounced Search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/infinite-scroll">
                    Infinite Scroll
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes for all tasks */}
        <Routes>
          {/* Old Tasks */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/fetch-users" element={<FetchUsersPage />} />
          <Route path="/fetch-posts" element={<FetchPostsPage />} />
          <Route path="/fetch-error" element={<FetchWithErrorPage />} />

          {/* New Tasks */}
          <Route path="/dynamic-posts" element={<DynamicPostsPage />} />
          <Route path="/paginated-users" element={<PaginatedUsersPage />} />
          <Route path="/searchable-posts" element={<SearchablePostsPage />} />
          <Route path="/cached-users" element={<CachedUsersPage />} />
          <Route path="/master-detail" element={<MasterDetailPage />} />
          <Route path="/debounced-search" element={<DebouncedSearchPage />} />
          <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />

          {/* Default Route */}
          <Route
              path="/"
              element={
                <div className="container mt-5 text-center">
                  <h1>Welcome to React Task App!</h1>
                  <p>Select a task from the navigation menu above to get started.</p>
                </div>
              }
          />
        </Routes>
      </Router>
  );
}

export default App;
