// /bottom section/BottomSection.js
import React from 'react';
import CVAnalysis from './CVAnalysis';

export default function BottomSection()
{
  const gradientStyle = 
  {
    background: "linear-gradient(to bottom, #571397 28%, #F2B1B5 83%)",
    height: "603px",
    width: "100%",
  };

  return (
    <div style={gradientStyle} className='center'>
      <div>
        <CVAnalysis />
      </div>
    </div>
  );
};