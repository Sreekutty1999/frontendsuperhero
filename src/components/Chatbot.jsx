// import React from 'react';

// const Chatbot = ({ isVisible, onClose }) => {
//   if (!isVisible) return null;

//   return (
//     <div style={chatbotContainerStyle}>
//       <div style={chatbotHeaderStyle}>
//         <h2>Chat with us!</h2>
//         <button style={closeButtonStyle} onClick={onClose}>X</button>
//       </div>
//       <div style={chatbotBodyStyle}>
//         {/* You can integrate an actual chatbot service here */}
//         <p>Welcome to our chat! How can I assist you today?</p>
//       </div>
//     </div>
//   );
// };

// const chatbotContainerStyle = {
//   position: 'fixed',
//   bottom: '20px',
//   right: '20px',
//   width: '300px',
//   height: '400px',
//   backgroundColor: '#fff',
//   border: '1px solid #ccc',
//   borderRadius: '10px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   zIndex: '2000',
// };

// const chatbotHeaderStyle = {
//   backgroundColor: '#007BFF',
//   color: '#fff',
//   padding: '10px',
//   borderTopLeftRadius: '10px',
//   borderTopRightRadius: '10px',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// };

// const closeButtonStyle = {
//   backgroundColor: '#FF4136',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '5px',
//   padding: '5px 10px',
//   cursor: 'pointer',
// };

// const chatbotBodyStyle = {
//   padding: '10px',
//   height: 'calc(100% - 40px)',
//   overflowY: 'auto',
// };

// export default Chatbot;

import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Chatbot = ({ isVisible, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, fromUser: true }]);
      setInput('');
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={chatContainerStyle}>
      <div style={chatHeaderStyle}>
        <h2>Chatbot</h2>
        <button onClick={onClose} style={closeButtonStyle}>X</button>
      </div>
      <div style={chatBodyStyle}>
        {messages.map((msg, index) => (
          <div key={index} style={messageStyle(msg.fromUser)}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={chatFooterStyle}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          style={chatInputStyle}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} style={sendButtonStyle}>
          <FaPaperPlane size={20} color="#007BFF" />
        </button>
      </div>
    </div>
  );
};

// Define your styles here
const chatContainerStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '300px',
  height: '400px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
};

const chatHeaderStyle = {
  padding: '10px',
  backgroundColor: '#007BFF',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const closeButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '20px',
  cursor: 'pointer',
};

const chatBodyStyle = {
  flex: 1,
  padding: '10px',
  overflowY: 'scroll',
};

const messageStyle = (fromUser) => ({
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: fromUser ? '#007BFF' : '#ddd',
  color: fromUser ? '#fff' : '#000',
  marginBottom: '10px',
  textAlign: fromUser ? 'right' : 'left',
});

const chatFooterStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  borderTop: '1px solid #ddd',
};

const chatInputStyle = {
  flex: 1,
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

const sendButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  marginLeft: '10px',
};

export default Chatbot;
