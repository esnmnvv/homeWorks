import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postRecipe } from "../api/postRecipe";
import { toast } from "react-toastify";

export const useMutateRecipe = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data) => postRecipe(data),
    onSuccess: () => {
      toast.success("Рецепт успешно добавлен");
      client.invalidateQueries(["recipes"]);
    },
    onError: () => {
      toast.error("Что-то пошло не так!");
    },
  });
};
