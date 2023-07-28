function Header() {
  return (
    <div className="absolute left-0 top-0 flex h-16 w-screen justify-center bg-primary px-3 pt-3">
      <a
        href="/"
        className="absolute left-2 font-serif text-4xl font-bold text-white"
      >
        Oracle
      </a>
      <nav className="font-serif text-white">Nav</nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute right-2 h-10 w-10 stroke-white stroke-1 transition-all duration-300 hover:stroke-2"
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
