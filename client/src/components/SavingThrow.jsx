import React from 'react';
import NumBox from './NumBox';

function SavingThrow({ stat, bonus, id, highlightField, setHighlightField }) {
  return (
    <div className="flex justify-between overflow-hidden rounded-sm bg-n-dark outline outline-1">
      <h5 className="flex flex-col justify-around pl-3 font-serif">{stat}</h5>
      <div className="flex w-1/4 justify-center rounded-r-sm border-l border-l-black bg-n-light p-1 text-right">
        <NumBox
          value={bonus}
          id={id}
          highlightField={highlightField}
          setHighlightField={setHighlightField}
        />
      </div>
    </div>
  );
}

export default SavingThrow;
