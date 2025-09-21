import { WithSkeleton } from "@/components/common/WithSkeleton";
import { MediaList } from "@/components/media/MediaList";
import { MediaSkeleton } from "@/components/media/MediaSkeleton";
import { useGetMedia } from "@/hooks/media/useGetMedia";
import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Media";

const IndexPage = () => {
  const { data } = useGetMedia();

  return (
    <main className="space-y-6 p-4">
      <h1 className="text-2xl font-semibold">{TITLE}</h1>
      <MediaList mediaList={data.pages[0].items} />
    </main>
  );
};

export const Route = createFileRoute("/")({
  component: IndexPage,
  errorComponent: () => "There was an error loading the page",
  pendingComponent: () => (
    <WithSkeleton className="md:grid-cols-4" title={TITLE}>
      <MediaSkeleton />
    </WithSkeleton>
  ),
});
