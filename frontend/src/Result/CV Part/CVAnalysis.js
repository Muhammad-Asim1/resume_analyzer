// /bottom section/CVAnalysis.js
import React from 'react';
import {skillsData} from '../../Data/data';

export default function CVAnalysis()
{
  return (
    <div className="cv-analysis">
      <h2 className="analysis-title">CV Analysis</h2>
      
      <div className="skills-grid">
        <SkillsCard title="Technical Skills" skills={skillsData.technical} />
        <SkillsCard title="Soft Skills" skills={skillsData.soft} />
        <SkillsCard title="Industry Knowledge" skills={skillsData.industry} />
      </div>

      <ExperienceSummary />
      <ImprovementSuggestions />
    </div>
  );
};

const SkillsCard = ({ title, skills }) => (
  <div className="skills-card">
    <h3 className="skills-title">{title}</h3>
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const ExperienceSummary = () => (
  <div className="experience-summary">
    <h3 className="section-title">Experience Summary</h3>
    <p className="summary-text">
      Your CV shows 5+ years of progressive experience in software development 
      with a strong focus on frontend technologies. Your leadership experience 
      and technical expertise make you particularly suitable for senior roles 
      in software engineering and technical team leadership positions.
    </p>
  </div>
);

const ImprovementSuggestions = () => (
  <div>
    <h3 className="section-title">Suggestions for Improvement</h3>
    <ul className="suggestions-list">
      <li>Consider adding specific metrics and achievements from your previous roles</li>
      <li>Highlight any open-source contributions or side projects</li>
      <li>Add certifications in cloud technologies to strengthen your profile</li>
    </ul>
  </div>
);