import { dbConnect, model } from "@/utils/models";
import { verify } from "./verifyJWT";

export default async function handler(req, res){
    let jwtVerifyResult = await verify(req.headers);
    if(typeof jwtVerifyResult == typeof {}){
        await dbConnect();
        let usersModel = await model("users");
        let response = await usersModel.find({username: jwtVerifyResult.username});
        if(response.length == 1) return res.send(response[0]);
        else res.send({error: true, msg: "Something went wrong"})
    }
    else {
        res.send({"msg":jwtVerifyResult})
    }
}

