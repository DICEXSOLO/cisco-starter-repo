import React, { useState, useEffect } from 'react';
import WebSocket from 'websocket';

function PacketLatency() {
  const [latency, setLatency] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket.w3cwebsocket('ws://localhost:55455');

    ws.onopen = () => {
      console.log('WebSocket connection established.');
    };

    ws.onmessage = (message) => {
      const packetTimestamp = JSON.parse(message.data).data;
      const currentTimestamp = Date.now();
      const currentLatency = currentTimestamp - packetTimestamp;
      setLatency(currentLatency);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    setSocket(ws);

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [socket]);

  return (
    <div className="Latency">
      <h3>Packet Latency</h3>
      <p>{latency ? `${latency} ms` : 'No data received'}</p>
    </div>
  );
}

export default PacketLatency;
