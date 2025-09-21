import { useSuspenseQuery } from "@tanstack/react-query";
import type { GetFilmProductionByIdParams } from "@/domain/entities/filmProduction";
import { trpc } from "@/infrastructure/trpc";

export const useGetFilmProductionById = (
  params: GetFilmProductionByIdParams,
) => {
  return useSuspenseQuery({
    ...trpc.filmProduction.byId.queryOptions(params),
  });
};
