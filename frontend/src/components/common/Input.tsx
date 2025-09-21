import { cn } from "@/helpers/common/cn";
import { forwardRef } from "preact/compat";
import type { JSX } from "preact";

const Input = forwardRef<HTMLInputElement, JSX.IntrinsicElements["input"]>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          // base
          "flex h-11 w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-[15px] shadow-sm transition-all outline-none",
          // file styles
          "file:inline-flex file:h-8 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          // placeholder & selection
          "placeholder:text-zinc-500 selection:bg-black selection:text-white",
          // states
          "hover:border-zinc-400 focus-visible:border-black focus-visible:ring-4 focus-visible:ring-black/10",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          // invalid
          "aria-invalid:border-red-500 aria-invalid:ring-red-500/10",
          className,
        )}
        {...props}
      />
    );
  },
);

export default Input;
