import React from "react";

import siteWB from "../images/newLogo.svg" 
import Social from "../images/Social.png"
import { Link } from "react-router-dom";

// const dimensions = 
//   {
//     width: "180px",
//     height: "auto",
//     marginTop: "31px",
//     marginLeft: "44px",
//   };

export default function End()
{
    return (
        <div>
            <div className="footer">
                <div className="section1">
                    <img src={siteWB} className="SWB" alt="site logo in black"/>

                    <p className="s1P">Analyze your resume, discover your strengths, and find your perfect job match—all in one place.</p>
                </div>
                <div className="section2">
                    <p className="Use">Support & Resources</p>
                    <p className="bullets pointer"><Link to="/faqs">FAQs</Link></p>
                    <p className="bullets pointer"><Link to="/help">Help Center</Link></p>
                    <p className="bullets pointer"><Link to="/how-it-works">How it Works</Link></p>
                    <p className="bullets pointer"><Link to="/resume-tips">Resume Writing Tips</Link></p>
                    <p className="bullets pointer"><Link to="/interview-guide">Interview Preparation</Link></p>
                </div>

                <div className="section3">
                    <p className="Use">Company</p>
                    <p className="bullets pointer"><Link to="/about">About Us </Link></p> 
                    <p className="bullets pointer"><Link to="/features">AI Resume Analyzer </Link></p>
                    <p className="bullets pointer"><Link to="/features">Job & Course Recommender </Link></p>
                    <p className="bullets pointer"><Link to="/features">Smart Career Insights</Link></p>
                    {/* 
                    <p className="bullets pointer"><Link to="">Teams </Link></p>
                    <p className="bullets pointer"><Link to="/contact">Contact Us </Link></p> */}
                </div>

                <div className="section2">
                    <p className="Use">Legal & Policies</p>
                    <p className="bullets pointer"><Link to="/terms">Terms & Conditions</Link></p>
                    <p className="bullets pointer"><Link to="/privacy">Privacy Policy</Link></p>
                    <p className="bullets pointer"><Link to="/cookies">Cookie Policy</Link></p>
                    <p className="bullets pointer"><Link to="/refunds">Refund Policy</Link></p>
                    <p className="bullets pointer"><Link to="/data-protection">Data Protection</Link></p>
                </div>

                <div className="section4">
                    <p className="Use">Follow Us</p>
                    <p className="bullets pointer"><Link to="#">Follow Us on Instagram</Link></p>
                    <p className="bullets pointer"><Link to="/forum">Join Our Career Forum</Link></p>
                    <p className="bullets pointer"><Link to="/success-stories">Success Stories</Link></p>
                    <p className="bullets pointer"><Link to="/newsletter">Newsletter</Link></p>
                </div>
            </div>
        </div>
    )
}