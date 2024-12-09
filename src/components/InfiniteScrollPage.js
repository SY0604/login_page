import React, { useState, useEffect } from "react";

function InfiniteScrollPage() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchPosts = () => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
            .then((response) => response.json())
            .then((data) => {
                setPosts((prevPosts) => [...prevPosts, ...data]);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.scrollHeight
        ) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="container mt-5">
            <h2>Infinite Scrolling</h2>
            <ul className="list-group">
                {posts.map((post) => (
                    <li key={post.id} className="list-group-item">
                        {post.title}
                    </li>
                ))}
            </ul>
            {loading && (
                <div className="text-center mt-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InfiniteScrollPage;
