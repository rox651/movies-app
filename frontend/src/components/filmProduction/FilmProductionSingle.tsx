import type { FilmProduction } from "@/domain/entities/filmProduction";

type FilmProductionSingleProps = { filmProduction: FilmProduction };

export const FilmProductionSingle = ({
  filmProduction,
}: FilmProductionSingleProps) => {
  return (
    <article className="space-y-2">
      <h1 className="text-2xl font-semibold">{filmProduction.name}</h1>
      {filmProduction.description ? (
        <p className="text-sm leading-6">{filmProduction.description}</p>
      ) : null}
    </article>
  );
};
