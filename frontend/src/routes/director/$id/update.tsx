import { createFileRoute } from "@tanstack/react-router";
import DirectorForm from "@/components/director/DirectorForm";
import { useGetDirectorById } from "@/hooks/director/useGetDirectorById";
import { FormSkeleton } from "@/components/common/FormSkeleton";
import { BackLink } from "@/components/common/BackLink";

const DirectorUpdatePage = () => {
  const { id } = Route.useParams();
  const numericId = Number(id);
  const { data } = useGetDirectorById({ id: numericId });

  if (!data) {
    return <div>Director not found</div>;
  }

  const defaults = {
    id: numericId,
    names: data.names,
    lastnames: data.lastnames ?? undefined,
  };

  return (
    <main className="max-w-xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Update Director</h1>
        <BackLink to="/director/" label="Back to Directors" />
      </div>
      <DirectorForm defaultValues={defaults} submitLabel="Update" />
    </main>
  );
};

export const Route = createFileRoute("/director/$id/update")({
  component: DirectorUpdatePage,
  pendingComponent: FormSkeleton,
  errorComponent: () => "There was an error loading the page",
});
