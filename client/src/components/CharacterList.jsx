import React, { useEffect } from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(user) {
  console.log(user.characters);
  return (
    <div className="h-full w-full">
      <h1 className="pt-6 text-center font-serif text-3xl font-bold">
        Your Characters
      </h1>
      <div className=" mx-[15%] grid grid-cols-1 gap-x-8 gap-y-3 pt-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </div>
  );
}

export default CharacterList;
