import Ingredient from '../../models/ingredient';

const DeleteIngredientServices = async (id: number) => {
  await Ingredient.destroy({ where: { id } });
};

export default DeleteIngredientServices;
