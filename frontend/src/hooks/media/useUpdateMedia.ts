import { trpc } from "@/infrastructure/trpc";
import { useMutation } from "@tanstack/react-query";
import type { UpdateMediaInput } from "@/domain/entities/media";
import type { RouterOutput } from "@/domain/entities/common/routes";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const useUpdateMedia = () => {
  const navigate = useNavigate();
  const mutation = useMutation(trpc.media.update.mutationOptions());

  const handleUpdateMedia = async (input: UpdateMediaInput) => {
    try {
      const updated: RouterOutput["media"]["update"] =
        await mutation.mutateAsync(input);
      const id = updated?.id;

      if (!id) {
        throw new Error("Media not updated");
      }

      navigate({ to: "/media/$id", params: { id: String(id) } });
      toast.success("Media updated successfully");
    } catch (e) {
      toast.error("There was an error, try later");
    }
  };

  return {
    handleUpdateMedia,
    mutation,
  };
};
