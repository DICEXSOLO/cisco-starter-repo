import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Sample Exhibit">
        {/* Add child components here */}
      </Exhibit>
    </div>
  );
}

export default App;
