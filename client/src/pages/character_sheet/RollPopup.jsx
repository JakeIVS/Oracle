import React from 'react';

function RollPopup({ roll, showRoll }) {
  const active =
    'outline-3 absolute bottom-4 left-4 h-44 w-80 rounded-lg bg-gradient-to-t from-n-dark to-n-light shadow-md shadow-black outline';
  const inactive =
    'absolute bottom-4 left-4 h-44 w-0 rounded-lg bg-gradient-to-t from-n-dark to-n-light shadow-md shadow-black';
  return (
    <div className={inactive}>
      <h1>{roll}</h1>
    </div>
  );
}

export default RollPopup;
