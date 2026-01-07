import React, { useState, useEffect, useRef } from "react";
import "./homepage.css";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [messages, setMessages] = useState([]);

  const chatBoxRef = useRef(null);
  const historyRef = useRef(null);

  // Scroll chat to bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Scroll history to bottom when history changes
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  // SEARCH SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      // Add to history
      setHistory([...history, searchText]); // newest at bottom
      // Add as a "user message" displayed on bottom-right
      setMessages([...messages, { text: searchText, type: "user" }]);
      setSearchText("");
    }
  };

  // NEW CHAT
  const handleNewChat = () => {
    setMessages([]);
    setSearchText("");
    setShowHistory(false);
  };

  return (
    <center>
      <div className="main">
        <div className="homepage">
          {/* LOGO IMAGE */}
          <img src="logo.jpeg" className="smart" alt="smartgpt" />

          <div className="chat-container">
            <div  id="chatBox" ref={chatBoxRef}>
              {messages.length === 0 ? (
                <p className="empty-chat">Start a new chat...</p>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`chat-message ${
                      msg.type === "user" ? "right-message" : "left-message"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* MENU */}
        <div className="history-box">
          <details>
            <summary>Menu</summary>
            <ul>
              <li onClick={handleNewChat}>New Chat</li>
              <li onClick={() => setShowHistory(!showHistory)}>History</li>
            </ul>
          </details>

          {/* SEARCH HISTORY */}
          {showHistory && (
            <div className="history-list" ref={historyRef}>
              {history.length === 0 ? (
                <p>No history yet</p>
              ) : (
                <ul>
                  {history.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* SEARCH FORM */}
        <form id="searchForm" onSubmit={handleSubmit}>
          <input
            className="searchInput"
            type="search"
            placeholder="Search here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="searchBtn">
            <img src="send.png" alt="Search" />
          </button>
        </form>
      </div>
    </center>
  );
}

export default Home;
