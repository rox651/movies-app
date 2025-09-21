import { createFileRoute } from "@tanstack/react-router";
import Loading from "@/components/common/Loading";
import { useGetTypeById } from "@/hooks/type/useGetTypeById";
import { TypeSingle } from "@/components/type/TypeSingle";
import { BackLink } from "@/components/common/BackLink";

const TypeShowPage = () => {
  const { id } = Route.useParams();
  const numericId = Number(id);
  const { data } = useGetTypeById({ id: numericId });

  if (!data) return <div>Type not found</div>;

  return (
    <main className="max-w-[900px] mx-auto p-4 space-y-4">
      <BackLink to="/type/" label="Back to Types" />
      <TypeSingle typeEntity={data} />
    </main>
  );
};

export const Route = createFileRoute("/type/$id/")({
  component: TypeShowPage,
  pendingComponent: Loading,
  errorComponent: () => "Error loading type",
});
