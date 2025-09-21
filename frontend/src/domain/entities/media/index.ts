import type { RouterInput, RouterOutput } from "../common/routes";

// entities

export type Media = NonNullable<RouterOutput["media"]["byId"]>;

// For infinite queries with cursor, `media.list` returns { items, nextCursor }
export type MediaListPage = RouterOutput["media"]["list"]["items"];
export type MediaList = MediaListPage;

// params for requests

export type GetMediaByIdParams = RouterInput["media"]["byId"];

export type GetMediaListParams = RouterInput["media"]["list"];

export type CreateMediaInput = RouterInput["media"]["create"];

export type UpdateMediaInput = RouterInput["media"]["update"];
