import React from "react";

function LogoutPage() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("Logged out successfully!");
    };

    return (
        <div className="container mt-5">
            <h2>Logout</h2>
            <p>Click the button below to log out.</p>
            <button onClick={handleLogout} className="btn btn-danger">
                Logout
            </button>
        </div>
    );
}

export default LogoutPage;
