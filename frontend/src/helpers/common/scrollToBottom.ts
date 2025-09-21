import type { RefObject } from "preact";

export const scrollToBottom = (scrollRef: RefObject<HTMLDivElement>) => {
  if (scrollRef.current) {
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 50);
  }
};
