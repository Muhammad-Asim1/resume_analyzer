import React from 'react';

const ResumeCoachLanding = () => 
{
  return (
    <div>
      <TopSection />
      <MiddleSection />
    </div>
  );
};

const TopSection = () => 
{
  const topSectionStyle = 
  {
    background: "linear-gradient(to bottom, #F2B1B5 0%, #571397 100%)",
    minHeight: "403px",
    width: "100%",
    padding: "60px 20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  };

  const containerStyle = 
  {
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const h1Style = 
  {
    fontSize: "3rem",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
  };

  const pStyle = 
  {
    fontSize: "1.2rem",
    marginBottom: "30px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto"
  };

//   const ctaButtonStyle = 
//{
//     display: "inline-block",
//     backgroundColor: "white",
//     color: "#571397",
//     fontWeight: "bold",
//     padding: "15px 30px",
//     borderRadius: "50px",
//     textDecoration: "none",
//     fontSize: "1.2rem",
//     marginTop: "40px",
//     transition: "all 0.3s ease",
//     border: "none",
//     cursor: "pointer",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
//   };

  return (
    <section style={topSectionStyle}>
      <div style={containerStyle}>
        <h1 style={h1Style}>Welcome to Resume Coach</h1>
        <p style={pStyle}>
          Your AI-powered career companion! We leverage cutting-edge artificial intelligence to help job seekers
          and professionals optimize their resumes, discover relevant courses, and find the best job opportunities
          tailored to their skills.
        </p>
        {/* <button style={ctaButtonStyle}>Get Started Today</button> */}
      </div>
    </section>
  );
};

const MiddleSection = () => 
{
  const middleSectionStyle = 
  {
    background: "linear-gradient(to bottom, #571397 28%, #F2B1B5 83%)",
    minHeight: "693px",
    width: "100%",
    padding: "60px 20px",
    color: "white"
  };

  const containerStyle = 
  {
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const h2Style = 
  {
    fontSize: "2rem",
    margin: "40px 0 20px",
    textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
  };

  const featureGridStyle = 
  {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginTop: "40px"
  };

//   const featureCardStyle = 
//{
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     padding: "30px",
//     borderRadius: "10px",
//     backdropFilter: "blur(5px)",
//     transition: "transform 0.3s ease"
//   };

//   const emojiStyle = 
//   {
//     fontSize: "2rem",
//     marginBottom: "15px"
//   };

  const finalCtaStyle = 
  {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: "10px"
  };

//   const ctaButtonStyle = 
//{
//     display: "inline-block",
//     backgroundColor: "white",
//     color: "#571397",
//     fontWeight: "bold",
//     padding: "15px 30px",
//     borderRadius: "50px",
//     textDecoration: "none",
//     fontSize: "1.2rem",
//     marginTop: "40px",
//     transition: "all 0.3s ease",
//     border: "none",
//     cursor: "pointer",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
//   };

//   const centerDivStyle = 
//{
//     textAlign: "center",
//     marginTop: "40px"
//   };

  return (
    <section style={middleSectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}>What We Offer:</h2>
        <div style={featureGridStyle}>
          <FeatureCard 
            emoji="✅" 
            title="AI Resume Analysis" 
            description="Get instant feedback on your resume, including strengths, areas for improvement, and keyword optimization for ATS compatibility."
          />
          <FeatureCard 
            emoji="✅" 
            title="Personalized Course Recommendations" 
            description="Enhance your skills with AI-driven course suggestions that align with your career goals."
          />
          <FeatureCard 
            emoji="✅" 
            title="Smart Job Matching" 
            description="Our intelligent job recommender finds the best-suited positions based on your profile, experience, and aspirations."
          />
        </div>
        
        <h2 style={h2Style}>Why Choose Us?</h2>
        <div style={featureGridStyle}>
          <FeatureCard 
            emoji="🚀" 
            title="AI-Powered Precision" 
            description="Our machine learning models analyze resumes with high accuracy."
          />
          <FeatureCard 
            emoji="🔍" 
            title="Career Growth Insights" 
            description="Get personalized suggestions to boost your career."
          />
          <FeatureCard 
            emoji="💡" 
            title="User-Friendly & Fast" 
            description="Upload your resume, and our AI does the rest in seconds!"
          />
        </div>
        
        <div style={finalCtaStyle}>
          Join thousands of professionals who are advancing their careers with Resume Coach today!
        </div>
        
        {/* <div style={centerDivStyle}>
          <button style={ctaButtonStyle}>Upload Your Resume</button>
        </div> */}
      </div>
    </section>
  );
};

const FeatureCard = ({ emoji, title, description }) => 
{
  const featureCardStyle = 
  {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "30px",
    borderRadius: "10px",
    backdropFilter: "blur(5px)",
    transition: "transform 0.3s ease"
  };

  const emojiStyle = 
  {
    fontSize: "2rem",
    marginBottom: "15px"
  };

  const h3Style = 
  {
    marginBottom: "10px"
  };

  const pStyle = 
  {
    marginBottom: "0"
  };

  return (
    <div style={featureCardStyle}>
      <div style={emojiStyle}>{emoji}</div>
      <h3 style={h3Style}>{title}</h3>
      <p style={pStyle}>{description}</p>
    </div>
  );
};

export default ResumeCoachLanding;