import { useMutation } from "@tanstack/react-query";
import type { CreateMediaInput } from "@/domain/entities/media";
import { trpc } from "@/infrastructure/trpc";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const useCreateMedia = () => {
  const navigate = useNavigate();
  const mutation = useMutation(trpc.media.create.mutationOptions());

  const handleCreateMedia = async (input: CreateMediaInput) => {
    try {
      const created = await mutation.mutateAsync(input);
      const id = created?.id;

      if (!id) {
        throw new Error("Media not created");
      }

      navigate({ to: "/media/$id", params: { id: String(id) } });
      toast.success("Media created successfully");
    } catch (_e) {
      toast.error("There was an error, try later");
    }
  };

  return {
    handleCreateMedia,
    mutation,
  };
};
