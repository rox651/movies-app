import { createFileRoute } from "@tanstack/react-router";
import Loading from "@/components/common/Loading";
import { useGetFilmProductionById } from "@/hooks/filmProduction/useGetFilmProductionById";
import { FilmProductionSingle } from "@/components/filmProduction/FilmProductionSingle";
import { BackLink } from "@/components/common/BackLink";

const FilmProductionShowPage = () => {
  const { id } = Route.useParams();
  const numericId = Number(id);
  const { data } = useGetFilmProductionById({ id: numericId });

  if (!data) return <div>Film Production not found</div>;

  return (
    <main className="max-w-[900px] mx-auto p-4 space-y-4">
      <BackLink to="/filmProduction/" label="Back to Film Productions" />
      <FilmProductionSingle filmProduction={data} />
    </main>
  );
};

export const Route = createFileRoute("/filmProduction/$id/")({
  component: FilmProductionShowPage,
  pendingComponent: Loading,
  errorComponent: () => "Error loading film production",
});
