import { useMutation } from "@tanstack/react-query";
import type { CreateTypeInput } from "@/domain/entities/type";
import { trpc } from "@/infrastructure/trpc";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const useCreateType = () => {
  const navigate = useNavigate();
  const mutation = useMutation(trpc.type.create.mutationOptions());

  const handleCreateType = async (input: CreateTypeInput) => {
    try {
      const created = await mutation.mutateAsync(input);
      const id = created?.id;
      if (!id) {
        throw new Error("Type not created");
      }

      navigate({ to: "/type/$id", params: { id: String(id) } });
      toast.success("Type created successfully");
    } catch {
      toast.error("There was an error, try later");
    }
  };

  return {
    handleCreateType,
    mutation,
  };
};
