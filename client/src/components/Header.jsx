import { useNavigate } from 'react-router-dom';

function Header({ user, setUser, sideBar, setSideBar }) {
  const navigate = useNavigate();
  const sideBarShown =
    'absolute left-0 top-0 flex h-16 w-2/3 lg:w-3/4 xl:w-4/5 justify-center bg-primary px-3 transition-all';
  const sideBarHidden =
    'absolute left-0 top-0 flex h-16 w-screen justify-center bg-primary px-3 transition-all';

  const hamburger = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="absolute right-2 top-3 h-10 w-10 stroke-white stroke-1 transition-all duration-300 hover:stroke-2"
      onClick={() => setSideBar(!sideBar)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  const closeX = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="absolute right-2 top-3 h-10 w-10 stroke-white stroke-1 transition-all duration-300 hover:stroke-2"
      onClick={() => setSideBar(!sideBar)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  function logout() {
    setUser(null);
    navigate('/', { replace: false });
  }

  return (
    <div className={!sideBar ? sideBarHidden : sideBarShown}>
      <a
        href="/"
        className="absolute left-2 top-3 font-serif text-4xl font-bold text-white"
      >
        Oracle
      </a>
      {!!sideBar ? closeX : hamburger}
    </div>
  );
}

export default Header;
