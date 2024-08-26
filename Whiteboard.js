// Whiteboard.js
import React, { useState, useEffect } from 'react';
import CollaborationService from './services/collaboration.service';

function Whiteboard({ sessionId, username }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const collaborationService = new CollaborationService();
    collaborationService.joinSession(sessionId)
      .then((response) => {
        setMessages(response.messages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sessionId]);

  const handleSendMessage = (message) => {
    const collaborationService = new CollaborationService();
    collaborationService.sendMessage(sessionId, message)
      .then((response) => {
        setMessages((prevMessages) => [...prevMessages, response.message]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="whiteboard">
      <h1>Whiteboard</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input type="text" placeholder="Type a message" />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Whiteboard;