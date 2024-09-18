// import { useEffect, useState } from 'react';

// function SuperheroDashboard() {
//   const [grievances, setGrievances] = useState([]);

//   useEffect(() => {
//     const fetchGrievances = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/grievances'); 
//         const data = await response.json();
//         console.log(data);  // Log the data to inspect the response
//         setGrievances(data);  // Assuming the backend sends an array of grievances
//       } catch (error) {
//         console.error('Error fetching grievances:', error);
//       }
//     };
  
//     fetchGrievances();  // Fetch data when the component mounts
//   }, []);
  

//   const tableStyle = {
//     width: '80%',
//     margin: '20px auto',
//     borderCollapse: 'collapse',
//     textAlign: 'left',
//     backgroundColor: '#f9f9f9',
//   };

//   const thStyle = {
//     padding: '12px',
//     backgroundColor: '#f2f2f2',
//     border: '1px solid #ddd',
//   };

//   const tdStyle = {
//     padding: '12px',
//     border: '1px solid #ddd',
//   };

//   const headerStyle = {
//     textAlign: 'center',
//     fontSize: '24px',
//     marginBottom: '20px',
//     color: '#fff', // White text for contrast
//   };

//   const noDataStyle = {
//     textAlign: 'center',
//     padding: '20px',
//     color: '#555',
//   };

//   const containerStyle = {
//     backgroundColor: '#007bff',  // Blue background
//     padding: '20px',
//     minHeight: '100vh',  // Full page height
//     boxSizing: 'border-box',
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headerStyle}>Grievance Submission Details</h2>
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>Sl. No.</th>
//             <th style={thStyle}>Name</th>
//             <th style={thStyle}>Email</th>
//             <th style={thStyle}>Issue</th>
//             <th style={thStyle}>Date & Time</th>
//           </tr>
//         </thead>
//         <tbody>
//   {grievances.length > 0 ? grievances.map((grievance, index) => (
//     <tr key={index}>
//       <td style={tdStyle}>{index + 1}</td>
//       <td style={tdStyle}>{grievance.correctNameField}</td> {/* Replace with correct name field */}
//       <td style={tdStyle}>{grievance.correctEmailField}</td> {/* Replace with correct email field */}
//       <td style={tdStyle}>{grievance.correctDescriptionField}</td> {/* Replace with correct description field */}
//       <td style={tdStyle}>{new Date(grievance.correctTimestampField).toLocaleString()}</td>  {/* Replace with correct timestamp field */}
//     </tr>
//   )) : (
//     <tr>
//       <td colSpan="5" style={noDataStyle}>No grievances found</td>
//     </tr>
//   )}
// </tbody>

//       </table>
//     </div>
//   );
// }

// export default SuperheroDashboard;

import { useEffect, useState } from 'react';

function SuperheroDashboard() {
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        const response = await fetch('http://localhost:8080/grievances');
        const data = await response.json();
        setGrievances(data);  // Assuming the backend sends an array of grievances
      } catch (error) {
        console.error('Error fetching grievances:', error);
      }
    };

    fetchGrievances();  // Fetch data when the component mounts
  }, []);

  const tableStyle = {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
  };

  const thStyle = {
    padding: '12px',
    backgroundColor: '#f2f2f2',
    border: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '12px',
    border: '1px solid #ddd',
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#fff',
  };

  const noDataStyle = {
    textAlign: 'center',
    padding: '20px',
    color: '#555',
  };

  const containerStyle = {
    backgroundColor: '#007bff',
    padding: '20px',
    minHeight: '100vh',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Grievance Submission Details</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Sl. No.</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Issue</th>
            <th style={thStyle}>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {grievances.length > 0 ? grievances.map((grievance, index) => (
            <tr key={index}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{grievance.name}</td>
              <td style={tdStyle}>{grievance.email}</td>
              <td style={tdStyle}>{grievance.description}</td>
              <td style={tdStyle}>{new Date(grievance.timestamp).toLocaleString()}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan="5" style={noDataStyle}>No grievances found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SuperheroDashboard;

