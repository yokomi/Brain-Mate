import { Request, Response } from 'express';

export const getUser = async (req: Request, res: Response) => {
	console.log('getUser')
};

export const updateUser = async (req: Request, res: Response) => {
	console.log('updateUser')
};

export const deleteUser = async (req: Request, res: Response) => {
	console.log('deleteUser')
};