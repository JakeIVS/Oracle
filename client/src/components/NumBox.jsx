import React from 'react';

function NumBox({ value }) {
  return (
    <div className="w-fit self-center rounded-md bg-n-light p-2 text-center text-xl font-semibold outline outline-1 hover:bg-n-dark">
      {value}
    </div>
  );
}

export default NumBox;
