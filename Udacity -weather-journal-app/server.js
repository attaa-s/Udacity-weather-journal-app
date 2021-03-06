// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

const app = express();
// Start up an instance of app

/* Middleware*/
const bodyParser=require('body-Parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 5050;
const Server = app.listen(port,() => { console.log(`the server is srunning on port ${port}`)});


//GET   

app.get('/all', (req,res) =>{
    res.send(projectData);
    });

//post

app.post('/add',(req,res) =>{
   res.send (req.body);
   console.log(req.body);
   projectData ={ 
    temp : req.body.tempe,
       date : req.body.date,
       feelings : req.body.feelings
   }

})
    


