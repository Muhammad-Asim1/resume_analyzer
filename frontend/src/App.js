import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './Landing Page/LandingPage';
import Result from './Result/Result';
import About from "./Landing Page/Other Pages/About";
import Features from "./Landing Page/Other Pages/Features";
import Pricings from "./Landing Page/Other Pages/Pricings";
import LogIns from "./Landing Page/Other Pages/LogIns";
import Works from "./Landing Page/Other Pages/Works";
import Contact from "./Landing Page/Other Pages/Contact";
import Tips from "./Landing Page/Other Pages/Tips";
import FAQs from "./Landing Page/Other Pages/FAQs";
import Privacy from "./Landing Page/Other Pages/Privacy";
import Guide from "./Landing Page/Other Pages/Guide";
import Cookies from "./Landing Page/Other Pages/Cookies";
import Refunds from "./Landing Page/Other Pages/Refunds"; 
import Blog from "./Landing Page/Other Pages/Blog";
import Protection from "./Landing Page/Other Pages/Protection";
import Help from "./Landing Page/Other Pages/Help";
import NewsLetter from "./Landing Page/Other Pages/Newsletter";
import Stories from "./Landing Page/Other Pages/Stories";
import Forum from "./Landing Page/Other Pages/Forum";
import Terms from "./Landing Page/Other Pages/Terms";

function App() 
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/results" element={<Result />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricings" element={<Pricings />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/success-stories" element={<Stories />} />
                <Route path="/newsletter" element={<NewsLetter />} />
                <Route path="/help" element={<Help />} />
                <Route path="/data-protection" element={<Protection />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/refunds" element={<Refunds />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/interview-guide" element={<Guide />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/resume-tips" element={<Tips />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/how-it-works" element={<Works />} />
                <Route path="/logIns" element={<LogIns />} />
            </Routes>
        </Router>

        // sahi krna, success, forum, privacy, refund, cookies data-protection,  css
        // privacy

        // correct faqs, privacy protection page, forum, stories, cookies, privacy, terms, guide, works, 
        // left at how it works, where i am workign on the placements of icons after the headings
    );
}

export default App;
