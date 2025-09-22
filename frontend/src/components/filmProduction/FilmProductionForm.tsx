import InputForm from "@/components/common/InputForm";
import { useForm } from "react-hook-form";
import { useCreateFilmProduction } from "@/hooks/filmProduction/useCreateFilmProduction";
import { useUpdateFilmProduction } from "@/hooks/filmProduction/useUpdateFilmProduction";
import TextareaForm from "@/components/common/TextareaForm";
import type { CreateFilmProductionInput } from "@/domain/entities/filmProduction";

type Props = {
  defaultValues?: Partial<CreateFilmProductionInput>;
  submitLabel?: string;
};

const FilmProductionForm = ({ defaultValues, submitLabel = "Save" }: Props) => {
  const form = useForm<CreateFilmProductionInput>({
    defaultValues: defaultValues as CreateFilmProductionInput,
  });
  const { register, handleSubmit, formState } = form;
  const { handleCreateFilmProduction } = useCreateFilmProduction();
  const { handleUpdateFilmProduction } = useUpdateFilmProduction();

  const onSubmit = (values: CreateFilmProductionInput) => {
    if (defaultValues?.id) {
      handleUpdateFilmProduction({ id: defaultValues.id, data: values });
    } else {
      handleCreateFilmProduction(values);
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
      <InputForm register={register("slogan")} placeholder="Slogan" />
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

export default FilmProductionForm;
