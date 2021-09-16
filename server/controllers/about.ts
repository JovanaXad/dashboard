import AboutModel from "../models/aboutModel";

const getAbout = async (req: any, res: any) => {
  try {
    const blogs = await AboutModel.find();

    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default getAbout;
