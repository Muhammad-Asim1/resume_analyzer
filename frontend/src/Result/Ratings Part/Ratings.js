import React from 'react';
import RatingComponent from './RatingComponent';

export default function Ratings({cv_scores})
{
  const gradientStyle =
  {
    background: "linear-gradient(to bottom, #F2B1B5 100%, #571397 0%)",
    height: "493px",
    width: "100%",
  };

  return (
    <div style={gradientStyle} className='center'>
      <div>
        <h1 className="CV-Heading">Your CV Ratings</h1>
        <RatingComponent cv_scores={cv_scores}/>
      </div>
    </div>
  );
}