import connectToDatabase from "@/server/config/connectToDatabase";
import { hashPassword } from "server/utils/auth";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { email, password, passwordConfirm } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7 ||
      password !== passwordConfirm
    ) {
      res.message("Invalid email or password");
      return;
    }

    const client = await connectToDatabase();
    const db = client.db();

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      res.status(422).json({ message: "User alredy exists" });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Created user!" });
    client.close();
  }
}

export default handler;
