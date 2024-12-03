import { User } from '@app/models';

const DeleteUserServices = async (id: number) => {
  await User.destroy({ where: { id } });
};

export default DeleteUserServices;
