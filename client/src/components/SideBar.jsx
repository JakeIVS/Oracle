import React from 'react';

function SideBar({ sideBar }) {
  console.log(sideBar);
  const shown =
    'absolute right-0 top-0 flex h-full w-1/3 flex-col bg-neutral-800 text-white transition-all';
  const hidden = 'absolute right-1 top-0 h-full w-0 transition-all';
  return (
    <div className={!sideBar ? hidden : shown}>
      <div className={!sideBar ? 'hidden' : null}>
        <h1 className={'bg-black text-center'}>Sidebar</h1>
      </div>
    </div>
  );
}

export default SideBar;
