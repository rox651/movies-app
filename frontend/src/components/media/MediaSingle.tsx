import type { Media } from "@/domain/entities/media";

type MediaSingleProps = {
  media: Media;
};

export const MediaSingle = ({ media }: MediaSingleProps) => {
  return (
    <article className="space-y-4">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">{media.title}</h1>
        <p className="text-sm text-gray-600">{media.releaseDate}</p>
      </header>
      {media.image && (
        <img
          src={media.image}
          alt={media.title}
          className="w-full max-w-xl rounded border"
        />
      )}
      <section className="space-y-1">
        <h2 className="font-medium">Synopsis</h2>
        <p className="text-sm leading-6">{media.synopsis}</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium">Director</h3>
          <p className="text-sm">
            {media.director.names} {media.director.lastnames}
          </p>
        </div>
        <div>
          <h3 className="font-medium">Type</h3>
          <p className="text-sm">{media.type.name}</p>
        </div>
        <div>
          <h3 className="font-medium">Genres</h3>
          <ul className="flex flex-wrap gap-2 text-xs">
            {media.genres?.map((g) => (
              <li key={g} className="rounded border px-2 py-1">
                {g.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <a
        href={media.url}
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        Visit URL
      </a>
    </article>
  );
};
