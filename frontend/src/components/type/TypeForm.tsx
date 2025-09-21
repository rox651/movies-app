import InputForm from "@/components/common/InputForm";
import type { JSX } from "preact";
import { useForm } from "react-hook-form";
import { useCreateType } from "@/hooks/type/useCreateType";
import { useUpdateType } from "@/hooks/type/useUpdateType";
import TextareaForm from "@/components/common/TextareaForm";

export type TypeFormValues = {
  name: string;
  description?: string;
};

type Props = {
  defaultValues?: Partial<TypeFormValues> & { id?: number };
  submitLabel?: string;
};

const TypeForm = ({ defaultValues, submitLabel = "Save" }: Props) => {
  const form = useForm<TypeFormValues>({
    defaultValues: defaultValues as TypeFormValues,
  });
  const { register, handleSubmit, formState } = form;
  const { handleCreateType } = useCreateType();
  const { handleUpdateType } = useUpdateType();

  const onSubmit = (values: TypeFormValues) => {
    if (defaultValues?.id) {
      handleUpdateType({ id: defaultValues.id, data: values });
    } else {
      handleCreateType(values as any);
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

export default TypeForm;
