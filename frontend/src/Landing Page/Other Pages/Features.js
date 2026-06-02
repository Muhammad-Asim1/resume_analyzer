import React from 'react';

const FeatureSection = () => 
{
  const sectionStyle = 
  {
    padding: "60px 20px",
    color: "white",
    background: "linear-gradient(to bottom, #571397 28%, #F2B1B5 83%)",
    minHeight: "693px",
    width: "100%",
  };

  const containerStyle = 
  {
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const h2Style = 
  {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "50px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Our Features</h2>
        
        <FeatureCard
          number="1"
          title="AI-Powered CV Analyzer"
          emoji="🚀"
          description="Our CV Analyzer helps you optimize your resume by analyzing key aspects and providing actionable feedback."
          subheading="🔍 Key Features:"
          items={[
            "ATS Compatibility Check – Ensure your resume is optimized for Applicant Tracking Systems.",
            "Formatting & Readability Score – Receive feedback on structure, clarity, and presentation."
          ]}
        />
        
        <FeatureCard
          number="2"
          title="Education Insights"
          emoji="📚"
          description="Stay ahead in your career with personalized learning recommendations tailored to your industry and skillset."
          subheading="🎯 What You Get:"
          items={[
            "Course Recommendations – AI-driven suggestions for online courses, certifications, and training programs.",
            "Skill Development Pathways – Personalized learning paths based on career goals.",
            "Industry Trends & Insights – Discover in-demand skills and future-proof your career."
          ]}
        />
        
        <FeatureCard
          number="3"
          title="Job Insights"
          emoji="💼"
          description="Find the best job opportunities that match your skills, experience, and aspirations with AI-powered job insights."
          subheading="🔎 How We Help:"
          items={[
            "Smart Job Matching – AI suggests roles based on your CV and preferences.",
            "Salary & Market Trends – Get insights into salary expectations and industry demand.",
            "Personalized Career Advice – AI-driven suggestions for career growth.",
            "Resume-Job Compatibility Score – Find out how well your resume matches specific job postings.",
            "Company & Role Analysis – Gain insights into potential employers and job descriptions."
          ]}
        />
      </div>
    </section>
  );
};

const FeatureCard = ({ number, title, emoji, description, subheading, items }) => 
{
  const cardStyle = 
  {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    padding: "40px",
    marginBottom: "40px",
    backdropFilter: "blur(5px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    position: "relative",
    overflow: "hidden"
  };

  const numberBadgeStyle = 
  {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold"
  };

  const titleStyle = 
  {
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px"
  };

  const emojiStyle = 
  {
    fontSize: "2.2rem"
  };

  const descriptionStyle = 
  {
    fontSize: "1.1rem",
    marginBottom: "25px",
    lineHeight: "1.6"
  };

  const subheadingStyle = 
  {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "15px",
    display: "block"
  };

  const listStyle = 
  {
    listStyleType: "none",
    padding: "0",
    margin: "0"
  };

  const listItemStyle = 
  {
    marginBottom: "12px",
    paddingLeft: "30px",
    position: "relative",
    fontSize: "1.05rem",
    lineHeight: "1.5"
  };

  const checkMarkStyle = 
  {
    position: "absolute",
    left: "0",
    top: "2px",
    fontSize: "1.2rem",
    color: "#F2B1B5"
  };

  return (
    <div style={cardStyle}>
      <div style={numberBadgeStyle}>{number}</div>
      <h3 style={titleStyle}>
        <span style={emojiStyle}>{emoji}</span>
        {title}
      </h3>
      <p style={descriptionStyle}>{description}</p>
      <span style={subheadingStyle}>{subheading}</span>
      <ul style={listStyle}>
        {items.map((item, index) => (
          <li key={index} style={listItemStyle}>
            <span style={checkMarkStyle}>✅</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureSection;