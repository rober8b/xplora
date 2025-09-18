import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobList from './components/JobList';
import Team from './components/Team';
import Speakers from './components/Speakers';
import Footer from './components/Footer';

import './styles/App.css';  // si necesitas estilos globales de layout

// Datos ejemplo
const jobs = [
  { id: 1, title: 'Content y Social Media Manager - Uibeax', modalidad: 'Remoto', tipo: 'Full Time' },
  { id: 2, title: 'Customer Experience - Takenos', modalidad: 'Remoto', tipo: 'Freelance' },
  { id: 3, title: 'Product Owner - Takenos', modalidad: 'Híbrido', tipo: 'Full Time' },
  // … etc
];

const team = [
  { id: 1, name: 'Agostina Emiliozzi', role: 'Makers', photo: 'ruta/a/foto1.jpg' },
  { id: 2, name: 'Karom Bianchi', role: 'Media', photo: 'ruta/a/foto2.jpg' },
  // … etc
];

const speakers = [
  { id: 1, name: 'Martin Migoya', title: 'Co-Founder Globant', photo: 'ruta/a/photo-speaker1.jpg' },
  { id: 2, name: 'Ezequiel Glinsky', title: 'General Manager de Meet', photo: 'ruta/a/photo-speaker2.jpg' },
  // … etc
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <JobList jobs={jobs} />
      <Team members={team} />
      <Speakers speakers={speakers} />
      <Footer />
    </div>
  );
}

export default App;
