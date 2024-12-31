import React, { useState, useEffect, useRef } from "react";
import "./ChatRoom.css";
import ved from "./vedio/bgved.mp4";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const videoRef = useRef(null);

  // Adjust video playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  // Simulate receiving a message
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        messages.length === 0 || 
        (messages[messages.length - 1]?.text.includes("You"))
      ) {
        const randomUser = `User${Math.floor(Math.random() * 100)}`;
        const newMessage = { text: `${randomUser}: Random message`, type: "system" };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [messages]);

  // Auto-scroll to the bottom when a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle typing indicator
  const handleInputChange = (e) => {
    setInput(e.target.value);
    setIsTyping(true);

    // Debounce typing indicator
    setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: `${userName || "You"}: ${input}`, type: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput(""); // Clear input field
    }
  };

  return (
    <div className="chat-container">
      {/* Background video */}
      <video 
        autoPlay 
        muted 
        loop 
        className="homepage-video" 
        ref={videoRef}
      >
        <source src={ved} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Chat Room UI */}
      <h2 className="chat-header">Chat Room</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            <span>{msg.text}</span>
          </div>
        ))}
        {isTyping && <div className="typing-indicator">User is typing...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
          className="username-field"
        />
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message"
          className="input-field"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
