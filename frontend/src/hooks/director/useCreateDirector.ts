import { useMutation } from "@tanstack/react-query";
import type { CreateDirectorInput } from "@/domain/entities/director";
import { trpc } from "@/infrastructure/trpc";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const useCreateDirector = () => {
  const navigate = useNavigate();
  const mutation = useMutation(trpc.director.create.mutationOptions());

  const handleCreateDirector = async (input: CreateDirectorInput) => {
    try {
      const created = await mutation.mutateAsync(input);
      const id = created?.id;

      if (!id) {
        throw new Error("Director not created");
      }

      navigate({ to: "/director/$id", params: { id: String(id) } });
      toast.success("Director created successfully");
    } catch {
      toast.error("There was an error, try later");
    }
  };

  return {
    handleCreateDirector,
    mutation,
  };
};
