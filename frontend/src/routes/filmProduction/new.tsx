import { createFileRoute } from "@tanstack/react-router";
import FilmProductionForm from "@/components/filmProduction/FilmProductionForm";

const FilmProductionNewPage = () => {
  return (
    <main className="max-w-xl mx-auto">
      <h1 className="mb-4 text-xl font-semibold">New Film Production</h1>
      <FilmProductionForm submitLabel="Create" />
    </main>
  );
};

export const Route = createFileRoute("/filmProduction/new")({
  component: FilmProductionNewPage,
  pendingComponent: () => <div className="p-4" />,
});
