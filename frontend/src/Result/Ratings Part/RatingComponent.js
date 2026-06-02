import React from 'react';

export default function CVRatings({cv_scores}) 
{
  return (
    <div className="cv-ratings">
        {cv_scores.map((cv, index) => (
          <div className="cv-card">
            <ul className="cv-ratings-list">
              <li className='Cv-quality'>CV Quality: {cv.cv_score}</li>
              <li className='Non-Cv-quality'>Spelling: {cv.spelling_score}</li>
              <li className='Non-Cv-quality'>Readability: {cv.readability_score}</li>
              <li className='Non-Cv-quality'>Structure & Formatting: {cv.structure_score}</li>
              <li className='Non-Cv-quality'>Keyword Matching: {cv.keyword_match_score}</li>
              <li className='Non-Cv-quality'>Skills Highlighting: {cv.skills_highlighting_score}</li>
              <li className='Non-Cv-quality'>Consistency: {cv.consistency_score}</li>
            </ul>
          </div>
        ))}
    </div>
  );
};

