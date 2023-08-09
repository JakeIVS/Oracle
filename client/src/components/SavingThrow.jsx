import React from 'react';

function SavingThrow({ save, bonus }) {
  return (
    <div className="overflow-hidden rounded-sm bg-n-dark px-1 outline outline-1">
      <h5>Strength</h5>
      <p>{bonus}</p>
    </div>
  );
}

export default SavingThrow;
