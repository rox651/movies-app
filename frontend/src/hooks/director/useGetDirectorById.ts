import { useSuspenseQuery } from "@tanstack/react-query";
import type { GetDirectorByIdParams } from "@/domain/entities/director";
import { trpc } from "@/infrastructure/trpc";

export const useGetDirectorById = (params: GetDirectorByIdParams) => {
  return useSuspenseQuery({
    ...trpc.director.byId.queryOptions(params),
  });
};
