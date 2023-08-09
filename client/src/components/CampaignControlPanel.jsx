import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SavingThrow from './SavingThrow';
import NumBtn from './NumBtn';
import AbilityTemplate from './AbilityTemplate';

function CampaignControlPanel() {
  const { id } = useParams();
  const [campaignData, setCampaignData] = useState();

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
        <NumBtn value={7 + skill} />
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
        <NumBtn value={1} />
      </div>
      <div className="sheet-field">
        <h4>AC</h4>
        <NumBtn value={2} />
      </div>
      <div className="sheet-field">
        <h4>Initiative</h4>
        <NumBtn value={3} />
      </div>
      <div className=" sheet-field">
        <h4>Proficiency Bonus</h4>
        <NumBtn value={4} />
      </div>
      <div className="sheet-field col-span-2">
        <h4>Health</h4>
        <NumBtn value={5} />
      </div>
      <div className="sheet-field">
        <h4>Inspiration</h4>
        <NumBtn value={6} />
      </div>
      <div className="sheet-field col-start-1 row-span-4 row-start-3 flex flex-col justify-around">
        <AbilityTemplate stat="STR" score="??" id={8} />
        <AbilityTemplate stat="DEX" score="??" id={9} />
        <AbilityTemplate stat="CON" score="??" id={10} />
        <AbilityTemplate stat="INT" score="??" id={11} />
        <AbilityTemplate stat="WIS" score="??" id={12} />
        <AbilityTemplate stat="CHA" score="??" id={13} />
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
        <NumBtn value={15} />
      </div>
      <div className="sheet-field">
        <h4>Spell Modifier</h4>
        <NumBtn value={16} />
      </div>
      <div className="sheet-field">
        <h4>Spell Save DC</h4>
        <NumBtn value={17} />
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
