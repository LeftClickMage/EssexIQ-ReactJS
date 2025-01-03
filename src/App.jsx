import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Index from "./Index.jsx";
import Instructors from "./Instructors.jsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div style={{ marginTop: "100px" }}></div>
                <Routes>
                    <Route index element={<Index />} />
                    <Route path="/instructors" element={<Instructors />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
