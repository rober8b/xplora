import React from 'react';
import TeamMember from './TeamMember';
import '../styles/Team.css';

function Team({ members }) {
  return (
    <section id="team" className="team-section">
      <h2>Nuestro Equipo</h2>
      <div className="team-container">
        {members.map(mem => (
          <TeamMember key={mem.id} member={mem} />
        ))}
      </div>
    </section>
  );
}

export default Team;
