import InputForm from "@/components/common/InputForm";
import { useForm } from "react-hook-form";
import { useCreateType } from "@/hooks/type/useCreateType";
import { useUpdateType } from "@/hooks/type/useUpdateType";
import TextareaForm from "@/components/common/TextareaForm";
import type { CreateTypeInput } from "@/domain/entities/type";

type Props = {
  defaultValues?: Partial<CreateTypeInput>;
  submitLabel?: string;
};

const TypeForm = ({ defaultValues, submitLabel = "Save" }: Props) => {
  const form = useForm<CreateTypeInput>({
    defaultValues: defaultValues as CreateTypeInput,
  });
  const { register, handleSubmit, formState } = form;
  const { handleCreateType } = useCreateType();
  const { handleUpdateType } = useUpdateType();

  const onSubmit = (values: CreateTypeInput) => {
    if (defaultValues?.id) {
      handleUpdateType({ id: defaultValues.id, data: values });
    } else {
      handleCreateType(values);
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

export default TypeForm;
