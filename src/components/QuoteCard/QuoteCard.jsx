function QuoteCard({ quote, author }) {
  return (
    <div className="relative bg-white rounded-3xl shadow-lg border border-slate-100 px-10 py-12 max-w-xl mx-auto text-center">
      <span className="absolute top-4 left-6 text-7xl font-serif text-amber-200 select-none leading-none">
        “
      </span>
      <q className="block text-2xl font-medium text-slate-800 leading-relaxed italic">
        {quote}
      </q>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-rose-500">
        — {author}
      </p>
    </div>
  );
}

export default QuoteCard;
