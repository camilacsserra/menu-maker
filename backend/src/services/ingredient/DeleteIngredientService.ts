import { Ingredient } from '@app/models';

const DeleteIngredientServices = async (id: number) => {
  await Ingredient.destroy({ where: { id } });
};

export default DeleteIngredientServices;
