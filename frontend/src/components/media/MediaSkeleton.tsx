export const MediaSkeleton = () => {
  return (
    <article className="h-[500px] rounded-xl relative overflow-hidden px-3 py-5 animate-pulse">
      <div className="absolute inset-0 bg-gray-200" />
      <div className="relative z-10 text-white flex flex-col gap-3">
        <span className="absolute top-2 left-2 h-6 w-20 rounded bg-gray-300" />
        <div className="mt-10 h-6 w-2/3 rounded bg-gray-300" />
        <div className="h-4 w-1/2 rounded bg-gray-300" />
        <div className="flex gap-2 mt-2">
          <span className="h-5 w-14 rounded bg-gray-300" />
          <span className="h-5 w-16 rounded bg-gray-300" />
          <span className="h-5 w-12 rounded bg-gray-300" />
        </div>
        <div className="h-4 w-28 rounded bg-gray-300 mt-4" />
      </div>
    </article>
  );
};
