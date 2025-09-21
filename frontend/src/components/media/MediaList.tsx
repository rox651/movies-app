import type { MediaList as MediaListType } from "@/domain/entities/media";
import { Media } from "./Media";

interface MediaListProps {
  mediaList: MediaListType;
}

export const MediaList = ({ mediaList }: MediaListProps) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {mediaList.map((media) => (
        <Media media={media} key={media.id} />
      ))}
    </div>
  );
};
