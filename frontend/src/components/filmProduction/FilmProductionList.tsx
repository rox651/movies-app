import type { FilmProductionList as FilmProductionListType } from "@/domain/entities/filmProduction";
import { Link } from "@tanstack/react-router";

type FilmProductionListProps = { filmProductions: FilmProductionListType };

export const FilmProductionList = ({
  filmProductions,
}: FilmProductionListProps) => {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {filmProductions?.map((fp) => (
          <li
            key={fp.id}
            className="rounded border p-2 text-sm flex items-center justify-between gap-2"
          >
            <Link
              to="/filmProduction/$id"
              params={{ id: String(fp.id) }}
              className="hover:underline"
            >
              {fp.name}
            </Link>
            <Link
              to="/filmProduction/$id/update"
              params={{ id: String(fp.id) }}
              className="text-xs rounded border px-2 py-1"
            >
              Editar
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
