import React from 'react';

function SavingThrow({ stat, bonus }) {
  return (
    <div className="flex justify-between overflow-hidden rounded-sm bg-n-dark outline outline-1">
      <h5 className="pl-1">{stat}</h5>
      <p className="w-1/6 rounded-r-sm border-l border-l-black bg-n-light pr-1 text-right">
        {cubeIcon}
      </p>
    </div>
  );
}

export default SavingThrow;
