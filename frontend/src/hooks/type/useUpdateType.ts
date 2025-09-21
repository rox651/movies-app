import { trpc } from "@/infrastructure/trpc";
import { useMutation } from "@tanstack/react-query";
import type { UpdateTypeInput } from "@/domain/entities/type";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const useUpdateType = () => {
  const navigate = useNavigate();
  const mutation = useMutation(trpc.type.update.mutationOptions());

  const handleUpdateType = async (input: UpdateTypeInput) => {
    try {
      const updated = await mutation.mutateAsync(input);
      const id = updated?.id;
      if (!id) {
        throw new Error("Type not updated");
      }

      navigate({ to: "/type/$id", params: { id: String(id) } });
      toast.success("Type updated successfully");
    } catch {
      toast.error("There was an error, try later");
    }
  };

  return {
    handleUpdateType,
    mutation,
  };
};
