import React from "react";

import squigly from "../images/squigly.png"

export default function Upper()
{
    return (
        <div className="endTop"> 
            <div className="nonImage">
                <div className="recomm">
                    <p>AI Powered Job Recommender</p>
                </div>
                <div className="recomm-desc">
                    <p>Analyze your resume, discover your strengths, and find your perfect job match—all in one place.</p>
                </div>
                {/* <div className="started-button">
                    <p>Get Started</p>
                </div> */}
            </div>

            <div className="Image">
                <img src={squigly} className="squigly"/>
            </div>
        </div>
    )
}