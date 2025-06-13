import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
import { client } from "./db/config";
const port = 3000
let server: any;





const bootstrap = async () => {
  
  await client.connect();
  // const database = client.db("todoDB"); 
  // const collection = database.collection("users");
  console.log("✅ Mongodb is connected successfully");
  

  server = app.listen(port, () => {
    console.log(`✅ Server is runing on port ${port}`)
  });



  
}

bootstrap()
