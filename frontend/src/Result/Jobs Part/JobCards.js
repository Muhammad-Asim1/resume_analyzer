// /top section/JobCards.js
import React from 'react';
// import {jobsData} from '../../Data/data';

export default function JobCards({jobs}) 
{
  return (
    <div className="job-cards-wrapper">
      <div className="job-cards-container">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">

            <h2 className="job-title">{job.title}</h2>
            <p className="company-location">{job.company} - {job.location}</p>

            <div className="tags-container">
              <span className="match-tag">{job.matchPercentage}% Match</span>
              {/* <span className="salary-tag">{job.salary}</span> */}
            </div>

            {/* <p className="job-description">{job.description}</p> */}
            
            <button
             className="apply-button"
             onClick={() => window.open(job.url, '_blank')}
             >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};