import { GenreList } from "@/components/genre/GenreList";
import { createFileRoute } from "@tanstack/react-router";
import { GenreSkeleton } from "@/components/genre/GenreSkeleton";
import { WithSkeleton } from "@/components/common/WithSkeleton";
import { useGetGenres } from "@/hooks/genre/useGetGenres";

const TITLE = "Genres";

const GenreIndexPage = () => {
  const { data } = useGetGenres();
  return (
    <section className="space-y-6 p-4">
      <h1 className="text-2xl font-semibold">{TITLE}</h1>
      <GenreList genres={data} />
    </section>
  );
};

export const Route = createFileRoute("/genre/")({
  component: GenreIndexPage,
  pendingComponent: () => (
    <WithSkeleton title={TITLE}>
      <GenreSkeleton />
    </WithSkeleton>
  ),
  errorComponent: () => "There was an error loading genres",
});
