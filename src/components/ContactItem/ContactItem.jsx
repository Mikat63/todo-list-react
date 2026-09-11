function ContactItem({ lastName, firstName, phone, isFavorite, onClick }) {
  return (
    <li
      tabindex="0"
      className="w-full flex items-center justify-between gap-4 rounded-2xl shadow-sm border border-slate-200 px-4 py-3 bg-white transition-colors hover:border-slate-300 hover:scale-105 focus:scale-105 focus:outline-none"
    >
      <div className="flex flex-col gap-1">
        <span className="font-medium text-slate-700">
          {firstName} {lastName}
        </span>
        <span className="text-sm text-slate-400">{phone}</span>
      </div>

      <button
        onClick={() => onClick(phone)}
        type="button"
        className="cursor-pointer transition-transform focus:outline-none focus:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={
            "w-5 h-5 " + (isFavorite ? "text-yellow-500" : "text-gray-300")
          }
        >
          <path d="M12 2l2.939 6.545 7.061.61-5.5 4.795 1.694 6.93L12 17.28l-6.194 3.6 1.694-6.93L2 9.155l7.061-.61z" />
        </svg>
      </button>
    </li>
  );
}

export default ContactItem;
