import type { Director } from "@/domain/entities/director";

type DirectorSingleProps = { director: Director };

export const DirectorSingle = ({ director }: DirectorSingleProps) => {
  return (
    <article className="space-y-2">
      <h1 className="text-2xl font-semibold">
        {director.names}
        {director.lastnames ? ` ${director.lastnames}` : ""}
      </h1>
    </article>
  );
};
