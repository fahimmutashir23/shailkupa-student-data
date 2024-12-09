const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://shailkupa:ca3zv8aDSa24VoTU@cluster0.pyhg6t2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const userCollection = client.db("ShailkupaDB").collection("users");

    app.post("/users", async (req, res) => {
      const user = req.body;
      const filter = { phone: user.phone };
      const findPhone = await userCollection.findOne(filter);
      if (findPhone) {
        return res.send({ message: "phone already exist" });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const phone = req.query.phone;
      let user;
      if (phone) {
        user = { phone: phone };
      }
      const result = await userCollection.find(user).toArray();
      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Shailkupa running");
});

app.listen(port, () => {
  console.log(`Shailkupa is running on port ${port}`);
});
