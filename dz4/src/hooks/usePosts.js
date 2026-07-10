import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/getPosts";

export const usePosts = () => {
  const query = useQuery({
    queryKey: ["post"],
    queryFn: getPosts,
  });
  return query;
};
