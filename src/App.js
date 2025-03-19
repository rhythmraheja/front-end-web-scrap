import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobResults from "./pages/JobResults";
import NotFound from "./pages/NotFound";
import "./styles.css";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobResults />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default App;
