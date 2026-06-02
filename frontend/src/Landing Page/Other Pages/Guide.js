import React, { useState } from 'react';

const InterviewGuide = () => {
  const [activeTab, setActiveTab] = useState('types');

  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #F2B1B5 0%, #571397 50%, #F2B1B5 100%)',
    padding: '40px 20px',
    color: '#000',
    fontFamily: 'Arial, sans-serif'
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#571397',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const tabButtonStyle = (isActive) => ({
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: isActive ? '#571397' : '#eee',
    color: isActive ? '#fff' : '#571397',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    boxShadow: isActive ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
  });

  const cardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const subheadingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#571397',
    marginBottom: '10px'
  };

  const listStyle = {
    paddingLeft: '20px',
    lineHeight: '1.8',
    marginBottom: '10px'
  };

  const listItemStyle = {
    marginBottom: '8px'
  };

  const strongStyle = {
    fontWeight: 'bold',
    color: '#333'
  };

  // Interview types data
  const interviewTypes = [
    {
      type: "HR/Screening Interview",
      description: "Initial interview to assess basic qualifications and cultural fit",
      commonQuestions: [
        "Tell me about yourself",
        "Why are you interested in this position?",
        "What are your salary expectations?",
        "Why are you leaving your current job?",
        "What are your strengths and weaknesses?"
      ],
      tips: [
        "Research the company thoroughly",
        "Prepare a concise (1-2 minute) professional summary",
        "Be ready to explain employment gaps or job changes",
        "Have realistic salary expectations based on market research",
        "Prepare thoughtful questions about the company and role"
      ]
    },
    {
      type: "Technical Interview",
      description: "Assesses your technical skills and problem-solving abilities",
      commonQuestions: [
        "How would you solve [specific technical problem]?",
        "Explain a complex technical concept in simple terms",
        "Tell me about a challenging technical project you worked on",
        "How do you stay updated with industry developments?",
        "Coding exercises or technical assessments"
      ],
      tips: [
        "Review fundamental concepts in your field",
        "Practice explaining technical concepts to non-technical people",
        "Be prepared to write code or solve problems in real-time",
        "Demonstrate your thought process while solving problems",
        "Review your past projects and be ready to discuss technical details"
      ]
    }
  ];

  // Common interview questions
  const commonQuestions = [
    {
      category: "About You",
      questions: [
        {
          question: "Tell me about yourself",
          answerTips: "Start with your current role, mention key professional experiences, highlight strengths relevant to the position, and briefly mention career goals. Keep it professional and under 2 minutes."
        },
        {
          question: "What are your greatest strengths?",
          answerTips: "Choose 2-3 strengths directly relevant to the job. Provide specific examples demonstrating each strength, and explain how these strengths would benefit the company."
        }
      ]
    },
    {
      category: "Experience & Skills",
      questions: [
        {
          question: "Why should we hire you?",
          answerTips: "Highlight your unique combination of skills and experience that match the job requirements. Mention specific achievements that demonstrate your ability to perform well in this role."
        },
        {
          question: "Describe a challenging situation and how you overcame it",
          answerTips: "Use the STAR method (Situation, Task, Action, Result). Choose a relevant professional challenge, explain your approach, and emphasize how you successfully resolved the issue and what you learned from it."
        }
      ]
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Interview Guide</h1>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('types')}
            style={tabButtonStyle(activeTab === 'types')}
          >
            Interview Types
          </button>
          <button
            onClick={() => setActiveTab('common')}
            style={tabButtonStyle(activeTab === 'common')}
          >
            Common Questions
          </button>
        </div>

        {/* Display Interview Types */}
        {activeTab === 'types' && (
          <div>
            {interviewTypes.map((interview, index) => (
              <div key={index} style={cardStyle}>
                <h2 style={subheadingStyle}>{interview.type}</h2>
                <p>{interview.description}</p>
                <h3 style={subheadingStyle}>Common Questions:</h3>
                <ul style={listStyle}>
                  {interview.commonQuestions.map((question, qIndex) => (
                    <li key={qIndex} style={listItemStyle}>{question}</li>
                  ))}
                </ul>
                <h3 style={subheadingStyle}>Tips:</h3>
                <ul style={listStyle}>
                  {interview.tips.map((tip, tIndex) => (
                    <li key={tIndex} style={listItemStyle}>{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Display Common Questions */}
        {activeTab === 'common' && (
          <div>
            {commonQuestions.map((category, cIndex) => (
              <div key={cIndex} style={cardStyle}>
                <h2 style={subheadingStyle}>{category.category}</h2>
                {category.questions.map((q, qIndex) => (
                  <div key={qIndex}>
                    <p>
                      <strong>Q:</strong> {q.question}
                    </p>
                    <p>
                      <strong>Tip:</strong> {q.answerTips}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewGuide;
