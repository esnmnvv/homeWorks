import { useQuery } from "@tanstack/react-query";
import { getDetailPost } from "../api/getDetailPost";

export const useDetailPost = (id) => {
  const query = useQuery({
    queryKey: ["post", id],
    queryFn: () => getDetailPost(id),
  });
  return query;
};
