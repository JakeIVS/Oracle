import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AbilityScore from './AbilityScore';
import SavingThrow from './SavingThrow';

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

  // set correctly-cased class
  const characterClass =
    characterData?.character_class.slice(0, 1).toUpperCase() +
    characterData?.character_class.slice(1);

  // set ability score variables
  const strength = characterData?.strength_score;
  const dexterity = characterData?.dexterity_score;
  const constitution = characterData?.constitution_score;
  const intelligence = characterData?.intelligence_score;
  const wisdom = characterData?.wisdom_score;
  const charisma = characterData?.charisma_score;

  function statBonus(stat) {
    return Math.floor(stat / 2 - 5);
  }

  const skillScores = {
    Acrobatics: dexterity,
    'Animal Handling': wisdom,
    Arcana: intelligence,
    Athletics: strength,
    Deception: charisma,
    History: intelligence,
    Insight: wisdom,
    Intimidation: charisma,
    Investigation: intelligence,
    Medicine: wisdom,
    Nature: intelligence,
    Perception: wisdom,
    Performance: charisma,
    Persuasion: charisma,
    Religion: intelligence,
    'Sleight of Hand': dexterity,
    Stealth: dexterity,
    Survival: wisdom,
  };

  const skills_array = Object.keys(skillScores);
  const skills_list = skills_array.map(skill => {
    return <li>{skill}</li>;
  });

  // function maxHP(charClass, level) {
  //   if (charClass === 'wizard' || charClass === 'sorcerer') {
  //     return level * 6;
  //   } else if (charClass === 'barbarian') {
  //     return level * 12;
  //   } else if (
  //     charClass === 'fighter' ||
  //     charClass === 'paladin' ||
  //     charClass === 'ranger'
  //   ) {
  //     return level * 10;
  //   } else {
  //     return level * 8;
  //   }
  // }

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
    <div className="aspect-csheet no-scrollbar grid h-full w-full grid-cols-9 gap-1 overflow-scroll bg-gradient-to-t from-secondary to-primary p-4">
      <div className="sheet-field col-span-3">
        <h3>{characterData?.name}</h3>
        <h4>
          {characterData?.race} | {characterData?.gender}
        </h4>
        <h4>
          Level {characterData?.level} | {characterClass}
        </h4>
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
      <div className="sheet-field col-span-2">
        <h4>Health</h4>
        <p>
          {characterData?.current_hp} /{characterData?.hit_point_max}
        </p>
      </div>
      <div className="sheet-field col-start-1 row-span-4 flex flex-col justify-between">
        <AbilityScore />
        <AbilityScore />
        <AbilityScore />
        <AbilityScore />
        <AbilityScore />
        <AbilityScore />
      </div>
      <div className="sheet-field col-span-2 row-span-4 flex flex-col justify-between">
        <h4>Skills</h4>
        <ul className="h-full overflow-y-scroll outline">{skills_list}</ul>
      </div>
      <div className="sheet-field col-span-3 row-span-4">Actions</div>
      <div className="sheet-field">Spell Attack</div>
      <div className="sheet-field">Spell Modifier</div>
      <div className="sheet-field">Spell Save DC</div>
      <div className="sheet-field col-span-3 row-span-3">Spells/Abilities</div>
      <div className="sheet-field col-span-4 row-span-2 grid grid-cols-2 gap-2">
        <h4 className="col-span-2 text-center">Saving Throws</h4>
        <SavingThrow />
        <SavingThrow />
        <SavingThrow />
        <SavingThrow />
        <SavingThrow />
        <SavingThrow />
      </div>
      <div className="sheet-field col-span-5 row-span-2">
        Feats and Racial Traits
      </div>
    </div>
  );
}

export default CharacterSheet;
