"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function HamburgerMenu({ isOpen = false, colorType = "white" }) {
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        const getColor = (type) => {
            switch (type) {
                case "white":
                    return "#ffffff";
                case "purple":
                    return "#627CE0";
                default:
                    return "#ffffff";
            }
        };
        setColor(getColor(colorType));
    }, [colorType]);

    return (
        <div className={`${styles.hamburgerMobile} ${isOpen ? styles.open : ""}`}>
            <span style={{ backgroundColor: color }}></span>
            <span style={{ backgroundColor: color }}></span>
            <span style={{ backgroundColor: color }}></span>
        </div>
    );
}