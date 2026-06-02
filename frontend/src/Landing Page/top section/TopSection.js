import React from "react";

import Header  from "./Header"
import Middle from "./Middle"

export default function TopSection()
{
    const gradientStyle = 
    {
        background: "linear-gradient(to bottom, #F2B1B5 0%, #571397 100%)",
        height: "693px", 
        width: "100%", 
    };
    
    return (
        <div style={gradientStyle}>
            <Header />
            <Middle />
        </div>
    )
}