import clientPromise from '../../lib/mongodb';

export async function GET(request) {
  try {
    const client = await clientPromise;
    
    return new Response(JSON.stringify({ message: "Connexion réussie à MongoDB"}), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Erreur de connexion à MongoDB" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
