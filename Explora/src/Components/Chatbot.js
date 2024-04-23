import React, { useState } from "react";
import "./Chatbot.css"; // Import your CSS file

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [outputMessage, setOutputMessage] = useState("");
  const sendMessageToRasa = async () => {
    try {
      const response = await fetch(
        "http://rasa-server-endpoint/webhooks/rest/webhook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: inputMessage }),
        }
      );
      const data = await response.json();
      // Assuming Rasa response has a 'text' field containing the bot's reply
      setOutputMessage(data[0].text);
    } catch (error) {
      console.error("Error sending message to Rasa:", error);
    }
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input) {
      addMessage(input, "user");
      setInput("");
    }
    sendMessageToRasa();
  };

  const handleBookAppointment = () => {
    addMessage("Book Appointment", "user");
    // Handle booking appointment logic here
  };

  const handleCancelAppointment = () => {
    addMessage("Cancel Appointment", "user");
    // Handle canceling appointment logic here
  };

  const addMessage = (text, type) => {
    setMessages([...messages, { text, type }]);
    setInputMessage(outputMessage);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        <div className="chatbot_reply">
          <button onClick={handleBookAppointment}>Book Appointment</button>
        </div>
        <div className="chatbot_reply">
          <button onClick={handleCancelAppointment}>Cancel Appointment</button>
        </div>
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
