/* JSON data format => [{productName, shortDescription, description, category, filename, price, sellPrice}, {..}, ...] */

const schema = require("./schemas")
const mongoose = require("mongoose");

const url = process.env.MONGO_DB_SERVER_WITH_DATABASE;

const dbConnect = async () => {
    return await mongoose.connect(url);
};

async function model(collectionName){ 
    if(!mongoose.models[collectionName] && mongoose.connection.readyState == 1){
       await mongoose.model(collectionName, schema[collectionName]);
    }
    return mongoose.models[collectionName];
}

module.exports = {dbConnect, model}

// const insertData = async (collection, schema, data) => {
//     const Model = mongoose.model(collection, schema);
//     return await Model.insertMany(data);
// }

// const updateData = async (collection, schema, dataToUpdate, newData) => {
//     const Model = mongoose.model(collection, schema);
//     return await Model.updateOne(dataToUpdate, {$set:newData});
// }

// const deleteData = async (collection, schema, dataToDelete) => {
//     const Model = mongoose.model(collection, schema);
//     return await Model.deleteOne(dataToDelete);
// }

// const readData = async (collection, schema, dataToFind) => {
//     const Model = mongoose.model(collection, schema);
//     return await Model.find(dataToFind);
// }