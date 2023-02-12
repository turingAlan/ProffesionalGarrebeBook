
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}


const insertOneDocument = async (collection, data) => {
  try {
    const result = await client.db("test").collection(collection).insertOne(data);
    console.log(`Successfully inserted one document: ${result}`);
  } catch (error) {
    console.error(error);
  }
};

export {clientPromise,insertOneDocument}