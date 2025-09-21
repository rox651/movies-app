import type { JSX } from "preact";
import type { UseFormRegisterReturn } from "react-hook-form";
import Input from "./Input";
import ErrorText from "./ErrorText";
import { cn } from "@/helpers/common/cn";

type DateInputProps = Omit<JSX.IntrinsicElements["input"], "type"> & {
  register: UseFormRegisterReturn;
  error?: string;
  classNameFieldset?: string;
};

const DateInput = ({
  register,
  error,
  classNameFieldset,
  ...rest
}: DateInputProps) => {
  const { onChange, onBlur, name, ref } = register;
  return (
    <fieldset
      className={cn("relative flex flex-col gap-1", classNameFieldset)}
      aria-label={`field-${name}`}
    >
      <div className="relative">
        <Input
          type="date"
          name={name}
          ref={ref}
          onInput={onChange}
          onBlur={onBlur}
          aria-label={`field-${name}-input`}
          aria-invalid={error ? "true" : undefined}
          {...rest}
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
          📅
        </span>
      </div>
      {error ? <ErrorText>{error}</ErrorText> : null}
    </fieldset>
  );
};

export default DateInput;
