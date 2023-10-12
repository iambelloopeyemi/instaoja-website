import { NextResponse } from "next/server";
import GalleryPictures from "./data.json";

export async function GET() {
  return NextResponse.json(GalleryPictures);
}
