import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


// const url = req.nextUrl.clone();
export const config = {
    matcher: "/",
    };
export async function middleware(req) {
    
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    // Token will exist if user is logged in
    
    const token = await getToken({req, secret: process.env.JWT_SECRET});

    const { pathname } = req.nextUrl

    if (pathname.includes("/api/auth") || token) {
        // console.log("In first middleware statment");
        return NextResponse.next()
    }
    
    if (!token && pathname !== url.pathname) {
        // console.log("In second middleware statment");
        return NextResponse.rewrite(url);
    }
    // console.log("nothing happened");


}