import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}

export default connectToDatabase;
