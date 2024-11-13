import { hashSync } from 'bcrypt';
import * as Yup from 'yup';

import AppError from '../../errors/appError';
import User from '../../models/user';

type Data = {
  name: string;
  email: string;
  password: string;
};

const CreateUserService = async (data: Data) => {
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

  const SALT = 10;
  const passwordHash = hashSync(password, SALT);
  const user = await User.create({
    name,
    email,
    password: passwordHash,
  } as unknown as User);
  return user;
};

export default CreateUserService;
