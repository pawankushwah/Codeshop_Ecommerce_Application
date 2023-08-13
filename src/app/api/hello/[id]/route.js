import { NextResponse } from "next/server";


export function GET(req, {params}){
  return NextResponse.json({params, req: req.query}, {status: 200})
}