import nc from "next-connect";
import dbConnect from "server/config/dbConnect";
import { getHeadings } from "server/controllers/headings";
const handler = nc();

dbConnect();

handler.get(getHeadings);

export default handler;
