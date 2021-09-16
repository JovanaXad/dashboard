import nc from "next-connect";
import dbConnect from "@/server/config/connectToDatabase";
import getEvents from "server/controllers/events";
const handler = nc();

dbConnect();

handler.get(getEvents);

export default handler;
