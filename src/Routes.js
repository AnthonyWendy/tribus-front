import React from "react";
import { Routes, Route } from "react-router-dom";

// import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/signUp";

import NotFound from "./Pages/notFound";
import ConfigLinha from "./Pages/Configuracao/linha"
import ConfigReferencia from "./Pages/Configuracao/referencia"
import ConfigRota from "./Pages/Configuracao/rota"

import { Private } from "./components/Private";

export default () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            
            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<SignUp />} />

            <Route path="/config/new/linha" element={<ConfigLinha/>} />

            <Route path="/config/new/referencia" element={<ConfigReferencia/>} />
            
            <Route path="/config/new/rota" element={<ConfigRota/>} />

            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};
