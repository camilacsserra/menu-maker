import { hashSync } from 'bcrypt';
import * as Yup from 'yup';

import { User } from '@app/models';

import AppError from '../../errors/appError';

type Data = {
  name: string;
  email: string;
  password: string;
};

export const CreateUserService = async (data: Data) => {
  const { name, email, password } = data;
  const schema = Yup.object().shape({
    name: Yup.string().required('NAME_IS_REQUIRED'),
    email: Yup.string().email().required('EMAIL_IS_REQUIRED'),
    password: Yup.string().min(8).required('PASSWORD_IS_REQUIRED'),
  });

  try {
    await schema.validate(data);
  } catch (error) {
    throw new AppError(error.message);
  }

  const existingUserEmail = await User.findOne({ where: { email } });

  if (existingUserEmail) {
    throw new AppError('EMAIL_ALREADY_IN_USE');
  }

  const SALT = 10;
  const passwordHash = hashSync(password, SALT);
  const user = await User.create({
    name,
    email,
    password: passwordHash,
  } as unknown as User);

  return user;
};
