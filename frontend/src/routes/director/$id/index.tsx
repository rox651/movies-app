import { createFileRoute } from "@tanstack/react-router";
import Loading from "@/components/common/Loading";
import { useGetDirectorById } from "@/hooks/director/useGetDirectorById";
import { DirectorSingle } from "@/components/director/DirectorSingle";
import { BackLink } from "@/components/common/BackLink";

const DirectorShowPage = () => {
  const { id } = Route.useParams();
  const numericId = Number(id);
  const { data } = useGetDirectorById({ id: numericId });

  if (!data) return <div>Director not found</div>;

  return (
    <main className="max-w-[900px] mx-auto p-4 space-y-4">
      <BackLink to="/director/" label="Back to Directors" />
      <DirectorSingle director={data} />
    </main>
  );
};

export const Route = createFileRoute("/director/$id/")({
  component: DirectorShowPage,
  pendingComponent: Loading,
  errorComponent: () => "Error loading director",
});
