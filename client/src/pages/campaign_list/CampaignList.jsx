import React, { useEffect } from 'react';
import CampaignCard from './CampaignCard';

function CampaignList({ user }) {
  return (
    <div className="h-full w-full bg-gradient-to-t from-n-light to-n-dark">
      <h1 className="pt-6 text-center font-serif text-3xl font-bold">
        Your Campaigns
      </h1>
      <div className=" mx-[15%] grid grid-cols-1 gap-x-8 gap-y-3 pt-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {user?.campaigns.map(campaign => {
          return (
            <CampaignCard
              name={campaign.name}
              characters={campaign.characters}
              id={campaign.id}
              key={campaign.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CampaignList;
