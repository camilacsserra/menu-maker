import * as Yup from 'yup';

import { Ingredient } from '@app/models';

import AppError from '../../errors/appError';

type Data = {
  name: string;
  createdById: number;
};

const CreateIngredientService = async (data: Data) => {
  const { name, createdById } = data;
  const schema = Yup.object().shape({
    name: Yup.string().required('NAME_IS_REQUIRED'),
    createdById: Yup.number().required('createdById_IS_REQUIRED'),
  });

  try {
    await schema.validate(data);
  } catch (error) {
    throw new AppError(error.message);
  }

  const ingredient = await Ingredient.create({
    name,
    createdById,
  } as unknown as Ingredient);

  return ingredient;
};

export default CreateIngredientService;
