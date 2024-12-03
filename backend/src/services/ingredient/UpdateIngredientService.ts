import ShowIngredientService from './ShowIngredientService';

const UpdateIngredientService = async (
  id: number,
  data: {
    name: string;
  },
) => {
  const ingredient = await ShowIngredientService(id);

  await ingredient.update(data);

  await ingredient.reload();

  return ingredient;
};

export default UpdateIngredientService;
