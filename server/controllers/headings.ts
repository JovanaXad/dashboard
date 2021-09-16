import HeadingsModel from "../models/headingsModel";
import { Request, Response, NextFunction } from "express";

export const addHeadings = async (req: Request, res: Response) => {
  const newTitle = new HeadingsModel({
    page: req.body.page,
    title: req.body.title,
  });

  try {
    await newTitle.save();
    res.status(200).json({ message: "Heading added successful" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getHeadings = async (req: any, res: any) => {
  try {
    const titles = await HeadingsModel.find();
    res.status(200).json(titles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateHeading = async (req: any, res: any) => {
  try {
    const { title, page } = req.body;

    const response = await HeadingsModel.findOneAndUpdate(
      { page },
      { title },
      { new: true }
    );

    res.status(200).json({ message: "Title was changed" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
