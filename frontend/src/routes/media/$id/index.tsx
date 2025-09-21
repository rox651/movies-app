import { createFileRoute } from "@tanstack/react-router";
import { useGetMediaById } from "@/hooks/media/useGetMediaById";
import Loading from "@/components/common/Loading";
import { MediaSingle } from "@/components/media/MediaSingle";
import { BackLink } from "@/components/common/BackLink";

const MediaShowPage = () => {
  const { id } = Route.useParams();
  const numericId = Number(id);
  const { data } = useGetMediaById({ id: numericId });

  if (!data) return <div>Media not found</div>;

  return (
    <main className="max-w-[900px] mx-auto p-4 space-y-4">
      <BackLink to="/" label="Back to Media" />
      <MediaSingle media={data} />
    </main>
  );
};

export const Route = createFileRoute("/media/$id/")({
  component: MediaShowPage,
  pendingComponent: Loading,
  errorComponent: () => "Error loading media",
});
