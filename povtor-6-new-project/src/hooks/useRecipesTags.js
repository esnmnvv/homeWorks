import { useQuery } from "@tanstack/react-query";
import { getRecipesTags } from "../api/getRecipesTags";

export const useRecipesTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: getRecipesTags,
  });
};
