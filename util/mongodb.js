import { MongoClient } from 'mongodb';

// const { MONGODB_URI, MONGODB_DB } = process.env;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// if (!MONGODB_DB) {
//   throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
// }

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    // const { MongoClient } = require('mongodb');
    // const uri = "mongodb+srv://akshay:<password>@cluster0.0mybp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // client.connect(err => {
    //   const collection = client.db("test").collection("devices");
    //   // perform actions on the collection object
    //   client.close();
    // });

    const mongoURL =
      // process.env.NODE_ENV === 'development' ? process.env.LOCAL_MONGODB : process.env.MONGODB_URI;
      // 'mongodb+srv://appunik:Qwerty1@cluster0.0mybp.mongodb.net/Cluster0?retryWrites=true';

      // 'mongodb+srv://appunik:Qwerty1@cluster0.0mybp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
      'mongodb+srv://appunik:Qwerty1@cluster0.0mybp.mongodb.net/Cluster0?authSource=admin&replicaSet=atlas-4ia21k-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

    cached.promise = MongoClient.connect(mongoURL, opts).then((client) => {
      return {
        client,
        db: client.db(MONGODB_DB)
      };
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
