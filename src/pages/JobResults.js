import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const jobs = location.state?.jobs || [];

    return (
        <div className="results-container">
            <h1>Job Recommendations</h1>
            {jobs.length > 0 ? (
                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>
                            <h2>{job.title}</h2>
                            <p>{job.company} - {job.location}</p>
                            <a href={job.link} target="_blank" rel="noopener noreferrer">View Job</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No jobs found.</p>
            )}
            <button onClick={() => navigate("/")}>Back</button>
        </div>
    );
};

export default JobResults;
