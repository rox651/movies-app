import { createFileRoute } from "@tanstack/react-router";
import TypeForm from "@/components/type/TypeForm";

const TypeNewPage = () => {
  return (
    <main className="max-w-xl mx-auto">
      <h1 className="mb-4 text-xl font-semibold">New Type</h1>
      <TypeForm submitLabel="Create" />
    </main>
  );
};

export const Route = createFileRoute("/type/new")({
  component: TypeNewPage,
  pendingComponent: () => <div className="p-4" />,
});
