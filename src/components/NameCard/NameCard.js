import React from 'react';
import './NameCard.css';

const NameCard = ({id, name, status, interests, remove}) => {
  return (
    <div className="namecard">
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{interests}</p>
      <button onClick={() => remove(id)}>Delete</button>
    </div>
  )
}

export default NameCard;
