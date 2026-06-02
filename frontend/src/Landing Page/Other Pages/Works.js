import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faMagnifyingGlass, faCheck, faClipboard, faFile } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => 
{
  const steps = 
  [
    {
      step: 1,
      title: "Upload Your Resume",
      description: "Start by uploading your current resume in PDF format. Our system accepts most standard resume layouts and formats.",
      icon: faUpload
    },
    {
      step: 2,
      title: "AI Analyzes Your Skills & Keywords",
      description: "Our advanced AI scans your resume, identifying key skills, experience, and qualifications. It compares your resume with industry standards and ATS requirements.",
      icon: faMagnifyingGlass
    },
    {
      step: 3,
      title: "Get Instant Feedback & Suggested Improvements",
      description: "Receive detailed feedback on your resume's strengths and areas for improvement. Our AI provides actionable suggestions to boost your resume's effectiveness.",
      icon: faClipboard
    },
    {
      step: 4,
      title: "Receive Personalized Job & Course Recommendations",
      description: "Based on your profile, get tailored job matches and course recommendations to enhance your skills and career prospects.",
      icon: faCheck
    },
    {
      step: 5,
      title: "Apply for Jobs & Track Progress",
      description: "Apply to recommended positions with your optimized resume and track your application progress all in one place.",
      icon: faFile
    }
  ];

  const containerStyle = 
  {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #F2B1B5 0%, #571397 50%, #F2B1B5 100%)',
    padding: '40px 20px',
    color: '#000',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const contentStyle = 
  {
    maxWidth: '1000px',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    color: '#000',
    textAlign: 'center'
  };

  const headingStyle = 
  {
    fontSize: '32px',
    fontWeight: 'bold',
    // color: '#571397',
    marginBottom: '30px'
  };

  const stepContainerStyle = 
  {
    display: 'flex',
    flexDirection: 'column', // Stack vertically
    alignItems: 'center',
    gap: '12px',
    marginBottom: '30px'
  };
  
  // const iconContainerStyle = 
  // {
  //   backgroundColor: '#f4f4f4',
  //   borderRadius: '50%',
  //   width: '50px',
  //   height: '50px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  // };
  

  // const iconStyle = 
  // {
  //   fontSize: '22px', // Reduced size for better proportion
  //   color: '#571397'
  // };

  const stepNumberStyle = 
  {
    backgroundColor: '#571397',
    color: '#fff',
    borderRadius: '50%',
    width: '30px', 
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px', 
    fontWeight: 'bold',
    marginRight: '8px'
  };

  const subheadingStyle = 
  {
    fontSize: '20px', 
    fontWeight: 'bold',
    color: '#571397',
    marginBottom: '10px'
  };

  const descriptionStyle = 
  {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    maxWidth: '500px',
    margin: '0 auto'
  };

  const buttonStyle = 
  {
    background: 'linear-gradient(to right, #571397, #F2B1B5)',
    textDecoration: 'none',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 25px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    marginTop: '60px'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        
        <h1 style={headingStyle}>How Resume Coach Works</h1>
        <p style={{ color: '#777', marginBottom: '40px', fontSize: '18px' }}>
          Our AI-powered platform helps you optimize your resume, find relevant jobs, and advance your career in just a few simple steps.
        </p>

        {/* {steps.map((step, index) => (
          <div key={index} style={stepContainerStyle}>
            <div style={iconContainerStyle}>
              <FontAwesomeIcon icon={step.icon} style={iconStyle} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                <div style={stepNumberStyle}>{step.step}</div>
                <h2 style={subheadingStyle}>{step.title}</h2>
              </div>
              <p style={descriptionStyle}>{step.description}</p>
            </div>
          </div>
        ))} */}

        {steps.map((step, index) => (
          <div 
            key={index} 
            style={{
              ...stepContainerStyle,
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
            }}
          >
            <div> 
              {/* <FontAwesomeIcon icon={step.icon} style={iconStyle} /> */}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <div style={stepNumberStyle}>{step.step}</div>
                <h2 style={subheadingStyle}>{step.title}</h2>
              </div>
              <p style={descriptionStyle}>{step.description}</p>
            </div>
          </div>
        ))}

        
        <a href="/#uploadSuper" style={buttonStyle}>
          Upload Your Resume
        </a>


      </div>
    </div>
  );
};

export default HowItWorks;
