function Header({ cssClass, onClick, icon, title }) {
  return (
    <header
      className={
        "relative top-0 z-10 bg-linear-to-r text-white shadow-sm " + cssClass
      }
    >
      <button
        onClick={onClick}
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="max-w-xl mx-auto px-4 py-5 flex items-center justify-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
          {icon}
        </div>
        <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
