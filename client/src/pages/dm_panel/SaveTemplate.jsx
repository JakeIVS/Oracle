import React from 'react';
import NumBtn from './NumBtn';

function SaveTemplate({ stat, value, handleClick, highlightField }) {
  return (
    <div className="flex justify-between overflow-hidden rounded-sm bg-n-dark outline outline-1">
      <h5 className="flex flex-col justify-around pl-3 font-serif">{stat}</h5>
      <div className="flex w-1/4 justify-center rounded-r-sm border-l border-l-black bg-n-light p-1 text-right">
        <NumBtn
          value={value}
          handleClick={handleClick}
          highlightField={highlightField}
        />
      </div>
    </div>
  );
}

export default SaveTemplate;
