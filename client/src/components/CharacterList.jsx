import React, { useEffect } from 'react';
import CharacterCard from './CharacterCard';

function CharacterList({ user }) {
  return (
    <div className="h-full w-full bg-gradient-to-t from-n-light to-n-dark">
      <h1 className="pt-6 text-center font-serif text-3xl font-bold">
        Your Characters
      </h1>
      <div className=" mx-[15%] grid grid-cols-1 gap-x-8 gap-y-3 pt-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <CharacterCard
          name="Generic Testcharacter"
          level={3}
          characterClass="Monk"
          campaign={1}
          image="https://i.pinimg.com/originals/02/69/bc/0269bcb0da32048e1d44a543f3221334.jpg"
          race="Human"
        />
        {user.characters.map(char => {
          return (
            <CharacterCard
              name={char.name}
              id={char.id}
              key={char.id}
              level={char.level}
              characterClass={char.character_class}
              campaign={char.campaign_id}
              image={char.image_url}
              race={char.race}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
