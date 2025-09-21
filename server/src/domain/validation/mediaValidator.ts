import { createInsertSchema, createSelectSchema } from "drizzle-valibot";
import {
	array,
	number,
	object,
	optional,
	partial,
	string,
	minLength,
	pipe,
} from "valibot";
import { media } from "../../infrastructure/db/tables/media";

export const mediaSelectSchema = createSelectSchema(media);

const baseCreateMediaSchema = createInsertSchema(media);

const genreIdsSchema = object({
	genreIds: pipe(array(number()), minLength(1, "Select at least one genre")),
});
const filmProductionIdsSchema = object({
	filmProductionIds: pipe(
		array(number()),
		minLength(1, "Select at least one film production"),
	),
});

export const createMediaSchema = object({
	...baseCreateMediaSchema.entries,
	// enforce non-empty strings for optional DB columns used in the form
	image: string(),
	synopsis: string(),
	...genreIdsSchema.entries,
	...filmProductionIdsSchema.entries,
});

export const updateMediaSchema = object({
	...partial(baseCreateMediaSchema).entries,
	...partial(genreIdsSchema).entries,
	...partial(filmProductionIdsSchema).entries,
});

const listMediaFilterBase = object({
	title: mediaSelectSchema.entries.title,
	releaseDate: mediaSelectSchema.entries.releaseDate,
	typeId: mediaSelectSchema.entries.typeId,
});

export const listMediaFilterSchema = object({
	...partial(listMediaFilterBase).entries,
	genreIds: optional(string()),
	filmProductionIds: optional(string()),
});
