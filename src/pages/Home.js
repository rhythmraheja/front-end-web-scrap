import React, { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import { fetchJobs } from "../api";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [skills, setSkills] = useState([]);
    const navigate = useNavigate();

    const handleSkillsExtracted = (extractedSkills) => {
        setSkills(extractedSkills);
        fetchJobs(extractedSkills).then((data) => {
            navigate("/jobs", { state: { jobs: data.jobs } });
        });
    };

    return (
        <div className="home-container">
            <h1>Upload Your Resume</h1>
            <ResumeUpload onSkillsExtracted={handleSkillsExtracted} />
        </div>
    );
};

export default Home;
