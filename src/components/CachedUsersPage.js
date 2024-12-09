import React, { useState } from "react";

function CachedUsersPage() {
    const [users, setUsers] = useState([]);
    const [cache, setCache] = useState({});

    const fetchUsers = () => {
        // Check cache before making an API call
        if (cache["users"]) {
            setUsers(cache["users"]);
            console.log("Loaded from cache");
        } else {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => {
                    setUsers(data);
                    setCache({ ...cache, users: data });
                    console.log("Fetched from API");
                })
                .catch((error) => console.error("Error fetching users:", error));
        }
    };

    return (
        <div className="container mt-5">
            <h2>Cached User Data</h2>
            <button className="btn btn-primary mb-3" onClick={fetchUsers}>
                Fetch Users
            </button>
            <ul className="list-group">
                {users.map((user) => (
                    <li key={user.id} className="list-group-item">
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CachedUsersPage;
