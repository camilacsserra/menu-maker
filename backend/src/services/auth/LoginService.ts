import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import { LoginDto } from '@app/dtos/auth';
import AppError from '@app/errors/appError';

import { ShowUserByEmailService } from '../user';

export const LoginService = async ({ email, password }: LoginDto) => {
  const secretKey = process.env.SECRET_KEY;

  if (!secretKey) {
    throw new AppError('SECRET_KEY_IS_REQUIRED', 401);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email('INVALID_EMAIL').required('EMAIL_IS_REQUIRED'),
    password: Yup.string().required('PASSWORD_IS_REQUIRED'),
  });

  try {
    await schema.validate({ email, password });
  } catch (error) {
    throw new AppError(error.message, 401);
  }
  const user = await ShowUserByEmailService(email);

  if (!user) {
    throw new AppError('USER_NOT_FOUND', 401);
  }
  const isPasswordValid = await user.validatePassword(password);

  if (!isPasswordValid) {
    throw new AppError('INVALID_PASSWORD', 401);
  }

  const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });

  return { token, id: user.id, email: user.email, name: user.name };
};
