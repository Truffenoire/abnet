import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    const title = formData.get('title')
    const description = formData.get('description')

    if (!file) {
      return NextResponse.json({ success: false, message: "Aucun fichier envoyé" }, { status: 400 });
    }

    // Convertir le fichier en base64
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload vers Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(base64Image, {
      folder: "upload",
      public_id: `${file.name}`,
      resource_type: "auto",
    });
    console.log("Upload réussi :", uploadResponse);
    return NextResponse.json({
      success: true,
      imageUrl: uploadResponse.secure_url,
    });
  } catch (error) {
    console.error("Erreur d'upload :", error);
    return NextResponse.json({ success: false, message: "Échec de l'upload" }, { status: 500 });
  }
}
// -----------------------------------------
export async function DELETE(req) {
  try {
    console.log(req.body)
    const { public_id } = await req.json();

    const result = await cloudinary.uploader.destroy(public_id);

    if (result.result !== 'ok') {
      throw new Error('Erreur lors de la suppression de l\'image');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'image:', error);
    return NextResponse.json({ success: false, message: 'Échec de la suppression de l\'image' }, { status: 500 });
  }
}
