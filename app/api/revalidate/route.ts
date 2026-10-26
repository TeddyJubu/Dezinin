import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");
  if (!process.env.NEXTAUTH_SECRET || secret !== process.env.NEXTAUTH_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  revalidateTag("tina-content");
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
