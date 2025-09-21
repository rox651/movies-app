import { FormSkeleton } from "@/components/common/FormSkeleton";
import MediaForm from "@/components/media/MediaForm";
import { createFileRoute } from "@tanstack/react-router";

const NewMediaPage = () => {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold">Create Media</h1>
      <MediaForm submitLabel="Create" />
    </section>
  );
};

export const Route = createFileRoute("/media/new")({
  component: NewMediaPage,
  pendingComponent: FormSkeleton,
  errorComponent: () => "There was an error loading the page",
});
