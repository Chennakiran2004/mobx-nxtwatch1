import { formatDistanceToNow } from "date-fns";

export const formatPostedAt = (publishedAt: string): string => {
  try {
    const date = new Date(publishedAt);
    if (!isNaN(date.getTime())) {
      let postedAt = formatDistanceToNow(date);
      const list = postedAt.split(" ");
      if (list.length === 3) {
        list.shift();
        postedAt = list.join(" ");
      }
      return postedAt;
    }
  } catch {
    console.error("Invalid date:", publishedAt);
  }
  return "Unknown";
};
