import React, { useState } from "react";

function FetchWithErrorPage() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        setError(null);

        fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data. Endpoint not found.");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    };

    return (
        <div className="container mt-5">
            <h2>Handle API Errors Gracefully</h2>
            {loading && (
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            {error && <div className="alert alert-danger">{error}</div>}
            {data && <div className="alert alert-success">Data fetched successfully!</div>}
            <button onClick={fetchData} className="btn btn-primary mt-3">
                Retry
            </button>
        </div>
    );
}

export default FetchWithErrorPage;
