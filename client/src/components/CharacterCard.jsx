import React from 'react';

function CharacterCard({ name, level, characterclass, campaign }) {
  const groupIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-full w-full"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  );
  const soloIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-full w-full stroke-slate-500 p-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );

  return (
    <div className="q group mt-6 grid h-14 grid-cols-5 gap-x-3 overflow-visible rounded-full bg-gradient-to-t from-n-dark to-n-light shadow-lg shadow-black outline outline-secondary transition-all duration-300 hover:scale-105                                                 hover:shadow-xl hover:shadow-neutral-500">
      <div className="absolute row-span-2 h-20 w-20 translate-x-[-20%] translate-y-[-30%] overflow-hidden rounded-full bg-gray-500 outline outline-primary">
        <img
          src="src/assets/placeholder-portrait.jpg"
          alt="default-portrait"
          className=""
        />
      </div>
      <h2 className="col-span-4 col-start-1 ml-20 font-bold">Name</h2>
      <div className="row-span-2 ml-[15%] mr-[10%] flex self-center overflow-hidden">
        <div className="h-full w-full">{groupIcon}</div>
      </div>
      <h3 className="col-span-4 col-start-1 ml-20">Level and Class</h3>
    </div>
  );
}

export default CharacterCard;
