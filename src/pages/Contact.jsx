import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-background text-light">
      <div className="contact-container">
        <h1 className="text-center mb-4">Kontaktirajte nas</h1>

        <div className="contact-info">
          <div>
            <h3>Email</h3>
            <p>office@konitern.rs</p>
          </div>
          <div>
            <h3>Telefon</h3>
            <p>+381 11 123 456</p>
          </div>
          <div>
            <h3>Adresa</h3>
            <p>Vojvode Stepe 123, Beograd, Srbija</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Vaše ime" required />
          <input type="email" placeholder="Vaš email" required />
          <textarea placeholder="Vaša poruka" rows="5" required />
          <button type="submit">Pošalji poruku</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
