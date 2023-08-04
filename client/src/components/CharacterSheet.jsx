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
  }, []);

  function statBonus(stat) {
    return Math.floor(stat / 2 - 5);
  }

  function profBonus(lvl) {
    if (lvl < 5) {
      return 2;
    }
    if (lvl < 9) {
      return 3;
    }
    if (lvl < 13) {
      return 4;
    }
    if (lvl < 17) {
      return 5;
    }
    return 6;
  }

  return (
    <div className="aspect-csheet grid h-full w-full grid-cols-9 gap-1 bg-gradient-to-t from-secondary to-primary p-4">
      <div className="sheet-field col-span-3">
        <h3>{characterData?.name}</h3>
        <h4> Level {characterData?.level} | </h4>
      </div>
      <div className="sheet-field">
        <h4>Walk Speed</h4>
        <p>{characterData?.speed}</p>
      </div>
      <div className="sheet-field">
        <h4>AC</h4>
        <p>{10 + statBonus(characterData?.dexterity_score)}</p>
      </div>
      <div className="sheet-field">
        <h4>Initiative</h4>
        <p>
          {characterData?.dexterity_score >= 0 ? '+' : '-'}
          {statBonus(characterData?.dexterity_score)}
        </p>
      </div>
      <div className=" sheet-field">
        <h4>Proficiency Bonus</h4>
        <p>+{profBonus(characterData?.level)}</p>
      </div>
      <div className="sheet-field col-span-2">HP</div>
      <div className="sheet-field col-start-1 row-span-4">Ability Scores</div>
      <div className="sheet-field col-span-2 row-span-4">Skills</div>
      <div className="sheet-field col-span-3 row-span-4">Actions</div>
      <div className="sheet-field">Spell Attack</div>
      <div className="sheet-field">Spell Modifier</div>
      <div className="sheet-field">Spell Save DC</div>
      <div className="sheet-field col-span-3 row-span-3">Spells/Abilities</div>
      <div className="sheet-field col-span-4 row-span-2">Saving Throws</div>
      <div className="sheet-field col-span-5 row-span-2">
        Feats and Racial Traits
      </div>
    </div>
  );
}

export default CharacterSheet;
