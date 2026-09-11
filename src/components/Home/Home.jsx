import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col h-screen items-center justify-center gap-9 bg-linear-to-br from-indigo-50 via-white to-violet-50">
      <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600 text-center px-4 sm:text-5xl">
        Apprentissage React
      </h1>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          type="button"
          cssClass="bg-linear-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-sm px-6 py-4 font-medium text-white transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:scale-105 cursor-pointer"
          title="Todo List"
          onClick={() => navigate("/todoList")}
        />

        <Button
          type="button"
          cssClass="bg-linear-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-sm px-6 py-4 font-medium text-white transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:scale-105 cursor-pointer"
          title="Quote Generator"
          onClick={() => navigate("/QuoteGenerator")}
        />

        <Button
          type="button"
          cssClass="bg-linear-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-sm px-6 py-4 font-medium text-white transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:scale-105 cursor-pointer"
          title="Favorite contacts"
          onClick={() => navigate("/favoriteContacts")}
        />
      </div>
    </main>
  );
}

export default Home;
