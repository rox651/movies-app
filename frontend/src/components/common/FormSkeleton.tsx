export const FormSkeleton = () => {
  return (
    <div className="max-w-xl mx-auto p-4 animate-pulse space-y-4">
      <div className="h-7 w-40 bg-gray-200 rounded" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
      ))}
      <div className="h-10 w-28 bg-gray-200 rounded" />
    </div>
  );
};
