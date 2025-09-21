import { trpc } from "@/infrastructure/trpc";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetTypes = () => {
  return useSuspenseQuery(trpc.type.list.queryOptions());
};
