import { Ingredient } from '@app/models';

const ShowIngredientService = async (id: number) => {
  return await Ingredient.findByPk(id, {
    attributes: ['id', 'name'],
  });
};

export default ShowIngredientService;
