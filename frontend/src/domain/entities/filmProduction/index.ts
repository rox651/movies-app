import type { RouterInput, RouterOutput } from "../common/routes";

// entities

export type FilmProduction = NonNullable<
  RouterOutput["filmProduction"]["byId"]
>;

export type FilmProductionList = RouterOutput["filmProduction"]["list"];

// params for requests

export type CreateFilmProductionInput = RouterInput["filmProduction"]["create"];

export type UpdateFilmProductionInput = RouterInput["filmProduction"]["update"];

export type GetFilmProductionByIdParams = RouterInput["filmProduction"]["byId"];
