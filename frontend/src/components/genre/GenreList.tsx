import type { GenreList as GenreListType } from "@/domain/entities/genre";
import { Link } from "@tanstack/react-router";

type GenreListProps = { genres: GenreListType };

export const GenreList = ({ genres }: GenreListProps) => {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {genres?.map((g) => (
          <li
            key={g.id}
            className="rounded border p-2 text-sm flex items-center justify-between gap-2"
          >
            <Link
              to="/genre/$id"
              params={{ id: String(g.id) }}
              className="hover:underline"
            >
              {g.name}
            </Link>
            <Link
              to="/genre/$id/update"
              params={{ id: String(g.id) }}
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
