import React from 'react';
import './Newsletter.css';

function Newsletter() {
  const newsletterStyle = {
    backgroundImage: `linear-gradient(rgba(26, 26, 46, 0.5), rgba(22, 33, 62, 0.5)), url(${process.env.PUBLIC_URL}/assets/images/Rectangle.svg)`
  };

  return (
    <section className="newsletter section" style={newsletterStyle}>
      <div className="newsletter-overlay"></div>
      <div className="container newsletter-container">
        <h2>Learn more about our listing process, as well as our additional staging and design work.</h2>
        <a href="#about-us">
          <button className="btn-learn-more">LEARN MORE</button>
        </a>
      </div>
    </section>
  );
}

export default Newsletter;
