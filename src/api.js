const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // Change this when deploying

export const uploadResume = async (file) => {
    const formData = new FormData();
    formData.append("resume", file);

    const response = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        body: formData
    });

    return response.json();
};

export const fetchJobs = async (skills) => {
    const response = await fetch(`${API_BASE_URL}/get_jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills })
    });

    return response.json();
};
