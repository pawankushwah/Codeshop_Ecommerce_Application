import { NextResponse } from "next/server";

export default function middleware(req) {
   if(req.nextUrl.pathname =="/api/auth/getUserData"){
      if(req.nethod == 'POST'){
       return new NextResponse("Cannot access this endpoint with " + req.method, { status: 400})
      }
   return NextResponse.next();
   }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}