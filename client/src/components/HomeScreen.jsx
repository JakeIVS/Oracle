import React from 'react';

function HomeScreen() {
  return (
    <div className="h-full w-full bg-gradient-to-t from-n-dark to-secondary">
      <h1>You are not signed in</h1>
      <div>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default HomeScreen;
