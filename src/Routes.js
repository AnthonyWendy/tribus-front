import React from "react";
import { Routes, Route } from "react-router-dom";

// import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/signUp";

import NotFound from "./Pages/notFound";
import newBairro from "./Pages/newBairro";

import { Private } from "./components/Private";

export default () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            
            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<SignUp />} />

            <Route
                path="/cadastro/bairro"
                element={<Private component={newBairro} />}
            />

            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};
