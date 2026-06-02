import React from 'react';
import {Link} from 'react-router-dom'

const PrivacyPolicyPage = () => 
  {
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
    color: '#000',
    fontFamily: 'Arial, sans-serif'
  };

  const contentStyle = 
  {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: '#fff', 
    borderRadius: '8px',
    padding: '30px',
    backdropFilter: 'none',
    color: '#000',  
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const headingStyle = 
  {
    color: '#fff',  
    marginBottom: '20px',
    textAlign: 'center'
  };

  const sectionStyle = 
  {
    marginBottom: '30px'
  };

  const sectionHeadingStyle = 
  {
    color: '#571397',  
    marginBottom: '15px',
    borderBottom: '1px solid #ccc', 
    paddingBottom: '10px'
  };

  const buttonStyle = 
  {
    background: 'linear-gradient(to right, #571397, #F2B1B5)', 
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '12px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'block',
    margin: '20px auto 0',
    transition: 'background 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>
      
      <div style={contentStyle}>
        <p style={{ marginBottom: '20px' }}>
          This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.
        </p>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>🔐 What Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li>Personal Information: Name, email address, contact details</li>
            <li>Professional Information: Resume data, work history, skills</li>
            <li>Account Information: Login credentials, account preferences</li>
            <li>Usage Data: How you interact with our platform</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>🔐 How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>Personalization: Tailoring our services to your needs</li>
            <li>AI Analysis: Improving your resume and job matching</li>
            <li>Communication: Sending important updates and notifications</li>
            <li>Service Improvement: Enhancing our platform based on user interactions</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>🔐 Data Security & Protection</h2>
          <p>
            We implement robust security measures to protect your data, including encryption, secure data storage, and regular security audits. 
            We limit access to personal information to authorized personnel only and have established protocols for handling data breaches.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>🔐 User Rights (GDPR Compliance)</h2>
          <p>Under GDPR and similar regulations, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Restrict processing of your information</li>
            <li>Data portability</li>
            <li>Object to processing of your data</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>🔐 How to Delete Your Account & Data</h2>
          <p>You can request deletion of your account and associated data by:</p>
          <ul>
            <li>Going to Account Settings and selecting "Delete Account"</li>
            <li>Contacting our support team at support@yourbrand.com</li>
          </ul>
          <p>
            We will process your request within 30 days and confirm completion via email.
            Some information may be retained for legal purposes.
          </p>
        </section>

        <Link to='/about'><button style={buttonStyle}>About Us</button></Link>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
