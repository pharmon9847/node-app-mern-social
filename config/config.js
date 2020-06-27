const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
};

const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string

const url = "mongodb+srv://pharmon9847:ljcx7R9iOsO8oH0b@cluster1.xhk0t.mongodb.net/mern_social?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);

export default config
