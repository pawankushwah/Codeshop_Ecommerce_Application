export default async function handler(req, res){
    if(req.method !== "DELETE") return res.status(403);
}