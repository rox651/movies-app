import { publicProcedure, router } from "../trpc";
import { object, number, parse, optional } from "valibot";
import type { CreateMediaDTO } from "../../dto/media";
import {
	createMediaSchema,
	listMediaFilterSchema,
	updateMediaSchema,
} from "../../../domain/validation/mediaValidator";
import { paginationSchema } from "../../dto/pagination";

const listInputSchema = object({
	...paginationSchema.entries,
	...listMediaFilterSchema.entries,
	cursor: optional(number()),
});

export const mediaRouter = router({
	list: publicProcedure
		.input((raw) => parse(listInputSchema, raw))
		.query(async ({ ctx, input }) => {
			const limit = input.limit ?? 20;
			const offset = input.cursor ?? input.offset ?? 0;
			const items = await ctx.services.mediaService.getAllMedia({
				...input,
				offset,
				limit,
			});
			const nextCursor =
				items.length < limit ? undefined : offset + items.length;
			return { items, nextCursor };
		}),
	byId: publicProcedure
		.input((raw) => parse(object({ id: number() }), raw))
		.query(async ({ ctx, input }) =>
			ctx.services.mediaService.getMediaById(input.id),
		),
	create: publicProcedure
		.input((raw) => parse(createMediaSchema, raw))
		.mutation(async ({ ctx, input }) => {
			const payload = input as CreateMediaDTO;
			return ctx.services.mediaService.addNewMedia(payload);
		}),
	update: publicProcedure
		.input((raw) =>
			parse(object({ id: number(), data: updateMediaSchema }), raw),
		)
		.mutation(async ({ ctx, input }) => {
			return ctx.services.mediaService.updateMedia(input.id, input.data);
		}),
});
