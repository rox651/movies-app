import { cn } from "@/helpers/common/cn";
import {
  cloneElement,
  ReactElement,
  type PropsWithChildren,
} from "preact/compat";

type WithSkeletonProps = PropsWithChildren<{
  count?: number;
  title?: string;
  className?: string;
}>;

export const WithSkeleton = ({
  children,
  count = 10,
  className = "",
  title,
}: WithSkeletonProps) => {
  return (
    <div className="space-y-4 p-4">
      {title && <h1 className="text-2xl font-semibold">{title}</h1>}
      <ul className={cn("grid grid-cols-2 gap-2 md:grid-cols-3", className)}>
        {Array.from({ length: count }).map((_, i) =>
          cloneElement(children as ReactElement, { key: i }),
        )}
      </ul>
    </div>
  );
};
