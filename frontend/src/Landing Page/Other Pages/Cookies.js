import React from 'react';

const CookiePolicyPage = () => {
  const containerStyle = {
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

  const contentStyle = {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#000'
  };

  const headingStyle = {
    color: '#fff',
    marginBottom: '20px',
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  const sectionStyle = {
    marginBottom: '30px'
  };

  const sectionHeadingStyle = {
    color: '#571397',
    marginBottom: '15px',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
    fontSize: '20px',
    fontWeight: 'bold'
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #571397, #F2B1B5)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '12px 25px',
    margin: '10px 5px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const listStyle = {
    paddingLeft: '20px',
    lineHeight: '1.8'
  };

  const listItemStyle = {
    marginBottom: '8px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Cookie Policy</h1>
      
      <div style={contentStyle}>
        <p style={{ marginBottom: '20px' }}>
          This Cookie Policy explains how we use cookies and similar technologies on our website to enhance your browsing experience.
        </p>

        {/* What Are Cookies */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>🍪 What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit our website. They help us recognize your device and remember certain information about your visit, such as your preferences and actions on our site.
          </p>
        </section>

        {/* Types of Cookies */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>🍪 Types of Cookies We Use</h2>
          <p>We use the following types of cookies:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
            <li style={listItemStyle}><strong>Performance Cookies:</strong> Collect information about how you use our website.</li>
            <li style={listItemStyle}><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
            <li style={listItemStyle}><strong>Analytics Cookies:</strong> Help us understand and improve our website.</li>
            <li style={listItemStyle}><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements.</li>
          </ul>
        </section>

        {/* How We Use Cookies */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>🍪 How We Use Cookies</h2>
          <p>We use cookies for various purposes, including:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Remembering your login details.</li>
            <li style={listItemStyle}>Understanding how you use our website.</li>
            <li style={listItemStyle}>Improving our website and services.</li>
            <li style={listItemStyle}>Personalizing your experience.</li>
            <li style={listItemStyle}>Providing relevant advertisements.</li>
          </ul>
        </section>

        {/* Manage Preferences */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>🍪 How to Manage Your Cookie Preferences</h2>
          <p>
            You can manage your cookie preferences through your browser settings or by using our cookie consent tool. Most web browsers allow you to control cookies through their settings. You can typically delete cookies, block certain types, or set your browser to notify you when cookies are being used.
          </p>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={buttonStyle}>Accept All Cookies</button>
            <button style={buttonStyle}>Essential Cookies Only</button>
            <button style={buttonStyle}>Cookie Settings</button>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>🍪 Third-Party Cookies</h2>
          <p>
            We also allow third parties to place cookies on your device when you visit our website. These third parties include analytics providers, advertising networks, and social media platforms. They use the information collected through their cookies for their own purposes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
