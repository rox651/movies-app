import { createFileRoute } from "@tanstack/react-router";
import { FormSkeleton } from "@/components/common/FormSkeleton";
import { BackLink } from "@/components/common/BackLink";
import MediaForm from "@/components/media/MediaForm";
import { useGetMediaById } from "@/hooks/media/useGetMediaById";
import { useUpdateMedia } from "@/hooks/media/useUpdateMedia";
import type { CreateMediaInput } from "@/domain/entities/media";

const UpdateMediaPage = () => {
  const { id } = Route.useParams();
  const numericId = Number(id);
  const { data } = useGetMediaById({ id: numericId });

  if (!data) {
    return <div>Media not found</div>;
  }

  const defaults: CreateMediaInput = {
    id: numericId,
    title: data.title,
    synopsis: data.synopsis ?? "",
    url: data.url,
    image: data.image ?? "",
    releaseDate: data.releaseDate,
    directorId: data.director.id,
    typeId: data.type.id,
    genreIds: data.genres.map((genre) => genre.id),
    filmProductionIds: data.filmProductions.map(
      (filmProduction) => filmProduction.id,
    ),
  };

  const { mutation } = useUpdateMedia();

  return (
    <section className="max-w-xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Update Media</h1>
        <BackLink to="/" label="Back to Media" />
      </div>
      <MediaForm
        defaultValues={defaults}
        submitLabel={mutation.isPending ? "Updating..." : "Update"}
      />
    </section>
  );
};

export const Route = createFileRoute("/media/$id/update")({
  component: UpdateMediaPage,
  pendingComponent: FormSkeleton,
  errorComponent: () => "There was an error loading the page",
});
