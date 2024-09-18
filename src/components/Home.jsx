// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPowerOff } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome Power-off icon
// import icon from '../assets/superhero-icon.png'; // Ensure the path to your icon is correct
// import Chatbot from './Chatbot'; 

// function Home() {
//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "#007BFF",
//     height: "100vh",
//     width: "100vw",
//     color: "#fff",
//     margin: "0",
//     padding: "0",
//     boxSizing: "border-box",
//     overflow: "hidden", // Hide any overflow to prevent scrolling outside the container
//   };

//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#0056b3",
//     padding: "10px 50px",
//     position: "fixed",
//     top: "0",
//     width: "100%",
//     boxSizing: "border-box",
//     zIndex: "1000",
//     height: "60px", // Fixed height for the header
//     overflow: "hidden",
//   };

//   const mainContentStyle = {
//     padding: "50px",
//     boxSizing: "border-box",
//     marginTop: "60px", // Adjust margin to account for fixed header height
//     flex: "1",
//     overflowY: "auto", // Allow vertical scrolling
//     height: "calc(100vh - 60px)", // Ensure the content area takes up the remaining height
//     backgroundColor: "#007BFF", // Ensure background color matches container
//   };

//   const navbarStyle = {
//     display: "flex",
//     alignItems: "center",
//   };

//   const linkStyle = {
//     color: "#fff",
//     textDecoration: "none",
//     margin: "0 20px",
//     fontSize: "18px",
//     fontWeight: "bold",
//   };

//   const iconAndHeadingStyle = {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//   };

//   const superheroIconStyle = {
//     width: "80px",
//   };

//   const headingStyle = {
//     marginLeft: "10px",
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#800000",
//   };

//   const logoutButtonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#FF4136",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     textDecoration: "none",
//     fontSize: "16px",
//     fontWeight: "bold",
//     display: "flex",
//     alignItems: "center",
//   };

//   const iconStyle = {
//     marginLeft: "8px",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Header */}
//       <header style={headerStyle}>
//         <div style={iconAndHeadingStyle}>
//           <img
//             src={icon} // Superhero icon
//             alt="Superhero Icon"
//             style={superheroIconStyle}
//           />
//           <h1 style={headingStyle}>Welcome Superhero</h1>
//         </div>
//         <nav style={navbarStyle}>
//           <Link to="/dashboard" style={linkStyle}>Superhero Dashboard</Link>
//           <Link to="/messages" style={linkStyle}>Messages</Link>
//           <Link to="/login" style={logoutButtonStyle}>
//             Logout
//             <FontAwesomeIcon icon={faPowerOff} style={iconStyle} />
//           </Link>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <div style={mainContentStyle}>
//         {/* Add your main content here */}
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
// import icon from '../assets/superhero-icon.png';
// import Chatbot from './Chatbot'; // Import the Chatbot component

// function Home() {
//   const [showChatbot, setShowChatbot] = useState(false);

//   const handleMessagesClick = () => {
//     setShowChatbot(true);
//   };

//   const handleCloseChatbot = () => {
//     setShowChatbot(false);
//   };

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "#007BFF",
//     height: "100vh",
//     width: "100vw",
//     color: "#fff",
//     margin: "0",
//     padding: "0",
//     boxSizing: "border-box",
//     overflow: "hidden",
//   };

//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#0056b3",
//     padding: "10px 50px",
//     position: "fixed",
//     top: "0",
//     width: "100%",
//     boxSizing: "border-box",
//     zIndex: "1000",
//     height: "60px",
//   };

//   const mainContentStyle = {
//     padding: "50px",
//     boxSizing: "border-box",
//     marginTop: "60px",
//     flex: "1",
//     overflowY: "auto",
//     height: "calc(100vh - 60px)",
//     backgroundColor: "#007BFF",
//   };

//   const navbarStyle = {
//     display: "flex",
//     alignItems: "center",
//   };

//   const linkStyle = {
//     color: "#fff",
//     textDecoration: "none",
//     margin: "0 20px",
//     fontSize: "18px",
//     fontWeight: "bold",
//   };

//   const iconAndHeadingStyle = {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//   };

//   const superheroIconStyle = {
//     width: "80px",
//   };

//   const headingStyle = {
//     marginLeft: "10px",
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#800000",
//   };

//   const logoutButtonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#FF4136",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     textDecoration: "none",
//     fontSize: "16px",
//     fontWeight: "bold",
//     display: "flex",
//     alignItems: "center",
//   };

//   const iconStyle = {
//     marginLeft: "8px",
//   };

//   return (
//     <div style={containerStyle}>
//       <header style={headerStyle}>
//         <div style={iconAndHeadingStyle}>
//           <img
//             src={icon}
//             alt="Superhero Icon"
//             style={superheroIconStyle}
//           />
//           <h1 style={headingStyle}>Welcome Superhero</h1>
//         </div>
//         <nav style={navbarStyle}>
//           <Link to="/dashboard" style={linkStyle}>Superhero Dashboard</Link>
//           <Link to="#" style={linkStyle} onClick={handleMessagesClick}>Messages</Link>
//           <Link to="/login" style={logoutButtonStyle}>
//             Logout
//             <FontAwesomeIcon icon={faPowerOff} style={iconStyle} />
//           </Link>
//         </nav>
//       </header>

