/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const apiKey = "&appid=9b608df2474b61f1fde7458057b9a2e4&units=metric";
const baUrl =  'http://api.openweathermap.org/data/2.5/weather?zip=';




document.getElementById('generate').addEventListener('click', takeaction );


function takeaction(){
    const zipement = document.getElementById('zip').value;
    const feelElement = document.getElementById('feelings').value;
   getweatherdata(baUrl,zipement,apiKey)
   .then(function(data){
    postData('/add',{date: newDate , tempe: data.main.temp , feelings:feelElement})
    .then(function() {
        updateUI()
        });
    });    
};

const getweatherdata = async (baUrl,zipement,apiKey)=>{


    const res = await fetch(baUrl+zipement+apiKey)
    try{

        const data = await res.json()
        
        console.log(data)
    
        return(data)
    }catch(error){
        console.log("error", error);

    }
};

const postData = async ( url = '', data = {})=>{
    console.log(data)
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header 
       
  });
  
  try {
    const newData = await response.json();
    console.log(newData)
     return newData;
     
     }
     
     catch(error) {
  console.log("error", error)
  }
}


const updateUI = async () => {
    const request = await fetch('/all');
    try{
    const allData = await request.json();
    console.log(allData);
    document.getElementById('temp').innerHTML = "temperature : " + allData.temp;
    document.getElementById('date').innerHTML = "date : "+ allData.date;
    document.getElementById('content').innerHTML = " ifeel :"+allData.feelings;
    console.log(allData);
    return allData;
   
    }catch(error){
    console.log("error", error);}
};
