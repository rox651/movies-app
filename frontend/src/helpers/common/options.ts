import type { SelectOption } from "@/components/common/Select";

export type OptionLike = { id: number };

export const toOptions = <T extends OptionLike>(
  items: T[] | undefined,
  getLabel: (item: T) => string,
): SelectOption[] => {
  if (!items) return [];
  return items.map((item) => ({ value: item.id, label: getLabel(item) }));
};
