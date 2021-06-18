//connect to Mongo DB

import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for Schema
const BusinessSchema = new Schema
({
    Name: String,
    Phone: String,
    Email: String
},
{
    collection: "business"
});

const Model = mongoose.model("Business",BusinessSchema);
export default Model;