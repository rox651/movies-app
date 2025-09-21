import type { TypeList as TypeListType } from "@/domain/entities/type";
import { Link } from "@tanstack/react-router";

type TypeListProps = { types: TypeListType };

export const TypeList = ({ types }: TypeListProps) => {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {types?.map((t) => (
          <li
            key={t.id}
            className="rounded border p-2 text-sm flex items-center justify-between gap-2"
          >
            <Link
              to="/type/$id"
              params={{ id: String(t.id) }}
              className="hover:underline"
            >
              {t.name}
            </Link>
            <Link
              to="/type/$id/update"
              params={{ id: String(t.id) }}
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
