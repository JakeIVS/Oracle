import { useNavigate } from 'react-router-dom';

function Header({ user, setUser, sideBar, setSideBar }) {
  const navigate = useNavigate();
  const sideBarShown =
    'absolute left-0 top-0 flex h-16 w-2/3 justify-center bg-primary px-3 transition-all';
  const sideBarHidden =
    'absolute left-0 top-0 flex h-16 w-screen justify-center bg-primary px-3 transition-all';

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
      <nav className="flex  flex-col font-serif text-white">
        <div
          className="h-full w-full bg-secondary px-3 pt-5"
          onClick={() => logout()}
        >
          Logout
        </div>
      </nav>
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
    </div>
  );
}

export default Header;
