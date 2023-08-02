import jwt from "jsonwebtoken";

export default async function verifyJWT(req, res) {
    if(req.method !== "POST") {
        res.status(404).end("Invalid Request");
        return;
    }
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(token === null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (error, data) => {
        if(error) res.status(403);
        res.send(data)
    })
    res.send({"msg": "something went wrong"})
}

export async function verify(headers){
    const authHeader = headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(token === null) return "Invalid Token";

    return jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (error, data) => {
        if(error) "Forbidden";
        return data;
    })
}
