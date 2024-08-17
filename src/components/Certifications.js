import React from 'react';
import './Certifications.css'; // Import the CSS file
import { certifications } from '../data/certifications'; // Import the certifications data

const Certifications = () => {
  return (
    <section id="Certifications" className="certifications-section">
      <h1>CERTIFICATIONS</h1> {/* This will be centered horizontally */}
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <img src={cert.image} alt={`${cert.title} image`} className="certification-image" />
            <h3 className="certification-title">{cert.title}</h3>
            <p className="certification-issuer">{cert.issuer}</p>
            <p className="certification-date">{cert.date}</p>
            <a href={cert.doc} target="_blank" rel="noopener noreferrer" className="certification-doc-link">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
