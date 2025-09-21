import { createFileRoute } from "@tanstack/react-router";
import GenreForm from "@/components/genre/GenreForm";

const GenreNewPage = () => {
  return (
    <main className="max-w-xl mx-auto">
      <h1 className="mb-4 text-xl font-semibold">New Genre</h1>
      <GenreForm submitLabel="Create" />
    </main>
  );
};

export const Route = createFileRoute("/genre/new")({
  component: GenreNewPage,
  pendingComponent: () => <div className="p-4" />,
});
