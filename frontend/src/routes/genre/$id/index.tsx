import { createFileRoute } from "@tanstack/react-router";
import Loading from "@/components/common/Loading";
import { useGetGenreById } from "@/hooks/genre/useGetGenreById";
import { GenreSingle } from "@/components/genre/GenreSingle";
import { BackLink } from "@/components/common/BackLink";

const GenreShowPage = () => {
  const { id } = Route.useParams();
  const numericId = Number(id);
  const { data } = useGetGenreById({ id: numericId });

  if (!data) return <div>Genre not found</div>;

  return (
    <main className="max-w-[900px] mx-auto p-4 space-y-4">
      <BackLink to="/genre/" label="Back to Genres" />
      <GenreSingle genre={data} />
    </main>
  );
};

export const Route = createFileRoute("/genre/$id/")({
  component: GenreShowPage,
  pendingComponent: Loading,
  errorComponent: () => "Error loading genre",
});
