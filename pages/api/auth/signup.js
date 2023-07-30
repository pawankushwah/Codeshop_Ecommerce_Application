import { dbConnect, model } from "@/utils/models";

export default function handler(req, res) {
    if(req.method == "POST"){
        dbConnect();
        model("users");
    }
    if(req.method == "GET"){
        res.status(404).end();
    }
}
