import React from 'react';
import JobCard from './JobCard';
import '../styles/JobList.css';

function JobList({ jobs }) {
  return (
    <section id="jobs" className="job-list">
      <h2>Bolsa de Empleo</h2>
      <div className="jobs-container">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

export default JobList;
