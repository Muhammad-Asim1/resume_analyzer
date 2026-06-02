import React from "react";

import Text  from "./Text";
import Upload from "./Upload"

export default function MiddleSection()
{
    const gradientStyle = 
    {
        background: "linear-gradient(to bottom, #571397  28%, #F2B1B5 83%)",
        height: "693px", 
        width: "100%", 
    };
    
    return (
        <div style={gradientStyle}>
            <Text />
            <Upload />
        </div>
    )
}

