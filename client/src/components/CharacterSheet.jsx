import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AbilityScore from './AbilityScore';
import SavingThrow from './SavingThrow';
import NumBox from './NumBox';

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
    <div className="aspect-csheet no-scrollbar grid h-full w-full grid-cols-9 gap-1 overflow-scroll bg-gradient-to-t from-secondary to-primary p-4 xl:px-[15%]">
      <div className="sheet-field col-span-3">
        <h3 className="font-serif font-bold">{characterData?.name}</h3>
        <p>
          {characterData?.race} | {characterData?.gender}
        </p>
        <p>
          Level {characterData?.level} | {characterClass}
        </p>
      </div>
      <div className="sheet-field">
        <h4>Walk Speed</h4>
        <NumBox value={characterData?.speed} />
      </div>
      <div className="sheet-field">
        <h4>AC</h4>
        <NumBox value={10 + statBonus(dexterity)} />
      </div>
      <div className="sheet-field">
        <h4>Initiative</h4>
        <NumBox
          value={
            dexterity >= 0
              ? `+${statBonus(dexterity)}`
              : `${statBonus(dexterity)}`
          }
        />
      </div>
      <div className=" sheet-field">
        <h4>Proficiency Bonus</h4>
        <NumBox value={`+${profBonus(characterData?.level)}`} />
      </div>
      <div className="sheet-field col-span-2">
        <h4>Health</h4>
        <NumBox
          value={`${characterData?.current_hp} / ${characterData?.hit_point_max}`}
        />
      </div>
      <div className="sheet-field col-start-1 row-span-4 flex flex-col justify-around">
        <AbilityScore stat="STR" score={strength} bonus={statBonus(strength)} />
        <AbilityScore
          stat="DEX"
          score={dexterity}
          bonus={statBonus(dexterity)}
        />
        <AbilityScore
          stat="CON"
          score={constitution}
          bonus={statBonus(constitution)}
        />
        <AbilityScore
          stat="INT"
          score={intelligence}
          bonus={statBonus(intelligence)}
        />
        <AbilityScore stat="WIS" score={wisdom} bonus={statBonus(wisdom)} />
        <AbilityScore stat="CHA" score={charisma} bonus={statBonus(charisma)} />
      </div>
      <div className="sheet-field col-span-2 row-span-4 flex flex-col justify-between">
        <h4>Skills</h4>
        <ul className="h-full overflow-y-scroll rounded-md bg-n-light p-2 outline outline-1">
          {skills_list}
        </ul>
      </div>
      <div className="sheet-field col-span-3 row-span-4">
        <h4>Actions</h4>
      </div>
      <div className="sheet-field">
        <h4>Spell Attack</h4>
      </div>
      <div className="sheet-field">
        <h4>Spell Modifier</h4>
      </div>
      <div className="sheet-field">
        <h4>Spell Save DC</h4>
      </div>
      <div className="sheet-field col-span-3 row-span-3">
        <h4>Spells/Abilities</h4>
      </div>
      <div className="sheet-field col-span-4 row-span-2 grid grid-cols-2 gap-2">
        <h4 className="col-span-2">Saving Throws</h4>
        <SavingThrow />
        <SavingThrow />
        <SavingThrow />
        <SavingThrow />
        <SavingThrow />
        <SavingThrow />
      </div>
      <div className="sheet-field col-span-5 row-span-2">
        <h4>Feats and Racial Traits</h4>
      </div>
    </div>
  );
}

export default CharacterSheet;
