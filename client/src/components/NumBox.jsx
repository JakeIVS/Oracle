import React from 'react';

function NumBox({ value, id, highlightField }) {
  const defaultStyle =
    'w-fit self-center rounded-md bg-n-light p-2 py-1 text-center text-xl font-semibold outline outline-1 hover:bg-n-dark';

  const pingStyle =
    'w-fit self-center rounded-md bg-n-light p-2 py-1 text-center text-xl font-semibold shadow-inner shadow-blue-400 outline outline-blue-700 hover:bg-n-dark';

  function rollD(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function handleRoll() {
    let roll = rollD(20);
    let modifier = parseInt(value);
    let total = roll + modifier;
    console.log(`${roll} (${value}) = ${total}`);
  }

  return (
    <div
      className={highlightField === id ? pingStyle : defaultStyle}
      onClick={handleRoll}
    >
      {value}
    </div>
  );
}

export default NumBox;
