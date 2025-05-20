import React from 'react';
import './Reference.css';

const projects = [
  {
    title: 'Industrijski kompleks "MetalTech"',
    description: 'Izvedeni kompletni sistemi grejanja i hlađenja sa automatizacijom procesa.'
  },
  {
    title: 'Stambeni blok "Nova Zvezda"',
    description: 'Centralno grejanje i ventilacija u 4 zgrade sa po 30 stanova.'
  },
  {
    title: 'Logistički centar "TransCargo"',
    description: 'Instalacija rashladnih komora i sistema za klimatizaciju.'
  },
  {
    title: 'Tržni centar "CityMall"',
    description: 'Kompletna HVAC rešenja za komercijalne prostore velikih dimenzija.'
  },
  {
    title: 'Banja "Termalis"',
    description: 'Specijalizovane mašinske instalacije za bazene i wellness centre.'
  },
  {
    title: 'IT kampus "DataNova"',
    description: 'Napredni sistemi klimatizacije i kontrole vlažnosti za server sale.'
  },
  {
    title: 'Bolnica "MedicaPlus"',
    description: 'Sterilni ventilacioni sistemi i precizna regulacija temperature.'
  },
  {
    title: 'Sportska hala "Arena25"',
    description: 'Instalacija sistema grejanja, hlađenja i ventilacije za velike sportske objekte.'
  },
  {
    title: 'Poslovni objekat "SkyOffice"',
    description: 'Energetski efikasni sistemi sa pametnom regulacijom i monitoringom.'
  },
  {
    title: 'Hotel "Mirage Lux"',
    description: 'Grejanje, hlađenje i sanitarne instalacije u luksuznim smeštajnim jedinicama.'
  },
  {
  title: 'Studentski dom "Akademik"',
  description: 'Moderni sistemi ventilacije i klimatizacije za udoban boravak studenata.'
},
{
  title: 'Tehnički muzej "Inovacija"',
  description: 'Posebni sistemi za kontrolu temperature i vlage u izložbenim prostorima.'
}
];

const Reference = () => {
  return (
    <div className="reference-container text-light">
      <h1 className="text-center mb-5">Naši Projekti</h1>
      <div className="card-grid">
        {projects.map((project, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>{project.title}</h2>
              </div>
              <div className="flip-card-back">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reference;
