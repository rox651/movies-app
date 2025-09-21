import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import type { media } from "../../infrastructure/db/tables/media";
import type { MediaRequestParamsDTO } from "../../presentation/dto/media";

export type Media = InferSelectModel<typeof media>;
export type NewMedia = InferInsertModel<typeof media>;
export type UpdateMedia = Partial<NewMedia>;

export type UpdateMediaDTO = Omit<
	UpdateMedia,
	"id" | "createdAt" | "updatedAt"
> & {
	genreIds?: number[];
	filmProductionIds?: number[];
};

export type MediaParamsDTO = Omit<
	MediaRequestParamsDTO,
	"genreIds" | "filmProductionIds"
> & {
	genreIds?: number[];
	filmProductionIds?: number[];
};

export type NamedDTO = { id: number; name: string };

export type DirectorDTO = {
	id: number;
	names: string;
	lastnames: string | null;
};

export type MediaDTO = Omit<Media, "directorId" | "typeId"> & {
	director: DirectorDTO;
	type: NamedDTO;
	genres: NamedDTO[];
	filmProductions: NamedDTO[];
};
