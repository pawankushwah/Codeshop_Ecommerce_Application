const images = [
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "2.jpeg",
    price: 123,
    sell_price: 12,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "3.jpeg",
    price: 113,
    sell_price: 10,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "4.jpeg",
    price: 156,
    sell_price: 9,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "5.jpeg",
    price: 187,
    sell_price: 25,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "6.jpeg",
    price: 145,
    sell_price: 45,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "7.jpeg",
    price: 198,
    sell_price: 8,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "8.jpeg",
    price: 128,
    sell_price: 22,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "9.jpeg",
    price: 123,
    sell_price: 7,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "10.jpeg",
    price: 129,
    sell_price: 13,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "11.jpeg",
    price: 120,
    sell_price: 10,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "12.jpeg",
    price: 126,
    sell_price: 15,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "13.jpeg",
    price: 156,
    sell_price: 12,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "14.jpeg",
    price: 120,
    sell_price: 17,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "15.jpeg",
    price: 120,
    sell_price: 4,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "16.jpeg",
    price: 138,
    sell_price: 78,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "17.jpeg",
    price: 123,
    sell_price: 99,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "18.jpeg",
    price: 156,
    sell_price: 23,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "19.jpeg",
    price: 125,
    sell_price: 62,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "20.jpeg",
    price: 167,
    sell_price: 56,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "21.jpeg",
    price: 189,
    sell_price: 44,
  },
  {
    productName: "Image",
    shortDescription: "This is cool image",
    description:
      "This is cool but if you think about it much more then you will find that it is just a way to create a description although I can use lorem snippet",
    category: "image",
    filename: "22.jpeg",
    price: 178,
    sell_price: 88,
  },
];
export default function handler(req, res) {
  if (req.method == "POST") {
    // if(req.body.category == "image") dataToSend = images;
    // if(req.body.limit && !isNaN(req.body.limit)) while(images.length > req.body.limit) dat
    
    res.status(200).json(images);
  }
  // res.status(200).json([{ error: "data not found" }]);
}
