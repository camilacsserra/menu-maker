import { User } from '@app/models';

const ShowUserService = async (id: number) => {
  return await User.findByPk(id, { attributes: ['id', 'name', 'email'] });
};

export default ShowUserService;
