import React, { useState } from "react";
import { uploadResume } from "../api";

const ResumeUpload = ({ onSkillsExtracted }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setError("");
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setError("Please select a resume file to upload.");
            return;
        }

        setUploading(true);
        try {
            const result = await uploadResume(selectedFile);
            if (result.skills) {
                onSkillsExtracted(result.skills);
            } else {
                setError("Error extracting skills.");
            }
        } catch (err) {
            setError("Upload failed. Try again.");
        }
        setUploading(false);
    };

    return (
        <div className="upload-container">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? "Uploading..." : "Upload Resume"}
            </button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default ResumeUpload;
