import type { UseFormRegisterReturn } from "react-hook-form";
import Input from "./Input";
import ErrorText from "./ErrorText";
import { cn } from "@/helpers/common/cn";
import CharCount from "./CharCount";
import type { JSX } from "preact";

type InputFormProps = JSX.IntrinsicElements["input"] & {
  classNameFieldset?: string;
  register: UseFormRegisterReturn;
  error?: string;
  value?: string;
};

const InputForm = ({
  error,
  register,
  classNameFieldset,
  value,
  maxLength,
  ...rest
}: InputFormProps) => {
  const { onChange, onBlur, name, ref } = register;

  return (
    <fieldset
      className={cn("relative flex flex-col gap-1", classNameFieldset)}
      aria-label={`field-${name}`}
    >
      <label className="sr-only" htmlFor={name}>
        {name}
      </label>
      <Input
        {...rest}
        name={name}
        ref={ref}
        onInput={onChange}
        onBlur={onBlur}
        aria-label={`field-${name}-input`}
        maxLength={maxLength}
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

export default InputForm;
