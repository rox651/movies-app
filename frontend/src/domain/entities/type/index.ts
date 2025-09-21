import type { RouterInput, RouterOutput } from "../common/routes";

// entities

export type Type = NonNullable<RouterOutput["type"]["byId"]>;

export type TypeList = RouterOutput["type"]["list"];

// params for requests

export type CreateTypeInput = RouterInput["type"]["create"];

export type UpdateTypeInput = RouterInput["type"]["update"];

export type GetTypeByIdParams = RouterInput["type"]["byId"];
