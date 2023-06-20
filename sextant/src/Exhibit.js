import React from 'react';
import './Exhibit.css';

function Exhibit({ title, children }) {
  return (
    <div className="Exhibit">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Exhibit;
