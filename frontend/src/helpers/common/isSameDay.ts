export const isSameDay = (dateString: string | null): boolean => {
  if (!dateString) return false;
  const today = new Date().toLocaleDateString();
  return dateString === today;
};
