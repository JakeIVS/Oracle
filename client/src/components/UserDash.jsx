import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserDash({ id, firstName, lastName }) {
  const navigate = useNavigate();

  function characterList() {
    navigate('/characters', { replace: false });
  }

  function campaignList() {
    navigate('/campaigns', { replace: false });
  }

  function newCharacter() {
    navigate('/characters/new', { replace: false });
  }

  function newCampaign() {
    navigate('/campaigns/new', { replace: false });
  }

  return (
    <div className="flex h-full w-full place-content-center bg-gradient-to-t from-n-light to-n-dark p-20">
      <div className="grid aspect-square h-full grid-cols-4 gap-3 bg-slate-600 p-6 text-lg text-white">
        <h2 className="col-span-4 self-center text-center font-serif text-2xl font-semibold text-white">
          Welcome, {firstName}
        </h2>
        <div
          className="group col-span-3 flex cursor-pointer flex-col-reverse overflow-x-hidden overflow-y-hidden outline outline-1 outline-n-dark"
          onClick={characterList}
        >
          <img
            src="/src/assets/dice.jpg"
            alt="my characters"
            className="transition-all duration-300 group-hover:scale-110"
          />
          <h3 className="absolute w-1/4 bg-gradient-to-r from-secondary to-transparent text-2xl transition-all duration-300 group-hover:w-1/3 group-hover:text-2xl lg:w-1/6 lg:group-hover:w-1/4">
            My Characters
          </h3>
        </div>
        <div
          className="transition-color flex cursor-pointer flex-col-reverse justify-evenly overflow-x-hidden overflow-y-hidden bg-primary text-center outline outline-1 outline-n-dark duration-200 hover:text-xl"
          onClick={newCharacter}
        >
          <h3 className="px-5 text-center">Create a Character</h3>
        </div>
        <div
          className="group col-span-3 flex cursor-pointer flex-col-reverse overflow-x-hidden overflow-y-hidden outline outline-1 outline-n-dark"
          onClick={campaignList}
        >
          <img
            src="src/assets/minis.jpg"
            alt="my campaigns"
            className=" transition-all duration-300 group-hover:scale-110"
          />
          <h3 className="absolute w-1/4 bg-gradient-to-r from-secondary to-transparent text-2xl transition-all duration-300 group-hover:w-1/3 group-hover:text-2xl lg:w-1/6 lg:group-hover:w-1/4">
            My Campaigns
          </h3>
        </div>
        <div
          className="flex cursor-pointer flex-col-reverse justify-evenly overflow-x-hidden overflow-y-hidden bg-primary px-5 text-center outline outline-1 outline-n-dark transition-all duration-200 hover:text-xl"
          onClick={() => newCampaign()}
        >
          Start a Campaign
        </div>
        <div className="col-span-4 flex h-16 flex-col-reverse justify-center self-center text-center outline outline-1 outline-n-dark">
          Join a Campaign
        </div>
      </div>
    </div>
  );
}

export default UserDash;
