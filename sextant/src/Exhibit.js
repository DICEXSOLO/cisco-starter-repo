import React from 'react';

function Exhibit({ title, children }) {
  return (
    <div className="Exhibit">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Exhibit;
