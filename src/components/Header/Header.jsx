function Header() {
  return (
    <header className="sticky top-0 z-10 bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-sm">
      <div className="max-w-xl mx-auto px-4 py-5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
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
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold tracking-tight">To-Do List</h1>
      </div>
    </header>
  );
}

export default Header;
