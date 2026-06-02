// /top section/TopSection.js
import React from 'react';
import JobCards from './JobCards';

export default function TopSection({jobs})
{
  const gradientStyle = 
  {
    background: "linear-gradient(to bottom, #F2B1B5 0%, #571397 100%)",
    height: "603px",
    width: "100%",
  };

  return (
    <div style={gradientStyle} className='center'>
      <div>
        <h1 className="heading">Your Job Recommendations</h1>
        <JobCards jobs={jobs}/>
      </div>
    </div>
  );
}