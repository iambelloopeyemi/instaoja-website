import { NextResponse } from "next/server";
import CardInfo from "./data.json";

export async function GET() {
  return NextResponse.json(CardInfo);
}
