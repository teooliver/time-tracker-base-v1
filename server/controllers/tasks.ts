import mongoose from "mongoose";
import { Task } from "../models/task";
import { Request, Response } from "express";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createTask = async (req: Request, res: Response) => {
  const task = req.body;

  const newTask = new Task(task);

  try {
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(409).json(error);
  }
};
