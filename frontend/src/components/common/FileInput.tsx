import type { JSX } from "preact";
import { useRef, useState } from "preact/hooks";
import type { UseFormRegisterReturn } from "react-hook-form";
import ErrorText from "./ErrorText";
import { cn } from "@/helpers/common/cn";

type FileInputProps = Omit<JSX.IntrinsicElements["input"], "type"> & {
  register?: UseFormRegisterReturn;
  hiddenRegister?: UseFormRegisterReturn;
  setHiddenValue?: (value: string, shouldValidate?: boolean) => void;
  error?: string;
  classNameFieldset?: string;
  onFileSelected?: (file: File | null) => void;
};

const FileInput = ({
  register,
  hiddenRegister,
  setHiddenValue,
  error,
  classNameFieldset,
  onFileSelected,
  ...rest
}: FileInputProps) => {
  const registerProps = register
    ? {
        name: register.name,
        ref: register.ref,
        onChange: register.onChange,
        onBlur: register.onBlur,
      }
    : {};

  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const accept = rest.accept ?? "image/*";

  const updateHiddenValue = (val: string) => {
    if (typeof setHiddenValue === "function") {
      setHiddenValue(val, true);
      return;
    }
    if (typeof hiddenRegister?.onChange === "function") {
      // react-hook-form accepts event-like with target.name/value
      hiddenRegister.onChange({
        target: { name: hiddenRegister.name, value: val },
      } as unknown as Event);
    }
  };

  const clear = () => {
    setFile(null);
    setPreviewUrl(null);
    if (inputRef.current) inputRef.current.value = "";
    onFileSelected?.(null);
    updateHiddenValue("");
  };

  const handleFile = (f: File | null) => {
    if (!f) return;
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
    onFileSelected?.(f);
    // flag that there is a selected local file to satisfy required validation
    updateHiddenValue("__local_file_selected__");
  };

  return (
    <fieldset className={cn("relative flex flex-col gap-2", classNameFieldset)}>
      {hiddenRegister ? <input type="hidden" {...hiddenRegister} /> : null}
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center rounded-md border-2 border-dashed p-6 text-center",
          isDragOver ? "border-ring bg-muted/40" : "border-input bg-white",
          error ? "border-red-500/70" : undefined,
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          const dropped = e.dataTransfer?.files?.[0] ?? null;
          if (dropped) handleFile(dropped);
        }}
      >
        <input
          {...rest}
          {...registerProps}
          ref={(el) => {
            inputRef.current = el as HTMLInputElement | null;
            if (typeof registerProps.ref === "function") registerProps.ref(el);
          }}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => {
            const selected =
              (e.currentTarget.files && e.currentTarget.files[0]) || null;
            if (selected) handleFile(selected);
          }}
        />
        <button
          type="button"
          className="rounded-md bg-secondary px-3 py-2 text-sm"
          onClick={() => inputRef.current?.click()}
        >
          Click to upload
        </button>
        <p className="mt-2 text-xs text-muted-foreground">or drag and drop</p>
      </div>

      {file && (
        <div className="mt-2 flex items-center justify-between rounded-md bg-blue-50 p-3">
          <div className="flex items-center gap-3">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="preview"
                className="h-10 w-10 rounded object-cover"
              />
            ) : null}
            <span className="text-sm">{file.name}</span>
          </div>
          <button
            type="button"
            aria-label="remove-file"
            className="text-muted-foreground hover:text-foreground"
            onClick={clear}
          >
            ×
          </button>
        </div>
      )}

      {error ? <ErrorText>{error}</ErrorText> : null}
    </fieldset>
  );
};

export default FileInput;
