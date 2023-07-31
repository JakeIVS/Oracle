import React, { useEffect } from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(user) {
  return (
    <div className="h-full w-full">
      <div className=" mx-[10%] grid grid-cols-2 gap-x-6 gap-y-3 pt-10 max-[567px]:grid-cols-1 max-[567px]:px-[10%] xl:grid-cols-3">
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
