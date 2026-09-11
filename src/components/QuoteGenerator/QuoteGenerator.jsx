import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";
import QuoteCard from "../QuoteCard/QuoteCard";
import Button from "../Button/Button";

function QuoteGenerator() {
  const [quotes, setQuotes] = useState([
    {
      quote:
        "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
      author: "Winston Churchill",
    },
    {
      quote: "Ce qui ne me tue pas me rend plus fort.",
      author: "Friedrich Nietzsche",
    },
    {
      quote: "L'imagination est plus importante que le savoir.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi.",
      author: "Georges Clemenceau",
    },
  ]);

  const [generateRandomQuote, setGenerateRandomQuote] = useState(0);

  // for back home since Header component
  const navigate = useNavigate();

  return (
    <>
      <Header
        cssClass="from-amber-500 to-rose-500"
        onClick={() => navigate("/")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.075c.975 0 .975 0 .975 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          </svg>
        }
        title="Quote Generator"
      />

      <main className="flex flex-col p-9 items-center gap-9">
        <QuoteCard
          quote={quotes[generateRandomQuote].quote}
          author={quotes[generateRandomQuote].author}
        />

        <Button
          type="button"
          cssClass="w-[200px] bg-linear-to-r from-amber-500 to-rose-500 rounded-2xl shadow-sm px-6 py-4 font-medium text-white transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:scale-105 cursor-pointer"
          title="Changer"
          onClick={() =>
            setGenerateRandomQuote(Math.floor(Math.random() * quotes.length))
          }
        />
      </main>
    </>
  );
}

export default QuoteGenerator;
