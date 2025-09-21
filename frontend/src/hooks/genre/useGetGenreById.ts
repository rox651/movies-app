import { useSuspenseQuery } from "@tanstack/react-query";
import type { GetGenreByIdParams } from "@/domain/entities/genre";
import { trpc } from "@/infrastructure/trpc";

export const useGetGenreById = (params: GetGenreByIdParams) => {
  return useSuspenseQuery({
    ...trpc.genre.byId.queryOptions(params),
  });
};
