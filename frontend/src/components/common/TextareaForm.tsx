import type { UseFormRegisterReturn } from "react-hook-form";
import ErrorText from "./ErrorText";
import { cn } from "@/helpers/common/cn";
import CharCount from "./CharCount";
import type { JSX } from "preact";

type TextareaFormProps = JSX.IntrinsicElements["textarea"] & {
  classNameFieldset?: string;
  register: UseFormRegisterReturn;
  error?: string;
  value?: string;
};

const TextareaForm = ({
  error,
  register,
  className,
  classNameFieldset,
  value,
  maxLength,
  ...rest
}: TextareaFormProps) => {
  const { onChange, onBlur, name, ref } = register;
  const { onInput: onInputProp, ...restProps } = rest as {
    onInput?: (e: JSX.TargetedEvent<HTMLTextAreaElement, Event>) => void;
  } & Omit<JSX.IntrinsicElements["textarea"], "onInput">;

  return (
    <fieldset
      className={cn("relative flex flex-col gap-1", classNameFieldset)}
      aria-label={`field-${name}`}
    >
      <textarea
        {...restProps}
        maxLength={maxLength}
        name={name}
        ref={ref}
        onInput={(e) => {
          onChange(e);
          onInputProp?.(e);
        }}
        onBlur={onBlur}
        aria-label={`field-${name}-input`}
        className={cn(
          "w-full rounded-lg border border-zinc-300 bg-white p-3 text-[15px] shadow-sm outline-none",
          "hover:border-zinc-400 focus-visible:border-black focus-visible:ring-4 focus-visible:ring-black/10",
          className,
        )}
      />
      <div className="flex justify-between items-center min-h-[1.25rem]">
        {error ? <ErrorText>{error}</ErrorText> : <span />}
        {typeof maxLength === "number" && value && (
          <CharCount count={value.length} maxLength={maxLength} />
        )}
      </div>
    </fieldset>
  );
};

export default TextareaForm;
