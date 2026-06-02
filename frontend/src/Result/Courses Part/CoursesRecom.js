import React from 'react';
// import {coursesData} from '../../Data/data';

export default function CoursesRecommendations({courses})
{
  return (
    <div className="courses-recommendations">
      <h2 className="recommendations-title">Courses Recommendations</h2>
      
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-info">{course.provider} | Difficulty: {course.difficulty}</p>
            <button
             className="course-button"
             onClick={() => window.open(course.url, '_blank')}
             >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// const CourseCard = ({ title, provider, duration }) => (
//   <div className="course-card">
//     <h3 className="course-title">{title}</h3>
//     <p className="course-info">{provider} | Duration: {duration}</p>
//     <button className="course-button">Enroll Now</button>
//   </div>
// );