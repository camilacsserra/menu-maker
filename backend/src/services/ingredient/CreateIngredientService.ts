import * as Yup from 'yup';

import AppError from '../../errors/appError';
import Ingredient from '../../models/ingredient';

type Data = {
  name: string;
  created_by_id: number;
};

const CreateIngredientService = async (data: Data) => {
  const { name, created_by_id } = data;
  const schema = Yup.object().shape({
    name: Yup.string().required('NAME_IS_REQUIRED'),
    created_by_id: Yup.number().required('CREATED_BY_ID_IS_REQUIRED'),
  });

  try {
    await schema.validate(data);
  } catch (error) {
    throw new AppError(error.message);
  }

  const ingredient = await Ingredient.create({
    name,
    created_by_id,
  } as unknown as Ingredient);
  return ingredient;
};

export default CreateIngredientService;
