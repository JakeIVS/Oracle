import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterSheet() {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState();

  useEffect(() => {
    fetch(`/api/characters/${id}`)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        setCharacterData(data);
      });
  });

  return (
    <div className="aspect-csheet grid h-full w-full grid-cols-9 gap-1 bg-n-dark p-4">
      <div className="col-span-3 bg-n-light">Name</div>
      <div className="bg-n-light">Speed</div>
      <div className="bg-n-light">AC</div>
      <div className="bg-n-light">Initiative</div>
      <div className=" bg-n-light">Proficiency Bonus</div>
      <div className="col-span-2 bg-n-light">HP</div>
      <div className="col-start-1 row-span-4 bg-n-light">Ability Scores</div>
      <div className="col-span-2 row-span-4 bg-n-light">Skills</div>
      <div className="col-span-3 row-span-4 bg-n-light">Actions</div>
      <div className="bg-n-light">Spell Attack</div>
      <div className="bg-n-light">Spell Modifier</div>
      <div className="bg-n-light">Spell Save DC</div>
      <div className="col-span-3 row-span-3 bg-n-light">Spells/Abilities</div>
      <div className="col-span-4 row-span-2 bg-n-light">Saving Throws</div>
      <div className="col-span-5 row-span-2 bg-n-light">Feats and</div>
    </div>
  );
}

export default CharacterSheet;
