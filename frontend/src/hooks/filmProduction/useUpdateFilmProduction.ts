import { trpc } from "@/infrastructure/trpc";
import { useMutation } from "@tanstack/react-query";
import type { UpdateFilmProductionInput } from "@/domain/entities/filmProduction";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const useUpdateFilmProduction = () => {
  const navigate = useNavigate();
  const mutation = useMutation(trpc.filmProduction.update.mutationOptions());

  const handleUpdateFilmProduction = async (
    input: UpdateFilmProductionInput,
  ) => {
    try {
      const updated = await mutation.mutateAsync(input);
      const id = updated?.id;

      if (!id) {
        throw new Error("Film production not updated");
      }

      navigate({ to: "/filmProduction/$id", params: { id: String(id) } });
      toast.success("Film production updated successfully");
    } catch {
      toast.error("There was an error, try later");
    }
  };

  return {
    handleUpdateFilmProduction,
    mutation,
  };
};
