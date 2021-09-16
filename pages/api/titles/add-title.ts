import nc from "next-connect";
import dbConnect from "server/config/dbConnect";
import { addTitles } from "server/controllers/titles";
const handler = nc();

dbConnect();

handler.post(addTitles);

export default handler;
