import type { Media as MediaType } from "@/domain/entities/media";
import transformDate from "@/helpers/common/transformDate";
import { Link } from "@tanstack/react-router";

interface MediaProps {
  media: MediaType;
}

export const Media = ({ media }: MediaProps) => {
  const { title, image, releaseDate, type, genres, director } = media;

  const releaseDateFormatted = transformDate(releaseDate);

  return (
    <article className="h-[500px]  rounded-xl flex flex-col justify-end relative overflow-hidden px-3 py-5">
      <div
        aria-hidden="true"
        className="w-full h-full  absolute inset-0 bg-cover -z-0 "
        style={{
          backgroundImage: `
                linear-gradient(to right top, rgba(0, 0, 0), rgba(233, 233, 255, 0.08)),
                url(${image})`,
        }}
      />
      <div className="z-10 text-white ">
        <span className="absolute top-2 left-2 bg-gray-400 px-2 py-1 rounded-md">
          {type.name}
        </span>
        <Link
          to="/media/$id/update"
          params={{ id: String(media.id) }}
          className="absolute top-2 right-2 text-xs rounded border px-2 py-1 bg-white/80 text-black"
        >
          Editar
        </Link>
        <h2 className="text-2xl">
          <Link
            to="/media/$id"
            params={{ id: String(media.id) }}
            className="hover:underline"
          >
            {title}
          </Link>
        </h2>
        <h3 className="">
          Directed by {director.names} {director.lastnames}
        </h3>
        <div className="flex gap-x-2  items-start mt-3">
          {genres.map((genre) => (
            <span
              key={genre}
              className="bg-gray-400 text-xs px-2 py-1 rounded-md"
            >
              {genre.name}
            </span>
          ))}
        </div>
        <h4 className="mt-5">Relase: {releaseDateFormatted}</h4>
      </div>
    </article>
  );
};
