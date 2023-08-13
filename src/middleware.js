import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import headers from "next/headers"

export async function middleware(req) {
  // const headerList = req.headers.Headers;
  // return NextResponse.json({msg: JSON.stringify(req)})
  // for (const data of headerList) {
  //   console.log(data + " " + headerList[data]);
  // }
  // console.log(headerList)
  // const verificationResult = await verify(headerList);
  // console.log(verificationResult.status);
  // if(verificationResult.status !== 200){
  //   if(req.nextUrl.pathname.includes("/dashboard")) {
  //     return NextResponse.redirect(new URL("/auth/login", req.url));
  //   }
  // }
  // if(req.nextUrl.pathname.includes("/auth/") && verificationResult.status === 200) return NextResponse.redirect(new URL("/dashboard", req.url));
}

export async function verify(headers){
  const authHeader = headers.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if(token === null) return {msg: "Invalid Token", status:401};

  return jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (error, data) => {
      if(error) return {msg: "Forbidden", status:403};
      return {data, status: 200};
  })
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/auth/:path*"
]
}