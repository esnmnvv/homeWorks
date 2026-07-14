import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/getRecipes";

export const useRecipes = (q, tag) => {
  return useQuery({
    queryKey: ["recipes", q, tag],
    queryFn: () => getRecipes(q, tag),
  });
};
