import { useMutation } from "@tanstack/react-query";
import type { CreateFilmProductionInput } from "@/domain/entities/filmProduction";
import { trpc } from "@/infrastructure/trpc";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const useCreateFilmProduction = () => {
  const navigate = useNavigate();
  const mutation = useMutation(trpc.filmProduction.create.mutationOptions());

  const handleCreateFilmProduction = async (
    input: CreateFilmProductionInput,
  ) => {
    try {
      const created = await mutation.mutateAsync(input);
      const id = created?.id;

      if (!id) {
        throw new Error("Film production not created");
      }

      navigate({ to: "/filmProduction/$id", params: { id: String(id) } });
      toast.success("Film production created successfully");
    } catch {
      toast.error("There was an error, try later");
    }
  };

  return {
    handleCreateFilmProduction,
    mutation,
  };
};
