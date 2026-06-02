import React from 'react';

const Terms = () => 
  {
  const containerStyle = 
  {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #F2B1B5 0%, #571397 50%, #F2B1B5 100%)',
    padding: '40px 20px',
    color: '#000',
    fontFamily: 'Arial, sans-serif'
  };

  const contentStyle = 
  {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#000'
  };

  const headingStyle = 
  {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const subheadingStyle = 
  {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#571397',
    marginBottom: '10px',
    borderBottom: '2px solid #ccc',
    paddingBottom: '8px'
  };

  const paragraphStyle = 
  {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '15px'
  };

  const listStyle = 
  {
    paddingLeft: '20px',
    lineHeight: '1.8'
  };

  const listItemStyle = 
  {
    marginBottom: '8px'
  };

  const strongStyle = 
  {
    fontWeight: 'bold',
    color: '#333'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        
        <h1 style={headingStyle}>Terms and Conditions</h1>
        <p style={{ textAlign: 'center', color: '#888', marginBottom: '20px' }}>
          Last Updated: March 1, 2025
        </p>

        <section>
          <h2 style={subheadingStyle}>1. Acceptance of Terms</h2>
          <p style={paragraphStyle}>
            Welcome to Resume Coach. By accessing or using our website, mobile applications, 
            and services (collectively, the "Services"), you agree to be bound by these Terms and 
            Conditions ("Terms"). These Terms constitute a legal agreement between you and Resume Coach.
          </p>
          <p style={paragraphStyle}>
            If you do not agree with these Terms, please do not access or use our Services. By 
            using our Services, you represent that you are at least 18 years old or have the 
            consent of a legal guardian.
          </p>
        </section>
        <section>
          <h2 style={subheadingStyle}>2. User Responsibilities & Content Ownership</h2>
          <p style={paragraphStyle}>
            <span style={strongStyle}>Account Creation:</span> You are responsible for maintaining the 
            confidentiality of your account credentials and for all activities that occur under your account.
          </p>
          <p style={paragraphStyle}>
            <span style={strongStyle}>Content Ownership:</span> You retain ownership of any content you upload 
            to our Services, including your resume, personal information, and other materials ("User Content"). 
            By uploading User Content, you grant Resume Coach a non-exclusive, worldwide, royalty-free license 
            to use, store, display, and analyze your User Content solely for the purpose of providing and 
            improving our Services to you.
          </p>
          <p style={paragraphStyle}>
            <span style={strongStyle}>Prohibited Activities:</span> You agree not to engage in any activities that:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Violate any applicable laws or regulations</li>
            <li style={listItemStyle}>Infringe on the rights of others</li>
            <li style={listItemStyle}>Upload false, misleading, or fraudulent information</li>
            <li style={listItemStyle}>Attempt to access unauthorized areas of our Services</li>
            <li style={listItemStyle}>Interfere with or disrupt the functionality of our Services</li>
            <li style={listItemStyle}>Introduce malware, viruses, or other harmful code</li>
          </ul>
        </section>

        <section>
          <h2 style={subheadingStyle}>3. Subscription & Payment Policies</h2>
          <p style={paragraphStyle}>
            <span style={strongStyle}>Subscription Plans:</span> Resume Coach offers various subscription plans, 
            including a free plan and paid premium plans.
          </p>
          <p style={paragraphStyle}>
            <span style={strongStyle}>Payment Terms:</span> For paid subscriptions, you agree to pay all fees 
            associated with your selected plan. All payments are non-refundable except as expressly provided in our 
            Refund Policy or as required by applicable law.
          </p>
          <p style={paragraphStyle}>
            <span style={strongStyle}>Automatic Renewal:</span> Paid subscriptions automatically renew at the end of each 
            billing cycle unless you cancel at least 24 hours before the renewal date.
          </p>
        </section>

        <section>
          <h2 style={subheadingStyle}>4. Intellectual Property Rights</h2>
          <p style={paragraphStyle}>
            All content provided through our Services, other than User Content, including but not limited 
            to text, graphics, logos, icons, images, audio clips, and software, is the property of Resume Coach.
          </p>
          <p style={paragraphStyle}>
            The Resume Coach name, logo, and all related names are trademarks of Resume Coach. You may not use these marks without 
            our prior written permission.
          </p>
        </section>

        <section>
          <h2 style={subheadingStyle}>5. Dispute Resolution</h2>
          <p style={paragraphStyle}>
            <span style={strongStyle}>Informal Resolution:</span> If you have any concerns or disputes, 
            please contact us at <strong>support@resumecoach.com</strong>. We will try to resolve your concerns amicably within 
            30 days before resorting to legal proceedings.
          </p>
          <p style={paragraphStyle}>
            <span style={strongStyle}>Governing Law:</span> These Terms shall be governed by and construed in accordance with 
            the laws of [Your Jurisdiction].
          </p>
          <p style={paragraphStyle}>
            <span style={strongStyle}>Arbitration:</span> Any disputes shall be resolved through binding arbitration in 
            [Your Jurisdiction] in accordance with the rules of the [Arbitration Body].
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
