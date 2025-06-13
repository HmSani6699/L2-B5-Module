import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://mongodb:%40devsadiq6699@cluster0.2wuqxlq.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0";

 export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});