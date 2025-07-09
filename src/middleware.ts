/*
 * =================================================================
 * FILE: /middleware.ts
 * =================================================================
 *
 * INSTRUCTIONS:
 * 1. Create this file at the root of your Next.js project (or in the /src directory).
 * 2. This middleware intercepts all incoming requests.
 * 3. It forwards them to your internal API route at `/api/redirect/`.
 * 4. It excludes Next.js internal paths (`/_next/`) and the API route itself
 * to prevent an infinite redirect loop.
 *
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function is the middleware
export function middleware(request: NextRequest) {
  // Extract the pathname from the incoming request URL
  const { pathname } = request.nextUrl;
  console.log(`Middleware triggered for: ${pathname}`);

  // --- Exclude specific paths from being rewritten ---
  // 1. Prevent the API route itself from being redirected.
  // 2. Prevent Next.js internal files (static assets, chunks) from being redirected.
  // 3. Prevent requests for favicon.ico from being redirected.
  if (
    pathname.startsWith("/api/redirect") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname == "/" ||
    pathname == "/not-found"
  ) {
    // Let the request proceed as normal without rewriting
    return NextResponse.next();
  }

  // --- Rewrite the URL ---
  // Construct the new URL object for the rewrite.
  // We take the original request's URL as a base to preserve its protocol and host.
  // Then we set the pathname to the target API route, appending the original path.
  const url = request.nextUrl.clone();
  url.pathname = `/api/redirect${pathname}`;

  // Rewrite the request to the new URL and continue.
  // The user's browser URL will remain unchanged.
  console.log(`Rewriting URL: ${request.url} to ${url.href}`);
  return NextResponse.rewrite(url);
}

// --- Matcher Configuration (Optional) ---
// You can use a matcher to specify which paths the middleware should run on.
// For this example, we want it to run on all paths except the ones
// already excluded in the logic above, so we can use a negative lookahead.
// This is generally more efficient as the middleware function won't execute
// for the matched paths.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
