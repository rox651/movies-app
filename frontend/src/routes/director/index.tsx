import { DirectorList } from "@/components/director/DirectorList";
import { DirectorSkeleton } from "@/components/director/DirectorSkeleton";
import { createFileRoute } from "@tanstack/react-router";
import { WithSkeleton } from "@/components/common/WithSkeleton";
import { useGetDirectors } from "@/hooks/director/useGetDirectors";

const TITLE = "Directors";

const DirectorIndexPage = () => {
  const { data } = useGetDirectors();
  return (
    <section className="space-y-6 p-4">
      <h1 className="text-2xl font-semibold">{TITLE}</h1>
      <DirectorList directors={data} />
    </section>
  );
};

export const Route = createFileRoute("/director/")({
  component: DirectorIndexPage,
  pendingComponent: () => (
    <WithSkeleton title={TITLE}>
      <DirectorSkeleton />
    </WithSkeleton>
  ),
  errorComponent: () => "There was an error loading directors",
});
