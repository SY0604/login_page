import React, { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage(null);

        try {
            const response = await fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Login failed. Check your credentials.");
            }

            const data = await response.json();
            setMessage(`Login successful! Token: ${data.token}`);
            localStorage.setItem("token", data.token);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
    );
}

export default LoginPage;
