import { trpc } from "@/infrastructure/trpc";
import { useMutation } from "@tanstack/react-query";
import type { UpdateGenreInput } from "@/domain/entities/genre";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const useUpdateGenre = () => {
  const navigate = useNavigate();
  const mutation = useMutation(trpc.genre.update.mutationOptions());

  const handleUpdateGenre = async (input: UpdateGenreInput) => {
    try {
      const updated = await mutation.mutateAsync(input);
      const id = updated?.id;
      if (!id) {
        throw new Error("Genre not updated");
      }

      navigate({ to: "/genre/$id", params: { id: String(id) } });
      toast.success("Genre updated successfully");
    } catch {
      toast.error("There was an error, try later");
    }
  };

  return {
    handleUpdateGenre,
    mutation,
  };
};
