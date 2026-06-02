
// import CVPart from './CV Part/CV';
import React from 'react';
import { useLocation } from 'react-router-dom';
import JobPart from './Jobs Part/Jobs';
import CoursesPart from './Courses Part/Courses';

import RatingsPart from './Ratings Part/Ratings';

export default function Results() 
{
    const location = useLocation();
    const { jobs, courses, cv_scores } = location.state || { jobs: [], courses: [] , cv_scores: []};

    return (
        <div>
            <JobPart jobs={jobs} />
            <CoursesPart courses={courses} />
            <RatingsPart cv_scores={cv_scores}/>
        </div>
    );
}

// changes made in line 8