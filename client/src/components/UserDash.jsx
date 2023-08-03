import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserDash({ id, firstName, lastName }) {
  const navigate = useNavigate();

  console.log(id);
  console.log(firstName);

  function characterList() {
    navigate('/characters', { replace: false });
  }

  function newCharacter() {
    navigate('/new_character', { replace: false });
  }

  return (
    <div className="flex h-full w-full place-content-center bg-slate-300 p-20">
      <div className="grid aspect-square h-full grid-cols-4 gap-2 bg-slate-600 p-2 px-3 text-lg text-white">
        <h2 className="col-span-4 self-center text-center font-serif text-xl text-white">
          Welcome, {firstName}
        </h2>
        <div
          className="group col-span-3 flex flex-col-reverse overflow-x-hidden overflow-y-hidden outline outline-2"
          onClick={characterList}
        >
          <img
            src="/src/assets/dice.jpg"
            alt="my characters"
            className="transition-all duration-300 group-hover:scale-110"
          />
          <h3 className="absolute w-1/4 bg-gradient-to-r from-primary to-transparent text-2xl transition-all duration-300 group-hover:w-1/2 group-hover:text-2xl">
            My Characters
          </h3>
        </div>
        <div
          className="transition-color flex flex-col-reverse justify-evenly overflow-y-hidden bg-primary text-center outline outline-2 duration-200 hover:text-xl"
          onClick={newCharacter}
        >
          <h3 className="px-5 text-center">Create a Character</h3>
        </div>
        <div className="group col-span-3 flex flex-col-reverse overflow-x-hidden overflow-y-hidden outline outline-2">
          <img
            src="src/assets/minis.jpg"
            alt="my campaigns"
            className=" transition-all duration-300 group-hover:scale-110"
          />
          <h3 className="absolute w-1/4 bg-gradient-to-r from-primary to-transparent text-2xl transition-all duration-300 group-hover:w-1/2 group-hover:text-2xl">
            My Campaigns
          </h3>
        </div>
        <div className="flex flex-col-reverse justify-evenly overflow-y-hidden bg-primary px-5 text-center outline outline-2 transition-all duration-200 hover:text-xl">
          Start a Campaign
        </div>
        <div className="col-span-4 flex h-16 flex-col-reverse justify-center self-center text-center outline outline-2">
          Join a Campaign
        </div>
      </div>
    </div>
  );
}

export default UserDash;
