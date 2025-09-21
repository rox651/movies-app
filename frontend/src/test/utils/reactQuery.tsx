import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

export function createTestQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
}

export function QueryWrapper({
  client,
  children,
}: {
  client: QueryClient;
  children: unknown;
}) {
  return (
    <QueryClientProvider client={client}>
      {children as ReactNode}
    </QueryClientProvider>
  );
}
