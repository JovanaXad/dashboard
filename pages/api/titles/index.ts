import nc from "next-connect";
import dbConnect from "server/config/dbConnect";
import { getTitles } from "server/controllers/titles";
const handler = nc();

dbConnect();

handler.get(getTitles);

export default handler;
