import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Spinner = () => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() =>{
        const interval = setInterval(()=>{
            setCount((prevValue)=> --prevValue)
        }, 1000)
        count === 0 && navigate('/login', {
          state: location.pathname})
        return () => clearInterval(interval)
    }, [count, navigate, location])
  return (
    <div className="spinner-container">
      <div className="text-center">
      <h1>Redirecting to login page in {count} second</h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;