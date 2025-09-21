import { trpc } from "@/infrastructure/trpc";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import type { GetMediaListParams } from "@/domain/entities/media";

export const useGetMedia = (params: GetMediaListParams = {}) => {
  const limit = params.limit;

  return useSuspenseInfiniteQuery(
    trpc.media.list.infiniteQueryOptions(
      { ...params, cursor: params.offset ?? 0, limit },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      },
    ),
  );
};
