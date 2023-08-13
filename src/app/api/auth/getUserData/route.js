import { dbConnect, model } from "@/src/utils/models";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req){
    const headerList = headers();
    let jwtVerifyResult = await verify(headerList);
    if(jwtVerifyResult.status === 200){
        await dbConnect();
        let usersModel = await model("users");
        let response = await usersModel.find({username: jwtVerifyResult.data.username});
        if(response.length == 1) return NextResponse.json(response[0]);
        return NextResponse.redirect("/auth/login");
    }
    else {
        return NextResponse.json(jwtVerifyResult, {status:jwtVerifyResult.status});
    }
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