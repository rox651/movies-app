import LoadingIcon from "@/assets/loading.svg?react";
import { cn } from "@/helpers/common/cn";

interface LoadingProps {
  size?: number;
  label?: string;
  className?: string;
}

const Loading = ({ size = 24, label = "Loading", className }: LoadingProps) => {
  return (
    <LoadingIcon
      width={size}
      height={size}
      aria-label={label}
      role="status"
      className={cn("animate-spin text-muted-foreground", className)}
    />
  );
};

export default Loading;
