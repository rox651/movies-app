import { cn } from "@/helpers/common/cn";
import { useMemo, useRef, useState } from "preact/hooks";
import { useClickOutside } from "@/hooks/common/useClickOutside";
import ErrorText from "./ErrorText";
import type { SelectOption } from "./Select";

export type MultiSelectOption = SelectOption;

type MultiSelectProps = {
  name?: string;
  options: MultiSelectOption[];
  values: number[];
  placeholder?: string;
  className?: string;
  onChange: (values: number[]) => void;
  error?: string;
};

const MultiSelect = ({
  name,
  options,
  values,
  placeholder,
  className,
  onChange,
  error,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const selectedOptions = useMemo(
    () => options.filter((o) => values.includes(o.value)),
    [options, values],
  );

  const toggleValue = (val: number) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val));
    } else {
      onChange([...values, val]);
    }
  };

  const clearValue = (val: number) => {
    onChange(values.filter((v) => v !== val));
  };

  return (
    <div ref={ref} className={cn("relative", className)} aria-label={name}>
      <button
        type="button"
        className={cn(
          "w-full rounded-lg border border-zinc-300 bg-white px-2 py-1.5 text-[15px] shadow-sm outline-none",
          "flex flex-wrap gap-1 items-center min-h-10",
          "hover:border-zinc-400 focus-visible:border-black focus-visible:ring-4 focus-visible:ring-black/10",
          error ? "border-red-500" : undefined,
        )}
        onClick={() => setOpen((s) => !s)}
      >
        {selectedOptions.length === 0 && (
          <span className="text-muted-foreground">
            {placeholder ?? "Select..."}
          </span>
        )}
        {selectedOptions.map((opt) => (
          <span
            key={opt.value}
            className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-xs"
          >
            {opt.label}
            <span
              role="button"
              aria-label={`remove-${opt.label}`}
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                clearValue(opt.value);
              }}
            >
              ×
            </span>
          </span>
        ))}
        <span className="ml-auto text-xs text-zinc-500">▾</span>
      </button>
      {open && (
        <div className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md border bg-white p-1 shadow-md">
          {options.map((opt) => {
            const selected = values.includes(opt.value);
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={selected}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-[15px]",
                  selected ? "bg-primary/10" : "hover:bg-muted",
                )}
                onClick={() => toggleValue(opt.value)}
              >
                <input type="checkbox" checked={selected} readOnly />
                <span>{opt.label}</span>
              </div>
            );
          })}
        </div>
      )}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
};

export default MultiSelect;
