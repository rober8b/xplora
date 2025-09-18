// SpeakerCard.jsx
import React from 'react';
import '../styles/SpeakerCard.css';

function SpeakerCard({ speaker }) {
  return (
    <div className="speaker-card">
      <img src={speaker.photo} alt={speaker.name} loading="lazy" />
      <h3>{speaker.name}</h3>
      <p>{speaker.title}</p>
    </div>
  );
}

export default SpeakerCard;
