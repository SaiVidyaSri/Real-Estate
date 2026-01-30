import React, { useState, useEffect } from 'react';
import './Clients.css';
import API_URL from '../config';

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch(`${API_URL}/api/clients`);
      if (response.ok) {
        const data = await response.json();
        setClients(Array.isArray(data) ? data : []);
      } else {
        console.error('Failed to fetch clients');
        setClients([]);
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
      setClients([]);
    }
  };

  return (
    <section className="clients section" id="testimonials">
      <div className="container">
        <h2 className="section-title">Happy Clients</h2>

        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client._id} className="client-card">
              <div className="client-image">
                <img src={`${API_URL}${client.image}`} alt={client.name} />
              </div>
              <p className="client-description">{client.description}</p>
              <h4 className="client-name">{client.name}</h4>
              <p className="client-designation">{client.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
