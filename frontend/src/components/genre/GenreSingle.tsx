import type { Genre } from "@/domain/entities/genre";

type GenreSingleProps = { genre: Genre };

export const GenreSingle = ({ genre }: GenreSingleProps) => {
  return (
    <article className="space-y-2">
      <h1 className="text-2xl font-semibold">{genre.name}</h1>
      {genre.description ? (
        <p className="text-sm leading-6">{genre.description}</p>
      ) : null}
    </article>
  );
};
