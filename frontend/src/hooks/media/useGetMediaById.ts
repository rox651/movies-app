import { useSuspenseQuery } from "@tanstack/react-query";
import type { GetMediaByIdParams } from "@/domain/entities/media";
import { trpc } from "@/infrastructure/trpc";

export const useGetMediaById = (params: GetMediaByIdParams) => {
  return useSuspenseQuery({
    ...trpc.media.byId.queryOptions(params),
  });
};
