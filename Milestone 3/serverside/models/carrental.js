const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const carrentalSchema = new mongoose.Schema({
    location:  { type: String, required: true},
    type:  { type: String, required: true},    
    pdate:  { type: String, required: true},    
    ddate:  { type: String, required: true} 

});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Carrental', carrentalSchema,'Carrentals');
//note capital S in the collection name
