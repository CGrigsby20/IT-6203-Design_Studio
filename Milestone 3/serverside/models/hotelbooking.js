const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const hotelbookingSchema = new mongoose.Schema({
    name:  { type: String, required: true},    
    indate:  { type: String, required: true},    
    outdate:  { type: String, required: true},
    rooms:  { type: String, required: true},
    street: { type: String, required: true},
    zipcode: { type: String, required: true},
    city: { type: String },
    state: { type: String }


});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Hotelbooking', hotelbookingSchema,'Hotelbookings');
//note capital S in the collection name
