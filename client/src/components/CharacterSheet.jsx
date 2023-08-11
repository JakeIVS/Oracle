import React, { useEffect, useState } from 'react';
import { createRoutesFromChildren, useParams } from 'react-router-dom';
import AbilityScore from './AbilityScore';
import SavingThrow from './SavingThrow';
import NumBox from './NumBox';
import { io } from 'socket.io-client';
let socket;

function CharacterSheet() {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState();
  const [highlightField, setHighlightField] = useState(null);

  const inspirationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  useEffect(() => {
    fetch(`/api/characters/${id}`)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        setCharacterData(data);
      });
  }, []);

  useEffect(() => {
    socket = io('ws://localhost:5555');
    socket.on('from_server', msg => {
      if (highlightField === msg) {
        setHighlightField(null);
      } else {
        setHighlightField(msg);
      }
    });
    return () => {
      socket.off('disconnected', msg => {
        console.log(msg);
        socket.disconnect();
      });
    };
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

  function statBonusString(stat) {
    if (statBonus(stat) > 0) {
      return `+${statBonus(stat)}`;
    }
    return `${statBonus(stat)}`;
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
    return (
      <li className="flex justify-between border-t-2 border-black px-1 py-2">
        <p className="self-center">{skill}</p>
        <NumBox
          value={statBonusString(skillScores[skill])}
          id={7 + skill}
          highlightField={highlightField}
        />
      </li>
    );
  });

  const spellModifiers = {
    wizard: intelligence,
    warlock: charisma,
    sorcerer: charisma,
    paladin: wisdom,
    cleric: wisdom,
    druid: wisdom,
  };

  // add the function below on character creation form

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
    <div className="aspect-csheet grid h-full w-full grid-cols-9 gap-1 overflow-hidden overflow-y-scroll bg-gradient-to-t from-secondary to-primary p-4 xl:px-[15%]">
      <div className="sheet-field col-span-3">
        <div className="flex gap-x-2">
          <div className="aspect-square w-1/4 overflow-hidden rounded-lg">
            <img
              src={characterData?.image_url}
              alt="character portrait"
              className=""
            />
          </div>
          <div>
            <h3 className="font-serif font-bold">{characterData?.name}</h3>
            <p>
              {characterData?.race} | {characterData?.gender}
            </p>
            <p>
              Level {characterData?.level} | {characterClass}
            </p>
          </div>
        </div>
      </div>
      <div className="sheet-field">
        <h4>Walk Speed</h4>
        <NumBox
          value={characterData?.speed}
          id={1}
          highlightField={highlightField}
        />
      </div>
      <div className="sheet-field">
        <h4>AC</h4>
        <NumBox
          value={10 + statBonus(dexterity)}
          id={2}
          highlightField={highlightField}
        />
      </div>
      <div className="sheet-field">
        <h4>Initiative</h4>
        <NumBox
          value={
            dexterity >= 0
              ? `+${statBonus(dexterity)}`
              : `${statBonus(dexterity)}`
          }
          id={3}
          highlightField={highlightField}
        />
      </div>
      <div className=" sheet-field">
        <h4>Proficiency Bonus</h4>
        <NumBox
          value={`+${profBonus(characterData?.level)}`}
          id={4}
          highlightField={highlightField}
        />
      </div>
      <div className="sheet-field col-span-2">
        <h4>Health</h4>
        <NumBox
          value={`${characterData?.current_hp} / ${characterData?.hit_point_max}`}
          id={5}
          highlightField={highlightField}
        />
      </div>
      <div className="sheet-field">
        <h4>Inspiration</h4>
        <NumBox
          value={inspirationIcon}
          id={6}
          highlightField={highlightField}
        />
      </div>

      <div className="sheet-field col-start-1 row-span-4 row-start-3 flex flex-col justify-around gap-1 px-3">
        <AbilityScore
          stat="STR"
          score={strength}
          bonus={statBonusString(strength)}
          id={8}
          highlightField={highlightField}
        />
        <AbilityScore
          stat="DEX"
          score={dexterity}
          bonus={statBonusString(dexterity)}
          id={9}
          highlightField={highlightField}
        />
        <AbilityScore
          stat="CON"
          score={constitution}
          bonus={statBonusString(constitution)}
          id={10}
          highlightField={highlightField}
        />
        <AbilityScore
          stat="INT"
          score={intelligence}
          bonus={statBonusString(intelligence)}
          id={11}
          highlightField={highlightField}
        />
        <AbilityScore
          stat="WIS"
          score={wisdom}
          bonus={statBonusString(wisdom)}
          id={12}
          highlightField={highlightField}
        />
        <AbilityScore
          stat="CHA"
          score={charisma}
          bonus={statBonusString(charisma)}
          id={13}
          highlightField={highlightField}
        />
      </div>
      <div className="sheet-field col-span-2 row-span-5 flex flex-col justify-between overflow-y-hidden">
        <h4>Skills</h4>
        <ul
          className={
            typeof highlightField === 'string'
              ? 'h-full overflow-y-scroll rounded-md bg-n-light p-2 shadow-inner shadow-blue-400 outline outline-blue-700'
              : 'h-full overflow-y-scroll rounded-md bg-n-light p-2 outline outline-1'
          }
        >
          {skills_list}
        </ul>
      </div>
      <div className="sheet-field col-span-3 row-span-5">
        <h4>Actions/Inventory</h4>
        <ul
          className={
            highlightField === 14
              ? 'h-full overflow-y-scroll rounded-md bg-n-light p-2 shadow-inner shadow-blue-400 outline outline-blue-700'
              : 'h-full overflow-y-scroll rounded-md bg-n-light p-2 outline outline-1'
          }
        ></ul>
      </div>
      <div className="sheet-field">
        <h4>Spell Attack</h4>
        <NumBox
          value={
            '+' +
            (statBonus(spellModifiers[characterData?.character_class]) +
              profBonus(characterData?.level))
          }
          id={15}
          highlightField={highlightField}
        />
      </div>
      <div className="sheet-field">
        <h4>Spell Modifier</h4>
        <NumBox
          value={statBonusString(
            spellModifiers[characterData?.character_class],
          )}
          id={16}
          highlightField={highlightField}
        />
      </div>
      <div className="sheet-field">
        <h4>Spell Save DC</h4>
        <NumBox
          value={
            8 +
            profBonus(characterData?.level) +
            statBonus(spellModifiers[characterData?.character_class])
          }
          id={17}
          highlightField={highlightField}
        />
      </div>
      <div className="sheet-field col-span-3 row-span-4">
        <h4>Spells/Abilities</h4>
        <ul
          className={
            highlightField === 18
              ? 'h-full overflow-y-scroll rounded-md bg-n-light p-2 shadow-inner shadow-blue-400 outline outline-blue-700'
              : 'h-full overflow-y-scroll rounded-md bg-n-light p-2 outline outline-1'
          }
        ></ul>
      </div>
      <div className="sheet-field col-span-4 row-span-2 grid grid-cols-2 gap-2">
        <h4 className="col-span-2">Saving Throws</h4>
        <SavingThrow
          stat="Strength"
          bonus={statBonusString(strength)}
          id={19}
          highlightField={highlightField}
        />
        <SavingThrow
          stat="Dexterity"
          bonus={statBonusString(dexterity)}
          id={20}
          highlightField={highlightField}
        />
        <SavingThrow
          stat="Constitution"
          bonus={statBonusString(constitution)}
          id={21}
          highlightField={highlightField}
        />
        <SavingThrow
          stat="Intelligence"
          bonus={statBonusString(intelligence)}
          id={22}
          highlightField={highlightField}
        />
        <SavingThrow
          stat="Wisdom"
          bonus={statBonusString(wisdom)}
          id={23}
          highlightField={highlightField}
        />
        <SavingThrow
          stat="Charisma"
          bonus={statBonusString(charisma)}
          id={24}
          highlightField={highlightField}
        />
      </div>
      <div className="sheet-field col-span-5 row-span-2">
        <h4>Feats and Racial Traits</h4>
        <ul
          className={
            highlightField === 25
              ? 'h-full overflow-y-scroll rounded-md bg-n-light p-2 shadow-inner shadow-blue-400 outline outline-blue-700'
              : 'h-full overflow-y-scroll rounded-md bg-n-light p-2 outline outline-1'
          }
        ></ul>
      </div>
    </div>
  );
}

export default CharacterSheet;
