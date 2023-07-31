import React, { useEffect } from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(user) {
  return (
    <div className="h-full w-full">
      <div className=" mx-[15%] grid grid-cols-1 gap-x-6 gap-y-3 pt-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
