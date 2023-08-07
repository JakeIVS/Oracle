import React from 'react';

function AbilityScore({ stat, score, bonus }) {
  return (
    <div className="aspect-square overflow-hidden bg-slate-600 lg:aspect-[3/2] xl:aspect-[2/1]">
      <h4>{stat}</h4>
      <p>
        {score} ({bonus})
      </p>
    </div>
  );
}

export default AbilityScore;
