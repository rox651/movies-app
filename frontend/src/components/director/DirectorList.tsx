import type { DirectorList as DirectorListType } from "@/domain/entities/director";
import { Link } from "@tanstack/react-router";

type DirectorListProps = { directors: DirectorListType };

export const DirectorList = ({ directors }: DirectorListProps) => {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {directors?.map((d) => (
          <li
            key={d.id}
            className="rounded border p-2 text-sm flex items-center justify-between gap-2"
          >
            <span>
              {d.names}
              {d.lastnames ? ` ${d.lastnames}` : ""}
            </span>
            <Link
              to="/director/$id/update"
              params={{ id: String(d.id) }}
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
