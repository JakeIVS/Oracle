import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AbilityScore from './AbilityScore';
import SavingThrow from './SavingThrow';
import NumBox from './NumBox';

function CampaignControlPanel() {
  const { id } = useParams();
  const [campaignData, setCampaignData] = useState();

  const cubeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
    </svg>
  );

  useEffect(() => {
    fetch(`/api/campaigns/${id}`)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        setCampaignData(data);
      });
  }, []);

  // Create list of skills
  const skillsArray = [
    'Acrobatics',
    'Animal Handling',
    'Arcana',
    'Athletics',
    'Deception',
    'History',
    'Insight',
    'Intimidation',
    'Investigation',
    'Medicine',
    'Nature',
    'Perception',
    'Performance',
    'Persuasion',
    'Religion',
    'Sleight of Hand',
    'Stealth',
    'Survival',
  ];

  const skillsList = skillsArray.map(skill => {
    return (
      <li className="flex justify-between bg-gradient-to-t from-n-light to-n-dark px-1 py-2 outline outline-1 ">
        <p className="self-center">{skill}</p>
        <NumBox value={cubeIcon} />
      </li>
    );
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

  return (
    <div className="aspect-csheet no-scrollbar grid h-full w-full grid-cols-9 gap-1 overflow-scroll bg-gradient-to-t from-secondary to-primary p-4 xl:px-[15%]">
      <div className="sheet-field col-span-3">
        <div className="flex gap-x-2">
          <div className="aspect-square w-1/4 overflow-hidden rounded-lg">
            <img
              src="/src/assets/placeholder-portrait.jpg"
              alt="character portrait"
            />
          </div>
          <div>
            <h3 className="font-serif font-bold">Character Name</h3>
          </div>
        </div>
      </div>
      <div className="sheet-field">
        <h4>Walk Speed</h4>
        <NumBox value={cubeIcon} />
      </div>
      <div className="sheet-field">
        <h4>AC</h4>
        <NumBox value={cubeIcon} />
      </div>
      <div className="sheet-field">
        <h4>Initiative</h4>
        <NumBox value={cubeIcon} />
      </div>
      <div className=" sheet-field">
        <h4>Proficiency Bonus</h4>
        <NumBox value={cubeIcon} />
      </div>
      <div className="sheet-field col-span-2">
        <h4>Health</h4>
        <NumBox value={cubeIcon} />
      </div>
      <div className="sheet-field">
        <h4>Inspiration</h4>
        <NumBox value={cubeIcon} />
      </div>
      <div className="sheet-field col-start-1 row-span-4 row-start-3 flex flex-col justify-around">
        <AbilityScore stat="STR" score="??" bonus={cubeIcon} />
        <AbilityScore stat="DEX" score="??" bonus={cubeIcon} />
        <AbilityScore stat="CON" score="??" bonus={cubeIcon} />
        <AbilityScore stat="INT" score="??" bonus={cubeIcon} />
        <AbilityScore stat="WIS" score="??" bonus={cubeIcon} />
        <AbilityScore stat="CHA" score="??" bonus={cubeIcon} />
      </div>
      <div className="sheet-field col-span-2 row-span-5 flex flex-col justify-between overflow-y-hidden">
        <h4>Skills</h4>
        <ul className="h-full overflow-y-scroll rounded-md bg-n-light p-2 outline outline-1">
          {skillsList}
        </ul>
      </div>
      <div className="sheet-field col-span-3 row-span-5">
        <h4>Actions</h4>
        <ul className="h-full overflow-y-scroll rounded-md bg-n-light p-2 outline outline-1"></ul>
      </div>
      <div className="sheet-field">
        <h4>Spell Attack</h4>
        <NumBox value={cubeIcon} />
      </div>
      <div className="sheet-field">
        <h4>Spell Modifier</h4>
        <NumBox value={cubeIcon} />
      </div>
      <div className="sheet-field">
        <h4>Spell Save DC</h4>
        <NumBox value={cubeIcon} />
      </div>
      <div className="sheet-field col-span-3 row-span-4">
        <h4>Spells/Abilities</h4>
        <ul className="h-full overflow-y-scroll rounded-md bg-n-light p-2 outline outline-1"></ul>
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
        <ul className="h-full overflow-y-scroll rounded-md bg-n-light p-2 outline outline-1"></ul>
      </div>
    </div>
  );
}

export default CampaignControlPanel;
