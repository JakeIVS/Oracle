import React from 'react';
import { useNavigate } from 'react-router-dom';

function SideBar({ sideBar, user }) {
  const navigate = useNavigate();
  const shown =
    'absolute right-0 top-0 flex h-full w-1/3 flex-col bg-neutral-800 text-white transition-all';
  const hidden = 'absolute right-1 top-0 h-full w-0 transition-all';

  console.log(user);

  if (!user) {
    return (
      <div className={!sideBar ? hidden : shown}>
        <div className={!sideBar ? 'hidden' : null}>
          <h2 className="text-center text-3xl text-white">No User Logged In</h2>
          <nav>
            <div
              className="bg-black text-center hover:bg-neutral-700"
              onClick={() => navigate('/login', { replace: false })}
            >
              Log in
            </div>
            <div
              className="bg-black text-center hover:bg-neutral-700"
              onClick={() => navigate('/signup', { replace: false })}
            >
              Sign Up
            </div>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className={!sideBar ? hidden : shown}>
      <div className={!sideBar ? 'hidden' : null}>
        <div className="flex flex-col justify-center gap-3 p-16 px-24">
          <img
            src="/src/assets/placeholder-portrait.jpg"
            alt="Profile Image"
            className="aspect-square h-1/2 rounded-full"
          />
          <h2 className="text-center text-lg font-semibold">
            {user.first_name} {user.last_name}
          </h2>
        </div>
        <nav>
          <div
            className="bg-black text-center hover:bg-neutral-700"
            onClick={() => logout()}
          >
            Logout
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
