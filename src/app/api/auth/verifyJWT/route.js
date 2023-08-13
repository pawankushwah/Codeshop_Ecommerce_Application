import jwt from "jsonwebtoken";

export async function verifyJWT(req, res) {
    if(req.method !== "POST") return res.status(404).send();

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(token === null) return res.status(401).send();

    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (error, data) => {
        if(error) res.status(403);
        return new Response(data)
    })
    // return new Response({"msg": "something went wrong"})
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
