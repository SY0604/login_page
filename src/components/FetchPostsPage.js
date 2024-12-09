import React, { useState, useEffect } from "react";

function FetchPostsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Fetch and Display Posts</h2>
            {loading ? (
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div>
                    {posts.slice(0, 10).map((post) => (
                        <div key={post.id} className="card p-3">
                            <h5>{post.title}</h5>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FetchPostsPage;
