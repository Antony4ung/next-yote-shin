import { connectToDatabase } from "../../../lib/config/db";
import {hash} from 'bcryptjs'

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password ,reEnteredPassword} = req.body;

    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }

    

    if (password !== reEnteredPassword) {
      res.status(422).json({ message: "Password Do not Match" });
      return;
    }

    // console.log('done 1')

    const client = await connectToDatabase();

    const usersCollection = client.db().collection("users");

    const user = await usersCollection.findOne({
      email: email,
    });

    if (user) {
      res.status(422).json({ message: "User already exists" });
      client.close();
      return;
    }

    // console.log('done 2')

    const status = await usersCollection.insertOne({
      name,
      email,
      password: await hash(password,12),
      createdAt: Date.now(),
    });

    res.status(201).json({ message: "User created", ...status });
    // console.log('done 3')
    //Close DB connection
    client.close();

    
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}

export default handler;