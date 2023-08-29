import React from 'react';
import { useNavigate } from 'react-router-dom';

function CampaignCard({ name, characters, id }) {
  const navigate = useNavigate();
  console.log(id);
  const trash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 transition-all duration-300 group-hover:fill-white"
    >
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
        clipRule="evenodd"
      />
    </svg>
  );

  function handleNavigate() {
    navigate(`/campaigns/${id}`, { replace: false });
  }

  return (
    <div
      className="flex justify-between rounded-xl bg-gradient-to-t from-n-light to-n-dark pl-2 align-middle shadow-lg shadow-black outline outline-primary transition-all hover:scale-105 hover:shadow-xl hover:shadow-neutral-500"
      onClick={handleNavigate}
    >
      <div>
        <h2 className="font-serif text-xl">{name}</h2>
        <p>Players: {characters.length}</p>
      </div>
      <div className="group flex h-full self-center rounded-r-lg bg-secondary p-3 outline outline-1 outline-primary transition-all duration-300 hover:bg-red-500">
        {trash}
      </div>
    </div>
  );
}

export default CampaignCard;
