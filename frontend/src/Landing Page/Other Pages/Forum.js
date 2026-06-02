import React, { useState } from 'react';

const ForumPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
    maxWidth: '1000px',
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

  const flexRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px'
  };

  const categoryButtonStyle = (isActive) => ({
    background: isActive ? '#571397' : '#eee',
    color: isActive ? '#fff' : '#571397',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    boxShadow: isActive ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
  });

  const searchStyle = {
    display: 'flex',
    marginBottom: '20px',
    width: '100%'
  };

  const inputStyle = {
    flex: 1,
    padding: '12px',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    color: '#000'
  };

  const searchButtonStyle = {
    background: '#571397',
    color: '#fff',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    padding: '0 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  };

  const threadCardStyle = {
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
    padding: '20px',
    marginBottom: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    border: '1px solid #ddd',
    transition: 'transform 0.2s ease',
    cursor: 'pointer'
  };

  const threadTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px'
  };

  const threadExcerptStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
    lineHeight: '1.5'
  };

  const threadMetaStyle = {
    fontSize: '14px',
    color: '#888'
  };

  const newThreadButtonStyle = {
    background: 'linear-gradient(to right, #571397, #F2B1B5)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '12px 24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background 0.3s ease',
    display: 'block',
    textAlign: 'center'
  };

  // Sample thread data
  const threads = [
    {
      id: 1,
      title: "Feedback on my software engineer resume",
      author: "CodeMaster",
      category: "resume-feedback",
      replies: 12,
      views: 143,
      lastActivity: "2 hours ago",
      excerpt: "I've been applying to tech positions for 3 months with no success. I've updated my resume to highlight my project experience..."
    },
    {
      id: 2,
      title: "How to explain a 1-year employment gap?",
      author: "CareerChanger",
      category: "job-search-help",
      replies: 24,
      views: 287,
      lastActivity: "5 hours ago",
      excerpt: "After taking a year off for personal reasons, I'm struggling to explain this gap to interviewers. Any advice on how to..."
    },
    {
      id: 3,
      title: "AI tools that helped me land interviews",
      author: "TechRecruiter",
      category: "ai-career-tips",
      replies: 31,
      views: 456,
      lastActivity: "1 day ago",
      excerpt: "I want to share the AI tools that transformed my job search. By using these resume optimization and interview preparation resources..."
    }
  ];

  // Filter threads based on active category and search query
  const filteredThreads = threads.filter(thread => {
    const matchesCategory = activeCategory === 'all' || thread.category === activeCategory;
    const matchesSearch = thread.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          thread.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Career Forum</h1>
      
      <div style={contentStyle}>
        <p style={{ marginBottom: '20px', textAlign: 'center' }}>
          Join our community to discuss job search strategies, get resume feedback, and share career advice.
        </p>

        {/* Category Buttons */}
        <div style={flexRowStyle}>
          {['all', 'resume-feedback', 'job-search-help', 'ai-career-tips'].map(category => (
            <button
              key={category}
              style={categoryButtonStyle(activeCategory === category)}
              onClick={() => setActiveCategory(category)}
            >
              {category.replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase())}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div style={searchStyle}>
          <input 
            type="text" 
            placeholder="Search discussions..." 
            style={inputStyle}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button style={searchButtonStyle}>
            Search
          </button>
        </div>

        {/* Threads */}
        {filteredThreads.map(thread => (
          <div key={thread.id} style={threadCardStyle}>
            <h3 style={threadTitleStyle}>{thread.title}</h3>
            <p style={threadExcerptStyle}>{thread.excerpt}</p>
            <p style={threadMetaStyle}>
              Posted by {thread.author} | {thread.replies} replies | {thread.views} views | Last activity: {thread.lastActivity}
            </p>
          </div>
        ))}

        {/* Start New Thread Button */}
        <button style={newThreadButtonStyle}>Start a New Discussion</button>
      </div>
    </div>
  );
};

export default ForumPage;
