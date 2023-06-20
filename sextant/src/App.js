import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import PublicIPAddress from './PublicIpAddress';
import PacketLatency from './PacketLatency';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Sample Exhibit">
        <PublicIPAddress version="ipv4" />
        <PublicIPAddress version="ipv6" />
        <PacketLatency />
      </Exhibit>
    </div>
  );
}

export default App;
