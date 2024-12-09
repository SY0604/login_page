import React, { useState } from "react";

function PaginatedUsersPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState([]);

    const fetchUsers = (page) => {
        fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=2`)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    };

    const handleNext = () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        fetchUsers(nextPage);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            fetchUsers(prevPage);
        }
    };

    // Fetch initial data when component mounts
    React.useEffect(() => {
        fetchUsers(currentPage);
    }, []);

    return (
        <div className="container mt-5">
            <h2>Paginated User List</h2>
            <ul className="list-group">
                {users.map((user) => (
                    <li key={user.id} className="list-group-item">
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
            <div className="mt-3">
                <button
                    className="btn btn-secondary me-2"
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button className="btn btn-primary" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default PaginatedUsersPage;
