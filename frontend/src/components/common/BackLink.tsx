import { useRouter } from "@tanstack/react-router";
import ArrowBackIcon from "@/assets/arrow-back.svg?react";

type BackLinkProps = {
  to: string;
  label?: string;
};

export const BackLink = ({ to, label = "Back" }: BackLinkProps) => {
  const router = useRouter();
  return (
    <button
      className="cursor-pointer flex items-center gap-2 text-sm text-zinc-700 hover:underline"
      onClick={() => router.history.replace(to)}
    >
      <ArrowBackIcon className="w-4 h-4" />
      {label}
    </button>
  );
};
