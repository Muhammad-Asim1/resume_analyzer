import React from 'react';

const RefundPolicyPage = () => 
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
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#000'
  };

  const headingStyle = 
  {
    color: '#fff',
    fontSize: '32px',
    fontWeight: 'bold',
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
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
    fontSize: '20px',
    fontWeight: 'bold'
  };

  const buttonStyle = 
  {
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

  const tableStyle = 
  {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
    marginBottom: '15px',
    fontSize: '16px'
  };

  const cellStyle = 
  {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#f9f9f9'
  };

  const headerCellStyle = 
  {
    ...cellStyle,
    backgroundColor: '#571397',
    color: '#fff',
    fontWeight: 'bold'
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

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Refund Policy</h1>
      
      <div style={contentStyle}>
        <p style={{ marginBottom: '20px' }}>
          We strive to provide the best service possible. This refund policy outlines when and how you can request a refund for our services.
        </p>

        {/* Free vs Paid Plans */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>✅ Free vs. Paid Plans</h2>
          <p>
            We offer both free and paid subscription plans with different features and capabilities:
          </p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={headerCellStyle}>Plan Type</th>
                <th style={headerCellStyle}>Refund Eligibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cellStyle}>Free Plan</td>
                <td style={cellStyle}>Not applicable as no payment is made</td>
              </tr>
              <tr>
                <td style={cellStyle}>Monthly Subscription</td>
                <td style={cellStyle}>Eligible for prorated refund within 7 days of payment</td>
              </tr>
              <tr>
                <td style={cellStyle}>Annual Subscription</td>
                <td style={cellStyle}>Eligible for prorated refund within 14 days of payment</td>
              </tr>
              <tr>
                <td style={cellStyle}>One-Time Services</td>
                <td style={cellStyle}>Eligible for full refund if service not rendered</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Refund Conditions */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>✅ Refund Conditions</h2>
          <p>We may issue refunds under the following conditions:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Technical issues that prevent you from accessing our services</li>
            <li style={listItemStyle}>Billing errors or unauthorized charges</li>
            <li style={listItemStyle}>Service unavailability for extended periods</li>
            <li style={listItemStyle}>Cancellation within the eligible refund period</li>
          </ul>
          <p>
            <strong>Note:</strong> Refunds are not typically issued for:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Change of mind after the refund period</li>
            <li style={listItemStyle}>Misuse of the service</li>
            <li style={listItemStyle}>Violation of our Terms of Service</li>
            <li style={listItemStyle}>Failure to achieve desired outcomes (job offers, interviews, etc.)</li>
          </ul>
        </section>

        {/* How to Request a Refund */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>✅ How to Request a Refund</h2>
          <p>To request a refund, you can:</p>
          <ol style={listStyle}>
            <li>Log into your account and navigate to the Billing section.</li>
            <li>Click on "Request Refund" and follow the prompts.</li>
            <li>Contact our customer support team at <strong>refunds@yourbrand.com</strong></li>
            <li>Use the contact form below.</li>
          </ol>
          <p>
            Please include your order or subscription information, reason for the refund request, and any relevant details that might help us process your request faster.
          </p>
          <div style={{ textAlign: 'center' }}>
            <button style={buttonStyle}>Contact Support for Refund</button>
          </div>
        </section>

        {/* Refund Processing */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>✅ Refund Processing</h2>
          <p>
            Refund requests are typically processed within 3-5 business days. Once approved, the refund will be issued to your original payment method. Depending on your payment provider, it may take an additional 5-10 business days for the refunded amount to appear in your account.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
