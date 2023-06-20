import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PublicIPAddress({ version }) {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await axios.get(`https://api.ipify.org?format=json&${version}`);
        setIPAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIPAddress();
  }, [version]);

  return (
    <div className="IPAddress">
      <h3>Public IP Address ({version})</h3>
      <p>{ipAddress}</p>
    </div>
  );
}

export default PublicIPAddress;
