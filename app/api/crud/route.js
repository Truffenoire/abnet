import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb"; // Assure-toi que ce fichier existe bien

const dbName = "textNext"; // 🔴 Change si nécessaire
const collectionName = "test";

// 🔹 GET - Récupérer tous les documents
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    const data = await collection.find({}).toArray();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erreur de connexion" }), { status: 500 });
  }
}

// 🔹 POST - Ajouter un document
export async function POST(req) {
  try {
    const { title, imageUrl, description } = await req.json();
    
    if (!title || !imageUrl || !description) {
      return new Response(JSON.stringify({ error: "Champs obligatoires manquants" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    const result = await collection.insertOne({ title, imageUrl, description });
    
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erreur d'ajout" }), { status: 500 });
  }
}

// 🔹 PUT - Modifier un document (via ID)
export async function PUT(req) {
  try {
    const { _id, title, imageUrl, description } = await req.json();
    
    if (!_id || !title || !imageUrl || !description) {
      return new Response(JSON.stringify({ error: "Champs obligatoires manquants" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.updateOne(
      { _id: new ObjectId(_id) },
      { $set: { title, imageUrl, description } }
    );

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erreur de modification" }), { status: 500 });
  }
}

// 🔹 DELETE - Supprimer un document (via ID)
export async function DELETE(req) {
  try {
    const { _id } = await req.json();

    if (!_id) {
      return new Response(JSON.stringify({ error: "ID manquant" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.deleteOne({ _id: new ObjectId(_id) });

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erreur de suppression" }), { status: 500 });
  }
}
