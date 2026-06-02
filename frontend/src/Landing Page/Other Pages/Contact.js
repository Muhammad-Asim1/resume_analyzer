import React, { useState } from 'react';
import sitelogo from "../images/newLogo.svg";

const ContactPage = () => 
    {
  const [formData, setFormData] = useState(
    {
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const containerStyle = 
  {
    width: '100%',
    minHeight: '100vh', 
    background: 'linear-gradient(to bottom, #F2B1B5 0%, #571397 50%, #F2B1B5 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '50px 0'
  };
  
  const boxStyle = 
  {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    width: '450px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };
  
  const formStyle = 
  {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px'
  };
  
  const inputStyle = 
  {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%'
  };
  
  const textareaStyle = 
  {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };
  
  const buttonStyle = 
  {
    background: 'linear-gradient(to right, #571397, #F2B1B5)',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '10px',
    marginTop: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%'
  };
  
  const socialButtonContainerStyle = 
  {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0'
  };
  
  const socialButtonStyle = 
  {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: '6px',
    cursor: 'pointer'
  };
  
  const dimensions = 
  {
    width: "120px",
    height: "auto",
  };
  
  const contactInfoStyle = 
  {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
    textAlign: 'left',
    color: '#555',
    fontSize: '14px'
  };
  
  const infoItemStyle = 
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  };
  
  const handleChange = (e) => 
  {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <img src={sitelogo} style={dimensions} alt="Site Logo" />
        <h2 style={{ color: '#571397' }}>Resume Coach</h2>
        <h1 style={{ fontSize: '20px', margin: '10px 0', color: '#333' }}>
          Contact Us
        </h1>
        
        <div style={{ margin: '15px 0', color: '#666', fontSize: '14px' }}>
          We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.
        </div>
        
        <form style={formStyle} onSubmit={handleSubmit}>
          <label style={{ textAlign: 'left', fontSize: '14px', color: '#555' }}>Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="Enter your name" 
            style={inputStyle} 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          
          <label style={{ textAlign: 'left', fontSize: '14px', marginTop: '10px', color: '#555' }}>Email</label>
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            style={inputStyle} 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          
          <label style={{ textAlign: 'left', fontSize: '14px', marginTop: '10px', color: '#555' }}>Subject</label>
          <input 
            type="text" 
            name="subject"
            placeholder="Enter subject" 
            style={inputStyle} 
            value={formData.subject}
            onChange={handleChange}
            required 
          />
          
          <label style={{ textAlign: 'left', fontSize: '14px', marginTop: '10px', color: '#555' }}>Message</label>
          <textarea 
            name="message"
            placeholder="Type your message here..." 
            style={textareaStyle}
            value={formData.message}
            onChange={handleChange}
            required
          />
          
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
        
        <div style={contactInfoStyle}>
          <div style={infoItemStyle}>
            <strong>Email</strong>
            <span>support@resumecoach.com</span>
          </div>
          <div style={infoItemStyle}>
            <strong>Phone</strong>
            <span>(123) 456-7890</span>
          </div>
          <div style={infoItemStyle}>
            <strong>Hours</strong>
            <span>Mon-Fri: 9AM-5PM</span>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #eee', paddingTop: '15px' }}>
          <div style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>Connect with us</div>
          <div style={socialButtonContainerStyle}>
            <div style={socialButtonStyle} title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#571397">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div style={socialButtonStyle} title="Google">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#571397">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                </svg>
            </div>
            {/* <div style={socialButtonStyle} title="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#571397">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </div>
            <div style={socialButtonStyle} title="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#571397">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div style={socialButtonStyle} title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#571397">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;