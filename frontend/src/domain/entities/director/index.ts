import type { RouterInput, RouterOutput } from "../common/routes";

// entities

export type Director = NonNullable<RouterOutput["director"]["byId"]>;

export type DirectorList = RouterOutput["director"]["list"];

// params for requests

export type CreateDirectorInput = RouterInput["director"]["create"];

export type UpdateDirectorInput = RouterInput["director"]["update"];

export type GetDirectorByIdParams = RouterInput["director"]["byId"];
