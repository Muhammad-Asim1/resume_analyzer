import React from "react";
import bussinessVision from "../images/bussinessVision.png"
import { Link } from "react-router-dom";

export default function Middle()
{
    const dimensions = 
    {
        width: "475px",
        height: "521px",
        marginTop: '81px',
        marginLeft: '112px',
    };
    return (
        <div className="middle">
            <div className="non-picture">
                <div className="text">
                    <div className="big">
                        <p>Empowering Your Career with AI-Driven Insights</p>
                    </div>
                    <div className="small">
                        <p>Analyze your resume, discover your strengths, and find your perfect job match—all in one place.</p>
                    </div>
                </div>

                <div className="startFree">
                    <Link to="/logIns" style={{ textDecoration: "none", color: "inherit" }}>
                        <p>Get Started</p>
                    </Link>
                </div>
                <div className="simple">
                    <p>Simple, fast and no credit card needed</p>
                </div>
            </div>

            <div className="picture">
                <img src={bussinessVision} style={dimensions}/>
            </div>
        </div>
    )
}