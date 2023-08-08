import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-gradient-to-t from-primary to-secondary">
      <h1>You are not signed in</h1>
      <div>
        <button
          className="button mx-2 mt-3 bg-primary"
          onClick={() => navigate('/login', { replace: true })}
        >
          Sign In
        </button>
        <button
          className="button mx-2 bg-primary"
          onClick={() => navigate('/signup', { replace: true })}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default HomeScreen;
