import React, { useState, useEffect } from "react";

function DebouncedSearchPage() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    useEffect(() => {
        if (debouncedTerm) {
            fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${debouncedTerm}`)
                .then((response) => response.json())
                .then((data) => setPosts(data))
                .catch((error) => console.error("Error fetching posts:", error));
        }
    }, [debouncedTerm]);

    return (
        <div className="container mt-5">
            <h2>Debounced Search</h2>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="list-group">
                {posts.map((post) => (
                    <li key={post.id} className="list-group-item">
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DebouncedSearchPage;
