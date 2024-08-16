import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmailResponse() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const verifyEmail = async () => {
        // Check any other way to get queryParam ?
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get('token');

      try {
        await axios.get(`http://localhost:5000/api/auth/verify-email?token=${token}`);
        alert('Email verified successfully!');
        navigate('/login'); // Redirect to login page
      } catch (error) {
        alert('Invalid or expired token');
        navigate('/'); // Redirect to home or appropriate page
      }
    };

    verifyEmail();
  }, [navigate]);

  return (
    <div className='text-white'>
      <h2>Verifying your email...</h2>
    </div>
  );
}

export default EmailResponse
