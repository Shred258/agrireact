import React, { useState } from 'react';
import axios from 'axios';
import { FiSend } from 'react-icons/fi';
import './Home.css'; // Use the same CSS

const Chatkulim = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/chat/", { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="container">
      <h2>Chat With Bot</h2>
      <div className="chat-box">
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="send-button">
          <FiSend size={24} />
        </button>
      </div>
      {response && <p className="chat-response">{response}</p>}
    </div>
  );
};

export default Chatkulim;
