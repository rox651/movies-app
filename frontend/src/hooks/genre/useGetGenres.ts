import { trpc } from "@/infrastructure/trpc";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetGenres = () => {
  return useSuspenseQuery(trpc.genre.list.queryOptions());
};
