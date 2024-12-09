import { Request, Response } from 'express';

import { ListUnitOfMeasurementDto } from '@app/dtos/unitOfMeasurements';
import {
  CreateUnitOfMeasurementService,
  DeleteUnitOfMeasurementService,
  ListUnitOfMeasurementService,
  ShowUnitOfMeasurementService,
  UpdateUnitOfMeasurementService,
} from '@app/services/unitOfMeasurement';

export const list = async (req: Request, res: Response) => {
  const { name } = req.query as unknown as ListUnitOfMeasurementDto;
  const data = await ListUnitOfMeasurementService({ name });

  res.json(data);
};

export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ShowUnitOfMeasurementService(+id);

  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const { name, createdById } = req.body;
  const data = await CreateUnitOfMeasurementService({ name, createdById });

  res.json(data);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const data = await UpdateUnitOfMeasurementService(+id, { name });

  res.json(data);
};

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await DeleteUnitOfMeasurementService(+id);

  res.json({ message: 'deleted' });
};
