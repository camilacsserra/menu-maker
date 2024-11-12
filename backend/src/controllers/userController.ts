import { Request, Response } from "express";
import ListUserService from "../services/user/ListUserService";
import CreateUserService from "../services/user/CreateUserService";
import DeleteUserServices from "../services/user/DeleteUserService";
import ShowUserService from "../services/user/ShowUserService";
import UpdateUserService from "../services/user/UpdateUserService";

export const list = async (req: Request, res: Response):Promise<any> => {
    const { name, email } = req.query;
    const data = await ListUserService({ name, email } as any);
    return res.json(data);
}

export const show = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const data = await ShowUserService(+id);
    return res.json(data);
}

export const create = async (req: Request, res: Response): Promise<any> => {
    const { name, email, password } = req.body;
    const data = await CreateUserService({ name, email, password });
    return res.json(data);
}

export const update = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const { name, email } = req.body;
    const data = await UpdateUserService(+id, { name, email });
    return res.json(data);
}

export const destroy = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    await DeleteUserServices(+id);
    return res.json({message: "deleted"});
}

