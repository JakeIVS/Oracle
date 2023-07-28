import React from 'react';

function UserDash(user) {
  return (
    <div className="flex h-full w-full place-content-center bg-slate-300 p-20">
      <div className="grid aspect-square h-full grid-cols-4 gap-2 bg-slate-600 p-2 text-lg text-white">
        <h2 className="col-span-4 self-center text-center font-serif text-xl text-white">
          Welcome, {user.firstName}
        </h2>
        <div className="col-span-3 flex flex-col-reverse outline outline-2">
          My Characters
        </div>
        <div className="flex max-w-prose flex-col-reverse justify-evenly text-center text-sm outline outline-2">
          Create a Character
        </div>
        <div className="col-span-3 flex flex-col-reverse outline outline-2">
          My Campaigns
        </div>
        <div className="flex max-w-prose flex-col-reverse justify-evenly text-center text-sm outline outline-2">
          Start a Campaign
        </div>
        <div className="col-span-4 flex h-1/2 flex-col-reverse justify-center self-center text-center outline outline-2">
          Join a Campaign
        </div>
      </div>
    </div>
  );
}

export default UserDash;
