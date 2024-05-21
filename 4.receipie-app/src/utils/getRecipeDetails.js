export const getRecipeDetails = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
