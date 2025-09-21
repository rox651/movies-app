import { createInsertSchema, createSelectSchema } from "drizzle-valibot";
import { object, partial } from "valibot";
import { director } from "../../infrastructure/db/tables";

export const directorSelectSchema = createSelectSchema(director);
export const createDirectorSchema = createInsertSchema(director);
export const updateDirectorSchema = object({
	...partial(createDirectorSchema).entries,
});
