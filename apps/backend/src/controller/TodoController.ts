import { Request, Response } from "express";
import {FindOneOptions} from "typeorm";
import { Todo } from "../entity/Todo";
import {AppDataSource} from "../data-source";

export const createTodo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTodo = AppDataSource.getRepository(Todo).create(req.body);
  const results = await AppDataSource.getRepository(Todo).save(newTodo);

  return res.json(results);
};

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const todoRepository = AppDataSource.getRepository(Todo);
    const todos = await todoRepository.find();
    if (todos) {
      return res.json([...todos]);
    } else {
      return res.status(401).send({ error: { message: "Unauthorized." } });
    }
  } catch (err) {
    return res.status(500).send({ error: { message: "Invalid payload." } });
  }
};

export const getOne = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const oneRes = await AppDataSource.getRepository(Todo).findOne(req.params.id as FindOneOptions);

  return res.json(oneRes);
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const todoItem = await AppDataSource.getRepository(Todo).findOne(req.params.id as FindOneOptions);
  if (todoItem) {
    AppDataSource.getRepository(Todo).merge(todoItem, req.body);
    const results = await AppDataSource.getRepository(Todo).save(todoItem);
    return res.json(results);
  }
  return res.status(404).json({ msg: "No todo found" });
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  if (id) {
    const results = await AppDataSource.getRepository(Todo).delete(id);

    return res.json(results);
  }
};
