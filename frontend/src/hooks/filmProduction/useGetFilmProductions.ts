import { trpc } from "@/infrastructure/trpc";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetFilmProductions = () => {
  return useSuspenseQuery(trpc.filmProduction.list.queryOptions());
};
