import nc from "next-connect";
import dbConnect from "server/config/dbConnect";
import { updateTitle } from "server/controllers/titles";
const handler = nc();

dbConnect();

handler.put(updateTitle);

export default handler;
