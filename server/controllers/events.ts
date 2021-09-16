import EventsModel from "../models/eventsModel";

const getEvents = async (req: any, res: any) => {
  try {
    const blogs = await EventsModel.find();

    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default getEvents;
