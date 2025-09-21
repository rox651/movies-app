import { createFileRoute } from "@tanstack/react-router";
import FilmProductionForm from "@/components/filmProduction/FilmProductionForm";
import { useGetFilmProductionById } from "@/hooks/filmProduction/useGetFilmProductionById";
import { FormSkeleton } from "@/components/common/FormSkeleton";
import { BackLink } from "@/components/common/BackLink";

const FilmProductionUpdatePage = () => {
  const { id } = Route.useParams();
  const numericId = Number(id);
  const { data } = useGetFilmProductionById({ id: numericId });

  if (!data) {
    return <div>Film Production not found</div>;
  }

  const defaults = {
    id: numericId,
    name: data.name,
    slogan: data.slogan,
    description: data.description ?? undefined,
  };

  return (
    <main className="max-w-xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Update Film Production</h1>
        <BackLink to="/filmProduction/" label="Back to Film Productions" />
      </div>
      <FilmProductionForm defaultValues={defaults} submitLabel="Update" />
    </main>
  );
};

export const Route = createFileRoute("/filmProduction/$id/update")({
  component: FilmProductionUpdatePage,
  pendingComponent: FormSkeleton,
  errorComponent: () => "There was an error loading the page",
});
