import React, { useState, useEffect } from "react";

function FetchUsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="container mt-5">
            <h2>Fetch and Display Users</h2>
            <div>
                {users.map((user) => (
                    <div key={user.id} className="card p-3">
                        <h5>{user.name}</h5>
                        <p className="text-muted">{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FetchUsersPage;
