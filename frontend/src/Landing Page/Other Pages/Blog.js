import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 In-Demand Skills for 2025",
      excerpt: "Discover which skills employers will be prioritizing in the coming year and how you can develop them to stay competitive in the job market.",
      author: "Career Expert",
      date: "March 1, 2025",
      category: "Career Development",
      readTime: "6 min read",
      image: "https://via.placeholder.com/600x400",
      featured: true
    },
    {
      id: 2,
      title: "How AI is Changing the Hiring Process",
      excerpt: "From resume screening to interview analysis, artificial intelligence is transforming how companies hire. Learn how to navigate this new landscape.",
      author: "Tech Analyst",
      date: "February 20, 2025",
      category: "Industry Trends",
      readTime: "8 min read",
      image: "https://via.placeholder.com/600x400",
      featured: true
    },
    {
      id: 3,
      title: "Best Free Online Courses for Career Growth",
      excerpt: "You don't always need to spend money to learn valuable skills. We've rounded up the best free resources to level up your professional abilities.",
      author: "Education Specialist",
      date: "February 15, 2025",
      category: "Education",
      readTime: "5 min read",
      image: "https://via.placeholder.com/600x400",
      featured: false
    }
  ];

  const categories = [
    "All Categories",
    "Career Development",
    "Industry Trends",
    "Education",
    "Job Applications",
    "Resume Tips",
    "Interview Preparation"
  ];

  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #F2B1B5 0%, #571397 50%, #F2B1B5 100%)',
    padding: '40px 20px',
    color: '#000',
    fontFamily: 'Arial, sans-serif'
  };

  const contentStyle = {
    maxWidth: '1000px',
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

  const cardStyle = {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer'
  };

  const cardImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const cardContentStyle = {
    padding: '20px'
  };

  const categoryBadgeStyle = {
    backgroundColor: '#f2b1b5',
    color: '#571397',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '4px 10px',
    borderRadius: '15px',
    display: 'inline-block'
  };

  const authorStyle = {
    fontSize: '14px',
    color: '#888'
  };

  const excerptStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px'
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #571397, #F2B1B5)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  };

  const categoryButtonStyle = (isActive) => ({
    backgroundColor: isActive ? '#571397' : '#eee',
    color: isActive ? '#fff' : '#571397',
    border: 'none',
    borderRadius: '15px',
    padding: '8px 15px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  });

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Career Blog</h1>

        {/* Featured Articles */}
        <h2 style={headingStyle}>Featured Articles</h2>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {blogPosts.filter(post => post.featured).map(post => (
            <div key={post.id} style={cardStyle}>
              <img src={post.image} alt={post.title} style={cardImageStyle} />
              <div style={cardContentStyle}>
                <span style={categoryBadgeStyle}>{post.category}</span>
                <h3>{post.title}</h3>
                <p style={excerptStyle}>{post.excerpt}</p>
                <p style={authorStyle}>{post.author} — {post.date} • {post.readTime}</p>
                <a href={`/blog/${post.id}`} style={{ color: '#571397', fontWeight: 'bold' }}>Read More →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Filter */}
        <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {categories.map((category, index) => (
            <button key={index} style={categoryButtonStyle(index === 0)}>{category}</button>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <h2 style={headingStyle}>Stay Updated with Career Insights</h2>
          <p>Subscribe to our newsletter for the latest job market trends, resume tips, and career advice delivered straight to your inbox.</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
            <input type="email" placeholder="Enter your email" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc', width: '250px' }} />
            <button style={buttonStyle}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
