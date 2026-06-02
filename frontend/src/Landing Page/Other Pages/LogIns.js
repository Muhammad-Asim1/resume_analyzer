// import React, { useState } from 'react';
// import sitelogo from "../images/newLogo.svg";

// const LoginPage = () => 
// {
//   const [isLogin, setIsLogin] = useState(true);
  
//   const containerStyle = 
//   {
//     width: '100%',
//     height: '100vh',
//     background: 'linear-gradient(to bottom, #F2B1B5 0%, #571397 50%, #F2B1B5 100%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontFamily: 'Arial, sans-serif'
//   };
  
//   const boxStyle = 
//   {
//     backgroundColor: 'white',
//     borderRadius: '12px',
//     padding: '30px',
//     width: '350px',
//     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center'
//   };
  
//   const formStyle = 
//   {
//     display: 'flex',
//     flexDirection: 'column',
//     marginTop: '20px'
//   };
  
//   const inputStyle = 
//   {
//     margin: '10px 0',
//     padding: '10px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//     width: '100%'
//   };
  
//   const buttonStyle = 
//   {
//     background: 'linear-gradient(to right, #571397, #F2B1B5)',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     padding: '10px',
//     marginTop: '10px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     width: '100%'
//   };
  
//   const socialButtonContainerStyle = 
//   {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '10px',
//     margin: '20px 0'
//   };
  
//   const socialButtonStyle = 
//   {
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f1f1f1',
//     borderRadius: '6px',
//     cursor: 'pointer'
//   };
  
//   const dimensions = 
//   {
//     width: "120px",
//     height: "auto",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={boxStyle}>
//         <img src={sitelogo} style={dimensions} alt="Site Logo" />
//         <h2 style={{ color: '#571397' }}>Resume Coach</h2>
//         <h1 style={{ fontSize: '20px', margin: '10px 0', color: '#333' }}>
//           {isLogin ? 'Sign in to your Google account' : 'Create an account'}
//         </h1>
        
//         {/* <div style={socialButtonContainerStyle}>
//           <div style={socialButtonStyle} title="Google">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="#571397">
//               <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
//             </svg>
//           </div>
//           <div style={socialButtonStyle} title="LinkedIn">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="#571397">
//               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//               <rect x="2" y="9" width="4" height="12"></rect>
//               <circle cx="4" cy="4" r="2"></circle>
//             </svg>
//           </div>
//         </div> */}
        
//         {/* <div style={{ margin: '10px 0', color: '#666' }}>or continue with email</div> */}
        
//         <form style={formStyle}>
//           <label style={{ textAlign: 'left', fontSize: '14px', color: '#555' }}>Email</label>
//           <input type="email" placeholder="Enter your email" style={inputStyle} required />
          
//           <label style={{ textAlign: 'left', fontSize: '14px', marginTop: '10px', color: '#555' }}>Password</label>
//           <input type="password" placeholder="Enter your password" style={inputStyle} required />
          
//           <button type="submit" style={buttonStyle}>{isLogin ? 'Sign In' : 'Create Account'}</button>
//         </form>
        
//         <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
//           {/* {isLogin ? "Don't have an account? " : "Already have an account? "} */}
//           {/* <button 
//             onClick={() => setIsLogin(!isLogin)} 
//             style={{ background: 'none', border: 'none', color: '#571397', textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold' }}
//           > */}
//             {/* {isLogin ? 'Sign up' : 'Sign in'}
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import sitelogo from "../images/newLogo.svg";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    navigate('/'); // Navigate to the home page

    setTimeout(() => {
      const element = document.querySelector('.bigText');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500); // Delay to ensure navigation completes before searching for the element
  };

  return (
    <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(to bottom, #F2B1B5 0%, #571397 50%, #F2B1B5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '30px', width: '350px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <img src={sitelogo} style={{ width: "120px", height: "auto" }} alt="Site Logo" />
        <h2 style={{ color: '#571397' }}>Resume Coach</h2>
        <h1 style={{ fontSize: '20px', margin: '10px 0', color: '#333' }}>{isLogin ? 'Sign in to your Google account' : 'Create an account'}</h1>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
          <label style={{ textAlign: 'left', fontSize: '14px', color: '#555' }}>Email</label>
          <input type="email" placeholder="Enter your email" style={{ margin: '10px 0', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', width: '100%' }} required />
          
          <label style={{ textAlign: 'left', fontSize: '14px', marginTop: '10px', color: '#555' }}>Password</label>
          <input type="password" placeholder="Enter your password" style={{ margin: '10px 0', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', width: '100%' }} required />
          
          <button type="submit" style={{ background: 'linear-gradient(to right, #571397, #F2B1B5)', color: 'white', border: 'none', borderRadius: '6px', padding: '10px', marginTop: '10px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
