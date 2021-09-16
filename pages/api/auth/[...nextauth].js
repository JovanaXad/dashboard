import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import connectToDatabase from "@/server/config/connectToDatabase";
import { verifyPassword } from "server/utils/auth";

export default NextAuth({
  providers: [
    Providers.Credentials({
      session: {
        jwt: true,
      },
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        return { email: user.email };
      },
    }),
  ],
});
