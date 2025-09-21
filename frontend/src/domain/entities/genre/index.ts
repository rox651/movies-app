import type { RouterInput, RouterOutput } from "../common/routes";

// entities

export type Genre = NonNullable<RouterOutput["genre"]["byId"]>;

export type GenreList = RouterOutput["genre"]["list"];

// params for requests

export type CreateGenreInput = RouterInput["genre"]["create"];

export type UpdateGenreInput = RouterInput["genre"]["update"];

export type GetGenreByIdParams = RouterInput["genre"]["byId"];
