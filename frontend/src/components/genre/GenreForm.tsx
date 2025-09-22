import InputForm from "@/components/common/InputForm";
import { useForm } from "react-hook-form";
import { useCreateGenre } from "@/hooks/genre/useCreateGenre";
import { useUpdateGenre } from "@/hooks/genre/useUpdateGenre";
import TextareaForm from "@/components/common/TextareaForm";
import type { CreateGenreInput } from "@/domain/entities/genre";

type Props = {
  defaultValues?: Partial<CreateGenreInput>;
  submitLabel?: string;
};

const GenreForm = ({ defaultValues, submitLabel = "Save" }: Props) => {
  const form = useForm<CreateGenreInput>({
    defaultValues: defaultValues as CreateGenreInput,
  });
  const { register, handleSubmit, formState } = form;
  const { handleCreateGenre } = useCreateGenre();
  const { handleUpdateGenre } = useUpdateGenre();

  const onSubmit = (values: CreateGenreInput) => {
    if (defaultValues?.id) {
      handleUpdateGenre({ id: defaultValues.id, data: values });
    } else {
      handleCreateGenre(values);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }}
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
