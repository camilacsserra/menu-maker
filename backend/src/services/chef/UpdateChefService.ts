import { UpdateChefDto } from '@app/dtos/chef';

import { ShowChefService } from './ShowChefService';

export const UpdateChefService = async (id: number, data: UpdateChefDto) => {
  const chef = await ShowChefService(id);

  await chef.update(data);

  await chef.reload();

  return chef;
};
