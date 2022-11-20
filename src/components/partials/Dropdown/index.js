import React, { useState, useEffect } from "react";
import { DropdownStyle } from "./styled";

const DropdownComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [style, setStyle] = useState({ display: "none" });

    useEffect(() => {
        const toggleDropdown = () => {
            setStyle({ display: isOpen ? "block" : "none" });
        };

        toggleDropdown();

        const timeOut = setTimeout(() => {
            setStyle({ display: "none" });
        }, 4000);

        return () => {
            clearTimeout(timeOut);
        };
    }, [isOpen]);

    return (
        <DropdownStyle
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <span className="placeholder">{props.placeholder}</span>
            <ul style={style} id="dropdown-content">
                {props.children}
            </ul>
        </DropdownStyle>
    );
};

export default DropdownComponent;
