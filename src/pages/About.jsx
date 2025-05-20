import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const handleReferencesClick = () => {
    navigate('/reference');
  };

  return (
    <div className="about-background">
      <div className="about-container">
        <h1 className="about-title">O Nama</h1>
        <p className="about-text">
          KONITERN je firma specijalizovana za izvođenje i održavanje mašinskih instalacija u građevinskom i industrijskom sektoru. 
          Naš tim čine iskusni inženjeri i tehničari koji garantuju kvalitet, efikasnost i pouzdanost u svakom projektu.
        </p>
        <p className="about-text">
          Naš fokus je na inovacijama, preciznosti i primeni najviših standarda u oblasti grejanja, hlađenja, ventilacije i sanitarnih sistema.
        </p>
        <button className="about-btn" onClick={handleReferencesClick}>
          Pogledaj reference
        </button>
      </div>
    </div>
  );
};

export default About;
