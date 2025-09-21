import { useSuspenseQuery } from "@tanstack/react-query";
import type { GetTypeByIdParams } from "@/domain/entities/type";
import { trpc } from "@/infrastructure/trpc";

export const useGetTypeById = (params: GetTypeByIdParams) => {
  return useSuspenseQuery({
    ...trpc.type.byId.queryOptions(params),
  });
};
