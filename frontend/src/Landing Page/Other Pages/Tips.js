import React from 'react';

const ResumeTips = () => 
{
  const tipSections = [
    {
      title: "Best Resume Formats for 2025",
      content: [
        {
          subTitle: "Chronological Format",
          description: "Best for candidates with a strong work history and clear career progression. Lists work experiences in reverse chronological order.",
          bestFor: "Professionals with consistent work history in the same field.",
        },
        {
          subTitle: "Functional Format",
          description: "Emphasizes skills and abilities rather than employment history. Ideal for career changers or those with employment gaps.",
          bestFor: "Career changers, people with employment gaps, or those entering the workforce.",
        },
        {
          subTitle: "Hybrid/Combination Format",
          description: "Combines elements of both chronological and functional formats, highlighting relevant skills while providing a detailed work history.",
          bestFor: "Experienced professionals highlighting transferable skills for a career change.",
        }
      ]
    },
    {
      title: "Common Resume Mistakes & How to Fix Them",
      content: 
      [
        {
          mistake: "Generic objectives or summaries",
          fix: "Craft a targeted professional summary highlighting your unique value proposition and specific skills relevant to the job."
        },
        {
          mistake: "Focusing on duties rather than achievements",
          fix: "Use quantifiable achievements (numbers, percentages, dollar amounts) to demonstrate your impact."
        },
        {
          mistake: "Including irrelevant information",
          fix: "Customize your resume for each job application, focusing only on experiences and skills relevant to the position."
        },
        {
          mistake: "Poor formatting and readability",
          fix: "Use consistent formatting, clear headings, adequate white space, and a professional font."
        },
        {
          mistake: "Typos and grammatical errors",
          fix: "Proofread multiple times and ask someone else to review your resume before submission."
        }
      ]
    },
    {
      title: "How to Write a Strong Summary & Work Experience Section",
      content: 
      {
        summary: 
        {
          title: "Professional Summary Tips",
          points: [
            "Keep it concise (3-5 lines maximum)",
            "Front-load with your most impressive qualifications",
            "Include years of experience, specializations, and notable achievements",
            "Incorporate relevant keywords from the job description",
            "Tailor it to each position you apply for"
          ]
        },
        workExperience: 
        {
          title: "Work Experience Best Practices",
          points: [
            "Start bullet points with strong action verbs (Managed, Developed, Implemented)",
            "Focus on accomplishments rather than responsibilities",
            "Quantify results whenever possible (Increased sales by 35%, Reduced costs by $50K)",
            "Include relevant technologies, tools, or methodologies used",
            "Prioritize experiences most relevant to the target position"
          ]
        }
      }
    },
    {
      title: "Optimizing Your Resume with Keywords for ATS",
      content: 
      {
        description: "Applicant Tracking Systems (ATS) scan resumes for relevant keywords before a human ever sees them. Here's how to optimize your resume for ATS:",
        tips: [
          "Identify key skills and terms from the job description and include them in your resume",
          "Use standard section headings (Education, Experience, Skills)",
          "Include both spelled-out terms and acronyms (Project Management Professional, PMP)",
          "Place keywords in context within achievement statements",
          "Avoid using tables, headers/footers, and uncommon fonts",
          "Submit your resume as a PDF (unless otherwise specified)"
        ]
      }
    }
  ];

  // Styles to match Newsletter.js
  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #F2B1B5 0%, #571397 50%, #F2B1B5 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '40px 20px',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
  };

  const headingStyle = {
    color: 'white',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const contentStyle = {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '30px',
    color: '#000'
  };

  const sectionStyle = {
    marginBottom: '30px',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  const sectionTitleStyle = {
    color: '#571397',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px'
  };

  const formatItemStyle = {
    borderLeft: '4px solid #571397',
    paddingLeft: '15px',
    marginBottom: '20px'
  };

  const subTitleStyle = {
    color: '#571397',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px'
  };

  const descriptionStyle = {
    color: '#333',
    marginBottom: '5px'
  };

  const bestForStyle = {
    color: '#666',
    fontStyle: 'italic'
  };

  const mistakeCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    border: '1px solid rgba(87, 19, 151, 0.1)'
  };

  const mistakeTitleStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const mistakeIconStyle = {
    color: '#f56565',
    marginRight: '10px'
  };

  const fixIconStyle = {
    color: '#48bb78',
    marginRight: '10px'
  };

  const listContainerStyle = {
    backgroundColor: 'rgba(87, 19, 151, 0.05)',
    borderRadius: '8px',
    padding: '15px',
    marginTop: '10px'
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '10px'
  };

  const listIconStyle = {
    color: '#571397',
    marginRight: '10px',
    marginTop: '3px'
  };

  const ctaContainerStyle = {
    textAlign: 'center',
    marginTop: '30px'
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #571397, #F2B1B5)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '15px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px',
    display: 'inline-block',
    textDecoration: 'none'
  };

  const outlineButtonStyle = {
    background: 'transparent',
    color: '#571397',
    border: '1px solid #571397',
    borderRadius: '4px',
    padding: '15px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'inline-block',
    textDecoration: 'none'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Resume Writing Tips</h1>
      
      <div style={contentStyle}>
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <h2 style={{margin: '0 0 15px 0'}}>
            <span role="img" aria-label="document">📄</span> Expert Resume Advice for Job Seekers
          </h2>
          <p>
            Proven strategies to help you create a professional, ATS-friendly resume that stands out to employers.
          </p>
        </div>

        {/* Best Resume Formats */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>{tipSections[0].title}</h2>
          <div>
            {tipSections[0].content.map((format, index) => (
              <div key={index} style={formatItemStyle}>
                <h3 style={subTitleStyle}>{format.subTitle}</h3>
                <p style={descriptionStyle}>{format.description}</p>
                <p style={bestForStyle}>Best for: {format.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Common Resume Mistakes */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>{tipSections[1].title}</h2>
          <div>
            {tipSections[1].content.map((item, index) => (
              <div key={index} style={mistakeCardStyle}>
                <div style={mistakeTitleStyle}>
                  <span style={mistakeIconStyle}>❌</span>
                  <span style={{fontWeight: 'bold'}}>{item.mistake}</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start'}}>
                  <span style={fixIconStyle}>✓</span>
                  <span>{item.fix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Strong Summary & Work Experience */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>{tipSections[2].title}</h2>
          
          <div style={{marginBottom: '20px'}}>
            <h3 style={subTitleStyle}>{tipSections[2].content.summary.title}</h3>
            <div style={listContainerStyle}>
              {tipSections[2].content.summary.points.map((point, index) => (
                <div key={index} style={listItemStyle}>
                  <span style={listIconStyle}>•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 style={subTitleStyle}>{tipSections[2].content.workExperience.title}</h3>
            <div style={listContainerStyle}>
              {tipSections[2].content.workExperience.points.map((point, index) => (
                <div key={index} style={listItemStyle}>
                  <span style={listIconStyle}>•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Optimizing for ATS */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>{tipSections[3].title}</h2>
          <p style={{marginBottom: '15px'}}>{tipSections[3].content.description}</p>
          
          <div style={listContainerStyle}>
            {tipSections[3].content.tips.map((tip, index) => (
              <div key={index} style={listItemStyle}>
                <span style={listIconStyle}>✓</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div style={ctaContainerStyle}>
          <h3 style={{color: '#571397', fontSize: '20px', marginBottom: '15px'}}>Ready to apply these tips to your resume?</h3>
          <div>
            <a href="/#uploadSuper" style={buttonStyle}>
              Analyze My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTips;