import React from 'react';
import { Link } from 'react-router-dom';

const SuccessStoriesPage = () => 
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
    maxWidth: '1000px',
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

  const storyCardStyle = 
  {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '25px',
    marginBottom: '30px',
    border: '1px solid #ddd',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer'
  };

  const quoteStyle = 
  {
    fontSize: '50px',
    color: '#ddd',
    fontFamily: 'Georgia, serif',
    marginBottom: '20px'
  };

  const resumeBoxStyle = 
  {
    flex: 1,
    minWidth: '280px',
    backgroundColor: '#eee',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const statsStyle = 
  {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px 0',
    textAlign: 'center',
    flexWrap: 'wrap'
  };

  const statBoxStyle = 
  {
    padding: '15px',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    minWidth: '150px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const testimonials = [
    {
      name: "Michael Chen",
      title: "Software Engineer at TechGiant",
      photo: "https://via.placeholder.com/120", // Use actual image URL if available
      quote: "After 6 months of rejections, YourBrand's AI resume optimizer completely transformed my job search. Within 2 weeks, I had 5 interviews lined up!",
      stats: {
        applications: 42,
        interviews: 8,
        offers: 3,
        salaryIncrease: "35%"
      },
      story: "I was struggling to break into tech after completing my bootcamp. My resume wasn't getting past the ATS systems, and I rarely heard back from companies..."
    },
    {
      name: "Sophia Rodriguez",
      title: "Marketing Director at BrandImpact",
      photo: "https://via.placeholder.com/120",
      quote: "The personalized resume feedback and industry insights gave me the confidence to apply for senior positions I previously thought were out of reach.",
      stats: {
        applications: 23,
        interviews: 7,
        offers: 2,
        salaryIncrease: "45%"
      },
      story: "After 7 years in the same company, I wanted to make a leap to a leadership role, but my resume was focused on tasks rather than achievements..."
    },
    {
      name: "James Wilson",
      title: "Financial Analyst at Global Investments",
      photo: "https://via.placeholder.com/120",
      quote: "The career forum community provided encouragement during my search, while the AI tools helped me tailor each application to specific job descriptions.",
      stats: {
        applications: 35,
        interviews: 10,
        offers: 4,
        salaryIncrease: "28%"
      },
      story: "Transitioning from accounting to financial analysis seemed daunting at first..."
    }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Success Stories</h1>
      
      <div style={contentStyle}>
        <p style={{ marginBottom: '30px', textAlign: 'center' }}>
          Real stories from real users who transformed their job search with our platform.
        </p>

        <div style={statsStyle}>
          <div style={statBoxStyle}>
            <h3>2,800+</h3>
            <p>Job Offers</p>
          </div>
          <div style={statBoxStyle}>
            <h3>85%</h3>
            <p>Interview Rate</p>
          </div>
          <div style={statBoxStyle}>
            <h3>32%</h3>
            <p>Avg. Salary Increase</p>
          </div>
        </div>

        {testimonials.map((testimonial, index) => (
          <div key={index} style={storyCardStyle}>
            <div style={quoteStyle}>“</div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              {/* <img src={testimonial.photo} alt={testimonial.name} style={{ borderRadius: '50%', marginRight: '15px' }} /> */}
              <div>
                <h2>{testimonial.name}</h2>
                <p>{testimonial.title}</p>
              </div>
            </div>
            <blockquote>{testimonial.quote}</blockquote>
            <p>{testimonial.story}</p>
          </div>
        ))}

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h2>Ready to Write Your Success Story?</h2>
          <p>Join thousands of job seekers who have transformed their careers with our platform.</p>
          <Link to='/logIns'>
            <button style={{
              background: 'linear-gradient(to right, #571397, #F2B1B5)',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 25px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background 0.3s ease',
              marginTop: '40px'
            }}>
              Get Started for Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
