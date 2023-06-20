import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import PublicIPAddress from './PublicIpAddress';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Sample Exhibit">
        <PublicIPAddress version="ipv4" />
        <PublicIPAddress version="ipv6" />
      </Exhibit>
    </div>
  );
}

export default App;
