import { UpdateRetreatDto } from '@app/dtos/retreat';

import { ShowRetreatService } from './ShowRetreatService';

export const UpdateRetreatService = async (
  id: number,
  data: UpdateRetreatDto,
) => {
  const retreat = await ShowRetreatService(id);

  await retreat.update(data);

  await retreat.reload();

  return retreat;
};
