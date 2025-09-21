import { trpc } from "@/infrastructure/trpc";
import { useMutation } from "@tanstack/react-query";
import type { UpdateDirectorInput } from "@/domain/entities/director";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const useUpdateDirector = () => {
  const navigate = useNavigate();
  const mutation = useMutation(trpc.director.update.mutationOptions());

  const handleUpdateDirector = async (input: UpdateDirectorInput) => {
    try {
      const updated = await mutation.mutateAsync(input);
      const id = updated?.id;

      if (!id) {
        throw new Error("Director not updated");
      }

      navigate({ to: "/director/$id", params: { id: String(id) } });
      toast.success("Director updated successfully");
    } catch {
      toast.error("There was an error, try later");
    }
  };

  return {
    handleUpdateDirector,
    mutation,
  };
};
