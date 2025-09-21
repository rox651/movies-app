import { TypeList } from "@/components/type/TypeList";
import { TypeSkeleton } from "@/components/type/TypeSkeleton";
import { createFileRoute } from "@tanstack/react-router";
import { WithSkeleton } from "@/components/common/WithSkeleton";
import { useGetTypes } from "@/hooks/type/useGetTypes";

const TITLE = "Types";

const TypeIndexPage = () => {
  const { data } = useGetTypes();
  return (
    <section className="space-y-6 p-4">
      <h1 className="text-2xl font-semibold">{TITLE}</h1>
      <TypeList types={data} />
    </section>
  );
};

export const Route = createFileRoute("/type/")({
  component: TypeIndexPage,
  pendingComponent: () => (
    <WithSkeleton title={TITLE}>
      <TypeSkeleton />
    </WithSkeleton>
  ),
  errorComponent: () => "There was an error loading types",
});
