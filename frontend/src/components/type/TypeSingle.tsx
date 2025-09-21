import type { Type } from "@/domain/entities/type";

type TypeSingleProps = { typeEntity: Type };

export const TypeSingle = ({ typeEntity }: TypeSingleProps) => {
  return (
    <article className="space-y-2">
      <h1 className="text-2xl font-semibold">{typeEntity.name}</h1>
      {typeEntity.description ? (
        <p className="text-sm leading-6">{typeEntity.description}</p>
      ) : null}
    </article>
  );
};
