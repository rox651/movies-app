import { createFileRoute } from "@tanstack/react-router";
import DirectorForm from "@/components/director/DirectorForm";

const DirectorNewPage = () => {
  return (
    <main className="max-w-xl mx-auto">
      <h1 className="mb-4 text-xl font-semibold">New Director</h1>
      <DirectorForm submitLabel="Create" />
    </main>
  );
};

export const Route = createFileRoute("/director/new")({
  component: DirectorNewPage,
  pendingComponent: () => <div className="p-4" />,
});
