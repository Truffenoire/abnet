import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("Veuillez définir la variable d'environnement MONGODB_URI dans .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // En mode développement, on utilise une variable globale pour conserver le client
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En production, on crée une nouvelle connexion à chaque fois
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
