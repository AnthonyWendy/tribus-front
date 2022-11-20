import React from "react";

import { isLogged } from "../helpers/authHandler";


export const Private = (props) => {
    if (isLogged()) return <props.component />;
    window.location.href = "/login";
};
