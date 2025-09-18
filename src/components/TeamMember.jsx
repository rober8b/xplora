import React from 'react';
import '../styles/TeamMember.css';

function TeamMember({ member }) {
  return (
    <div className="team-member">
      <img src={member.photo} alt={`${member.name}`} loading="lazy" />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  );
}

export default TeamMember;
