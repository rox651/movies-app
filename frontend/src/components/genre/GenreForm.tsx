import InputForm from "@/components/common/InputForm";
import type { JSX } from "preact";
import { useForm } from "react-hook-form";
import { useCreateGenre } from "@/hooks/genre/useCreateGenre";
import { useUpdateGenre } from "@/hooks/genre/useUpdateGenre";
import TextareaForm from "@/components/common/TextareaForm";

export type GenreFormValues = {
  name: string;
  description?: string;
};

type Props = {
  defaultValues?: Partial<GenreFormValues> & { id?: number };
  submitLabel?: string;
};

const GenreForm = ({ defaultValues, submitLabel = "Save" }: Props) => {
  const form = useForm<GenreFormValues>({
    defaultValues: defaultValues as GenreFormValues,
  });
  const { register, handleSubmit, formState } = form;
  const { handleCreateGenre } = useCreateGenre();
  const { handleUpdateGenre } = useUpdateGenre();

  const onSubmit = (values: GenreFormValues) => {
    if (defaultValues?.id) {
      handleUpdateGenre({ id: defaultValues.id, data: values });
    } else {
      handleCreateGenre(values as any);
    }
  };

  return (
    <form
      onSubmit={
        ((e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }) as JSX.SubmitEventHandler<HTMLFormElement>
      }
      className="space-y-4"
    >
      <InputForm
        register={register("name", { required: true })}
        error={formState.errors.name ? "Name is required" : undefined}
        placeholder="Name"
      />
      <TextareaForm
        register={register("description")}
        placeholder="Description"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-green-600 px-4 py-2 text-white"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default GenreForm;
