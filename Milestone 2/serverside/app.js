const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const mongoose = require('mongoose');
//specify where to find the schema
const Hotelbooking = require('./models/hotelbooking')
const Carrental = require('./models/carrental')
const Destination = require('./models/destination')
const Flight = require('./models/flight')
//connect and display the status 
mongoose.connect('mongodb://localhost:27017/IT6203G4', { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });
//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    const express = require('express');
    next();
});

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

//parse application/json
app.use(express.json())

//*****Hotel Booking****//

//in the app.get() method below we add a path for the hotelbookings API 
//by adding /hotelbookings, we tell the server that this method will be called every time http://localhost:8000/hotelbookings is requested. 
app.get('/hotelbookings', (req, res, next) => {
    
     //call mongoose method find (MongoDB db.Hotelbookings.find())
     Hotelbooking.find() 
     //if data is returned, send data as a response 
      .then(data => res.status(200).json(data))
      //if error, send internal server error
     .catch(err => {
      console.log('Error: ${err}');
     res.status(500).json(err);
   });
});



//serve incoming post requests to /hotelbookings
app.post('/hotelbookings', (req, res, next) => {
    // create a new hotelbooking variable and save request’s fields 
const hotelbooking = new Hotelbooking({
    name: req.body.name, 
    indate: req.body.indate,
    outdate: req.body.outdate,
    rooms: req.body.rooms,
    street: req.body.street,
    zipcode: req.body.zipcode,
    city: req.body.city,
    state: req.body.state

});

//send the document to the database 
hotelbooking.save()
  //in case of success
  .then(() => { console.log('Success');})
  //if error
  .catch(err => {console.log('Error:' + err);
});
  
  
//:id is a dynamic parameter that will be extracted from the URL

app.delete("/hotelbookings/:id", (req, res, next) => {
  Hotelbooking.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json("Deleted!");
  });
});


