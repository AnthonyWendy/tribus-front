import React, { useState } from "react";
import { HeaderArea } from "./styled";
import { Link, useLocation } from "react-router-dom";

import { isLogged, doLogout } from "../../../helpers/authHandler";

import DropdownComponent from "../Dropdown";

const Header = (props) => {
    const [logged, setLogged] = useState(isLogged());

    const handleLogout = () => {
        doLogout();
        window.location.href = "/";
    };
    const location = useLocation();

    // render header only if pathname is not login;

    if (location.pathname !== "/login" && location.pathname !== "/principal" && location.pathname !== "/comanda/add" && location.pathname  !== "/comanda/update/:id"  && location.pathname !== "/comanda/list")
        return (
            <HeaderArea>
                <div className="container">
                    <Link to="/" className="title">
                        <img className="bus-header" src="/busWhite.png"/>
                        <h2><b>TriBus</b></h2>
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/config">
                                    <img className="icon" src="/more.png"/>
                                    Configuração
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <img className="icon user" src="/usuario.png"/>
                                    Conta
                                </Link>
                            </li>
                        </ul>
                    
                    </nav>
                </div>
            </HeaderArea>
        ); 
    else
    { if (location.pathname !== "/login" && location.pathname !== "/principal" && location.pathname)
        return (
        <HeaderArea>
            <div className="container">
                    <Link to="/" className="title">
                        <img className="bus-header" src="/busWhite.png"/>
                        <h2><b>TriBus</b></h2>
                    </Link>
                </div>
        </HeaderArea>
    );}
};
export default Header;
