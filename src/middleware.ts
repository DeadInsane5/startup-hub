import { createClient } from "./lib/supabase/server";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware() {
    const res = NextResponse.next();
    const supabase = createClient();
    (await supabase).auth.getSession();
    return res;
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
