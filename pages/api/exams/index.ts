import nc from "next-connect";
import dbConnect from "@/server/config/connectToDatabase";
import getExams from "server/controllers/exams";
const handler = nc();

dbConnect();

handler.get(getExams);

export default handler;
