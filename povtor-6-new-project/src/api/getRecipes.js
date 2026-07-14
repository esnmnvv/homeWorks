import axios from "axios";

export const getRecipes = async (q, tag) => {
  const url = tag
    ? `https://dummyjson.com/recipes/tag/${encodeURIComponent(tag)}`
    : "https://dummyjson.com/recipes/search";

  const response = await axios.get(url, {
    params: tag ? undefined : { q },
  });

  if (!tag || !q) {
    return response.data;
  }

  const normalizedQuery = q.toLowerCase();
  const recipes = response.data.recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(normalizedQuery)
  );

  return {
    ...response.data,
    recipes,
    total: recipes.length,
  };
};
