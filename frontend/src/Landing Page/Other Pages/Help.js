import React from 'react';

const HelpCenter = () => {
  const helpSections = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        {
          title: "Creating an account",
          description: "Learn how to set up your Resume Coach account and verify your email",
          link: "/help/creating-account"
        },
        {
          title: "Navigating the dashboard",
          description: "Get familiar with your Resume Coach dashboard and its features",
          link: "/help/dashboard-navigation"
        }
      ]
    },
    {
      title: "Using the AI Resume Analyzer",
      icon: "🔍",
      articles: [
        {
          title: "How to upload and optimize a resume",
          description: "Step-by-step guide to uploading and getting AI feedback on your resume",
          link: "/help/upload-resume"
        },
        {
          title: "Understanding the analysis report",
          description: "Learn how to interpret your resume analysis results and implement suggestions",
          link: "/help/analysis-report"
        }
      ]
    },
    {
      title: "Job & Course Recommendations",
      icon: "💼",
      articles: [
        {
          title: "How does AI recommend jobs?",
          description: "Understand how our AI matches your skills and experience to job opportunities",
          link: "/help/job-recommendations"
        },
        {
          title: "How can I refine my job searches?",
          description: "Tips for filtering and customizing your job recommendation preferences",
          link: "/help/refine-job-search"
        }
      ]
    },
    {
      title: "Account & Billing Support",
      icon: "💳",
      articles: [
        {
          title: "How to reset your password",
          description: "Instructions for securely resetting your account password",
          link: "/help/reset-password"
        },
        {
          title: "Updating payment details",
          description: "Learn how to manage your subscription and payment information",
          link: "/help/payment-details"
        }
      ]
    }
  ];

  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #F2B1B5 0%, #571397 50%, #F2B1B5 100%)',
    padding: '40px 20px',
    color: '#000',
    fontFamily: 'Arial, sans-serif'
  };

  const contentStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#000'
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#571397',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const searchStyle = {
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto 30px',
    position: 'relative'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 20px',
    paddingLeft: '40px',
    border: '1px solid #ccc',
    borderRadius: '25px',
    fontSize: '16px',
    outline: 'none'
  };

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    left: '12px',
    transform: 'translateY(-50%)',
    color: '#888',
    fontSize: '20px'
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  };

  const iconContainerStyle = {
    fontSize: '28px',
    marginRight: '10px'
  };

  const sectionHeadingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#571397',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center'
  };

  const articleLinkStyle = {
    display: 'block',
    padding: '12px 15px',
    borderRadius: '6px',
    backgroundColor: '#f2f2f2',
    textDecoration: 'none',
    color: '#571397',
    marginBottom: '10px',
    transition: 'background 0.3s ease',
    fontWeight: '500'
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #571397, #F2B1B5)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 25px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Heading */}
        <h1 style={headingStyle}>Help Center</h1>
        <p style={{ textAlign: 'center', color: '#777', marginBottom: '30px', fontSize: '18px' }}>
          Find answers to common questions and learn how to make the most of Resume Coach's features.
        </p>

        {/* Search Box */}
        <div style={searchStyle}>
          <input 
            type="text" 
            placeholder="Search for help articles..." 
            style={inputStyle} 
          />
          <span style={iconStyle}>🔍</span>
        </div>

        {/* Help Sections */}
        {helpSections.map((section, index) => (
          <div key={index} style={sectionStyle}>
            <div style={sectionHeadingStyle}>
              <span style={iconContainerStyle}>{section.icon}</span>
              {section.title}
            </div>
            {section.articles.map((article, articleIndex) => (
              <a key={articleIndex} href={article.link} style={articleLinkStyle}>
                <strong>{article.title}</strong>
                <p style={{ fontSize: '14px', color: '#555', margin: '5px 0 0' }}>{article.description}</p>
              </a>
            ))}
          </div>
        ))}

        {/* Contact Support Button */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <h2 style={{ fontSize: '20px', color: '#571397', marginBottom: '10px' }}>
            Need additional help?
          </h2>
          <a href="/contact" style={buttonStyle}>
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
