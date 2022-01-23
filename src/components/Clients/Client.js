import React from "react";
import "./Client.css"

const Clients = ({ clientsIntro, clientsLogo }) => {
  return (
    <div className="client-container">
      <h2 className="client-title">Clients</h2>
      <p className="client-text">We value a great working relationship with our clients above all else. It's why they often come to our parties. It's also why were able to challenge and inspire them to reach for the stars.</p>
      <div className="client-logo-container">
        {clientsLogo.slice(0, 16).map((client) => (
          <div key={client.id} className="client-logo">
            <img src={client.image} alt={client.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
