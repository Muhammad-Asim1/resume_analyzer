import React from "react";

import Upper from "./Upper";
import End from "./End";

export default function EndSection() 
{
    const gradientStyle = 
    {
        background: "linear-gradient(to bottom, #F2B1B5 0%, #571397 100%)",
        height: "693px",
        width: "100%",
        position: "relative"
    };

    const upperStyle = 
    {
        position: "relative",
        zIndex: 1
    };

    const endStyle = 
    {
        position: "relative",
        top: "-100px",
        zIndex: 2
    };

    return (
        <div style={gradientStyle}>
            <div style={upperStyle}>
                <Upper />
            </div>
            <div style={endStyle}>
                <End />
            </div>
        </div>
    );
}
