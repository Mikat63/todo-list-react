import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Home() {
  const navigate = useNavigate();
  
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-9 bg-linear-to-br from-indigo-50 via-white to-violet-50">
      <h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600 text-center px-4">
        Apprentissage React
      </h1>

      <div className="flex flex-row gap-4">
        <Button
          type="button"
          cssClass="bg-linear-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-sm px-6 py-4 font-medium text-white transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          title="Todo List"
          onClick={() => navigate("/todoList")}
        />

        <Button
          type="button"
          cssClass="bg-linear-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-sm px-6 py-4 font-medium text-white transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          title="Quote Generator"
          onClick={() => navigate("/QuoteGenerator")}
        />
      </div>
    </main>
  );
}

export default Home;
