// app/api/airports/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://opensky-network.org/api/states/all");
    if (!res.ok) throw new Error("Failed to fetch airport data");
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
