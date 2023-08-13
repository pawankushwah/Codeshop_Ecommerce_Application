import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { deleteToken } from "@/src/utils/jwtToken";
import jwt from "jsonwebtoken";

export async function DELETE(req){
    // verifies the authorization header
    const headerList = headers();
    let jwtVerifyResult = await verify(headerList);
    console.log(jwtVerifyResult);
    if(jwtVerifyResult.status !== 200) return NextResponse.json(jwtVerifyResult.msg, {status: jwtVerifyResult.status})

    // now we will delete the user Session
    const msg = await deleteToken({username: jwtVerifyResult.data.username});
    return NextResponse.json(msg, {status:200});
}

// to be deleted after middleware has built
export async function verify(headers){
    const authHeader = headers.get("authorization");
    const token = authHeader && authHeader.split(" ")[1];
    if(token === null) return {msg: "Invalid Token", status:401};

    return jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (error, data) => {
        if(error) return {msg: "Forbidden", status:403};
        return {data, status: 200};
    })
}