import ExamsModel from "../models/examsModel";

const getExams = async (req: any, res: any) => {
  try {
    const blogs = await ExamsModel.find();

    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default getExams;
