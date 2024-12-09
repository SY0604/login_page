import React, { useState } from "react";

function DynamicPostsPage() {
    const [userId, setUserId] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = () => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    };

    return (
        <div className="container mt-5">
            <h2>Fetch Posts by User ID</h2>
            <div className="mb-3">
                <label>User ID</label>
                <input
                    type="number"
                    className="form-control"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter User ID"
                />
                <button
                    className="btn btn-primary mt-2"
                    onClick={fetchPosts}
                    disabled={!userId}
                >
                    Fetch Posts
                </button>
            </div>
            {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <ul className="list-group">
                    {posts.map((post) => (
                        <li key={post.id} className="list-group-item">
                            {post.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DynamicPostsPage;
