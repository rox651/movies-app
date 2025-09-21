import { trpc } from "@/infrastructure/trpc";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetDirectors = () => {
  return useSuspenseQuery(trpc.director.list.queryOptions());
};
