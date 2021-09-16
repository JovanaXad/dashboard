import BlogModel from "../models/blogsModel";

const getBlog = async (req: any, res: any) => {
  try {
    const blogs = await BlogModel.find();

    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default getBlog;
