import React, { useState } from "react";

function MasterDetailPage() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const fetchUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    };

    const fetchUserDetails = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setSelectedUser(data))
            .catch((error) => console.error("Error fetching user details:", error));
    };

    React.useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Master-Detail View</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button
                                className="btn btn-info btn-sm"
                                onClick={() => fetchUserDetails(user.id)}
                            >
                                View Details
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {selectedUser && (
                <div className="mt-4">
                    <h3>User Details</h3>
                    <p><strong>Name:</strong> {selectedUser.name}</p>
                    <p><strong>Email:</strong> {selectedUser.email}</p>
                    <p><strong>Phone:</strong> {selectedUser.phone}</p>
                    <p><strong>Website:</strong> {selectedUser.website}</p>
                </div>
            )}
        </div>
    );
}

export default MasterDetailPage;
