import { useMutation } from "@tanstack/react-query";
import type { CreateGenreInput } from "@/domain/entities/genre";
import { trpc } from "@/infrastructure/trpc";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const useCreateGenre = () => {
  const navigate = useNavigate();
  const mutation = useMutation(trpc.genre.create.mutationOptions());

  const handleCreateGenre = async (input: CreateGenreInput) => {
    try {
      const created = await mutation.mutateAsync(input);
      const id = created?.id;

      if (!id) {
        throw new Error("Genre not created");
      }

      navigate({ to: "/genre/$id", params: { id: String(id) } });
      toast.success("Genre created successfully");
    } catch {
      toast.error("There was an error, try later");
    }
  };

  return {
    handleCreateGenre,
    mutation,
  };
};
