import React from 'react';


const AgentData = ({ agents, onDeleteAgent }) => {
    const formatLocation = (location) => {
        return Array.isArray(location) ? location.join(', ') : location;
    };

    return (
        <div className="data-container">
            {agents.map(agent => (
                <div className="data-item" key={agent.id}>
                    <h3><a href={`https://www.instagram.com/${agent.instagram}/`} target="_blank" rel="noopener noreferrer">{agent.name}</a></h3>

                    <p>{agent.email}</p>
                    <p>{agent.phone}</p>
                    <p>{formatLocation(agent.location)}</p>
                  
                    <button onClick={() => onDeleteAgent(agent.id)} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default AgentData;
