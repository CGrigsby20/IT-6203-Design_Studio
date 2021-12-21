const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const capstoneSchema = new mongoose.Schema({
    cName:  { type: String, required: true},
    cTitle:  { type: String, required: true},
    cEmail:  { type: String, required: true},
    cPhone:  { type: String, required: true},
    oName:  { type: String, required: true},
    oWebsite:  { type: String, required: true},
    oStreet:  { type: String, required: true},
    oZip: { type: String, requireed: true},
    oCity: { type: String, required: true},
    oState: { type: String, required: true},
    pTitle: { type: String, required: true},
    pDescription: { type: String, required: true},
    pSkills: { type: String, required: true},
    pDuties: { type: String, required: true},
    pBenefit: { type: String, required: true},
    pProvide: { type: String, required: true}

});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Capstone', capstoneSchema,'projects');
//note capital S in the collection name