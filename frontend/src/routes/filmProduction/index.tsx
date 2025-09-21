import { FilmProductionList } from "@/components/filmProduction/FilmProductionList";
import { FilmProductionSkeleton } from "@/components/filmProduction/FilmProductionSkeleton";
import { createFileRoute } from "@tanstack/react-router";
import { WithSkeleton } from "@/components/common/WithSkeleton";
import { useGetFilmProductions } from "@/hooks/filmProduction/useGetFilmProductions";

const TITLE = "Film Productions";

const FilmProductionIndexPage = () => {
  const { data } = useGetFilmProductions();

  return (
    <section className="space-y-6 p-4">
      <h1 className="text-2xl font-semibold">{TITLE}</h1>
      <FilmProductionList filmProductions={data} />
    </section>
  );
};

export const Route = createFileRoute("/filmProduction/")({
  component: FilmProductionIndexPage,
  pendingComponent: () => (
    <WithSkeleton title={TITLE}>
      <FilmProductionSkeleton />
    </WithSkeleton>
  ),
  errorComponent: () => "There was an error loading film productions",
});
