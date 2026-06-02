import React from 'react';

const FAQs = () => {
  // FAQ categories with questions and answers
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is Resume Coach, and how does it work?",
          answer: "Resume Coach is an AI-powered career companion that helps job seekers optimize their resumes, discover relevant courses, and find the best job opportunities tailored to their skills. Our platform uses artificial intelligence to analyze your resume, provide personalized feedback, and match you with suitable job opportunities and educational resources."
        },
        {
          question: "How does AI analyze my resume?",
          answer: "Our AI technology scans your resume for key elements such as formatting, keywords, skills, and experience. It then compares these elements to industry standards and job requirements to provide actionable feedback and suggestions for improvement."
        }
      ]
    },
    {
      title: "Account & Subscription",
      faqs: [
        {
          question: "How do I create an account?",
          answer: "To create an account, click on the 'Sign Up' button in the top right corner of our website. You can register using your email address and password or use social login options like Google or LinkedIn for a faster setup."
        },
        {
          question: "What are the benefits of upgrading to Pro or Premium?",
          answer: "Pro subscribers get access to advanced CV analysis with ATS optimization, unlimited job and course recommendations, resume-job matching scores, and detailed skill gap analysis. Premium subscribers receive all Pro features plus AI resume rewriting, priority job alerts, personalized career consultation, and exclusive industry reports."
        },
        {
          question: "How can I cancel my subscription?",
          answer: "You can cancel your subscription at any time by logging into your account, navigating to 'Account Settings', and selecting 'Manage Subscription'. Follow the cancellation instructions, and your subscription will be terminated at the end of your current billing period."
        }
      ]
    },
    {
      title: "Resume & Job Matching",
      faqs: [
        {
          question: "What formats does the CV Analyzer support?",
          answer: "Our CV Analyzer currently supports PDF format. Please ensure your resume is saved as a PDF before uploading for analysis."
        },
        {
          question: "How does the AI match me to jobs?",
          answer: "Our AI analyzes your resume for skills, experience, education, and other qualifications, then compares these attributes to job requirements from thousands of postings. The system ranks job matches based on compatibility with your profile and career goals."
        }
      ]
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "I'm having trouble uploading my resume—what should I do?",
          answer: "If you're experiencing issues uploading your resume, please ensure it's in PDF format and doesn't exceed our 5MB size limit. If problems persist, try using a different browser or clearing your cache. For further assistance, contact our support team via the Help Center."
        },
        {
          question: "Why am I not receiving job recommendations?",
          answer: "Job recommendations are generated based on the information in your resume. If you're not receiving recommendations, try enhancing your resume with more detailed skills and experience information. Also, verify that your job preferences and location settings are correctly configured in your profile."
        }
      ]
    },
    {
      title: "Billing & Payments",
      faqs: [
        {
          question: "What payment methods are accepted?",
          answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and in some regions, Apple Pay and Google Pay for subscription payments."
        },
        {
          question: "Do you offer refunds?",
          answer: "Yes, we offer a 7-day money-back guarantee for new subscribers. If you're not satisfied with our service, you can request a refund within 7 days of your initial subscription. Please refer to our Refund Policy for detailed information."
        }
      ]
    }
  ];

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
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const categoryStyle = {
    marginBottom: '30px'
  };

  const categoryTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#571397',
    marginBottom: '15px',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px'
  };

  const faqItemStyle = {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '6px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    border: '1px solid #eee'
  };

  const questionStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px'
  };

  const answerStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.5'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Frequently Asked Questions</h1>

      <div style={contentStyle}>
        {faqCategories.map((category, index) => (
          <div key={index} style={categoryStyle}>
            <h2 style={categoryTitleStyle}>{category.title}</h2>
            {category.faqs.map((faq, faqIndex) => (
              <div key={faqIndex} style={faqItemStyle}>
                <h3 style={questionStyle}>{faq.question}</h3>
                <p style={answerStyle}>{faq.answer}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;