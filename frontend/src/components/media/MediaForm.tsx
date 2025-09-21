import InputForm from "@/components/common/InputForm";
import TextareaForm from "@/components/common/TextareaForm";
import MultiSelect from "@/components/common/MultiSelect";
import Select from "@/components/common/Select";
import DateInput from "@/components/common/DateInput";
import FileInput from "@/components/common/FileInput";
import type { CreateMediaInput } from "@/domain/entities/media";
import { useForm } from "react-hook-form";
import { useGetDirectors } from "@/hooks/director/useGetDirectors";
import { useGetGenres } from "@/hooks/genre/useGetGenres";
import { useGetTypes } from "@/hooks/type/useGetTypes";
import { useGetFilmProductions } from "@/hooks/filmProduction/useGetFilmProductions";
import { toOptions } from "@/helpers/common/options";
import { uploadImageToCloudinary } from "@/helpers/common/cloudinary";
import { useCreateMedia } from "@/hooks/media/useCreateMedia";
import { useUpdateMedia } from "@/hooks/media/useUpdateMedia";

type MediaFormProps = {
  defaultValues?: Partial<CreateMediaInput>;
  submitLabel?: string;
};

const MediaForm = ({ defaultValues, submitLabel = "Save" }: MediaFormProps) => {
  const form = useForm<CreateMediaInput>({
    defaultValues: defaultValues as CreateMediaInput,
    mode: "onSubmit",
  });

  const { register, handleSubmit, formState, setValue, watch } = form;

  // fetch lists
  const directorsQuery = useGetDirectors();
  const typesQuery = useGetTypes();
  const genresQuery = useGetGenres();
  const filmProdQuery = useGetFilmProductions();

  // map to options
  const directorOptions = toOptions(
    directorsQuery.data,
    (d) => `${d.names}${d.lastnames ? ` ${d.lastnames}` : ""}`,
  );
  const typeOptions = toOptions(typesQuery.data, (t) => t.name);
  const computedGenreOptions = toOptions(genresQuery.data, (g) => g.name);
  const computedFilmProductionOptions = toOptions(
    filmProdQuery.data,
    (fp) => fp.name,
  );

  const selectedGenreIds = (watch("genreIds") ??
    defaultValues?.genreIds ??
    []) as number[];
  const selectedFilmProductionIds = (watch("filmProductionIds") ??
    defaultValues?.filmProductionIds ??
    []) as number[];

  const setGenreIds = (vals: number[]) =>
    setValue("genreIds", vals as CreateMediaInput["genreIds"]);
  const setFilmProductionIds = (vals: number[]) =>
    setValue(
      "filmProductionIds",
      vals as CreateMediaInput["filmProductionIds"],
    );

  const { handleCreateMedia, mutation: createMutation } = useCreateMedia();
  const { handleUpdateMedia, mutation: updateMutation } = useUpdateMedia();
  const isUpdating = !!defaultValues?.id;
  const isPending = createMutation.isPending || updateMutation.isPending;

  const handleImageSelected = async (file: File | null) => {
    if (!file) return;
    const { url } = await uploadImageToCloudinary(file);
    setValue("image", url, { shouldValidate: true });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit((values) => {
          if (isUpdating) {
            handleUpdateMedia({ id: Number(defaultValues?.id), data: values });
          } else {
            handleCreateMedia(values);
          }
        })();
      }}
      className="space-y-4"
    >
      <InputForm
        register={register("title", { required: true })}
        error={formState.errors.title ? "Title is required" : undefined}
        placeholder="Title"
      />
      <InputForm
        register={register("url", { required: true })}
        error={formState.errors.url ? "URL is required" : undefined}
        placeholder="URL"
      />
      <FileInput
        onFileSelected={handleImageSelected}
        placeholder="Upload image"
        hiddenRegister={register("image", { required: true })}
        setHiddenValue={(v) =>
          form.setValue("image", v, { shouldValidate: true })
        }
        error={formState.errors.image ? "Image is required" : undefined}
      />
      <DateInput
        register={register("releaseDate", { required: true })}
        placeholder="Release date (YYYY-MM-DD)"
        error={
          formState.errors.releaseDate ? "Release date is required" : undefined
        }
      />
      <TextareaForm
        register={register("synopsis", { required: true })}
        placeholder="Synopsis"
        maxLength={500}
        error={formState.errors.synopsis ? "Synopsis is required" : undefined}
      />
      <div className="space-y-1">
        <label className="text-sm">Director</label>
        <Select
          aria-label="directorId"
          placeholder="Select a director"
          options={directorOptions}
          defaultValue={String(defaultValues?.directorId ?? "")}
          register={register("directorId", {
            valueAsNumber: true,
            required: true,
          })}
          error={formState.errors.directorId ? "Required" : undefined}
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm">Type</label>
        <Select
          aria-label="typeId"
          placeholder="Select a type"
          options={typeOptions}
          defaultValue={String(defaultValues?.typeId ?? "")}
          register={register("typeId", { valueAsNumber: true, required: true })}
          error={formState.errors.typeId ? "Required" : undefined}
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm">Genres</label>
        <MultiSelect
          name="genreIds"
          options={computedGenreOptions}
          values={selectedGenreIds}
          onChange={setGenreIds}
          error={
            formState.isSubmitted && selectedGenreIds.length === 0
              ? "Select at least one"
              : undefined
          }
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm">Film Productions</label>
        <MultiSelect
          name="filmProductionIds"
          options={computedFilmProductionOptions}
          values={selectedFilmProductionIds}
          onChange={setFilmProductionIds}
          error={
            formState.isSubmitted && selectedFilmProductionIds.length === 0
              ? "Select at least one"
              : undefined
          }
        />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-green-600 text-white disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
};

export default MediaForm;
