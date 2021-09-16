import TitlesModel from "../models/titlesModel";
import { Request, Response, NextFunction } from "express";

export const addTitles = async (req: Request, res: Response) => {
  const newTitle = new TitlesModel({
    page: req.body.page,
    title: req.body.title,
  });

  try {
    await newTitle.save();
    res.status(200).json({ message: "Title added successful" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTitles = async (req: any, res: any) => {
  try {
    const titles = await TitlesModel.find();

    res.status(200).json(titles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTitle = async (req: any, res: any) => {
  try {
    const { title, page } = req.body;

    const response = await TitlesModel.findOneAndUpdate(
      { page },
      { title },
      { new: true }
    );

    res.status(200).json({ message: "Title was changed" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
