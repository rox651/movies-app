import InputForm from "@/components/common/InputForm";
import type { JSX } from "preact";
import { useForm } from "react-hook-form";
import { useCreateDirector } from "@/hooks/director/useCreateDirector";
import { useUpdateDirector } from "@/hooks/director/useUpdateDirector";

export type DirectorFormValues = {
  names: string;
  lastnames?: string;
};

type Props = {
  defaultValues?: Partial<DirectorFormValues> & { id?: number };
  submitLabel?: string;
};

const DirectorForm = ({ defaultValues, submitLabel = "Save" }: Props) => {
  const form = useForm<DirectorFormValues>({
    defaultValues: defaultValues as DirectorFormValues,
  });
  const { register, handleSubmit, formState } = form;
  const { handleCreateDirector } = useCreateDirector();
  const { handleUpdateDirector } = useUpdateDirector();

  const onSubmit = (values: DirectorFormValues) => {
    if (defaultValues?.id) {
      handleUpdateDirector({ id: defaultValues.id, data: values });
    } else {
      handleCreateDirector(values as any);
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
        register={register("names", { required: true })}
        error={formState.errors.names ? "Names is required" : undefined}
        placeholder="Names"
      />
      <InputForm register={register("lastnames")} placeholder="Lastnames" />
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

export default DirectorForm;
