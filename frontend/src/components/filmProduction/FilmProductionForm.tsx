import InputForm from "@/components/common/InputForm";
import type { JSX } from "preact";
import { useForm } from "react-hook-form";
import { useCreateFilmProduction } from "@/hooks/filmProduction/useCreateFilmProduction";
import { useUpdateFilmProduction } from "@/hooks/filmProduction/useUpdateFilmProduction";
import TextareaForm from "@/components/common/TextareaForm";

export type FilmProductionFormValues = {
  name: string;
  slogan?: string;
  description?: string;
};

type Props = {
  defaultValues?: Partial<FilmProductionFormValues> & { id?: number };
  submitLabel?: string;
};

const FilmProductionForm = ({ defaultValues, submitLabel = "Save" }: Props) => {
  const form = useForm<FilmProductionFormValues>({
    defaultValues: defaultValues as FilmProductionFormValues,
  });
  const { register, handleSubmit, formState } = form;
  const { handleCreateFilmProduction } = useCreateFilmProduction();
  const { handleUpdateFilmProduction } = useUpdateFilmProduction();

  const onSubmit = (values: FilmProductionFormValues) => {
    if (defaultValues?.id) {
      handleUpdateFilmProduction({ id: defaultValues.id, data: values });
    } else {
      handleCreateFilmProduction(values as any);
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