//       <div style={contentStyle}>
//         <div style={textSectionStyle}>
//           <h1>Welcome to the Superhero Grievance Website</h1>
//           <p>Tell us your grievances, and our superhero will address them!</p>
//           {/* Lowered the "Let's Go" button */}
//           <Link to="/superhero-background" style={buttonStyle}>Let's Go</Link>
//           </div>
//         <div style={imageContainerStyle}>
//           <img
//             src="https://www.pngarts.com/files/3/Superhero-PNG-Free-Download.png"
//             alt="Superhero 1"
//             style={imageStyle}
//           />
//           <img
//             src="https://webstockreview.net/images/battle-clipart-superhero-5.png"
//             alt="Superhero 2"
//             style={imageStyle}
//           />
//         </div>
//       </div>

//       {/* Chatbot Component */}
//       <Chatbot isVisible={showChatbot} onClose={handleCloseChatbot} />
//     </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import icon from '../assets/superhero-icon.png';
import Chatbot from './Chatbot'; // Import the Chatbot component

function Home() {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleMessagesClick = () => {
    setShowChatbot(true);
  };

  const handleCloseChatbot = () => {
    setShowChatbot(false);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#007BFF",
    height: "100vh",
    width: "100vw",
    color: "#fff",
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    overflow: "hidden",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0056b3",
    padding: "15px 60px", // Increased padding for more space
    position: "fixed",
    top: "0",
    width: "100%",
    boxSizing: "border-box",
    zIndex: "1000",
    height: "70px", // Increased height for a more prominent header
  };

  const mainContentStyle = {
    padding: "60px", // Increased padding for more space
    boxSizing: "border-box",
    marginTop: "70px", // Adjusted to match the new header height
    flex: "1",
    overflowY: "auto",
    height: "calc(100vh - 70px)", // Adjusted to match the new header height
    backgroundColor: "#007BFF",
  };

  const navbarStyle = {
    display: "flex",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 25px", // Increased margin for more space
    fontSize: "20px", // Increased font size
    fontWeight: "bold",
  };

  const iconAndHeadingStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const superheroIconStyle = {
    width: "100px", // Increased icon size
  };

  const headingStyle = {
    marginLeft: "15px", // Increased margin for better spacing
    fontSize: "28px", // Increased font size
    fontWeight: "bold",
    color: "#800000",
  };

  const logoutButtonStyle = {
    padding: "12px 25px", // Increased padding
    backgroundColor: "#FF4136",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "18px", // Increased font size
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    marginLeft: "10px", // Increased margin for better spacing
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px", // Increased padding
    backgroundColor: "#007BFF",
    color: "#fff",
    flex: "1",
    boxSizing: "border-box",
    overflowY: "auto",
  };

  const textSectionStyle = {
    flex: 1,
    marginRight: '25px', // Increased margin
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 25px', // Increased padding
    backgroundColor: '#FF4136',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '18px', // Increased font size
    fontWeight: 'bold',
  };

  const imageContainerStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px', // Increased gap between images
  };

  const imageStyle = {
    maxWidth: '200px', // Increased maximum width of the images
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={iconAndHeadingStyle}>
          <img
            src={icon}
            alt="Superhero Icon"
            style={superheroIconStyle}
          />
          <h1 style={headingStyle}>Welcome Superhero</h1>
        </div>
        <nav style={navbarStyle}>
          <Link to="/dashboard" style={linkStyle}>Superhero Dashboard</Link>
          <Link to="#" style={linkStyle} onClick={handleMessagesClick}>Messages</Link>
          <Link to="/login" style={logoutButtonStyle}>
            Logout
            <FontAwesomeIcon icon={faPowerOff} style={iconStyle} />
          </Link>
        </nav>
      </header>

      <div style={mainContentStyle}>
        <div style={contentStyle}>
          <div style={textSectionStyle}>
            <h1>Welcome to the Superhero Grievance Website</h1>
            <p>Tell us your grievances, and our superhero will address them!</p>
          </div>
          <div style={imageContainerStyle}>
            <img
              src="https://www.pngarts.com/files/3/Superhero-PNG-Free-Download.png"
              alt="Superhero 1"
              style={imageStyle}
            />
            <img
              src="https://webstockreview.net/images/battle-clipart-superhero-5.png"
              alt="Superhero 2"
              style={imageStyle}
            />
          </div>
        </div>
      </div>

      {/* Chatbot Component */}
      <Chatbot isVisible={showChatbot} onClose={handleCloseChatbot} />
    </div>
  );
}

export default Home;
