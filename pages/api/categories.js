const categories = [
    "image",
    "video"
]

export default function handler(req, res) {
    if(req.method == "POST"){
        res.status(200).json(categories);
    }
    if(req.method == "GET"){
        res.status(200).json({ error: "Data Not Found" });
    }
}
