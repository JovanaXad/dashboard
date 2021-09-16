import nc from "next-connect";
import dbConnect from "@/server/config/connectToDatabase";
import getBlog from "server/controllers/blogs";
const handler = nc();

dbConnect();

handler.get(getBlog);

export default handler;
