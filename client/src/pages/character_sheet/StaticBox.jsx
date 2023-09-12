import React from 'react';

function StaticBox({ value, id, highlightField, setHighlightField }) {
  const defaultStyle =
    'w-fit self-center rounded-md bg-n-light p-2 py-1 text-center text-xl font-semibold outline outline-1 hover:bg-n-dark';

  const pingStyle =
    'w-fit self-center rounded-md bg-n-light p-2 py-1 text-center text-xl font-semibold shadow-inner shadow-blue-400 outline outline-blue-700 hover:bg-n-dark';

  function handleClick() {
    if (highlightField === id) {
      setHighlightField(null);
    }
  }

  return (
    <div
      className={highlightField === id ? pingStyle : defaultStyle}
      onClick={handleClick}
    >
      {value}
    </div>
  );
}

export default StaticBox;
