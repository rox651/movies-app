import { createFileRoute } from "@tanstack/react-router";
import GenreForm from "@/components/genre/GenreForm";
import { useGetGenreById } from "@/hooks/genre/useGetGenreById";
import { FormSkeleton } from "@/components/common/FormSkeleton";
import { BackLink } from "@/components/common/BackLink";

const GenreUpdatePage = () => {
  const { id } = Route.useParams();
  const numericId = Number(id);
  const { data } = useGetGenreById({ id: numericId });

  if (!data) {
    return <div>Genre not found</div>;
  }

  const defaults = {
    id: numericId,
    name: data.name,
    description: data.description ?? undefined,
  };

  return (
    <main className="max-w-xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Update Genre</h1>
        <BackLink to="/genre/" label="Back to Genres" />
      </div>
      <GenreForm defaultValues={defaults} submitLabel="Update" />
    </main>
  );
};

export const Route = createFileRoute("/genre/$id/update")({
  component: GenreUpdatePage,
  pendingComponent: FormSkeleton,
  errorComponent: () => "There was an error loading the page",
});
