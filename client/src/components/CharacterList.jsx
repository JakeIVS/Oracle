import React, { useEffect } from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(user) {
  return (
    <div className="h-full w-full">
      <div className="mx-10  grid grid-cols-2 gap-x-4 gap-y-2">
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
