import React, { useState } from 'react';

const NewsletterPage = () => 
{
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interests, setInterests] = useState(
  {
    careerTips: true,
    jobMarket: false,
    resumeWriting: false,
    aiTools: false,
    interviews: false
  });
  const [subscribed, setSubscribed] = useState(false);

  const containerStyle = 
  {
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

  // const contentStyle = 
  // {
  //   maxWidth: '800px',
  //   width: '100%',
  //   backgroundColor: 'rgba(255, 255, 255, 0.1)',
  //   borderRadius: '8px',
  //   padding: '30px',
  //   backdropFilter: 'blur(10px)'
  // };
  const contentStyle = 
  {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '30px',
    backdropFilter: 'none', 
    color: '#000' 
  };
  

  const headingStyle = 
  {
    color: 'white',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const formStyle = 
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const inputStyle = 
  {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc', 
    backgroundColor: '#fff',
    color: '#000',
    width: '100%'
  };
  

  const checkboxContainerStyle = 
  {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px'
  };

  const checkboxLabelStyle = 
  {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '8px 15px',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const checkboxStyle = 
  {
    marginRight: '8px'
  };

  const buttonStyle = 
  {
    background: 'linear-gradient(to right, #571397, #F2B1B5)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px'
  };

  const benefitCardStyle = 
  {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const twoColumnStyle = 
  {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '30px'
  };

  const columnStyle = 
  {
    flex: 1,
    minWidth: '280px'
  };

  const successStyle = 
  {
    padding: '30px',
    textAlign: 'center',
    backgroundColor: 'rgba(74, 222, 128, 0.2)',
    borderRadius: '8px',
    marginTop: '20px'
  };

  const handleCheckboxChange = (key) => 
    {
    setInterests(
      {
      ...interests,
      [key]: !interests[key]
    });
  };

  const handleSubmit = (e) => 
    {
    e.preventDefault();
    // Here you would handle the form submission
    console.log({ email, name, interests });
    setSubscribed(true);
  };

  const previewEmails = [
    {
      title: "5 Resume Trends for 2025",
      preview: "Discover the latest techniques to make your resume stand out in the AI-screening era..."
    },
    {
      title: "Monthly Job Market Analysis",
      preview: "Tech sector continues to grow while remote opportunities expand across industries..."
    },
    {
      title: "Interview Preparation Guide",
      preview: "Master the STAR method and learn how to handle behavioral questions like a pro..."
    }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Newsletter Signup</h1>
      
      <div style={contentStyle}>
        {!subscribed ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ margin: '0 0 15px 0' }}>
                <span role="img" aria-label="email">✉️</span> Subscribe for the latest job trends & resume tips!
              </h2>
              <p>
                Join thousands of job seekers who get our exclusive insights delivered straight to their inbox.
              </p>
            </div>

            <div style={twoColumnStyle}>
              <div style={columnStyle}>
                <h3 style={{color: '#571397'}}>What You'll Receive:</h3>
                
                <div style={benefitCardStyle}>
                  <h4 style={{ marginTop: 0, color: '#333' }}>Exclusive Career Tips</h4>
                  <p>Expert advice from hiring managers and career coaches to accelerate your job search.</p>
                </div>
                
                <div style={benefitCardStyle}>
                  <h4 style={{ marginTop: 0, color: '#333' }}>Job Market Insights</h4>
                  <p>Stay ahead with industry-specific trends, salary data, and emerging opportunities.</p>
                </div>
                
                <div style={benefitCardStyle}>
                  <h4 style={{ marginTop: 0, color: '#333' }}>AI-Powered Updates</h4>
                  <p>Learn how to leverage AI tools for better resume building and job matching.</p>
                </div>

                <h3 style={{color: '#571397'}}>Preview Recent Newsletters:</h3>
                <div style={{ marginTop: '15px' }}>
                  {previewEmails.map((email, index) => (
                    <div key={index} style={{ marginBottom: '15px', borderLeft: '3px solid white', paddingLeft: '15px', color: '#333' }}>
                      <h4 style={{ margin: '0 0 5px 0' }}>{email.title}</h4>
                      <p style={{ margin: 0, fontSize: '14px' }}>{email.preview}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={columnStyle}>
                <form onSubmit={handleSubmit} style={formStyle}>
                  <div>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      style={inputStyle}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      style={inputStyle}
                      required
                    />
                  </div>
                  
                  <div>
                    <label>Topics You're Interested In:</label>
                    <div style={checkboxContainerStyle}>
                      <label 
                        style={{
                          ...checkboxLabelStyle,
                          backgroundColor: interests.careerTips ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={interests.careerTips}
                          onChange={() => handleCheckboxChange('careerTips')}
                          style={checkboxStyle}
                        />
                        Career Tips
                      </label>
                      
                      <label 
                        style={{
                          ...checkboxLabelStyle,
                          backgroundColor: interests.jobMarket ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={interests.jobMarket}
                          onChange={() => handleCheckboxChange('jobMarket')}
                          style={checkboxStyle}
                        />
                        Job Market
                      </label>
                      
                      <label 
                        style={{
                          ...checkboxLabelStyle,
                          backgroundColor: interests.resumeWriting ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={interests.resumeWriting}
                          onChange={() => handleCheckboxChange('resumeWriting')}
                          style={checkboxStyle}
                        />
                        Resume Writing
                      </label>
                      
                      <label 
                        style={{
                          ...checkboxLabelStyle,
                          backgroundColor: interests.aiTools ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={interests.aiTools}
                          onChange={() => handleCheckboxChange('aiTools')}
                          style={checkboxStyle}
                        />
                        AI Tools
                      </label>
                      
                      <label 
                        style={{
                          ...checkboxLabelStyle,
                          backgroundColor: interests.interviews ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={interests.interviews}
                          onChange={() => handleCheckboxChange('interviews')}
                          style={checkboxStyle}
                        />
                        Interviews
                      </label>
                    </div>
                  </div>
                  
                  <button type="submit" style={buttonStyle}>
                    Subscribe to Newsletter
                  </button>
                  
                  <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '10px' }}>
                    By subscribing, you agree to our Privacy Policy and Terms of Service.
                    We respect your privacy and will never share your information.
                    You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </>
        ) : (
          <div style={successStyle}>
            <h2>
              <span role="img" aria-label="success">✅</span> Thank You for Subscribing!
            </h2>
            <p>
              You've successfully subscribed to our newsletter with the email: <strong>{email}</strong>
            </p>
            <p>
              Check your inbox soon for a confirmation email and your first newsletter with exclusive job search tips!
            </p>
            <button 
              style={buttonStyle} 
              onClick={() => {
                setSubscribed(false);
                setEmail('');
                setName('');
              }}
            >
              Subscribe Another Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPage;