import { Request, Response } from 'express';

import { ListSupplierDto } from '@app/dtos/supplier';
import AppError from '@app/errors/appError';
import {
  CreateSupplierService,
  DeleteSupplierServices,
  ListSupplierService,
  ShowSupplierService,
  UpdateSupplierService,
} from '@app/services/supplier';

export const list = async (req: Request, res: Response) => {
  const { name, orderAt, deliveryAt, email, ingredientIds } =
    req.query as unknown as ListSupplierDto;

  const data = await ListSupplierService({
    name,
    orderAt,
    deliveryAt,
    email,
    ingredientIds,
  });

  res.json(data);
};

export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ShowSupplierService(+id);

  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const {
    name,
    orderAt,
    deliveryAt,
    address,
    phoneNumber,
    email,
    website,
    createdById,
    ingredientIds,
  } = req.body;
  const data = await CreateSupplierService({
    name,
    orderAt,
    deliveryAt,
    address,
    phoneNumber,
    email,
    website,
    createdById,
    ingredientIds,
  });

  res.json(data);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    orderAt,
    deliveryAt,
    address,
    phoneNumber,
    email,
    website,
    createdById,
    updatedById,
    ingredientIds,
  } = req.body;
  const data = await UpdateSupplierService(+id, {
    name,
    orderAt,
    deliveryAt,
    address,
    phoneNumber,
    email,
    website,
    createdById,
    updatedById,
    ingredientIds,
  });

  res.json(data);
};

export const destroy = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await DeleteSupplierServices(+id);

    res.json({ message: 'deleted' });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(404).json({ error: error.message });
    }
  }
};
