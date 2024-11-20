import { Request, Response } from 'express';

import CreateSupplierService from '../services/supplier/CreateSupplierService';
import DeleteSupplierService from '../services/supplier/DeleteSupplierService';
import ListSupplierService from '../services/supplier/ListSupplierService';
import ShowSupplierService from '../services/supplier/ShowSupplierService';
import UpdateSupplierService from '../services/supplier/UpdateSupplierService';

export const list = async (req: Request, res: Response) => {
  const {
    name,
    order_at,
    delivery_at,
    address,
    phone_number,
    email,
    website,
    created_by_id,
    updated_by_id,
  } = req.query;
  const data = await ListSupplierService({
    name,
    order_at,
    delivery_at,
    address,
    phone_number,
    email,
    website,
    created_by_id,
    updated_by_id,
  } as any);
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
    order_at,
    delivery_at,
    address,
    phone_number,
    email,
    website,
    created_by_id,
  } = req.body;
  const data = await CreateSupplierService({
    name,
    order_at,
    delivery_at,
    address,
    phone_number,
    email,
    website,
    created_by_id,
  });
  res.json(data);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    order_at,
    delivery_at,
    address,
    phone_number,
    email,
    website,
    created_by_id,
    updated_by_id,
  } = req.body;
  const data = await UpdateSupplierService(+id, {
    name,
    order_at,
    delivery_at,
    address,
    phone_number,
    email,
    website,
    created_by_id,
    updated_by_id,
  });
  res.json(data);
};

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;
  await DeleteSupplierService(+id);
  res.json({ message: 'deleted' });
};
