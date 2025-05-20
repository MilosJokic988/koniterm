import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about'); // vodi na About stranicu
  };

  return (
    <div className="home-background text-center text-light">
      <h1>KONITERM</h1>
      <p className="mt-4 fs-4">
        Stručnost u oblasti mašinskih instalacija — pouzdana rešenja za industriju i građevinarstvo.
      </p>
      <button className="cta-button mt-4" onClick={handleClick}>
        Saznaj više o nama
      </button>
    </div>
  );
};

export default Home;
