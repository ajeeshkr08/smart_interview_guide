import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chatbox.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([[], []]);
  const [isCode, setCode] = useState(false);
  const [codeBlocks, setCodeBlocks] = useState([]);

  // const [response, setResponse] = useState("");
  // const [prompt, setprompt] = useState();
  const handleSendMessage = (message) => {
    // const updatedMessages = [...messages, { text: message, sender: "user" }];
    // // Update state with the new array including the user message
    // setMessages(updatedMessages);
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    };
    const fetchData = async () => {
      const result = await fetch("http://127.0.0.1:5000/api", postData);
      const jresult = await result.json();

      setMessages(jresult);

      // setMessages(prompt);
    };
    fetchData();

    // Log user message and updated messages array
    // console.log(message);
    // console.log(updatedMessages);
    // Simulate bot response after 1 second
    // setTimeout(() => {
    //   // Update messages array again, adding the bot response

    //   const updatedMessagesWithBotResponse = [
    //     ...updatedMessages,
    //     {
    //       text: prompt,
    //       sender: "bot",
    //     },
    //   ];

    //   setMessages(updatedMessagesWithBotResponse);
    //   console.log(messages);
    // }, 5000);
  };

  useEffect(() => {
    console.log(messages[0]);
    setCodeBlocks(messages[1]);
    if (codeBlocks != []) {
      setCode(true);
    }
  });

  //import React, { useState, useEffect } from "react";
  // import "./Chatbox.css";

  // // `${process.env.OPENAI_API_KEY}`
  // const ChatBox = () => {
  //   const [messages, setMessages] = useState([]);
  //   const [response, setResponse] = useState("");
  //   const [prompt, setprompt] = useState("haiii");

  //   // Log user message and updated messages array

  //   // useEffect(() => {
  //   //   fetchData();
  //   // });

  //   const handleSendMessage = (message) => {
  //     const updatedMessages = [...messages, { content: message, role: "user" }];
  //     const postData = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ message }),
  //     };
  //     const fetchData = async () => {
  //       const result = await fetch("http://127.0.0.1:5000/api", postData);
  //       const jresult = await result.json();

  //       setprompt(jresult);
  //       console.log(prompt);
  //     };

  //     setprompt(message);
  //     setMessages(updatedMessages);
  //     // const resp = await fetch("http://127.0.0.1:5000/", { prompt });
  //     // console.log(resp);

  //     fetchData();
  //     const updatedMessagesWithBotResponse = [
  //       ...updatedMessages,
  //       {
  //         content: prompt,
  //         role: "assistant",
  //       },
  //     ];
  //     setMessages(updatedMessagesWithBotResponse);
  //     console.log(prompt);
  //     console.log(messages);
  //   };
  // // useEffect(() => {

  // //   };

  //   fetchData();

  //   return () => {
  //     // Cleanup function if needed
  //   };
  // }, [prompt]);

  //pROmpt setup

  return (
    <div className="chat-box">
      <div className="messages">
        {messages[0].map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        {isCode && <code>{codeBlocks}</code>}
      </div>
      <input
        className="prompt"
        type="text"
        placeholder="Ask your doubts  ..."
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            // handleSendMessage(e.target.value);
            handleSendMessage(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default ChatBox;
