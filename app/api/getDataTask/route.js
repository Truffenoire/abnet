import clientPromise from '../../lib/mongodb';

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DBNAME); // Remplace "myDatabase" par le nom de ta base
    // Par exemple, récupère quelques données
    const collection = db.collection("test"); // Remplacez par votre collection réelle

    const data = await collection.find({}).toArray();
    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Erreur de recuperation des donnees" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
