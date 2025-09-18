// Speakers.jsx
import React from 'react';
import SpeakerCard from './SpeakerCard';
import '../styles/Speakers.css';

function Speakers({ speakers }) {
  return (
    <section id="speakers" className="speakers-section">
      <h2>Speakers que pasaron por Nuestros Eventos</h2>
      <div className="speakers-container">
        {speakers.map(sp => (
          <SpeakerCard key={sp.id} speaker={sp} />
        ))}
      </div>
    </section>
  );
}

export default Speakers;
