// /top section/TopSection.js
import React from 'react';

import CoursesRecom from './CoursesRecom'

export default function Courses({courses})
{
  const gradientStyle = 
  {
    background: "linear-gradient(to bottom, #571397 28%, #F2B1B5 100%)",
    height: "603px",
    width: "100%",
  };

  return (
    <div style={gradientStyle} className='center'>
      <div>
        <h1 className="heading">Recommended Courses</h1>
        <CoursesRecom courses={courses} />
      </div>
    </div>
  );
}