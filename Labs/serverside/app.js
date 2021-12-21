const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const mongoose = require('mongoose');
//specify where to find the schema
const Capstone = require('./models/capstone');
const capstone = require('./models/capstone');
//connect and display the status 
mongoose.connect('mongodb://localhost:27017/capstone', { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });
                    

//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//in the app.get() method below we add a path for the capstone API 
//by adding /capstones, we tell the server that this method will be called every time http://localhost:8000/capstone is requested. 
app.get('/capstone', (req, res, next) => {
    //call mongoose method find (MongoDB db.capstones.find())
    capstone.find() 
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
        });
});
   
//serve incoming post requests to /capstone
app.post('/capstone', (req, res, next) => {
    // create a new capstone variable and save request’s fields 
const capstone = new Capstone({
    cName: req.body.cName,
    cTitle: req.body.cTitle,
    cEmail: req.body.cEmail,
    cPhone: req.body.cPhone,
    oName: req.body.oName,
    oWebsite: req.body.oWebsite,
    oStreet: req.body.oStreet,
    oZip: req.body.oZip,
    oCity: req.body.oCity,
    oState: req.body.oState,
    pTitle: req.body.pTitle,
    pDescription: req.body.pDescription,
    pSkills: req.body.pSkills,
    pDuties: req.body.pDuties,
    pBenefit: req.body.pBenefit,
    pProvide: req.body.pProvide
});

//send the document to the database 
capstone.save()
    //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});


});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/capstone/:id", (req, res, next) => {
    Capstone.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

//serve incoming put requests to /capstones 
app.put('/capstone/:id', (req, res, next) => { 
    console.log("id: " + req.params.id) 
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
        //find a document and set new first and last names 
        capstone.findOneAndUpdate( 
            {_id: req.params.id}, 
            {$set:{ 
                cName: req.body.cName,
                cTitle: req.body.cTitle,
                cEmail: req.body.cEmail,
                cPhone: req.body.cPhone,
                oName: req.body.oName,
                oWebsite: req.body.oWebsite,
                oStreet: req.body.oStreet,
                oZip: req.body.oZip,
                oCity: req.body.oCity,
                oState: req.body.oState,
                pTitle: req.body.pTitle,
                pDescription: req.body.pDescription,
                pSkills: req.body.pSkills,
                pDuties: req.body.pDuties,
                pBenefit: req.body.pBenefit,
                pProvide: req.body.pProvide 
            }}, 
            {new:true} 
        ) 
        .then((capstone) => { 
            if (capstone) { //what was updated 
                console.log(capstone); 
            } else { 
                console.log("no data exist for this id"); 
            } 
        }) 
        .catch((err) => { 
            console.log(err); 
        }); 
    } else { 
        console.log("please provide correct id"); 
    } 
});

//find a capstone based on the id
app.get('/capstone/:id', (req, res, next) => {
    //call mongoose method findOne (MongoDB db.capstones.findOne())
    Capstone.findOne({_id: req.params.id}) 
        //if data is returned, send data as a response 
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        //if error, send internal server error
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    });
});
                    
//to use this middleware in other parts of the application
module.exports=app;