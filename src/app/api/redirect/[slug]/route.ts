import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { links } from "~/server/db/schema";
import { eq } from "drizzle-orm";

// Opt out of caching for this route
export const revalidate = 0;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  console.log(`Received request to redirect for slug: ${slug}`);
  if (!slug) {
    console.error("No slug provided in request parameters.");
    return NextResponse.redirect(new URL("/", _req.url));
  }

  try {
    const link = await db.query.links.findFirst({
      where: eq(links.slug, slug),
    });

    if (link) {
      console.log(`Redirecting to: ${link.url}`);
      return NextResponse.redirect(new URL(link.url));
    }

    // If no link found, redirect to the not-found page
    console.warn(`No link found for slug: ${slug}`);
    return NextResponse.redirect(new URL("/not-found", _req.url));
  } catch (error) {
    console.error("Database query failed:", error);
    // Redirect to home on error
    return NextResponse.redirect(new URL("/", _req.url));
  }
}
