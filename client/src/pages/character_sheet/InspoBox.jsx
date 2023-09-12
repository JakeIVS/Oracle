import { useState } from 'react';

function InspoBox({ id, highlightField, setHighlightField }) {
  const [inspired, setInspired] = useState(false);
  const defaultStyle =
    'w-fit self-center rounded-md bg-n-light p-2 py-1 text-center text-xl font-semibold outline outline-1 hover:bg-n-dark';

  const pingStyle =
    'w-fit self-center rounded-md bg-n-light p-2 py-1 text-center text-xl font-semibold shadow-inner shadow-blue-400 outline outline-blue-700 hover:bg-n-dark';

  const active = 'h-6 w-6 stroke-black';
  const inactive = 'h-6 w-6 stroke-gray-300';
  const inspirationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={inspired ? active : inactive}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  function handleClick() {
    setInspired(!inspired);
    if (highlightField === id) {
      setHighlightField(null);
    }
  }

  return (
    <div
      className={highlightField === id ? pingStyle : defaultStyle}
      onClick={handleClick}
    >
      {inspirationIcon}
    </div>
  );
}

export default InspoBox;
