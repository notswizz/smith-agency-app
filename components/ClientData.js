import React from 'react';

const ClientData = ({ clients, onDeleteClient }) => {
    return (
        <div className="data-container">
            {clients.map(client => (
                <div className="data-item" key={client.id}>
                    <h3>
                      <a href={client.website.startsWith('http') ? client.website : `http://${client.website}`} 
                           target="_blank" 
                           rel="noopener noreferrer">
                           {client.company}
                        </a>
                        </h3>
                  
                    <p>{client.contact}</p>
                    <p>{client.email}</p>
                    <p>Booth: {client.boothLocation}</p>
                    <button onClick={() => onDeleteClient(client.id)} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ClientData;
