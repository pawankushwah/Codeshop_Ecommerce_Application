const { default: mongoose } = require("mongoose");
const { model } = require("./models");

const products = [
  {
    productName: "Premium Video Course",
    shortDescription: "Learn advanced techniques from industry experts.",
    description: "This premium video course provides in-depth knowledge and hands-on experience in various advanced techniques used by professionals in the industry.",
    category: "video",
    filename: "1.mp4",
    price: 99,
    sell_price: 79,
  },
  {
    productName: "Fitness Workout Videos",
    shortDescription: "Stay fit and healthy with our comprehensive workout video collection.",
    description: "Our fitness workout videos cover a wide range of exercises and routines, helping you achieve your health and fitness goals from the comfort of your home.",
    category: "video",
    filename: "2.mp4",
    price: 49,
    sell_price: 39,
  },
  {
    productName: "Cooking Masterclass",
    shortDescription: "Unleash your culinary skills with our cooking masterclass video series.",
    description: "Join our experienced chefs as they guide you through the art of cooking in this comprehensive masterclass video series. Learn to create delicious dishes that will impress your friends and family.",
    category: "video",
    filename: "3.mp4",
    price: 79,
    sell_price: 69,
  },
  {
    productName: "Travel Adventures",
    shortDescription: "Embark on a virtual journey to breathtaking destinations around the world.",
    description: "Immerse yourself in the beauty and culture of various travel destinations through our captivating video collection. Experience the wonders of the world from the comfort of your couch.",
    category: "video",
    filename: "4.mp4",
    price: 29,
    sell_price: 24,
  },
  {
    productName: "Yoga and Meditation",
    shortDescription: "Find inner peace and balance with our yoga and meditation video series.",
    description: "Rejuvenate your mind, body, and soul with our soothing yoga and meditation videos. Follow along with expert instructors to achieve tranquility and mindfulness in your daily life.",
    category: "video",
    filename: "5.mp4",
    price: 59,
    sell_price: 49,
  },
  {
    productName: "Language Learning",
    shortDescription: "Master a new language through immersive video lessons.",
    description: "Embark on a linguistic journey with our language learning video series. Immerse yourself in the language and culture as you progress from beginner to fluent speaker.",
    category: "video",
    filename: "6.mp4",
    price: 69,
    sell_price: 59,
  },
  {
    productName: "Home DIY Tutorials",
    shortDescription: "Transform your living space with our step-by-step home DIY tutorials.",
    description: "Become a DIY expert with our comprehensive home improvement video tutorials. Learn to tackle various projects and upgrades to create the home of your dreams.",
    category: "video",
    filename: "7.mp4",
    price: 39,
    sell_price: 32,
  },
];

const MONGO_DB_SERVER_WITH_DATABASE = "mongodb://127.0.0.1:27017/Codeshop_Ecommerce_Application"

async function insertData() {
    await mongoose.connect(MONGO_DB_SERVER_WITH_DATABASE);
    const productModel = await model('products');
    // const response = await productModel.insertMany(products);
    console.log(response);
}

insertData();