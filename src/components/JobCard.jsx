import React from 'react';
import '../styles/JobCard.css';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.modalidad} | {job.tipo}</p>
      <button className="btn view-job">Ver Puesto</button>
    </div>
  );
}

export default JobCard;
