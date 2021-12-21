const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const destinationSchema = new mongoose.Schema({
    intdom:  { type: String, required: true},    
    country:  { type: String, required: true},    
    dstate:  { type: String, required: true},
    dcity:  { type: String, required: true},
    tdate: { type: String, required: true},
    rdate: { type: String, required: true}

});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Destination', destinationSchema,'Destinations');
//note capital S in the collection name
