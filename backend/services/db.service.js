const MongoClient = require('mongodb').MongoClient;
const { mongoDbRoute } = require('../config');

module.exports = {
  connect,
  getCollection
};

const url =
  process.env.NODE_ENV === 'production'
    ? mongoDbRoute
    : 'mongodb://localhost:27017';

const dbName = 'corona-tracker';
var dbConnection = null;

async function connect() {
  if (dbConnection) return dbConnection;
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const db = client.db(dbName);
    dbConnection = db;
    return db;
  } catch (err) {
    throw err
  }
}

async function getCollection(collectionName) {
  const db = await connect();
  return db.collection(collectionName);
}
