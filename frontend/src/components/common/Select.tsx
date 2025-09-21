import type { JSX } from "preact";
import type { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/helpers/common/cn";
import ErrorText from "./ErrorText";

export type SelectOption = {
  value: number;
  label: string;
};

type SelectProps = Omit<
  JSX.IntrinsicElements["select"],
  "onChange" | "multiple"
> & {
  options: SelectOption[];
  placeholder?: string;
  register?: UseFormRegisterReturn;
  valueAsNumber?: boolean;
  error?: string;
};

const Select = ({
  options,
  placeholder,
  className,
  register,
  valueAsNumber,
  error,
  ...rest
}: SelectProps) => {
  const registerProps = register
    ? {
        name: register.name,
        ref: register.ref,
        onChange: register.onChange,
        onBlur: register.onBlur,
      }
    : {};

  return (
    <div className={cn("relative", className)}>
      <select
        {...rest}
        {...registerProps}
        className={cn(
          "w-full appearance-none rounded-lg border border-zinc-300 bg-white px-3 py-2 text-[15px] shadow-sm outline-none",
          "hover:border-zinc-400 focus-visible:border-black focus-visible:ring-4 focus-visible:ring-black/10",
          error ? "border-red-500" : undefined,
        )}
        aria-invalid={error ? "true" : undefined}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((opt) => (
          <option key={String(opt.value)} value={String(opt.value)}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
        ▾
      </span>
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
};

export default Select;
