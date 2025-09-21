import { createFileRoute } from "@tanstack/react-router";
import TypeForm from "@/components/type/TypeForm";
import { useGetTypeById } from "@/hooks/type/useGetTypeById";
import { FormSkeleton } from "@/components/common/FormSkeleton";
import { BackLink } from "@/components/common/BackLink";

const TypeUpdatePage = () => {
  const { id } = Route.useParams();
  const numericId = Number(id);
  const { data } = useGetTypeById({ id: numericId });

  const defaults = {
    id: numericId,
    name: data?.name,
    description: data?.description ?? undefined,
  };

  return (
    <main className="max-w-xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Update Type</h1>
        <BackLink to="/type/" label="Back to Types" />
      </div>
      <TypeForm defaultValues={defaults} submitLabel="Update" />
    </main>
  );
};

export const Route = createFileRoute("/type/$id/update")({
  component: TypeUpdatePage,
  pendingComponent: FormSkeleton,
  errorComponent: () => "There was an error loading the page",
});
