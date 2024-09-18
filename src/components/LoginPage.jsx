// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [message, setMessage] = useState(''); // State to hold success or error message
//   const [messageType, setMessageType] = useState(''); // 'success' or 'error'

//   const navigate = useNavigate(); // Hook to navigate between routes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const { email, password } = formData;
//     // Basic validation: check if all fields are filled
//     if (!email || !password) {
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setMessage('Login successful!');
//       setMessageType('success');
//       // Simulate an API call
//       try {
//         // Replace this with your actual API call logic
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         navigate('/'); // Redirect to the homepage
//       } catch (error) {
//         setMessage('Error during login.');
//         setMessageType('error');
//       }
//     } else {
//       setMessage('Please fill in all fields.');
//       setMessageType('error');
//     }
//   };

//   const handleSignupClick = () => {
//     navigate('/signup'); // Redirect to the SignupPage when clicked
//   };

//   // Inline styles
//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh', // Ensure full height of the viewport
//     width: '100vw', // Full width of the viewport
//     backgroundColor: '#f0f0f0', // Light gray background
//     padding: '20px', // Add some padding
//     boxSizing: 'border-box', // Ensure padding doesn't affect the container size
//   };

//   const boxStyle = {
//     backgroundColor: 'white',
//     padding: '30px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     maxWidth: '400px',
//     width: '100%',
//     margin: '0 auto', // Center horizontally
//   };

//   const formGroupStyle = {
//     marginBottom: '20px', // Increase margin between form groups
//   };

//   const labelStyle = {
//     display: 'block',
//     fontSize: '16px', // Increase font size for labels
//     color: '#555',
//     marginBottom: '8px', // Increase margin below labels
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '12px', // Increase padding inside input
//     border: '1px solid #ddd',
//     borderRadius: '5px',
//     backgroundColor: '#dcdcdc', // Ash/Light gray background for input
//     color: '#000', // Black text inside input
//     fontSize: '16px', // Increase font size inside input
//   };

//   const buttonStyle = {
//     width: '100%',
//     backgroundColor: '#007BFF',
//     color: 'white',
//     border: 'none',
//     padding: '12px', // Increase padding for the button
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px', // Increase font size for button text
//   };

//   const messageStyle = (type) => ({
//     color: type === 'success' ? 'green' : 'red',
//     textAlign: 'center',
//     marginBottom: '20px', // Increase margin below messages
//     fontSize: '16px', // Increase font size for messages
//   });

//   const signupTextStyle = {
//     textAlign: 'center',
//     marginTop: '30px', // Increase margin above the signup section
//   };

//   const signupButtonStyle = {
//     background: 'none',
//     border: 'none',
//     color: '#007bff',
//     cursor: 'pointer',
//     textDecoration: 'underline',
//     padding: '0',
//     fontSize: '16px', // Increase font size for the signup button
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={boxStyle}>
//         <h2 style={{ textAlign: 'center', color: '#007BFF', fontSize: '28px' }}>Login to Your Account</h2>
        
//         {/* Display success or error message */}
//         {message && <p style={messageStyle(messageType)}>{message}</p>}

//         <form onSubmit={handleSubmit}>
//           <div style={formGroupStyle}>
//             <label htmlFor="email" style={labelStyle}>Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>
//           <div style={formGroupStyle}>
//             <label htmlFor="password" style={labelStyle}>Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>
//           <button type="submit" style={buttonStyle}>Login</button>
//         </form>

//         {/* Signup Section */}
//         <div style={signupTextStyle}>
//           <p style={{ color: 'black', fontSize: '16px' }}>Forgot my password</p>
//           <button onClick={handleSignupClick} style={signupButtonStyle}>
//             Reset Password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(''); // State to hold success or error message
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const navigate = useNavigate(); // Hook to navigate between routes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { email, password } = formData;
    // Basic validation: check if all fields are filled
    if (!email || !password) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Check if credentials match the predefined ones
      if (formData.email === 'admin@gmail.com' && formData.password === 'admin') {
        setMessage('Login successful!');
        setMessageType('success');
        // Simulate an API call
        try {
          // Replace this with your actual API call logic
          await new Promise((resolve) => setTimeout(resolve, 1000));
          navigate('/'); // Redirect to the homepage
        } catch (error) {
          setMessage('Error during login.');
          setMessageType('error');
        }
      } else {
        setMessage('Invalid email or password.');
        setMessageType('error');
      }
    } else {
      setMessage('Please fill in all fields.');
      setMessageType('error');
    }
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Redirect to the SignupPage when clicked
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensure full height of the viewport
    width: '100vw', // Full width of the viewport
    backgroundColor: '#f0f0f0', // Light gray background
    padding: '20px', // Add some padding
    boxSizing: 'border-box', // Ensure padding doesn't affect the container size
  };

  const boxStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    margin: '0 auto', // Center horizontally
  };

  const formGroupStyle = {
    marginBottom: '20px', // Increase margin between form groups
  };

  const labelStyle = {
    display: 'block',
    fontSize: '16px', // Increase font size for labels
    color: '#555',
    marginBottom: '8px', // Increase margin below labels
  };

  const inputStyle = {
    width: '100%',
    padding: '12px', // Increase padding inside input
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#dcdcdc', // Ash/Light gray background for input
    color: '#000', // Black text inside input
    fontSize: '16px', // Increase font size inside input
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '12px', // Increase padding for the button
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px', // Increase font size for button text
  };

  const messageStyle = (type) => ({
    color: type === 'success' ? 'green' : 'red',
    textAlign: 'center',
    marginBottom: '20px', // Increase margin below messages
    fontSize: '16px', // Increase font size for messages
  });

  const signupTextStyle = {
    textAlign: 'center',
    marginTop: '30px', // Increase margin above the signup section
  };

  const signupButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: '0',
    fontSize: '16px', // Increase font size for the signup button
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ textAlign: 'center', color: '#007BFF', fontSize: '28px' }}>Login to Your Account</h2>
        
        {/* Display success or error message */}
        {message && <p style={messageStyle(messageType)}>{message}</p>}

        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>Login</button>
        </form>

        {/* Signup Section */}
        <div style={signupTextStyle}>
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
