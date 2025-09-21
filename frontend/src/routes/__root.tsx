import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import type { AppRouter } from "../../../server/src/presentation/trpc/routers/_app";
import { QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

export interface RouterAppContext {
  trpc: TRPCOptionsProxy<AppRouter>;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main className="text-black ">
      <Toaster position="top-center" />
      <nav className="flex gap-6 justify-center my-4">
        <div className="flex gap-2 items-center">
          <Link to="/">Media</Link>
          <Link to="/media/new" className="text-xs underline">
            New
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link to="/filmProduction">Film</Link>
          <Link to="/filmProduction/new" className="text-xs underline">
            New
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link to="/genre">Genre</Link>
          <Link to="/genre/new" className="text-xs underline">
            New
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link to="/type">Type</Link>
          <Link to="/type/new" className="text-xs underline">
            New
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link to="/director">Director</Link>
          <Link to="/director/new" className="text-xs underline">
            New
          </Link>
        </div>
      </nav>
      <div className="max-w-[1200px] mx-auto">
        <Outlet />
      </div>
    </main>
  );
}