//serve incoming put requests to /hotelbookings 
app.put('/hotelbookings/:id', (req, res, next) => { 
    console.log("id: " + req.params.id) 
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
        //find a document and set new first and last names 
        Hotelbooking.findOneAndUpdate( 
            {_id: req.params.id}, 
            {$set:{
                name: req.body.name,              
                indate: req.body.indate,
                outdate: req.body.outdate,
                rooms: req.body.rooms,
                street: req.body.street,
                zipcode: req.body.zipcode,
                city: req.body.city,
                state: req.body.state
           
            }}, 
            {new:true} 
        ) 
        .then((hotelbooking) => { 
            if (hotelbooking) { //what was updated 
                console.log(hotelbooking); 
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
    
       //find a hotelbooking entity based on the id
 app.get('/hotelbookings/:id', (req, res, next) => {
        //call mongoose method findOne (MongoDB db.Hotelbookings.findOne())
        Hotelbooking.findOne({_id: req.params.id}) 
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


});

//*********Car Rental***************************************************************************************************************************/

//to use this middleware in other parts of the application

app.get('/carrentals', (req, res, next) => {
    
    //call mongoose method find (MongoDB db.Carrentals.find())
    Carrental.find() 
    //if data is returned, send data as a response 
     .then(data => res.status(200).json(data))
     //if error, send internal server error
    .catch(err => {
     console.log('Error: ${err}');
    res.status(500).json(err);
  });
});



//serve incoming post requests to /carrentals
app.post('/carrentals', (req, res, next) => {
   // create a new carrental variable and save request’s fields 
const carrental = new Carrental({
   location: req.body.location, 
   type: req.body.type,
   pdate: req.body.pdate,
   ddate: req.body.ddate

});

//send the document to the database 
carrental.save()
 //in case of success
 .then(() => { console.log('Success');})
 //if error
 .catch(err => {console.log('Error:' + err);
});
 
 
//:id is a dynamic parameter that will be extracted from the URL

app.delete("/carrentals/:id", (req, res, next) => {
 Carrental.deleteOne({ _id: req.params.id }).then(result => {
     console.log(result);
     res.status(200).json("Deleted!");
    });
});


//serve incoming put requests to /carrentals 
app.put('/carrentals/:id', (req, res, next) => { 
   console.log("id: " + req.params.id) 
   // check that the parameter id is valid 
   if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
       //find a document and set new first and last names 
       Carrental.findOneAndUpdate( 
           {_id: req.params.id}, 
           {$set:{
               location: req.body.location,
               type: req.body.type,              
               pdate: req.body.pdate,
               ddate: req.body.ddate           
            }}, 
           {new:true} 
       ) 
       .then((carrental) => { 
           if (carrental) { //what was updated 
               console.log(carrental); 
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
   
      //find a carrentalentity based on the id
app.get('/carrentals/:id', (req, res, next) => {
       //call mongoose method findOne (MongoDB db.Carrentals.findOne())
       Carrental.findOne({_id: req.params.id}) 
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


});

//*********Destinations***************************************************************************************************************************//

//to use this middleware in other parts of the application

app.get('/destinations', (req, res, next) => {
    
    //call mongoose method find (MongoDB db.Destinations.find())
    Destination.find() 
    //if data is returned, send data as a response 
     .then(data => res.status(200).json(data))
     //if error, send internal server error
    .catch(err => {
     console.log('Error: ${err}');
    res.status(500).json(err);
  });
});



//serve incoming post requests to /destinations
app.post('/destinations', (req, res, next) => {
   // create a new destination variable and save request’s fields 
const destination = new Destination({
   intdom: req.body.intdom, 
   country: req.body.country,
   dstate: req.body.dstate,
   dcity: req.body.dcity,
   tdate: req.body.tdate,
   rdate: req.body.rdate

});

//send the document to the database 
destination.save()
 //in case of success
 .then(() => { console.log('Success');})
 //if error
 .catch(err => {console.log('Error:' + err);
});
 
 
//:id is a dynamic parameter that will be extracted from the URL

app.delete("/destinations/:id", (req, res, next) => {
 Destination.deleteOne({ _id: req.params.id }).then(result => {
     console.log(result);
     res.status(200).json("Deleted!");
    });
});


//serve incoming put requests to /destinations 
app.put('/destinations/:id', (req, res, next) => { 
   console.log("id: " + req.params.id) 
   // check that the parameter id is valid 
   if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
       //find a document and set new first and last names 
       Destination.findOneAndUpdate( 
           {_id: req.params.id}, 
           {$set:{
               intdom: req.body.intdom,
               country: req.body.country,              
               dstate: req.body.dstate,
               dcity: req.body.dcity,
               tdate: req.body.tdate,
               rdate: req.body.rdate           
            }}, 
           {new:true} 
       ) 
       .then((destination) => { 
           if (destination) { //what was updated 
               console.log(destination); 
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
   
      //find a destination entity based on the id
app.get('/destinations/:id', (req, res, next) => {
       //call mongoose method findOne (MongoDB db.Destinations.findOne())
       Destination.findOne({_id: req.params.id}) 
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


});

//*********Flights***************************************************************************************************************************//

//to use this middleware in other parts of the application

app.get('/flights', (req, res, next) => {
    
    //call mongoose method find (MongoDB db.Flights.find())
    Flight.find() 
    //if data is returned, send data as a response 
     .then(data => res.status(200).json(data))
     //if error, send internal server error
    .catch(err => {
     console.log('Error: ${err}');
    res.status(500).json(err);
  });
});



//serve incoming post requests to /flights
app.post('/flights', (req, res, next) => {
   // create a new flight variable and save request’s fields 
const flight = new Flight({
   aname: req.body.aname, 
   tnumb: req.body.tnumb,
   tname: req.body.tname,
   trip: req.body.trip,
   category: req.body.category
   
});

//send the document to the database 
flight.save()
 //in case of success
 .then(() => { console.log('Success');})
 //if error
 .catch(err => {console.log('Error:' + err);
});
 
 
//:id is a dynamic parameter that will be extracted from the URL

app.delete("/flights/:id", (req, res, next) => {
 Flight.deleteOne({ _id: req.params.id }).then(result => {
     console.log(result);
     res.status(200).json("Deleted!");
    });
});


//serve incoming put requests to /flights 
app.put('/flights/:id', (req, res, next) => { 
   console.log("id: " + req.params.id) 
   // check that the parameter id is valid 
   if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
       //find a document and set new first and last names 
       Flight.findOneAndUpdate( 
           {_id: req.params.id}, 
           {$set:{
               aname: req.body.aname,
               tnumb: req.body.tnumb,              
               tname: req.body.tname,
               trip: req.body.trip,
               category: req.body.category
                          
            }}, 
           {new:true} 
       ) 
       .then((flight) => { 
           if (flight) { //what was updated 
               console.log(flight); 
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
   
      //find a flight entity based on the id
app.get('/flights/:id', (req, res, next) => {
       //call mongoose method findOne (MongoDB db.Flights.findOne())
       Flight.findOne({_id: req.params.id}) 
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


});


module.exports=app;