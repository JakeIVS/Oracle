function CharacterSheet() {
  return (
    <div className="grid aspect-csheet h-screen grid-cols-9 gap-1">
      <div className="col-span-3 row-span-2 bg-green-800">Name</div>
      <div className="row-span-2 bg-green-800">Speed</div>
      <div className="row-span-2 bg-green-800">AC</div>
      <div className="row-span-2 bg-green-800">Initiative</div>
      <div className="row-span-2 bg-green-800">Proficiency Bonus</div>
      <div className="col-span-2 row-span-2 bg-green-800">HP</div>
      <div className="col-start-1 bg-green-800">STR</div>
      <div className="col-span-2 row-span-6 bg-green-800">Skills</div>
      <div className="col-span-3 row-span-6 bg-green-800">Actions</div>
      <div className="bg-green-800">Spell Attack</div>
      <div className="bg-green-800">Spell Modifier</div>
      <div className="bg-green-800">Spell Save DC</div>
      <div className="col-start-1 bg-green-800">DEX</div>
      <div className="col-span-3 row-span-5 bg-green-800">Spells/Abilities</div>
      <div className="col-start-1 bg-green-800">CON</div>
      <div className="col-start-1 bg-green-800">INT</div>
      <div className="col-start-1 bg-green-800">WIS</div>
      <div className="col-start-1 bg-green-800">CHA</div>
      <div className="col-span-4 row-span-3 bg-green-800">Saving Throws</div>
      <div className="col-span-5 row-span-3 bg-green-800">Feats and</div>
    </div>
  );
}

export default CharacterSheet;
