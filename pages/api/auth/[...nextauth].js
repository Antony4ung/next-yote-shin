import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/config/db";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  session: {
    jwt: true,
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60,
      updateAge: 24 * 60 * 60,
  },

  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
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
          throw new Error("Password Wrong, Try Again!");
        }

        client.close();
        return { email: user.email };
      },
    }),
    GoogleProvider({
      clientId: '956952501459-5qp5cohf5h6qb95ka8dinc415b5he5ic.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    GitHubProvider({
      clientId: "615341332ba807835e62",
      clientSecret: "1d7b901ef956bea92dc3fb3adbf51e7e2ccba215",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  
  secret: process.env.SECRET,
  
});
